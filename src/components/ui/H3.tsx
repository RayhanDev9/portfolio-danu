import type { ReactNode } from "react";

interface H3Props {
  children: ReactNode;
  className?: string;
}

export default function H3({ children, className = "" }: H3Props) {
  // text-lg   -> Mobile (HP)
  // sm:text-xl  -> Tablet
  // md:text-2xl -> Desktop
  const defaultStyle =
    "text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-slate-900 dark:text-white leading-snug";

  return <h3 className={`${defaultStyle} ${className}`.trim()}>{children}</h3>;
}
