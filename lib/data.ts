export const personal = {
  name: "Abdul Haseeb",
  title: "Full-Stack & AI Software Engineer",
  tagline:
    "Production-grade backend systems and AI-powered products, built end to end.",
  location: "Erlangen, Germany",
  email: "abdulhaseeb.soomro8@gmail.com",
  linkedin: "https://linkedin.com/in/abdulhaseeb22",
  github: "https://github.com/AbdulHaseeb22",
  available: true,
  availableText: "Available for freelance",
  positioning:
    "I build production-grade backend systems and AI-powered products — Java/Spring Boot, Python/FastAPI, React/Next.js.",
  about: [
    "I'm a software engineer with an MSc in Artificial Intelligence from FAU Erlangen and around three years building scalable backend systems and AI integrations in production.",
    "I'm most at home designing resilient services and event-driven architectures — Spring Boot, Quarkus, Kafka — but I'm equally comfortable shipping the React/Next.js front end that sits on top of them. Lately that means weaving LLMs and retrieval into real products rather than demos.",
  ],
  stats: [
    { num: "3+", label: "Years in production" },
    { num: "MSc", label: "Artificial Intelligence" },
    { num: "Full-stack", label: "Backend → frontend → AI" },
  ],
};

export const experiences = [
  {
    role: "Software Developer",
    roleNote: "Master's Thesis",
    company: "BMW Group",
    location: "Munich",
    period: "Nov 2024 – May 2025",
    current: true,
    description:
      "Built a real-time manufacturing intelligence platform on Quarkus & Spring Boot microservices with Kafka event pipelines and Angular dashboards, plus a Spring AI LLM assistant that let plant teams query production data in natural language.",
    tags: ["Quarkus", "Spring Boot", "Kafka", "Angular", "Spring AI"],
  },
  {
    role: "Software Developer",
    roleNote: undefined,
    company: "MANAGBL.AI",
    location: "Berlin",
    period: "Feb 2023 – Feb 2024",
    current: false,
    description:
      'Owned the end-to-end "Feature Inbox" call-management product — designing REST APIs consumed by a React/Next.js front end, backed by ElasticSearch search, AWS Lambda/S3, and Twilio for telephony.',
    tags: [
      "REST APIs",
      "React / Next.js",
      "ElasticSearch",
      "AWS Lambda / S3",
      "Twilio",
    ],
  },
  {
    role: "Software Developer",
    roleNote: undefined,
    company: "Marketplug",
    location: "London",
    period: "Aug 2021 – Oct 2022",
    current: false,
    description:
      "Shaped enterprise platform architecture with Spring Boot and React/Angular on AWS, including a real-time WebSocket group-chat system built to hold up at scale.",
    tags: ["Spring Boot", "React", "Angular", "AWS", "WebSocket"],
  },
];

export const skillGroups = [
  { title: "Languages", skills: ["Java", "TypeScript", "Python", "SQL"] },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Quarkus",
      "FastAPI",
      "JPA / Hibernate",
      "OAuth2 / JWT",
    ],
  },
  {
    title: "Data & Messaging",
    skills: ["Kafka", "ElasticSearch", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud / DevOps",
    skills: ["AWS", "Azure", "Docker", "GitHub Actions"],
  },
  { title: "Frontend", skills: ["React", "Next.js", "Angular"] },
  { title: "AI", skills: ["LLMs", "RAG", "Spring AI"] },
];

export const projects = [
  {
    title: "SCA Tool",
    description:
      "Open-source Software Composition Analysis platform — SBOM generation, license compliance, and vulnerability detection. Built the GitHub OAuth flow and the transitive dependency-resolution engine.",
    tags: ["Java", "Spring Boot", "GitHub API", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    iconType: "cube" as const,
  },
  {
    title: "Enterprise Chat Application",
    description:
      "Scalable microservices chat platform serving 200+ business customers with real-time WebSocket messaging, presence, and message history.",
    tags: ["Spring Boot", "Angular", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    iconType: "chat" as const,
  },
];

export const config = {
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
  calcomLink: process.env.NEXT_PUBLIC_CALCOM_LINK || "",
};
