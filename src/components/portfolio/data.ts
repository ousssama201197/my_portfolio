export const profile = {
  name: "Oussama Mameche",
  firstName: "Oussama",
  lastName: "Mameche",
  initials: "OO",
  title: "Backend Engineer",
  tagline:
    "I build reliable, high-throughput backend systems — with a focus on fintech, transactional integrity, and the kind of workflows that have to be exactly right.",
  bio: "Backend engineer with 5 years of experience designing and scaling systems that move money and data. I work mostly in Java with Spring Boot and Python, and I care deeply about correctness, observability, and clean service boundaries. Currently building fintech infrastructure.",
  location: "Algeria",
  availability: "Open to remote & on-site opportunities",
  email: "oma@outlook.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resumeNote: "Available on request",
};

export const stats = [
  { label: "Years of experience", value: "5+" },
  { label: "In fintech since", value: "2022" },
  { label: "Core stack", value: "Java · Spring" },
  { label: "Location", value: "Algeria" },
];

export type SkillCategory = {
  title: string;
  icon: string; // lucide icon name
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    items: ["Java", "Python", "SQL"],
  },
  {
    title: "Frameworks",
    icon: "Layers",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs"],
  },
  {
    title: "Databases & Caches",
    icon: "Database",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Infrastructure & DevOps",
    icon: "Server",
    items: ["Docker", "Kubernetes", "gRPC", "CI/CD"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Backend Engineer",
    company: "Fintech",
    period: "2022 — Present",
    current: true,
    summary:
      "Designing and owning the backend services behind payment flows, account operations, and internal approval workflows.",
    points: [
      "Designed and shipped core backend services handling account management, transfers, and transaction processing with strict transactional integrity.",
      "Built a multi-step workflow engine powering internal request validation (purchases, approvals) with configurable validation chains and role-based routing.",
      "Owned idempotency, double-entry ledger correctness, and full audit trails across services running on PostgreSQL and Redis.",
      "Containerized services with Docker and automated build/deploy pipelines through CI/CD; collaborated on Kubernetes-based deployments.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "gRPC"],
  },
  {
    role: "Backend Developer",
    company: "Earlier roles",
    period: "2020 — 2022",
    summary:
      "Built and maintained backend services and APIs, focusing on data modeling, performance, and reliability.",
    points: [
      "Developed REST APIs and internal tooling in Java and Python for business-critical workflows.",
      "Improved query performance and data integrity across PostgreSQL/MySQL schemas.",
      "Introduced automated tests and CI checks that reduced regressions in production releases.",
    ],
    stack: ["Java", "Python", "Spring Boot", "MySQL"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  icon: string;
  accent?: boolean;
};

export const projects: Project[] = [
  {
    name: "Banking App",
    tagline: "Core banking & account operations",
    description:
      "A backend system for account management, transfers, and transaction history. Designed around a double-entry ledger with idempotent operations and a complete audit trail.",
    stack: ["Spring Boot", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Double-entry ledger for correct, auditable balances",
      "Idempotent transfer API safe against retries",
      "Full audit trail on every account mutation",
    ],
    icon: "Landmark",
    accent: true,
  },
  {
    name: "Stock Movement App",
    tagline: "Inventory movement & reconciliation",
    description:
      "A stock/inventory movement system that logs every movement in real time, supports reconciliation across warehouses, and exposes reporting for finance and ops teams.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "gRPC"],
    highlights: [
      "Real-time movement logging with immutable history",
      "Reconciliation engine across multiple locations",
      "Reporting API consumed by finance & ops",
    ],
    icon: "Boxes",
  },
  {
    name: "Workflow Process Engine",
    tagline: "Multi-step request validation & approvals",
    description:
      "A configurable workflow engine for internal requests — purchases, validations, and any request that needs multi-step approvals. Role-based routing, configurable validation chains, and a clear audit log at every step.",
    stack: ["Spring Boot", "gRPC", "PostgreSQL", "Redis"],
    highlights: [
      "Configurable multi-step validation chains",
      "Role-based approval routing per request type",
      "Step-by-step audit log for compliance",
    ],
    icon: "Workflow",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
