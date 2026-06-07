import React from "react";

type ButtonBase = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

type AsButton = ButtonBase &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type AsAnchor = ButtonBase &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = AsButton | AsAnchor;

const base =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium font-body transition-all duration-200 cursor-pointer select-none";

const variants = {
  primary:
    "text-white hover:opacity-90 active:scale-[0.98]",
  secondary:
    "border text-[var(--text-2)] hover:text-[var(--text)] active:scale-[0.98]",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  as: Tag,
  ...rest
}: ButtonProps) {
  const primaryStyle =
    variant === "primary"
      ? { backgroundColor: "var(--accent)" }
      : { borderColor: "var(--line-strong)" };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (Tag === "a") {
    return (
      <a
        className={cls}
        style={primaryStyle}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      style={primaryStyle}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
