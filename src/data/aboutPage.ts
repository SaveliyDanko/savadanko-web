export const aboutPageHero = {
  title: "About",
  subtitle:
    "Software Architect bridging enterprise systems, cloud infrastructure, AI, and Web3.",
} as const;

export const aboutPageIntro = [
  "I'm a Software Architect with over a decade of experience building production systems across healthcare, logistics, banking, ecommerce, and blockchain. My work sits at the intersection of backend architecture, cloud infrastructure, and product engineering.",
  "Currently at Vanderlande, I lead AI-driven features on enterprise platforms using RAG pipelines, Databricks, and Azure services. Outside of work, I build Web3 products from zero-knowledge compliance infrastructure to compliant crypto exchanges.",
] as const;

export const aboutPageResumeButtons = [
  { label: "Resume (Web2)" },
  { label: "Resume (Web3)" },
] as const;

export const aboutPagePrinciples = [
  {
    title: "Simplicity at Scale",
    description:
      "The best architectures are the simplest ones that still meet the requirements. Complexity is a cost. I minimize it deliberately.",
    featured: true,
  },
  {
    title: "Cloud-Native First",
    description:
      "Design for elasticity, observability, and automated deployment from day one. Infrastructure-as-Code is non-negotiable.",
  },
  {
    title: "Product Thinking",
    description:
      "Architecture decisions should serve product outcomes. I connect backend systems to user value, not just technical elegance.",
  },
  {
    title: "Pragmatic Tradeoffs",
    description:
      "Every decision is a tradeoff. I make them explicitly, document them, and revisit when constraints change.",
  },
] as const;

export const aboutPageCertifications = [
  {
    code: "AZ-305",
    title: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
  },
  {
    code: "AZ-400",
    title: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
  },
  {
    code: "AZ-204",
    title: "Azure Developer Associate",
    issuer: "Microsoft",
  },
  {
    code: "AI-102",
    title: "Azure AI Engineer Associate",
    issuer: "Microsoft",
  },
  {
    code: "AZ-104",
    title: "Azure Administrator",
    issuer: "Microsoft",
  },
  {
    code: "AI-900",
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
  },
  {
    code: "Databricks",
    title: "Databricks Fundamentals Accreditation",
    issuer: "Databricks",
  },
  {
    code: "CKA",
    title: "Certified Kubernetes Administrator",
    issuer: "CNCF / Udemy",
  },
] as const;

export const aboutPageEducation = [
  {
    degree: "Системное и прикладное программное обеспечение",
    school: "ITMO University",
    years: "2023 — 2027",
  },
  {
    degree: "Java разработка",
    school: "T-Banc Academy",
    years: "2025-2026",
  },
  {
    degree: "Frontend разработка",
    school: "T-Banc Academy",
    years: "2025",
  },
] as const;
