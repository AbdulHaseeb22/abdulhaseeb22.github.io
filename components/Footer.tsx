"use client";

import { personal } from "@/lib/data";

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
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
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="18"
      height="18"
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

const SOCIAL_LINKS = [
  {
    label: "Email Abdul Haseeb",
    href: `mailto:${personal.email}`,
    icon: <EmailIcon />,
  },
  {
    label: "Abdul Haseeb on LinkedIn",
    href: personal.linkedin,
    icon: <LinkedInIcon />,
  },
  {
    label: "Abdul Haseeb on GitHub",
    href: personal.github,
    icon: <GitHubIcon />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        paddingBlock: "48px 32px",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div className="flex flex-col mob:flex-row items-start mob:items-center justify-between gap-6 pb-8">
          {/* Brand */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "var(--text)",
                }}
              >
                Abdul Haseeb
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginLeft: "15px" }}>
              {personal.tagline}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                aria-label={label}
                className="flex items-center justify-center w-[42px] h-[42px] rounded-lg transition-all duration-200"
                style={{
                  color: "var(--muted)",
                  border: "1px solid var(--line)",
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget;
                  t.style.color = "var(--accent)";
                  t.style.borderColor = "var(--accent-line)";
                  t.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget;
                  t.style.color = "var(--muted)";
                  t.style.borderColor = "var(--line)";
                  t.style.transform = "translateY(0)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col mob:flex-row items-start mob:items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <p style={{ fontSize: "13px", color: "var(--faint)" }}>
            © {year} Abdul Haseeb. All rights reserved.
          </p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
          >
            Back to top
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
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
