import type { ReactNode } from "react";

interface ParagraphProps {
  className?: string;
  children: ReactNode;
}

export default function Paragraph({
  className = "",
  children,
}: ParagraphProps) {
  const defaultStyle =
    "text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed";

  return <p className={`${defaultStyle} ${className}`.trim()}>{children}</p>;
}
