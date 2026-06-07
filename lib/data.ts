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
    "I build production-grade backend systems and AI-powered products across Java, Spring Boot, Python, FastAPI and React.",
  about: [
    "I am a software engineer with an MSc in Artificial Intelligence from FAU Erlangen and around three years building scalable backend systems and AI integrations in production.",
    "My sweet spot is designing resilient services and event-driven architectures with Spring Boot, Quarkus and Kafka, though I am equally comfortable shipping the React or Next.js frontend on top. Lately that means weaving LLMs and retrieval into real products rather than demos.",
  ],
  stats: [
    { num: "3+", label: "Years in production" },
    { num: "MSc", label: "Artificial Intelligence" },
    { num: "Full-stack", label: "Backend to frontend to AI" },
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
      "Built a real-time manufacturing intelligence platform on Quarkus and Spring Boot microservices with Kafka event pipelines and Angular dashboards, plus a Spring AI assistant that let plant teams query production data in natural language.",
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
      "Owned the end-to-end Feature Inbox call-management product, designing REST APIs consumed by a React and Next.js frontend, backed by ElasticSearch, AWS Lambda and S3, and Twilio for telephony.",
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
      "Shaped enterprise platform architecture with Spring Boot and React on AWS, including a real-time WebSocket group-chat system built to hold up at scale.",
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
    title: "Sublly",
    description:
      "AI-powered sublet marketplace for short-term rentals across Germany. Built the full Next.js frontend and backend integrations, including AI-generated listing titles, amenity detection from photos, and an AI host assistant that guides users through the listing setup flow.",
    tags: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
    liveUrl: "https://sublly.com/en",
    githubUrl: "",
    iconType: "home" as const,
  },
  {
    title: "DocuMind",
    description:
      "AI document intelligence platform where users upload PDFs and chat with them using RAG. Built autonomous routing so the AI decides whether to search uploaded documents or the web. Supports OpenAI, Claude and Gemini with isolated per-user document storage via Supabase RLS.",
    tags: ["Next.js 15", "Supabase", "pgvector", "OpenAI", "RAG"],
    liveUrl: "",
    githubUrl: "https://github.com/AbdulHaseeb22/documind",
    iconType: "brain" as const,
  },
  {
    title: "StreamNet",
    description:
      "Production-grade social platform built on Spring Boot microservices with real-time feeds, WebSocket messaging, scheduled posts and full-text search. Twelve independent services coordinated through an API gateway and Kafka event bus, deployed with Docker Compose.",
    tags: ["Spring Boot", "Kafka", "React", "PostgreSQL", "Redis", "AWS S3"],
    liveUrl: "",
    githubUrl: "https://github.com/AbdulHaseeb22/streamnet",
    iconType: "network" as const,
  },
  {
    title: "SCA Tool",
    description:
      "Open-source Software Composition Analysis platform for SBOM generation, license compliance and vulnerability detection. Built the GitHub OAuth flow and the transitive dependency resolution engine that traverses the full package graph.",
    tags: ["Java", "Spring Boot", "GitHub API", "PostgreSQL"],
    liveUrl: "",
    githubUrl: "#",
    iconType: "cube" as const,
  },
];

export const config = {
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
  calcomLink: process.env.NEXT_PUBLIC_CALCOM_LINK || "",
};
