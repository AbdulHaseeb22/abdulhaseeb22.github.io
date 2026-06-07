interface EyebrowLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function EyebrowLabel({ children, className = "" }: EyebrowLabelProps) {
  return (
    <span
      className={`font-mono text-xs font-medium uppercase tracking-widest ${className}`}
      style={{ color: "var(--accent)" }}
    >
      {children}
    </span>
  );
}
