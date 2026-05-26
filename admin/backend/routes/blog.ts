import { Router } from "express";
import { store } from "../store.js";
import type { BlogArticle } from "../types.js";

export const blogRouter = Router();

blogRouter.get("/", (_req, res) => {
  res.json(store.getBlog());
});

blogRouter.post("/", (req, res) => {
  const article = req.body as BlogArticle;
  if (!article.slug || !article.content?.en?.title) {
    res.status(400).json({ error: "slug and content.en.title are required" });
    return;
  }
  const articles = store.getBlog();
  if (articles.find((a) => a.slug === article.slug)) {
    res.status(409).json({ error: "Article with this slug already exists" });
    return;
  }
  articles.push(article);
  store.saveBlog(articles);
  res.status(201).json(article);
});

blogRouter.put("/:slug", (req, res) => {
  const { slug } = req.params;
  const update = req.body as Partial<BlogArticle>;
  const articles = store.getBlog();
  const idx = articles.findIndex((a) => a.slug === slug);
  if (idx === -1) {
    res.status(404).json({ error: "Article not found" });
    return;
  }
  articles[idx] = { ...articles[idx], ...update, slug };
  store.saveBlog(articles);
  res.json(articles[idx]);
});

blogRouter.delete("/:slug", (req, res) => {
  const { slug } = req.params;
  const articles = store.getBlog();
  const filtered = articles.filter((a) => a.slug !== slug);
  if (filtered.length === articles.length) {
    res.status(404).json({ error: "Article not found" });
    return;
  }
  store.saveBlog(filtered);
  res.json({ ok: true });
});
