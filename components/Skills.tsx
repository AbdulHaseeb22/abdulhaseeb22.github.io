import ScrollReveal from "@/components/ui/ScrollReveal";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Chip from "@/components/ui/Chip";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" style={{ paddingBlock: "96px" }}>
      <div className="container">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-3 mb-12">
            <EyebrowLabel>Skills</EyebrowLabel>
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
              Technology stack
            </h2>
          </div>
        </ScrollReveal>

        {/* Skills grid — 1px gap with bg-[line] creates the divider effect */}
        <div
          className="grid grid-cols-1 tab:grid-cols-2 desk:grid-cols-3 gap-px"
          style={{ backgroundColor: "var(--line)" }}
        >
          {skillGroups.map((group, i) => (
            <ScrollReveal
              key={i}
              delay={(i % 3) as 0 | 1 | 2 | 3}
            >
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  padding: "28px 24px",
                  height: "100%",
                }}
              >
                {/* Group title */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "1px",
                      backgroundColor: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "11px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--muted)",
                    }}
                  >
                    {group.title}
                  </span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
