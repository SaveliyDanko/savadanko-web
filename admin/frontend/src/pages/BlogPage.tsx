import { useEffect, useState } from "react";
import { api, type BlogArticle } from "../lib/api.js";
import { BlogArticleForm } from "../components/forms/BlogArticleForm.js";
import { buttonStyle, dangerButtonStyle } from "./Login.js";
import { PublishButton } from "../components/PublishButton.js";

export function BlogPage() {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [editing, setEditing] = useState<BlogArticle | null | "new">(null);
  const [error, setError] = useState("");

  async function load() {
    try {
      setArticles(await api.blog.list());
    } catch (e) {
      setError(String(e));
    }
  }

  useEffect(() => { load(); }, []);

  async function handleDelete(slug: string) {
    if (!confirm("Delete this article?")) return;
    try {
      await api.blog.remove(slug);
      await load();
    } catch (e) {
      alert(String(e));
    }
  }

  async function handleSave(a: BlogArticle) {
    try {
      if (editing === "new") {
        await api.blog.create(a);
      } else {
        await api.blog.update(a.slug, a);
      }
      setEditing(null);
      await load();
    } catch (e) {
      alert(String(e));
    }
  }

  if (editing !== null) {
    return (
      <BlogArticleForm
        initial={editing === "new" ? undefined : editing}
        onSave={handleSave}
        onCancel={() => setEditing(null)}
      />
    );
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, flex: 1 }}>Blog Articles</h2>
        <PublishButton />
        <button style={buttonStyle} onClick={() => setEditing("new")}>+ New article</button>
      </div>

      {error && <p style={{ color: "#f87171", marginBottom: "16px" }}>{error}</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {articles.map((a) => (
          <div
            key={a.slug}
            style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "16px", borderRadius: "10px",
              background: "#111113", border: "1px solid #27272a",
            }}
          >
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 600, fontSize: "15px" }}>{a.content.en.title}</span>
              <span style={{ marginLeft: "10px", fontSize: "12px", color: "#8b5cf6" }}>{a.content.en.label}</span>
              <p style={{ color: "#71717a", fontSize: "13px", marginTop: "4px" }}>{a.content.en.excerpt}</p>
              <p style={{ color: "#52525b", fontSize: "12px", marginTop: "4px" }}>
                /{a.slug} · {a.content.en.publishedAt} · {a.content.en.readingTime}
              </p>
            </div>
            <button style={buttonStyle} onClick={() => setEditing(a)}>Edit</button>
            <button style={dangerButtonStyle} onClick={() => handleDelete(a.slug)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
