export type CoreExpertiseIcon =
  | "layers"
  | "cloud"
  | "server"
  | "shield"
  | "cpu"
  | "link2"
  | "cog"
  | "code2";

export interface CoreExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: CoreExpertiseIcon;
}

export const coreExpertiseItems: CoreExpertiseItem[] = [
  {
    id: "01",
    title: "Software Architecture",
    description: "Distributed systems, DDD, microservices, and API design.",
    icon: "layers",
  },
  {
    id: "02",
    title: "Cloud Infrastructure",
    description: "Azure, AWS, GCP, multi-cloud design, and infrastructure as code.",
    icon: "cloud",
  },
  {
    id: "03",
    title: "Backend Platforms",
    description: ".NET, Java, Spring Boot, Node.js, and GraphQL services.",
    icon: "server",
  },
  {
    id: "04",
    title: "Identity and Security",
    description: "OAuth2, OIDC, SSO, encryption, and security-first delivery.",
    icon: "shield",
  },
  {
    id: "05",
    title: "AI and Data Systems",
    description: "RAG pipelines, Databricks, vector search, and applied AI workflows.",
    icon: "cpu",
  },
  {
    id: "06",
    title: "Web3 and Blockchain",
    description: "Solidity, EVM ecosystems, on-chain tooling, and smart contracts.",
    icon: "link2",
  },
  {
    id: "07",
    title: "DevOps and Platform",
    description: "Docker, CI/CD, Terraform, observability, and platform operations.",
    icon: "cog",
  },
  {
    id: "08",
    title: "Product Engineering",
    description: "React, Next.js, TypeScript, and end-to-end product delivery.",
    icon: "code2",
  },
];
