const BASE = "/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...init?.headers },
    ...init,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({})) as { error?: string };
    throw new Error(body.error ?? `HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const api = {
  auth: {
    login: (password: string) =>
      request<{ ok: boolean }>("/auth/login", { method: "POST", body: JSON.stringify({ password }) }),
    logout: () =>
      request<{ ok: boolean }>("/auth/logout", { method: "POST" }),
    me: () =>
      request<{ authenticated: boolean }>("/auth/me"),
  },

  projects: {
    list: () => request<Project[]>("/projects"),
    create: (p: Project) =>
      request<Project>("/projects", { method: "POST", body: JSON.stringify(p) }),
    update: (id: string, p: Partial<Project>) =>
      request<Project>(`/projects/${id}`, { method: "PUT", body: JSON.stringify(p) }),
    remove: (id: string) =>
      request<{ ok: boolean }>(`/projects/${id}`, { method: "DELETE" }),
  },

  blog: {
    list: () => request<BlogArticle[]>("/blog"),
    create: (a: BlogArticle) =>
      request<BlogArticle>("/blog", { method: "POST", body: JSON.stringify(a) }),
    update: (slug: string, a: Partial<BlogArticle>) =>
      request<BlogArticle>(`/blog/${slug}`, { method: "PUT", body: JSON.stringify(a) }),
    remove: (slug: string) =>
      request<{ ok: boolean }>(`/blog/${slug}`, { method: "DELETE" }),
  },

  publish: () =>
    request<{ ok: boolean; output: string }>("/publish", { method: "POST" }),
};

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryRu?: string;
  description: string;
  descriptionRu?: string;
  technologies: string[];
  extraTechnologies: number;
  href: string;
  logo: string;
}

export interface BlogSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogArticleContent {
  label: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  lead: string;
  sections: BlogSection[];
}

export interface BlogArticle {
  slug: string;
  tags: string[];
  content: {
    en: BlogArticleContent;
    ru: BlogArticleContent;
  };
}
