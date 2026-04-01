export interface FeaturedWorkProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  extraTechnologies: number;
  href: string;
  logo: "satyastack" | "artistskonnect" | "audel";
}

export const projects: FeaturedWorkProject[] = [
  {
    id: "satyastack",
    title: "SatyaStack",
    category: "Web3",
    description:
      "Privacy-preserving zero-knowledge compliance infrastructure for India",
    technologies: ["Noir", "Rust", "Spring Boot", "Flutter", "AWS", "Terraform"],
    extraTechnologies: 3,
    href: "#projects",
    logo: "satyastack",
  },
  {
    id: "artistskonnect",
    title: "ArtistsKonnect",
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
    logo: "artistskonnect",
  },
  {
    id: "audel-medical-logistics",
    title: "Audel Medical Logistics",
    category: "Healthcare",
    description:
      "Medical logistics and delivery app with offline capabilities and real-time tracking",
    technologies: ["Java", "React", "Vite", "TypeScript", "Flutter", "Supabase"],
    extraTechnologies: 1,
    href: "#projects",
    logo: "audel",
  },
];
