export interface FeaturedWorkProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  extraTechnologies: number;
  href: string;
  logo: "nexign" | "modula";
}

export const projects: FeaturedWorkProject[] = [
  {
    id: "nexign",
    title: "Nexign",
    category: "Web3",
    description:
      "Developer of high-tech enterprise solutions for various sectors of the economy.",
    technologies: ["Rust", "Spring Boot", "Flutter", "AWS", "Terraform"],
    extraTechnologies: 3,
    href: "#projects",
    logo: "nexign",
  },
  {
    id: "modula",
    title: "Modula",
    category: "Ecommerce",
    description:
      "No-code business process automation platform",
    technologies: [
      ".NET 10",
      "Next.js",
      "Flutter",
      "PostgreSQL",
      "Supabase Auth",
      "Cloudflare R2",
    ],
    extraTechnologies: 2,
    href: "#projects",
    logo: "modula",
  },
];
