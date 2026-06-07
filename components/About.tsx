import ScrollReveal from "@/components/ui/ScrollReveal";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import { personal } from "@/lib/data";

export default function About() {
  return (
    <section id="about" style={{ paddingBlock: "96px" }}>
      <div className="container">
        <div className="grid grid-cols-1 desk:grid-cols-[0.7fr_1.3fr] gap-12 desk:gap-20 items-start">
          {/* Left — title block */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-4">
              <EyebrowLabel>About</EyebrowLabel>
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
                Building things
                <br />
                that matter
              </h2>
            </div>
          </ScrollReveal>

          {/* Right — content */}
          <div className="flex flex-col gap-8">
            {/* Paragraphs */}
            <div className="flex flex-col gap-5">
              {personal.about.map((para, i) => (
                <ScrollReveal key={i} delay={i === 0 ? 1 : 2}>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.8,
                      color: "var(--text-2)",
                    }}
                  >
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Stats */}
            <ScrollReveal delay={3}>
              <div
                className="grid grid-cols-3"
                style={{
                  borderTop: "1px solid var(--line)",
                  marginTop: "48px",
                  paddingTop: "36px",
                  overflow: "visible",
                }}
              >
                {personal.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1.5"
                    style={{
                      borderRight: i < personal.stats.length - 1 ? "1px solid var(--line)" : "none",
                      paddingRight: i < personal.stats.length - 1 ? "24px" : "0",
                      paddingLeft: i > 0 ? "24px" : "0",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "clamp(26px, 3vw, 36px)",
                        fontWeight: 700,
                        color: "var(--text)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {stat.num}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--muted)",
                        lineHeight: 1.4,
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
