import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer } from "@/components/layout";
import { SiteMeta } from "@/app/SiteMeta";
import { HomePage } from "@/pages/HomePage";
const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage })),
);
const WorkPage = lazy(() =>
  import("@/pages/WorkPage").then((m) => ({ default: m.WorkPage })),
);
const BlogPage = lazy(() =>
  import("@/pages/BlogPage").then((m) => ({ default: m.BlogPage })),
);
const BlogArticlePage = lazy(() =>
  import("@/pages/BlogArticlePage").then((m) => ({
    default: m.BlogArticlePage,
  })),
);
const ContactPage = lazy(() =>
  import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

function ScrollManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function useDismissPreloader() {
  useEffect(() => {
    const el = document.getElementById("preloader");
    if (!el) return;
    const id = setTimeout(() => {
      el.classList.add("fade-out");
      el.addEventListener("transitionend", () => el.remove(), { once: true });
    }, 600);
    return () => clearTimeout(id);
  }, []);
}

export function App() {
  useDismissPreloader();

  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollManager />
      <SiteMeta />
      <Header />
      <main className="flex-1 pt-16">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
