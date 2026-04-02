import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage, useTranslation } from "@/app/providers";
import { getBlogArticleBySlug } from "@/data/blog";
import { getAbsoluteUrl, siteConfig } from "@/config/site";

type MetaTagKey = "name" | "property";

function upsertMetaTag(attribute: MetaTagKey, key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

export function SiteMeta() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const t = useTranslation();

  const pathSegments = pathname.split("/").filter(Boolean);
  const blogSlug = pathSegments[0] === "blog" ? pathSegments[1] : undefined;
  const article = blogSlug ? getBlogArticleBySlug(blogSlug) : undefined;
  const articleContent = article ? article.content[language] : undefined;

  const pageMeta = (() => {
    if (pathname === "/") {
      return {
        title: siteConfig.title,
        description: siteConfig.description,
        indexable: true,
        type: "website",
      } as const;
    }

    if (pathname === "/about") {
      return {
        title: `${t.aboutPage.title} | ${siteConfig.name}`,
        description: t.aboutPage.subtitle,
        indexable: true,
        type: "website",
      } as const;
    }

    if (pathname === "/work") {
      return {
        title: `${t.projects.title} | ${siteConfig.name}`,
        description: t.projects.description,
        indexable: true,
        type: "website",
      } as const;
    }

    if (pathname === "/blog") {
      return {
        title: `${t.blog.title} | ${siteConfig.name}`,
        description: t.blog.subtitle,
        indexable: true,
        type: "website",
      } as const;
    }

    if (pathname.startsWith("/blog/") && articleContent) {
      return {
        title: `${articleContent.title} | ${siteConfig.name}`,
        description: articleContent.excerpt,
        indexable: true,
        type: "article",
      } as const;
    }

    if (pathname === "/contact") {
      return {
        title: `${t.contact.title} | ${siteConfig.name}`,
        description: t.contact.subtitle,
        indexable: true,
        type: "website",
      } as const;
    }

    return {
      title: `404 | ${siteConfig.name}`,
      description: t.notFound.title,
      indexable: false,
      type: "website",
    } as const;
  })();

  useEffect(() => {
    const canonicalUrl = getAbsoluteUrl(pathname);
    const socialImageUrl = getAbsoluteUrl(siteConfig.socialImage);
    const locale = language === "ru" ? "ru_RU" : "en_US";
    const robots = pageMeta.indexable ? "index,follow" : "noindex,nofollow";

    document.title = pageMeta.title;

    upsertMetaTag("name", "description", pageMeta.description);
    upsertMetaTag("name", "theme-color", siteConfig.themeColor);
    upsertMetaTag("name", "robots", robots);
    upsertMetaTag("property", "og:site_name", siteConfig.name);
    upsertMetaTag("property", "og:title", pageMeta.title);
    upsertMetaTag("property", "og:description", pageMeta.description);
    upsertMetaTag("property", "og:type", pageMeta.type);
    upsertMetaTag("property", "og:url", canonicalUrl);
    upsertMetaTag("property", "og:image", socialImageUrl);
    upsertMetaTag("property", "og:locale", locale);
    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:title", pageMeta.title);
    upsertMetaTag("name", "twitter:description", pageMeta.description);
    upsertMetaTag("name", "twitter:image", socialImageUrl);
    upsertCanonical(canonicalUrl);
  }, [language, pageMeta.description, pageMeta.indexable, pageMeta.title, pageMeta.type, pathname]);

  return null;
}
