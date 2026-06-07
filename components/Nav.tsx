"use client";

import { useEffect, useState } from "react";
import { personal, config } from "@/lib/data";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const ctaHref = config.calcomLink
    ? `https://cal.com/${config.calcomLink}`
    : `mailto:${personal.email}`;

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "68px",
          borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          backgroundColor: scrolled ? "rgba(11,11,12,0.72)" : "transparent",
          transition:
            "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="container h-full flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 no-underline"
            aria-label="Abdul Haseeb — home"
          >
            <span
              style={{
                width: 8,
                height: 8,
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
          </a>

          {/* Desktop links */}
          <nav className="hidden desk:flex items-center gap-8" aria-label="Section links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color:
                    activeSection === link.href
                      ? "var(--text)"
                      : "var(--text-2)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href={ctaHref}
              target={config.calcomLink ? "_blank" : undefined}
              rel={config.calcomLink ? "noopener noreferrer" : undefined}
              className="hidden desk:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Book a call
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="desk:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  backgroundColor: "var(--text)",
                  borderRadius: 2,
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: menuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  backgroundColor: "var(--text)",
                  borderRadius: 2,
                  transition: "opacity 0.25s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  backgroundColor: "var(--text)",
                  borderRadius: 2,
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: menuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          top: 68,
          left: 0,
          right: 0,
          zIndex: 49,
          backgroundColor: "rgba(11,11,12,0.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--line)",
          padding: "24px clamp(20px, 4vw, 48px) 32px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
          opacity: menuOpen ? 1 : 0,
          transition: "transform 0.3s ease, opacity 0.25s ease",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color:
                activeSection === link.href ? "var(--accent)" : "var(--text)",
              textDecoration: "none",
              padding: "14px 0",
              borderBottom: "1px solid var(--line)",
              transition: "color 0.2s ease",
            }}
          >
            {link.label}
          </a>
        ))}
        <div style={{ marginTop: 20 }}>
          <a
            href={ctaHref}
            target={config.calcomLink ? "_blank" : undefined}
            rel={config.calcomLink ? "noopener noreferrer" : undefined}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 24px",
              borderRadius: 8,
              backgroundColor: "var(--accent)",
              color: "white",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Book a call
          </a>
        </div>
      </div>
    </>
  );
}
