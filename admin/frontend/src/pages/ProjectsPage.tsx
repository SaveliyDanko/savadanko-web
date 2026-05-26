import { useEffect, useState } from "react";
import { api, type Project } from "../lib/api.js";
import { ProjectForm } from "../components/forms/ProjectForm.js";
import { buttonStyle, dangerButtonStyle } from "./Login.js";
import { PublishButton } from "../components/PublishButton.js";

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Project | null | "new">(null);
  const [error, setError] = useState("");

  async function load() {
    try {
      setProjects(await api.projects.list());
    } catch (e) {
      setError(String(e));
    }
  }

  useEffect(() => { load(); }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this project?")) return;
    try {
      await api.projects.remove(id);
      await load();
    } catch (e) {
      alert(String(e));
    }
  }

  async function handleSave(p: Project) {
    try {
      if (editing === "new") {
        await api.projects.create(p);
      } else {
        await api.projects.update(p.id, p);
      }
      setEditing(null);
      await load();
    } catch (e) {
      alert(String(e));
    }
  }

  if (error) {
    return (
      <div style={{ padding: "24px", color: "#f87171", background: "#1c0a0a", borderRadius: "8px", border: "1px solid #7f1d1d" }}>
        <strong>Error loading projects:</strong> {error}
        <br /><button style={{ marginTop: "12px", ...buttonStyle }} onClick={() => { setError(""); load(); }}>Retry</button>
      </div>
    );
  }

  if (editing !== null) {
    return (
      <ProjectForm
        initial={editing === "new" ? undefined : editing}
        onSave={handleSave}
        onCancel={() => setEditing(null)}
      />
    );
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, flex: 1 }}>Projects</h2>
        <PublishButton />
        <button style={buttonStyle} onClick={() => setEditing("new")}>+ Add project</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {projects.map((p) => (
          <div
            key={p.id}
            style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "16px", borderRadius: "10px",
              background: "#111113", border: "1px solid #27272a",
            }}
          >
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 600, fontSize: "15px" }}>{p.title}</span>
              <span style={{ marginLeft: "10px", fontSize: "12px", color: "#8b5cf6" }}>{p.category}</span>
              <p style={{ color: "#71717a", fontSize: "13px", marginTop: "4px" }}>{p.description}</p>
              <p style={{ color: "#52525b", fontSize: "12px", marginTop: "4px" }}>
                {p.technologies.join(", ")}
                {p.extraTechnologies > 0 && ` +${p.extraTechnologies} more`}
              </p>
            </div>
            <button style={buttonStyle} onClick={() => setEditing(p)}>Edit</button>
            <button style={dangerButtonStyle} onClick={() => handleDelete(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
