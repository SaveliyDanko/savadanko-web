import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout";
import { blogPosts } from "@/data/blog";

export function BlogPage() {
  return (
    <Section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-14 top-12 h-44 w-44 rounded-full bg-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-36 h-56 w-56 rounded-full bg-[#6280ff]/8 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[58px]">
            Blog
          </h1>
          <p className="mt-5 text-[15px] leading-8 text-[#707894] sm:text-base">
            Writing about architecture, systems design, AI, and Web3.
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-[#22315a] via-white/[0.06] to-transparent" />

        <div className="mt-7 space-y-5">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-[24px] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(8,10,19,0.74),rgba(4,5,11,0.98))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-colors duration-300 hover:border-[#5f77ff]/16 sm:px-6 sm:py-6"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <h2 className="text-[22px] font-semibold tracking-tight text-white/90 sm:text-[24px]">
                    {post.title}
                  </h2>
                  <p className="mt-4 max-w-4xl text-[15px] leading-7 text-[#6d748f] sm:text-base">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-[13px] text-[#5d6480]">
                    <span>{post.publishedAt}</span>
                    <span className="h-1 w-1 rounded-full bg-[#40465f]" />
                    <span>{post.readingTime}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.04] bg-[#101522]/95 px-3 py-1.5 text-[12px] text-[#6c7390]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-white/14 transition-colors duration-300 group-hover:text-[#8ea2ff]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
