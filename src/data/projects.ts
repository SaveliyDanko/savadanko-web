export interface FeaturedWorkProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  extraTechnologies: number;
  href: string;
  logo: "nexign" | "modula" | "danko-realty";
}

export const projects: FeaturedWorkProject[] = [
  {
    id: "nexign",
    title: "Nexign",
    category: "Web3",
    description:
      "Developer of high-tech enterprise solutions for various sectors of the economy.",
    technologies: [
      "Java",
      "Apache Camel",
      "Postgres",
      "Jenkins",
      "Kubernetes",
      "Ansible",
      "Rabbit",
    ],
    extraTechnologies: 7,
    href: "#projects",
    logo: "nexign",
  },
  {
    id: "modula",
    title: "Modula",
    category: "Ecommerce",
    description: "No-code business process automation platform",
    technologies: ["Java", "Spring", "Docker", "React", "Kafka"],
    extraTechnologies: 5,
    href: "#projects",
    logo: "modula",
  },
  {
    id: "danko-realty",
    title: "Danko Realty",
    category: "Real Estate",
    description: "Full-stack real estate management platform for listings, clients, and deals",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    extraTechnologies: 3,
    href: "http://realty.dankosava.ru/",
    logo: "danko-realty",
  },
];
