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
    badge: "Frontend Developer",
    descriptionStart: "I design and build ",
    bold1: "modern web applications",
    comma1: ", ",
    bold2: "responsive interfaces",
    comma2: ", and ",
    bold3: "interactive SPAs",
    descriptionEnd:
      ". Focused on performance, clean code, and quality user experience.",
    ctaPrimary: "View my Work",
    ctaSecondary: "Get in Touch",
    stats: [
      { value: 2, suffix: "+", label: "Years building" },
      { value: 10, suffix: "+", label: "Projects" },
      { value: 5, suffix: "+", label: "Technologies" },
    ],
  },
  about: {
    label: "Background",
    title: "About Me",
    readMore: "Read more",
    intro: [
      "I'm a frontend developer building modern interfaces with a focus on clarity, motion, and responsive user experience across landing pages, dashboards, and interactive applications.",
      "My work sits at the intersection of React architecture, component systems, and visual polish. I enjoy translating ideas into fast, accessible, and production-ready web experiences.",
      "Right now I'm deepening my frontend toolkit through hands-on projects, refining animation details, and shipping portfolio work that balances personality with clean implementation.",
    ],
    stats: [
      { value: "2+", label: "Years building" },
      { value: "10+", label: "Projects shipped" },
      { value: "5", label: "Core technologies" },
      { value: "3", label: "Focus areas" },
    ],
    profile: [
      { label: "name", value: "Sava Danko" },
      { label: "role", value: "Frontend Developer" },
      { label: "location", value: "Remote / Worldwide" },
      { label: "experience", value: "2+ years" },
      { label: "stack", value: "React + TypeScript + Tailwind" },
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
          "Privacy-preserving zero-knowledge compliance infrastructure for India",
      },
      {
        category: "Ecommerce",
        description:
          "Platform connecting artists and clients for bookings with real-time chat",
      },
      {
        category: "Healthcare",
        description:
          "Medical logistics and delivery app with offline capabilities and real-time tracking",
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
    resumeButtons: ["Resume (Web2)", "Resume (Web3)"],
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
    subtitle: "Writing about architecture, systems design, AI, and Web3.",
    posts: [
      {
        title: "Designing a Zero-Knowledge Compliance Stack for India",
        excerpt:
          "How I architected SatyaStack, a privacy-preserving KYC/AML platform using PLONK proofs, Noir circuits, and a trust boundary model where PII never crosses the backend boundary.",
      },
      {
        title: "Scaling to 200K Signups per Minute with AWS Lambda",
        excerpt:
          "Architecture deep-dive into the Bitcoin India Conference registration platform: Lambda concurrency, Redis OTP deduplication, SQS fan-out pipelines, and how CloudFront plus Turnstile absorbed a traffic spike 40x beyond projections.",
      },
      {
        title: "Building an Enterprise RAG Pipeline on Azure Databricks",
        excerpt:
          "How I designed a retrieval-augmented generation pipeline at Vanderlande: Unity Catalog governance, vectorization strategies, chunking trade-offs, and why we chose Azure AI Search over Pinecone.",
      },
      {
        title: "Zero-Downtime Keycloak Migration: v16 to v22 on Azure",
        excerpt:
          "Migrating a production IAM system serving 40,000 users from legacy Keycloak to containerized v22 on Azure App Service: Bicep IaC, database schema evolution, session continuity, and the rollback strategy that saved us.",
      },
    ],
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
      "Frontend developer building across responsive interfaces, product systems, and interactive web experiences.",
    copyright: "Sava Danko. All rights reserved.",
    builtWith: "Built with React + Vite + Tailwind",
  },
  notFound: {
    title: "Page not found",
    backHome: "Back to Home",
  },
};

export type Translations = typeof en;
