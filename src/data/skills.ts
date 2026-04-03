export interface TechBadge {
  label: string;
  icon:
    | "braces"
    | "hexagon"
    | "server"
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
    { label: "Java", icon: "code" },
    { label: "Spring Boot", icon: "server" },
    { label: "Kafka", icon: "cloud" },
    { label: "PostgreSQL", icon: "database" },
    { label: "Docker", icon: "docker" },
    { label: "Kubernetes", icon: "boxes" },
    { label: "React", icon: "braces" },
    { label: "Prometheus", icon: "cloud" },
    { label: "DDD", icon: "hexagon" },
  ],
  [
    { label: "Groovy", icon: "code" },
    { label: "Kotlin", icon: "code" },
    { label: "MongoDB", icon: "database" },
    { label: "RabbitMQ", icon: "cloud" },
    { label: "Jenkins", icon: "server" },
    { label: "Ansible", icon: "git" },
    { label: "gRPC", icon: "hexagon" },
    { label: "GitLab", icon: "git" },
    { label: "Testcontainers", icon: "docker" },
  ],
];


export const techStackCategories: TechStackCategory[] = [
  {
    id: "languages",
    title: "Languages",
    items: [
      { label: "Java", icon: "code" },
      { label: "Groovy", icon: "code" },
      { label: "Kotlin", icon: "code" },
      { label: "JavaScript", icon: "braces" },
      { label: "TypeScript", icon: "braces" },
      { label: "SQL", icon: "sql" },
      { label: "Bash", icon: "code" },
      { label: "Russian (Native)", icon: "code" },
      { label: "English (B2)", icon: "code" },
    ],
  },
  {
    id: "backend-frameworks",
    title: "Backend & Frameworks",
    items: [
      { label: "Spring", icon: "server" },
      { label: "Spring Boot", icon: "server" },
      { label: "JPA/Hibernate", icon: "database" },
      { label: "JUnit 5", icon: "shield" },
      { label: "Mockito", icon: "shield" },
      { label: "SOLID and GRASP", icon: "hexagon" },
      { label: "Design Patterns", icon: "hexagon" },
      { label: "OOD", icon: "hexagon" },
      { label: "DDD", icon: "hexagon" },
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    items: [
      { label: "Docker", icon: "docker" },
      { label: "Kubernetes", icon: "boxes" },
      { label: "Linux", icon: "server" },
      { label: "Nginx", icon: "server" },
    ],
  },
  {
    id: "devops-tooling",
    title: "DevOps & Tooling",
    items: [
      { label: "Gradle", icon: "boxes" },
      { label: "Maven", icon: "boxes" },
      { label: "Jenkins", icon: "server" },
      { label: "Ansible", icon: "git" },
      { label: "Git", icon: "git" },
      { label: "GitHub", icon: "git" },
      { label: "GitLab", icon: "git" },
      { label: "Prometheus", icon: "cloud" },
      { label: "Grafana", icon: "cloud" },
      { label: "ELK Stack", icon: "database" },
      { label: "Testcontainers", icon: "docker" },
      { label: "JMeter", icon: "server" },
    ],
  },
  {
    id: "data-ai",
    title: "Data & AI",
    items: [
      { label: "PostgreSQL", icon: "database" },
      { label: "MongoDB", icon: "database" },
    ],
  },
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile",
    items: [
      { label: "HTML", icon: "braces" },
      { label: "CSS", icon: "braces" },
      { label: "React", icon: "braces" },
    ],
  },
  {
    id: "messaging-integration",
    title: "Messaging & Integration",
    items: [
      { label: "Kafka", icon: "cloud" },
      { label: "RabbitMQ", icon: "cloud" },
      { label: "REST API", icon: "server" },
      { label: "gRPC", icon: "hexagon" },
      { label: "OpenAPI/Swagger", icon: "braces" },
      { label: "JSON", icon: "braces" },
      { label: "Protobuf", icon: "hexagon" },
    ],
  },
];
