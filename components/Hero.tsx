"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personal, config } from "@/lib/data";

const CODE_SKILLS = ["Java/Spring Boot", "Python/FastAPI", "React/Next.js"];

const HAS_PHOTO = true;

export default function Hero() {
  const ctaHref = config.calcomLink
    ? `https://cal.com/${config.calcomLink}`
    : "#contact";

  return (
    <section
      style={{
        paddingTop: "calc(68px + 72px)",
        paddingBottom: "48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-20%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Two-column grid: 1.55fr / 1fr, collapses at 940px */}
        <div
          className="grid grid-cols-1 desk:grid-cols-[1.55fr_1fr] gap-12 desk:gap-16 items-center"
        >
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Availability badge */}
            {personal.available && (
              <ScrollReveal delay={0}>
                <div className="inline-flex items-center gap-2.5">
                  <span className="relative inline-flex items-center justify-center w-4 h-4">
                    <span
                      className="pulse-ring absolute inset-0 rounded-full"
                      style={{ backgroundColor: "rgba(34,197,94,0.35)" }}
                    />
                    <span
                      className="relative z-10 w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#22c55e" }}
                    />
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-2)" }}
                  >
                    {personal.availableText}
                  </span>
                </div>
              </ScrollReveal>
            )}

            {/* Name */}
            <ScrollReveal delay={1}>
              <h1
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(40px, 5.5vw, 64px)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  color: "var(--text)",
                }}
              >
                {personal.name}
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={2}>
              <p
                style={{
                  fontSize: "clamp(16px, 2vw, 19px)",
                  color: "var(--text-2)",
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                {personal.title}
              </p>
            </ScrollReveal>

            {/* Positioning with code pills */}
            <ScrollReveal delay={2}>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                }}
              >
                I build production-grade backend systems and AI-powered products
                —{" "}
                {CODE_SKILLS.map((skill, i) => (
                  <span key={skill}>
                    <code
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "12.5px",
                        backgroundColor: "var(--surface-2)",
                        border: "1px solid var(--line)",
                        color: "var(--accent-bright)",
                        padding: "1px 6px",
                        borderRadius: "4px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {skill}
                    </code>
                    {i < CODE_SKILLS.length - 1 && (
                      <span style={{ color: "var(--faint)" }}>, </span>
                    )}
                  </span>
                ))}
                .
              </p>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal delay={3}>
              <div
                className="flex items-center gap-1.5"
                style={{ fontSize: "14px", color: "var(--muted)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                {personal.location}
              </div>
            </ScrollReveal>

            {/* CTA buttons */}
            <ScrollReveal delay={3}>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={ctaHref}
                  target={config.calcomLink ? "_blank" : undefined}
                  rel={config.calcomLink ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book a call
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    border: "1px solid var(--line-strong)",
                    color: "var(--text-2)",
                  }}
                  onMouseEnter={(e) => {
                    const t = e.currentTarget;
                    t.style.borderColor = "var(--accent-line)";
                    t.style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    const t = e.currentTarget;
                    t.style.borderColor = "var(--line-strong)";
                    t.style.color = "var(--text-2)";
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email me
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — profile photo */}
          <ScrollReveal delay={2} className="justify-self-center self-center">
            {/* 8px padding so the accent ring isn't clipped by the grid cell edge */}
            <div style={{ padding: "8px" }}>
              <div
                style={{
                  width: "clamp(180px, 20vw, 260px)",
                  aspectRatio: "4/5",
                  borderRadius: "9999px",
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  boxShadow:
                    "0 0 0 3px var(--accent-soft), 0 0 0 1px var(--accent-line)",
                  position: "relative",
                }}
              >
                {HAS_PHOTO ? (
                  <Image
                    src="/profile.jpg"
                    alt="Abdul Haseeb"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      filter: "grayscale(100%)",
                      mixBlendMode: "luminosity",
                    }}
                    priority
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      background:
                        "linear-gradient(145deg, var(--surface) 0%, var(--surface-2) 100%)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "72px",
                        fontWeight: 700,
                        color: "var(--accent)",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                        opacity: 0.9,
                      }}
                    >
                      AH
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--faint)",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      profile.jpg
                    </span>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
