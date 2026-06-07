"use client";

import { useState } from "react";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export default function Chip({ children, className = "" }: ChipProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium cursor-default transition-all duration-200 ${className}`}
      style={{
        color: hovered ? "var(--accent-bright)" : "var(--text-2)",
        backgroundColor: "var(--surface-2)",
        border: `1px solid ${hovered ? "var(--accent-line)" : "var(--line)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}
