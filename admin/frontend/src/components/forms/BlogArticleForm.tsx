import { useState, type FormEvent } from "react";
import { type BlogArticle, type BlogArticleContent, type BlogSection } from "../../lib/api.js";
import { inputStyle, buttonStyle } from "../../pages/Login.js";

const EMPTY_CONTENT: BlogArticleContent = {
  label: "", title: "", excerpt: "",
  publishedAt: "", readingTime: "",
  lead: "", sections: [],
};

const EMPTY_ARTICLE: BlogArticle = {
  slug: "", tags: [],
  content: { en: { ...EMPTY_CONTENT }, ru: { ...EMPTY_CONTENT } },
};

const EMPTY_SECTION: BlogSection = { title: "", paragraphs: [""], bullets: [] };

interface Props {
  initial?: BlogArticle;
  onSave: (a: BlogArticle) => void;
  onCancel: () => void;
}

export function BlogArticleForm({ initial, onSave, onCancel }: Props) {
  const [form, setForm] = useState<BlogArticle>(
    initial ?? JSON.parse(JSON.stringify(EMPTY_ARTICLE)) as BlogArticle
  );
  const [lang, setLang] = useState<"en" | "ru">("en");
  const [tagsInput, setTagsInput] = useState(initial?.tags.join(", ") ?? "");

  function setTop<K extends keyof BlogArticle>(k: K, v: BlogArticle[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function setContent<K extends keyof BlogArticleContent>(k: K, v: BlogArticleContent[K]) {
    setForm((f) => ({
      ...f,
      content: { ...f.content, [lang]: { ...f.content[lang], [k]: v } },
    }));
  }

  function setSection(idx: number, sec: BlogSection) {
    const sections = [...form.content[lang].sections];
    sections[idx] = sec;
    setContent("sections", sections);
  }

  function addSection() {
    setContent("sections", [...form.content[lang].sections, { ...EMPTY_SECTION, paragraphs: [""] }]);
  }

  function removeSection(idx: number) {
    setContent("sections", form.content[lang].sections.filter((_, i) => i !== idx));
  }

  function setParagraph(secIdx: number, pIdx: number, val: string) {
    const sec = { ...form.content[lang].sections[secIdx] };
    const paragraphs = [...sec.paragraphs];
    paragraphs[pIdx] = val;
    sec.paragraphs = paragraphs;
    setSection(secIdx, sec);
  }

  function addParagraph(secIdx: number) {
    const sec = { ...form.content[lang].sections[secIdx] };
    sec.paragraphs = [...sec.paragraphs, ""];
    setSection(secIdx, sec);
  }

  function removeParagraph(secIdx: number, pIdx: number) {
    const sec = { ...form.content[lang].sections[secIdx] };
    sec.paragraphs = sec.paragraphs.filter((_, i) => i !== pIdx);
    setSection(secIdx, sec);
  }

  function setBullets(secIdx: number, val: string) {
    const sec = { ...form.content[lang].sections[secIdx] };
    sec.bullets = val ? val.split("\n").map((b) => b.trim()).filter(Boolean) : [];
    setSection(secIdx, sec);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSave({ ...form, tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean) });
  }

  const c = form.content[lang];

  const field = (label: string, key: keyof BlogArticleContent, multiline = false) => (
    <label style={labelStyle}>
      <span style={labelText}>{label}</span>
      {multiline
        ? <textarea rows={3} value={String(c[key] ?? "")}
            onChange={(e) => setContent(key, e.target.value as BlogArticleContent[typeof key])}
            style={{ ...inputStyle, resize: "vertical" }} />
        : <input type="text" value={String(c[key] ?? "")}
            onChange={(e) => setContent(key, e.target.value as BlogArticleContent[typeof key])}
            style={inputStyle} />
      }
    </label>
  );

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, flex: 1 }}>
          {initial ? "Edit article" : "New article"}
        </h2>
        <button style={{ ...buttonStyle, background: "#3f3f46" }} onClick={onCancel}>Cancel</button>
        <button form="blog-form" type="submit" style={buttonStyle}>Save</button>
      </div>

      <form id="blog-form" onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "720px" }}
      >
        <label style={labelStyle}>
          <span style={labelText}>Slug (URL-safe)</span>
          <input type="text" value={form.slug}
            onChange={(e) => setTop("slug", e.target.value)}
            disabled={!!initial}
            style={{ ...inputStyle, opacity: initial ? 0.5 : 1 }} />
        </label>

        <label style={labelStyle}>
          <span style={labelText}>Tags (comma-separated)</span>
          <input type="text" value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="ai, rag, llm" style={inputStyle} />
        </label>

        <div style={{ display: "flex", gap: "8px" }}>
          {(["en", "ru"] as const).map((l) => (
            <button key={l} type="button" onClick={() => setLang(l)}
              style={{
                ...buttonStyle,
                background: lang === l ? "#8b5cf6" : "#27272a",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px",
          padding: "20px", borderRadius: "10px", border: "1px solid #27272a", background: "#111113" }}>
          <p style={{ fontSize: "12px", color: "#71717a", marginBottom: "4px" }}>
            Editing: <strong style={{ color: "#a1a1aa" }}>{lang.toUpperCase()}</strong>
          </p>
          {field("Label (badge)", "label")}
          {field("Title", "title")}
          {field("Excerpt (card preview)", "excerpt", true)}
          {field("Published at", "publishedAt")}
          {field("Reading time", "readingTime")}
          {field("Lead (intro paragraph)", "lead", true)}

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ fontWeight: 600, fontSize: "15px" }}>Sections</span>
              <button type="button" onClick={addSection}
                style={{ ...buttonStyle, padding: "6px 12px", fontSize: "13px" }}>
                + Add section
              </button>
            </div>
            {c.sections.map((sec, si) => (
              <div key={si} style={{
                marginBottom: "16px", padding: "16px", borderRadius: "8px",
                border: "1px solid #3f3f46", background: "#18181b",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "13px", color: "#a1a1aa", fontWeight: 600 }}>
                    Section {si + 1}
                  </span>
                  <button type="button" onClick={() => removeSection(si)}
                    style={{ ...buttonStyle, background: "#7f1d1d", color: "#fca5a5",
                      padding: "4px 10px", fontSize: "12px", marginLeft: "auto" }}>
                    Remove
                  </button>
                </div>
                <label style={labelStyle}>
                  <span style={labelText}>Section title</span>
                  <input type="text" value={sec.title}
                    onChange={(e) => setSection(si, { ...sec, title: e.target.value })}
                    style={inputStyle} />
                </label>
                <div style={{ marginTop: "10px" }}>
                  <span style={labelText}>Paragraphs</span>
                  {sec.paragraphs.map((p, pi) => (
                    <div key={pi} style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                      <textarea rows={2} value={p}
                        onChange={(e) => setParagraph(si, pi, e.target.value)}
                        style={{ ...inputStyle, flex: 1, resize: "vertical" }} />
                      <button type="button" onClick={() => removeParagraph(si, pi)}
                        style={{ ...buttonStyle, background: "#3f3f46", padding: "6px 10px",
                          alignSelf: "flex-start" }}>✕</button>
                    </div>
                  ))}
                  <button type="button" onClick={() => addParagraph(si)}
                    style={{ ...buttonStyle, background: "#27272a",
                      padding: "5px 12px", fontSize: "12px", marginTop: "8px" }}>
                    + Paragraph
                  </button>
                </div>
                <label style={{ ...labelStyle, marginTop: "12px" }}>
                  <span style={labelText}>Bullets (one per line, optional)</span>
                  <textarea rows={3} value={(sec.bullets ?? []).join("\n")}
                    onChange={(e) => setBullets(si, e.target.value)}
                    style={{ ...inputStyle, resize: "vertical" }} />
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "6px" };
const labelText: React.CSSProperties = { fontSize: "13px", color: "#a1a1aa" };
