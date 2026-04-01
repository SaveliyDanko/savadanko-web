export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "zk-compliance-stack",
    title: "Designing a Zero-Knowledge Compliance Stack for India",
    excerpt:
      "How I architected SatyaStack, a privacy-preserving KYC/AML platform using PLONK proofs, Noir circuits, and a trust boundary model where PII never crosses the backend boundary.",
    publishedAt: "March 14, 2026",
    readingTime: "4 min read",
    tags: ["architecture", "web3", "zero-knowledge", "privacy", "compliance"],
  },
  {
    id: "scaling-lambda-signups",
    title: "Scaling to 200K Signups per Minute with AWS Lambda",
    excerpt:
      "Architecture deep-dive into the Bitcoin India Conference registration platform: Lambda concurrency, Redis OTP deduplication, SQS fan-out pipelines, and how CloudFront plus Turnstile absorbed a traffic spike 40x beyond projections.",
    publishedAt: "February 20, 2026",
    readingTime: "5 min read",
    tags: ["architecture", "aws", "serverless", "scaling", "performance"],
  },
  {
    id: "enterprise-rag-pipeline",
    title: "Building an Enterprise RAG Pipeline on Azure Databricks",
    excerpt:
      "How I designed a retrieval-augmented generation pipeline at Vanderlande: Unity Catalog governance, vectorization strategies, chunking trade-offs, and why we chose Azure AI Search over Pinecone.",
    publishedAt: "January 28, 2026",
    readingTime: "6 min read",
    tags: ["architecture", "ai", "rag", "azure", "enterprise"],
  },
  {
    id: "keycloak-migration",
    title: "Zero-Downtime Keycloak Migration: v16 to v22 on Azure",
    excerpt:
      "Migrating a production IAM system serving 40,000 users from legacy Keycloak to containerized v22 on Azure App Service: Bicep IaC, database schema evolution, session continuity, and the rollback strategy that saved us.",
    publishedAt: "December 15, 2025",
    readingTime: "6 min read",
    tags: ["architecture", "azure", "iam", "migration", "devops"],
  },
];
