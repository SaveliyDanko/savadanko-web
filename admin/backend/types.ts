export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  extraTechnologies: number;
  href: string;
  logo: string;
  /** Localized fields for i18n */
  categoryRu?: string;
  descriptionRu?: string;
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
