import { useState, type FormEvent } from "react";
import { type Project } from "../../lib/api.js";
import { inputStyle, buttonStyle } from "../../pages/Login.js";

const EMPTY: Project = {
  id: "", title: "",
  category: "", categoryRu: "",
  description: "", descriptionRu: "",
  technologies: [], extraTechnologies: 0,
  href: "", logo: "",
};

interface Props {
  initial?: Project;
  onSave: (p: Project) => void;
  onCancel: () => void;
}

export function ProjectForm({ initial, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Project>(initial ?? EMPTY);
  const [techInput, setTechInput] = useState(initial?.technologies.join(", ") ?? "");

  function set<K extends keyof Project>(k: K, v: Project[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSave({ ...form, technologies: techInput.split(",").map((t) => t.trim()).filter(Boolean) });
  }

  const field = (label: string, key: keyof Project, type = "text") => (
    <label style={labelStyle}>
      <span style={labelText}>{label}</span>
      <input
        type={type}
        value={String(form[key] ?? "")}
        onChange={(e) => set(key, (type === "number" ? Number(e.target.value) : e.target.value) as Project[typeof key])}
        style={inputStyle}
      />
    </label>
  );

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, flex: 1 }}>
          {initial ? "Edit project" : "New project"}
        </h2>
        <button style={{ ...buttonStyle, background: "#3f3f46" }} onClick={onCancel}>Cancel</button>
        <button form="project-form" type="submit" style={buttonStyle}>Save</button>
      </div>

      <form id="project-form" onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px" }}
      >
        {field("ID (URL-safe, unique)", "id")}
        {field("Title", "title")}
        {field("Logo key (nexign / modula / danko-realty / …)", "logo")}
        {field("Category (EN)", "category")}
        {field("Category (RU)", "categoryRu")}
        {field("Description (EN)", "description")}
        {field("Description (RU)", "descriptionRu")}
        {field("Project URL", "href")}

        <label style={labelStyle}>
          <span style={labelText}>Technologies (comma-separated)</span>
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="React, TypeScript, Node.js"
            style={inputStyle}
          />
        </label>

        {field("Extra technologies count", "extraTechnologies", "number")}
      </form>
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "6px" };
const labelText: React.CSSProperties = { fontSize: "13px", color: "#a1a1aa" };
