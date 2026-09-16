import type { ReactNode } from "react";

export interface SpanProps {
  children: ReactNode;
  className?: string;
}

export default function Span({ children, className = "" }: SpanProps) {
  return <span className={className.trim()}>{children}</span>;
}