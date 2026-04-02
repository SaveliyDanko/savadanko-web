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
      "Privacy-preserving zero-knowledge compliance infrastructure for India",
    technologies: ["Noir", "Rust", "Spring Boot", "Flutter", "AWS", "Terraform"],
    extraTechnologies: 3,
    href: "#projects",
    logo: "nexign",
  },
  {
    id: "modula",
    title: "Modula",
    category: "Ecommerce",
    description:
      "Platform connecting artists and clients for bookings with real-time chat",
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
