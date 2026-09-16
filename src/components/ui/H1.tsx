import type { ReactNode } from "react";

interface H1Props {
  className?: string;
  children: ReactNode;
}

export default function H1({ className = "", children }: H1Props) {
  const defaultStyle =
    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight";

  return <h1 className={`${defaultStyle} ${className}`.trim()}>{children}</h1>;
}
