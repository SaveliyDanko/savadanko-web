import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "@/components/layout";
import { blogArticles, getBlogArticlePath } from "@/data/blog";
import { useLanguage, useTranslation } from "@/app/providers";

export function BlogPage() {
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <Section className="relative overflow-hidden py-24 sm:py-28">
      <div className="glow pointer-events-none absolute left-14 top-12 h-44 w-44 rounded-full bg-primary/8 blur-[120px]" />
      <div className="glow pointer-events-none absolute right-10 top-36 h-56 w-56 rounded-full bg-section-label/8 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-[58px]">
            {t.blog.title}
          </h1>
          <p className="mt-5 text-[15px] leading-8 text-body sm:text-base">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-section-label/40 via-card-border to-transparent" />

        <div className="mt-7 space-y-5">
          {blogArticles.map((article) => {
            const content = article.content[language];

            return (
              <Link
                key={article.slug}
                to={getBlogArticlePath(article.slug)}
                className="group block rounded-[24px] border border-card-border bg-card-gradient px-5 py-5 shadow-card transition-colors duration-300 hover:border-card-hover sm:px-6 sm:py-6"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="min-w-0 flex-1">
                    <span className="inline-flex rounded-full border border-section-label/20 bg-section-label/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-section-label">
                      {content.label}
                    </span>

                    <h2 className="mt-4 text-[22px] font-semibold tracking-tight text-heading/90 sm:text-[24px]">
                      {content.title}
                    </h2>
                    <p className="mt-4 max-w-4xl text-[15px] leading-7 text-body sm:text-base">
                      {content.excerpt}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3 text-[13px] text-body-secondary">
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

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-section-label transition-colors duration-300 group-hover:text-primary-light">
                      {t.blog.openArticle}
                      <ArrowRight size={15} />
                    </span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-heading/14 transition-colors duration-300 group-hover:text-section-label"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
