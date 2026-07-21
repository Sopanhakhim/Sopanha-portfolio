import type { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  className?: string;
}

export default function Highlight({
  children,
  className = "",
}: HighlightProps) {
  return (
    <span
      className={`font-semibold tracking-tight text-cyan-300 ${className}`}
    >
      {children}
    </span>
  );
}