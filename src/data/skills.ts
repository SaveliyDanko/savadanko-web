export interface TechBadge {
  label: string;
  icon:
    | "braces"
    | "hexagon"
    | "server"
    | "azure"
    | "aws"
    | "cloud"
    | "docker"
    | "boxes"
    | "helm"
    | "database"
    | "bot"
    | "redis"
    | "shield"
    | "code"
    | "python"
    | "sql"
    | "git";
}

export interface TechStackCategory {
  id: string;
  title: string;
  items: TechBadge[];
}

export const marqueeRows: TechBadge[][] = [
  [
    { label: "DDD", icon: "hexagon" },
    { label: "Microservices", icon: "server" },
    { label: "Azure", icon: "azure" },
    { label: "AWS", icon: "aws" },
    { label: "GCP", icon: "cloud" },
    { label: "Docker", icon: "docker" },
    { label: "Kubernetes", icon: "boxes" },
    { label: "Helm", icon: "helm" },
    { label: "EKS", icon: "aws" },
    { label: "Bicep", icon: "azure" },
    { label: "Terraform", icon: "git" },
  ],
  [
    { label: "Microsoft AI Services", icon: "bot" },
    { label: "Agentic AI", icon: "bot" },
    { label: "CosmosDB", icon: "database" },
    { label: "DynamoDB", icon: "database" },
    { label: "Redis", icon: "redis" },
    { label: "Cassandra", icon: "database" },
    { label: "PostgreSQL", icon: "database" },
    { label: "Solidity", icon: "shield" },
    { label: "Rust (Anchor)", icon: "hexagon" },
  ],
];

export const techStackCategories: TechStackCategory[] = [
  {
    id: "languages",
    title: "Languages",
    items: [
      { label: "C#", icon: "braces" },
      { label: "Java", icon: "code" },
      { label: "TypeScript", icon: "braces" },
      { label: "JavaScript", icon: "braces" },
      { label: "Rust", icon: "hexagon" },
      { label: "Solidity", icon: "shield" },
      { label: "Python", icon: "python" },
      { label: "SQL", icon: "sql" },
    ],
  },
  {
    id: "backend-frameworks",
    title: "Backend & Frameworks",
    items: [
      { label: ".NET 8", icon: "braces" },
      { label: "Spring Boot", icon: "server" },
      { label: "Node.js", icon: "hexagon" },
      { label: "Express", icon: "server" },
      { label: "GraphQL (HotChocolate)", icon: "hexagon" },
      { label: "MediatR", icon: "hexagon" },
      { label: "DDD", icon: "hexagon" },
      { label: "Microservices", icon: "server" },
    ],
  },
  {
    id: "cloud-infra",
    title: "Cloud & Infrastructure",
    items: [
      { label: "Azure", icon: "azure" },
      { label: "AWS", icon: "aws" },
      { label: "GCP", icon: "cloud" },
      { label: "Docker", icon: "docker" },
      { label: "Kubernetes", icon: "boxes" },
      { label: "Helm", icon: "helm" },
      { label: "EKS", icon: "aws" },
      { label: "Bicep", icon: "azure" },
      { label: "Terraform", icon: "git" },
      { label: "Pulumi", icon: "cloud" },
    ],
  },
  {
    id: "devops-tooling",
    title: "DevOps & Tooling",
    items: [
      { label: "Azure DevOps", icon: "azure" },
      { label: "Jenkins", icon: "server" },
      { label: "ArgoCD", icon: "git" },
      { label: "Spinnaker", icon: "cloud" },
      { label: "CI/CD", icon: "git" },
      { label: "SonarQube", icon: "shield" },
      { label: "Veracode", icon: "shield" },
      { label: "Checkmarx", icon: "shield" },
      { label: "Trivy", icon: "shield" },
    ],
  },
  {
    id: "ai-data",
    title: "AI & Data",
    items: [
      { label: "RAG Pipelines", icon: "bot" },
      { label: "Databricks", icon: "database" },
      { label: "Vector Search", icon: "database" },
      { label: "LangChain", icon: "bot" },
      { label: "OpenAI", icon: "bot" },
      { label: "Embeddings", icon: "database" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { label: "React", icon: "braces" },
      { label: "Next.js", icon: "braces" },
      { label: "TypeScript", icon: "braces" },
      { label: "Tailwind CSS", icon: "braces" },
      { label: "Vite", icon: "braces" },
      { label: "Framer Motion", icon: "braces" },
    ],
  },
  {
    id: "security",
    title: "Security & Identity",
    items: [
      { label: "OAuth2", icon: "shield" },
      { label: "OIDC", icon: "shield" },
      { label: "SSO", icon: "shield" },
      { label: "Keycloak", icon: "shield" },
      { label: "JWT", icon: "shield" },
      { label: "Encryption", icon: "shield" },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    items: [
      { label: "Solidity", icon: "shield" },
      { label: "Foundry", icon: "hexagon" },
      { label: "EVM", icon: "hexagon" },
      { label: "Anchor", icon: "hexagon" },
      { label: "Web3", icon: "cloud" },
      { label: "Smart Contracts", icon: "shield" },
    ],
  },
];
