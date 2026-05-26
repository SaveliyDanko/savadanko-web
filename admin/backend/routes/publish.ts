import { Router } from "express";
import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { store } from "../store.js";
import type { Project, BlogArticle, BlogSection } from "../types.js";

export const publishRouter = Router();

const SITE_DIR = process.env.SITE_DIR ?? join(process.cwd(), "../..");

function q(s: string): string {
  return JSON.stringify(s);
}

function renderSection(sec: BlogSection): string {
  const paragraphs = sec.paragraphs.map((p) => `            ${q(p)},`).join("\n");
  const bulletsBlock = sec.bullets && sec.bullets.length > 0
    ? `,\n          bullets: [\n${sec.bullets.map((b) => `            ${q(b)},`).join("\n")}\n          ]`
    : "";
  return `        {
          title: ${q(sec.title)},
          paragraphs: [
${paragraphs}
          ]${bulletsBlock},
        }`;
}

function generateProjectsTs(projects: Project[]): string {
  const logoValues = [...new Set(projects.map((p) => p.logo))];
  const logoType = logoValues.map((v) => q(v)).join(" | ");

  const items = projects.map((p) => `  {
    id: ${q(p.id)},
    title: ${q(p.title)},
    category: ${q(p.category)},
    description: ${q(p.description)},
    technologies: [${p.technologies.map((t) => q(t)).join(", ")}],
    extraTechnologies: ${p.extraTechnologies},
    href: ${q(p.href)},
    logo: ${q(p.logo)},
  }`).join(",\n");

  return `export interface FeaturedWorkProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  extraTechnologies: number;
  href: string;
  logo: ${logoType};
}

export const projects: FeaturedWorkProject[] = [
${items},
];
`;
}

function generateBlogTs(articles: BlogArticle[]): string {
  const items = articles.map((a) => {
    const tags = a.tags.map((t) => q(t)).join(", ");
    const enSections = a.content.en.sections.map(renderSection).join(",\n");
    const ruSections = a.content.ru.sections.map(renderSection).join(",\n");

    return `  {
    slug: ${q(a.slug)},
    tags: [${tags}],
    content: {
      en: {
        label: ${q(a.content.en.label)},
        title: ${q(a.content.en.title)},
        excerpt: ${q(a.content.en.excerpt)},
        publishedAt: ${q(a.content.en.publishedAt)},
        readingTime: ${q(a.content.en.readingTime)},
        lead: ${q(a.content.en.lead)},
        sections: [
${enSections},
        ],
      },
      ru: {
        label: ${q(a.content.ru.label)},
        title: ${q(a.content.ru.title)},
        excerpt: ${q(a.content.ru.excerpt)},
        publishedAt: ${q(a.content.ru.publishedAt)},
        readingTime: ${q(a.content.ru.readingTime)},
        lead: ${q(a.content.ru.lead)},
        sections: [
${ruSections},
        ],
      },
    },
  }`;
  }).join(",\n");

  return `type BlogLanguage = "en" | "ru";

interface BlogArticleSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface BlogArticleContent {
  label: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  lead: string;
  sections: BlogArticleSection[];
}

export interface BlogArticle {
  slug: string;
  tags: string[];
  content: Record<BlogLanguage, BlogArticleContent>;
}

export const blogArticles: BlogArticle[] = [
${items},
];

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getBlogArticlePath(slug: string) {
  return \`/blog/\${slug}\`;
}
`;
}

function updateI18nProjectItems(filePath: string, projects: Project[], lang: "en" | "ru"): void {
  const source = readFileSync(filePath, "utf-8");
  const items = projects.map((p) => {
    const category = lang === "ru" && p.categoryRu ? p.categoryRu : p.category;
    const description = lang === "ru" && p.descriptionRu ? p.descriptionRu : p.description;
    return `      {\n        category: ${q(category)},\n        description:\n          ${q(description)},\n      }`;
  }).join(",\n");

  const updated = source.replace(
    /( {4}items:\s*\[)[\s\S]*?(\s*\],\s*\},\s*techStack:)/,
    `$1\n${items},\n    ]$2`
  );

  writeFileSync(filePath, updated, "utf-8");
}

publishRouter.post("/", (_req, res) => {
  try {
    const projects = store.getProjects();
    const articles = store.getBlog();

    writeFileSync(join(SITE_DIR, "src/data/projects.ts"), generateProjectsTs(projects), "utf-8");
    writeFileSync(join(SITE_DIR, "src/data/blog.ts"), generateBlogTs(articles), "utf-8");

    updateI18nProjectItems(join(SITE_DIR, "src/i18n/en.ts"), projects, "en");
    updateI18nProjectItems(join(SITE_DIR, "src/i18n/ru.ts"), projects, "ru");

    const output = execSync("npm run build", {
      cwd: SITE_DIR,
      timeout: 120_000,
      encoding: "utf-8",
    });

    res.json({ ok: true, output });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    res.status(500).json({ error: message });
  }
});
