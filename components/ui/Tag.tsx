interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium ${className}`}
      style={{
        color: "var(--text-2)",
        backgroundColor: "var(--surface-2)",
        border: "1px solid var(--line)",
      }}
    >
      {children}
    </span>
  );
}
