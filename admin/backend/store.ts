import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import type { Project, BlogArticle } from "./types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");

function readJson<T>(file: string): T {
  return JSON.parse(readFileSync(join(DATA_DIR, file), "utf-8")) as T;
}

function writeJson(file: string, data: unknown): void {
  writeFileSync(join(DATA_DIR, file), JSON.stringify(data, null, 2) + "\n", "utf-8");
}

export const store = {
  getProjects: (): Project[] => readJson<Project[]>("projects.json"),
  saveProjects: (projects: Project[]) => writeJson("projects.json", projects),

  getBlog: (): BlogArticle[] => readJson<BlogArticle[]>("blog.json"),
  saveBlog: (articles: BlogArticle[]) => writeJson("blog.json", articles),
};
