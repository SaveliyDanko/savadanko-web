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
    id: "programming-languages",
    title: "Programming Languages",
    items: [
      { label: "Java", icon: "code" },
      { label: "Groovy", icon: "code" },
      { label: "Kotlin", icon: "code" },
      { label: "JavaScript", icon: "braces" },
      { label: "TypeScript", icon: "braces" },
      { label: "SQL", icon: "sql" },
      { label: "Bash", icon: "code" },
      { label: "HTML", icon: "braces" },
      { label: "CSS", icon: "braces" },
    ],
  },
  {
    id: "backend-data",
    title: "Backend & Data",
    items: [
      { label: "Spring", icon: "server" },
      { label: "Spring Boot", icon: "server" },
      { label: "JPA/Hibernate", icon: "database" },
      { label: "PostgreSQL", icon: "database" },
      { label: "MongoDB", icon: "database" },
    ],
  },
  {
    id: "build-messaging",
    title: "Build & Messaging",
    items: [
      { label: "Gradle", icon: "boxes" },
      { label: "Maven", icon: "boxes" },
      { label: "Kafka", icon: "cloud" },
      { label: "RabbitMQ", icon: "cloud" },
    ],
  },
  {
    id: "devops-observability",
    title: "DevOps & Observability",
    items: [
      { label: "Docker", icon: "docker" },
      { label: "Kubernetes", icon: "boxes" },
      { label: "Jenkins", icon: "server" },
      { label: "Ansible", icon: "git" },
      { label: "Prometheus", icon: "cloud" },
      { label: "Grafana", icon: "cloud" },
      { label: "ELK Stack", icon: "database" },
      { label: "Linux", icon: "server" },
      { label: "Nginx", icon: "server" },
    ],
  },
  {
    id: "api-contracts",
    title: "API & Contracts",
    items: [
      { label: "REST API", icon: "server" },
      { label: "gRPC", icon: "hexagon" },
      { label: "OpenAPI/Swagger", icon: "braces" },
      { label: "JSON", icon: "braces" },
      { label: "Protobuf", icon: "hexagon" },
    ],
  },
  {
    id: "testing-quality",
    title: "Testing & Quality",
    items: [
      { label: "JUnit 5", icon: "shield" },
      { label: "Mockito", icon: "shield" },
      { label: "Testcontainers", icon: "docker" },
      { label: "JMeter", icon: "server" },
    ],
  },
  {
    id: "frontend-vcs",
    title: "Frontend & VCS",
    items: [
      { label: "React", icon: "braces" },
      { label: "Git", icon: "git" },
      { label: "GitHub", icon: "git" },
      { label: "GitLab", icon: "git" },
    ],
  },
  {
    id: "architecture-principles",
    title: "Architecture Principles",
    items: [
      { label: "SOLID and GRASP", icon: "hexagon" },
      { label: "Design Patterns", icon: "hexagon" },
      { label: "OOD", icon: "hexagon" },
      { label: "DDD", icon: "hexagon" },
    ],
  },
  {
    id: "spoken-languages",
    title: "Spoken Languages",
    items: [
      { label: "Russian (Native)", icon: "code" },
      { label: "English (B2)", icon: "code" },
    ],
  },
];
