import ScrollReveal from "@/components/ui/ScrollReveal";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Tag from "@/components/ui/Tag";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
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
          <div className="flex flex-col gap-3 mb-14">
            <EyebrowLabel>Experience</EyebrowLabel>
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
              Where I&apos;ve worked
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "15px",
              top: "6px",
              bottom: 0,
              width: "1px",
              backgroundColor: "var(--line)",
            }}
          />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <ScrollReveal
                key={i}
                delay={(i % 3) as 0 | 1 | 2 | 3}
              >
              <div
                className="relative"
                style={{ paddingLeft: "52px", paddingBottom: i < experiences.length - 1 ? "48px" : "0" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "4px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: exp.current
                        ? "var(--accent)"
                        : "var(--surface-2)",
                      border: `2px solid ${exp.current ? "var(--accent)" : "var(--line-strong)"}`,
                      boxShadow: exp.current
                        ? "0 0 0 4px var(--accent-soft)"
                        : "none",
                      transition: "box-shadow 0.3s ease",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  {/* Role + company row */}
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "var(--text)",
                        }}
                      >
                        {exp.role}
                      </span>
                      {exp.roleNote && (
                        <span
                          style={{
                            fontSize: "13px",
                            color: "var(--muted)",
                            fontWeight: 400,
                          }}
                        >
                          ({exp.roleNote})
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "var(--accent)",
                        }}
                      >
                        {exp.company}
                      </span>
                      <span style={{ color: "var(--faint)", fontSize: "13px" }}>
                        ·
                      </span>
                      <span style={{ color: "var(--muted)", fontSize: "13px" }}>
                        {exp.location}
                      </span>
                      <span style={{ color: "var(--faint)", fontSize: "13px" }}>
                        ·
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          fontSize: "12px",
                          color: "var(--muted)",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.75,
                      color: "var(--text-2)",
                      maxWidth: "680px",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
