import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Section } from "@/components/layout";
import { getBlogArticleBySlug } from "@/data/blog";
import { useLanguage, useTranslation } from "@/app/providers";
import { NotFoundPage } from "./NotFoundPage";

export function BlogArticlePage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const t = useTranslation();
  const article = slug ? getBlogArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFoundPage />;
  }

  const content = article.content[language];

  return (
    <Section className="relative overflow-hidden py-24 sm:py-28">
      <div className="glow pointer-events-none absolute left-16 top-16 h-44 w-44 rounded-full bg-primary/8 blur-[120px]" />
      <div className="glow pointer-events-none absolute right-10 top-40 h-56 w-56 rounded-full bg-section-label/10 blur-[150px]" />

      <div className="relative mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-section-label transition-colors duration-300 hover:text-primary-light"
        >
          <ArrowLeft size={16} />
          {t.blog.backToBlog}
        </Link>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-flex rounded-full border border-section-label/20 bg-section-label/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-section-label">
            {content.label}
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-[58px]">
            {content.title}
          </h1>
          <p className="mt-5 text-[16px] leading-8 text-body sm:text-[17px]">
            {content.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-body-secondary">
            <span>{content.publishedAt}</span>
            <span className="h-1 w-1 rounded-full bg-body-secondary" />
            <span>{content.readingTime}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-card-border bg-surface-light/95 px-3 py-1.5 text-[12px] text-body"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[28px] border border-card-border bg-card-gradient p-6 shadow-card sm:p-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <p className="text-[16px] leading-8 text-heading/88 sm:text-[17px]">
            {content.lead}
          </p>
        </motion.div>

        <div className="mt-10 space-y-5">
          {content.sections.map((section, index) => (
            <motion.article
              key={section.title}
              className="rounded-[24px] border border-card-border bg-card-gradient p-6 shadow-card sm:p-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
            >
              <h2 className="text-[22px] font-semibold tracking-tight text-heading sm:text-[24px]">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4 text-[15px] leading-8 text-body sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.bullets?.length ? (
                <ul className="mt-5 space-y-3 text-[15px] leading-7 text-body sm:text-base">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-section-label" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
