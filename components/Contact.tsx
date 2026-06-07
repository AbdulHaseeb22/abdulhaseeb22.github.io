"use client";

import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import { config, personal } from "@/lib/data";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FieldState {
  value: string;
  error: string;
}

function CalEmbed({ calcomLink }: { calcomLink: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "cal-embed-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Cal = (window as any).Cal;
      if (!Cal || !containerRef.current) return;
      Cal("init", calcomLink, { origin: "https://cal.com" });
      Cal.ns[calcomLink]("inline", {
        elementOrSelector: "#cal-embed-container",
        calLink: calcomLink,
      });
    };
    document.head.appendChild(script);
  }, [calcomLink]);

  return (
    <div
      id="cal-embed-container"
      ref={containerRef}
      style={{ minHeight: "500px", width: "100%" }}
    />
  );
}

function ContactForm() {
  const [name, setName] = useState<FieldState>({ value: "", error: "" });
  const [email, setEmail] = useState<FieldState>({ value: "", error: "" });
  const [message, setMessage] = useState<FieldState>({ value: "", error: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const noEndpoint = !config.formspreeEndpoint;

  useEffect(() => {
    if (noEndpoint) {
      console.warn(
        "[Contact] formspreeEndpoint is not set in lib/data.ts. The contact form is disabled."
      );
    }
  }, [noEndpoint]);

  function validate() {
    let valid = true;
    if (!name.value.trim()) {
      setName((s) => ({ ...s, error: "Name is required." }));
      valid = false;
    }
    if (!email.value.trim()) {
      setEmail((s) => ({ ...s, error: "Email is required." }));
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      setEmail((s) => ({ ...s, error: "Please enter a valid email." }));
      valid = false;
    }
    if (!message.value.trim()) {
      setMessage((s) => ({ ...s, error: "Message is required." }));
      valid = false;
    }
    return valid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch(config.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent! I'll get back to you shortly.");
        setName({ value: "", error: "" });
        setEmail({ value: "", error: "" });
        setMessage({ value: "", error: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try emailing me directly.");
    }
  }

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: `1px solid ${hasError ? "rgba(239,68,68,0.6)" : "var(--line-strong)"}`,
    backgroundColor: "var(--surface-2)",
    color: "var(--text)",
    fontSize: "14px",
    fontFamily: "var(--font-inter)",
    outline: "none",
    transition: "border-color 0.2s ease",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "var(--text-2)",
    marginBottom: "6px",
  };

  const errorStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "rgb(239,68,68)",
    marginTop: "4px",
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {noEndpoint && (
        <div
          style={{
            padding: "12px 14px",
            borderRadius: "8px",
            backgroundColor: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.2)",
            fontSize: "13px",
            color: "rgb(239,68,68)",
          }}
        >
          Form disabled — set{" "}
          <code
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "12px",
            }}
          >
            formspreeEndpoint
          </code>{" "}
          in{" "}
          <code
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "12px",
            }}
          >
            lib/data.ts
          </code>
          .
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="contact-name" style={labelStyle}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name.value}
          disabled={noEndpoint || status === "loading"}
          onChange={(e) => setName({ value: e.target.value, error: "" })}
          placeholder="Your name"
          style={inputStyle(!!name.error)}
          onFocus={(e) => {
            if (!name.error) e.target.style.borderColor = "var(--accent-line)";
          }}
          onBlur={(e) => {
            if (!name.error)
              e.target.style.borderColor = "var(--line-strong)";
          }}
        />
        {name.error && <p style={errorStyle}>{name.error}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" style={labelStyle}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email.value}
          disabled={noEndpoint || status === "loading"}
          onChange={(e) => setEmail({ value: e.target.value, error: "" })}
          placeholder="you@example.com"
          style={inputStyle(!!email.error)}
          onFocus={(e) => {
            if (!email.error)
              e.target.style.borderColor = "var(--accent-line)";
          }}
          onBlur={(e) => {
            if (!email.error)
              e.target.style.borderColor = "var(--line-strong)";
          }}
        />
        {email.error && <p style={errorStyle}>{email.error}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="contact-message"
          value={message.value}
          disabled={noEndpoint || status === "loading"}
          onChange={(e) => setMessage({ value: e.target.value, error: "" })}
          placeholder="What's on your mind?"
          rows={5}
          style={{
            ...inputStyle(!!message.error),
            minHeight: "120px",
            resize: "vertical",
          }}
          onFocus={(e) => {
            if (!message.error)
              e.target.style.borderColor = "var(--accent-line)";
          }}
          onBlur={(e) => {
            if (!message.error)
              e.target.style.borderColor = "var(--line-strong)";
          }}
        />
        {message.error && <p style={errorStyle}>{message.error}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={noEndpoint || status === "loading" || status === "success"}
        style={{
          padding: "12px 24px",
          borderRadius: "8px",
          backgroundColor:
            status === "success" ? "rgba(34,197,94,0.15)" : "var(--accent)",
          color: status === "success" ? "rgb(34,197,94)" : "white",
          border:
            status === "success"
              ? "1px solid rgba(34,197,94,0.3)"
              : "none",
          fontSize: "14px",
          fontWeight: 500,
          cursor:
            noEndpoint || status === "loading" || status === "success"
              ? "not-allowed"
              : "pointer",
          opacity:
            noEndpoint || status === "loading" ? 0.6 : 1,
          transition: "all 0.2s ease",
          alignSelf: "flex-start",
        }}
      >
        {status === "loading"
          ? "Sending…"
          : status === "success"
          ? "Sent ✓"
          : "Send message"}
      </button>

      {/* Status */}
      {(status === "success" || status === "error") && (
        <p
          role="status"
          aria-live="polite"
          style={{
            fontSize: "14px",
            color:
              status === "success" ? "rgb(34,197,94)" : "rgb(239,68,68)",
          }}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}

function BookingPanel() {
  if (config.calcomLink) {
    return <CalEmbed calcomLink={config.calcomLink} />;
  }

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 rounded-xl p-10 text-center h-full"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--line)",
        minHeight: "280px",
      }}
    >
      <div
        className="flex items-center justify-center w-14 h-14 rounded-xl"
        style={{
          backgroundColor: "var(--accent-soft)",
          color: "var(--accent)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <p
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "16px",
            fontWeight: 600,
            color: "var(--text)",
          }}
        >
          Schedule a call
        </p>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
          Set your Cal.com link in{" "}
          <code
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "12px",
              color: "var(--accent-bright)",
            }}
          >
            lib/data.ts
          </code>{" "}
          to enable inline booking.
        </p>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center justify-center mt-2 px-4 py-2 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: "var(--accent)", color: "white" }}
        >
          Email me instead
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBlock: "96px" }}>
      <div className="container">
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-3 mb-12">
            <EyebrowLabel>Contact</EyebrowLabel>
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
              Let&apos;s work together
            </h2>
          </div>
        </ScrollReveal>

        {/* Two panels */}
        <div className="grid grid-cols-1 desk:grid-cols-2 gap-8 desk:gap-12 items-start">
          {/* Left — form */}
          <ScrollReveal delay={1}>
            <div className="flex flex-col gap-6">
              <p style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.7 }}>
                Have a project in mind or want to discuss an opportunity? Drop me
                a message and I&apos;ll get back to you within a day.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Right — booking */}
          <ScrollReveal delay={2}>
            <BookingPanel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
