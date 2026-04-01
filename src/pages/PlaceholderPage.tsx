import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/layout";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <Section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden py-28">
      <div className="pointer-events-none absolute left-10 top-20 h-40 w-40 rounded-full bg-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-56 w-56 rounded-full bg-[#6280ff]/8 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-3xl rounded-[32px] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(10,11,21,0.9),rgba(5,6,12,0.98))] px-8 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-12 sm:py-16">
        <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6f87ff]">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[56px]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#707894] sm:text-base">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#6f8dfd] px-6 py-3 text-sm font-semibold text-[#0a0d18] shadow-[0_10px_28px_rgba(111,141,253,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </Section>
  );
}
