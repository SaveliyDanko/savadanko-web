import { Router } from "express";
import { store } from "../store.js";
import type { Project } from "../types.js";

export const projectsRouter = Router();

projectsRouter.get("/", (_req, res) => {
  res.json(store.getProjects());
});

projectsRouter.post("/", (req, res) => {
  const project = req.body as Project;
  if (!project.id || !project.title) {
    res.status(400).json({ error: "id and title are required" });
    return;
  }
  const projects = store.getProjects();
  if (projects.find((p) => p.id === project.id)) {
    res.status(409).json({ error: "Project with this id already exists" });
    return;
  }
  projects.push(project);
  store.saveProjects(projects);
  res.status(201).json(project);
});

projectsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body as Partial<Project>;
  const projects = store.getProjects();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  projects[idx] = { ...projects[idx], ...update, id };
  store.saveProjects(projects);
  res.json(projects[idx]);
});

projectsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const projects = store.getProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  store.saveProjects(filtered);
  res.json({ ok: true });
});
