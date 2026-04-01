import { SOCIAL_LINKS } from "@/constants/socials";

export const contactPageHero = {
  title: "Contact",
  subtitle:
    "Let's connect. Whether it's architecture consulting, collaboration, or just a technical conversation.",
} as const;

export const contactPageMeta = {
  email: "your@email.com",
  location: "Remote / Worldwide",
} as const;

export const contactPageSocials = [
  {
    label: "GitHub",
    href: SOCIAL_LINKS.find((link) => link.label === "GitHub")?.url ?? "#",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.find((link) => link.label === "LinkedIn")?.url ?? "#",
    icon: "linkedin",
  },
  {
    label: "X",
    href: "#",
    icon: "x",
  },
  {
    label: "Stack Overflow",
    href: "#",
    icon: "stack-overflow",
  },
] as const;

export const contactFormPlaceholders = {
  name: "Your name",
  email: "you@example.com",
  subject: "What's this about?",
  message: "Tell me more...",
} as const;
