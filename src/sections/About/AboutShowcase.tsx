import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { aboutIntro, aboutProfile, aboutStats } from "@/data/about";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
} as const;

interface AboutShowcaseProps {
  alignCardTop?: boolean;
  className?: string;
  showReadMore?: boolean;
  titleAs?: "h1" | "h2";
}

export function AboutShowcase({
  alignCardTop = false,
  className,
  showReadMore = true,
  titleAs = "h2",
}: AboutShowcaseProps) {
  const cardOffsetClass = alignCardTop ? "lg:mt-0" : "lg:mt-24";
  const TitleTag = titleAs;

  return (
    <div className={className}>
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="pointer-events-none absolute left-20 top-24 h-40 w-40 rounded-full bg-[#6680ff]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-8 top-36 h-56 w-56 rounded-full bg-primary/10 blur-[140px]" />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:items-start lg:gap-12">
        <motion.div
          className="relative max-w-[560px]"
          initial={reveal.initial}
          whileInView={reveal.whileInView}
          viewport={reveal.viewport}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-[#6f87ff] to-transparent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f87ff]">
              Background
            </span>
          </div>

          <TitleTag className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[56px]">
            About Me
          </TitleTag>

          <div className="mt-12 space-y-6 text-[15px] leading-8 text-[#6a708c] sm:text-base">
            {aboutIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {showReadMore ? (
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6f87ff] transition-colors duration-300 hover:text-[#a9b8ff]"
            >
              Read more
              <ArrowRight size={16} />
            </Link>
          ) : null}

          <div className="mt-10 grid max-w-[500px] grid-cols-2 gap-4 sm:gap-5">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-[24px] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(10,11,20,0.82),rgba(4,5,10,0.96))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
              >
                <p className="bg-gradient-to-b from-[#9db0ff] to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-[42px]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-[#646b85]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={`relative mx-auto w-full max-w-[560px] ${cardOffsetClass}`}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,rgba(111,135,255,0.18),transparent_42%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[24px] border border-[#5c73ff]/20 bg-[linear-gradient(180deg,rgba(9,11,21,0.94),rgba(5,6,12,0.98))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(92,115,255,0.06)] backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/5 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[11px] tracking-[0.18em] text-white/20">
                ~/savadanko.dev
              </span>
            </div>

            <div className="mt-5 space-y-3.5 font-mono text-[13px] sm:text-sm">
              {aboutProfile.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[14px_minmax(86px,auto)_10px_1fr] items-start gap-3 leading-relaxed"
                >
                  <ChevronRight className="mt-[2px] h-3.5 w-3.5 text-white/25" />
                  <span className="font-semibold tracking-wide text-[#6f87ff]">
                    {item.label}
                  </span>
                  <span className="text-white/25">-</span>
                  <span className="text-white/80">{item.value}</span>
                </div>
              ))}

              <div className="flex items-center gap-2 pt-1">
                <span className="h-4 w-2 rounded-sm bg-[#6f87ff] animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
