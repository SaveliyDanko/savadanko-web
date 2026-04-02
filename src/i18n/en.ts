export const en = {
  nav: {
    about: "About",
    work: "Work",
    blog: "Blog",
    contact: "Contact",
  },
  header: {
    brand: "savadanko.dev",
  },
  hero: {
    badge: "Full Stack Developer",
    descriptionStart: "I design and build ",
    bold1: "modern web applications",
    comma1: ", ",
    bold2: "responsive interfaces",
    comma2: ", and ",
    bold3: "scalable solutions",
    descriptionEnd:
      ". Focused on performance, clean code, and quality user experience.",
    ctaPrimary: "View my Work",
    ctaSecondary: "Get in Touch",
    stats: [
      { value: 3, suffix: "+", label: "Years building" },
      { value: 10, suffix: "+", label: "Projects" },
      { value: 30, suffix: "+", label: "Technologies" },
    ],
  },
  about: {
    label: "Background",
    title: "About Me",
    readMore: "Read more",
    intro: [
      "I am a student at ITMO University, studying Software Engineering with an advanced specialization in systems programming and software development.",
      "I work at a telecommunications company, where I focus on billing solutions and the implementation of software products. I am interested in software architecture, application development, and current IT trends. In my free time, I play volleyball. I live in Saint Petersburg and strive to balance professional and personal growth."
    ],
    stats: [
      { value: "3+", label: "Years building" },
      { value: "10+", label: "Projects shipped" },
      { value: "30", label: "Core technologies" },
      { value: "3", label: "Focus areas" },
    ],
    profile: [
      { label: "name", value: "Sava Danko" },
      { label: "role", value: "Frontend Developer" },
      { label: "location", value: "Remote / Worldwide" },
      { label: "experience", value: "3+ years" },
      { label: "focus", value: "UX, motion, performance" },
    ],
  },
  coreExpertise: {
    label: "Skills",
    title: "Core Expertise",
    description: "The domains and disciplines I work across",
    items: [
      {
        title: "Software Architecture",
        description:
          "Distributed systems, DDD, microservices, and API design.",
      },
      {
        title: "Cloud Infrastructure",
        description:
          "Azure, AWS, GCP, multi-cloud design, and infrastructure as code.",
      },
      {
        title: "Backend Platforms",
        description:
          ".NET, Java, Spring Boot, Node.js, and GraphQL services.",
      },
      {
        title: "Identity and Security",
        description:
          "OAuth2, OIDC, SSO, encryption, and security-first delivery.",
      },
      {
        title: "AI and Data Systems",
        description:
          "RAG pipelines, Databricks, vector search, and applied AI workflows.",
      },
      {
        title: "Web3 and Blockchain",
        description:
          "Solidity, EVM ecosystems, on-chain tooling, and smart contracts.",
      },
      {
        title: "DevOps and Platform",
        description:
          "Docker, CI/CD, Terraform, observability, and platform operations.",
      },
      {
        title: "Product Engineering",
        description:
          "React, Next.js, TypeScript, and end-to-end product delivery.",
      },
    ],
  },
  projects: {
    label: "Portfolio",
    title: "Featured Work",
    description: "Selected projects with architecture deep-dives",
    viewAll: "View all work",
    items: [
      {
        category: "Web3",
        description:
          "Developer of high-tech enterprise solutions for various sectors of the economy",
      },
      {
        category: "Ecommerce",
        description:
          "No-code business process automation platform",
      },
    ],
  },
  techStack: {
    label: "Tools",
    title: "Tech Stack",
    description: "Technologies and tools I work with regularly",
    showAll: "Show all 8 categories",
    showLess: "Show fewer categories",
    categories: {
      languages: "Languages",
      "backend-frameworks": "Backend & Frameworks",
      "cloud-infra": "Cloud & Infrastructure",
      "devops-tooling": "DevOps & Tooling",
      "ai-data": "AI & Data",
      frontend: "Frontend",
      security: "Security & Identity",
      blockchain: "Blockchain",
    } as Record<string, string>,
  },
  aboutPage: {
    title: "About",
    subtitle:
      "Software Architect bridging enterprise systems, cloud infrastructure, AI, and Web3.",
    intro: [
      "I'm a Software Architect with over a decade of experience building production systems across healthcare, logistics, banking, ecommerce, and blockchain. My work sits at the intersection of backend architecture, cloud infrastructure, and product engineering.",
      "Currently at Vanderlande, I lead AI-driven features on enterprise platforms using RAG pipelines, Databricks, and Azure services. Outside of work, I build Web3 products from zero-knowledge compliance infrastructure to compliant crypto exchanges.",
    ],
    resumeLabel: "Resume",
    resumeDescription:
      "with my current experience, projects, and education.",
    resumeDownload: "Download PDF",
    photoAlt: "Portrait of Savely Danko",
    principlesTitle: "How I Think About Architecture",
    principles: [
      {
        title: "Simplicity at Scale",
        description:
          "The best architectures are the simplest ones that still meet the requirements. Complexity is a cost. I minimize it deliberately.",
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
    ],
    certificationsTitle: "Certifications",
    educationTitle: "Education",
  },
  blog: {
    title: "Blog",
    subtitle:
      "A personal blog about backend development, architecture, system design and software engineering.",
    openArticle: "Open article",
    backToBlog: "Back to blog",
  },
  contact: {
    title: "Contact",
    subtitle:
      "Let's connect. Whether it's architecture consulting, collaboration, or just a technical conversation.",
    emailTitle: "Email",
    locationTitle: "Location",
    location: "Remote / Worldwide",
    socialTitle: "Social",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formNamePlaceholder: "Your name",
    formEmailPlaceholder: "you@example.com",
    formSubjectPlaceholder: "What's this about?",
    formMessagePlaceholder: "Tell me more...",
    formSubmit: "Send Message",
    formDefaultSubject: "New contact request",
  },
  footer: {
    availableBadge: "Available for opportunities",
    ctaTitle: "Let's build something",
    ctaTitleAccent: " together",
    ctaDescription:
      "Looking for a frontend developer who cares about systems, motion, and polished product experiences? I'd love to connect.",
    ctaPrimary: "Get in Touch",
    pagesLabel: "Pages",
    contactLabel: "Contact",
    sendMessage: "Send a message",
    footerDescription:
      "Design and build modern web applications, responsive interfaces, and scalable solutions.",
    copyright: "Sava Danko. All rights reserved.",
    builtWith: "Built with React + Vite + Tailwind",
  },
  notFound: {
    title: "Page not found",
    backHome: "Back to Home",
  },
};

export type Translations = typeof en;
