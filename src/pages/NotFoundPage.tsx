import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/layout";

export function NotFoundPage() {
  return (
    <Section className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-text-muted">Page not found</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6f8dfd] px-6 py-3 text-sm font-semibold text-[#0a0d18] shadow-[0_10px_28px_rgba(111,141,253,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </Section>
  );
}
