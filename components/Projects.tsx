"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Tag from "@/components/ui/Tag";
import { projects } from "@/lib/data";

function CubeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="4" r="2" />
      <circle cx="4" cy="20" r="2" />
      <circle cx="20" cy="20" r="2" />
      <line x1="12" y1="6" x2="4" y2="18" />
      <line x1="12" y1="6" x2="20" y2="18" />
      <line x1="6" y1="20" x2="18" y2="20" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  delay: 0 | 1 | 2 | 3;
}

function ProjectCard({ project, delay }: ProjectCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <article
        className="flex flex-col gap-5 h-full rounded-xl p-6 transition-all duration-300"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--line)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(-3px)";
          el.style.borderColor = "var(--line-strong)";
          el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(0)";
          el.style.borderColor = "var(--line)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Icon + links row */}
        <div className="flex items-center justify-between">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-lg"
            style={{
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            {{ cube: <CubeIcon />, home: <HomeIcon />, brain: <BrainIcon />, network: <NetworkIcon /> }[project.iconType] ?? <CubeIcon />}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                aria-label={`View ${project.title} live`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                <ExternalLinkIcon />
                View
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                aria-label={`View ${project.title} on GitHub`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                <GitHubIcon />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Title + description */}
        <div className="flex flex-col gap-2 flex-1">
          <h3
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.75,
              color: "var(--text-2)",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        paddingBlock: "96px",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        backgroundColor: "var(--bg-soft)",
      }}
    >
      <div className="container">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-3 mb-12">
            <EyebrowLabel>Projects</EyebrowLabel>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              Selected work
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 tab:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={(i % 3) as 0 | 1 | 2 | 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
