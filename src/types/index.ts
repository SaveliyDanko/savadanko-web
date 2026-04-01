export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "tools"
  | "languages"
  | "other";
