import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer } from "@/components/layout";
import { SiteMeta } from "@/app/SiteMeta";

const HomePage = lazy(() =>
  import("@/pages/HomePage").then((m) => ({ default: m.HomePage })),
);
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

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollManager />
      <SiteMeta />
      <Header />
      <main className="flex-1 pt-16">
        <Suspense>
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
