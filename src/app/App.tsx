import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer } from "@/components/layout";
import { SiteMeta } from "@/app/SiteMeta";
import {
  AboutPage,
  BlogArticlePage,
  BlogPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  WorkPage,
} from "@/pages";

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
