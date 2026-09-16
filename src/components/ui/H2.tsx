import type { ReactNode } from "react";

interface H2Props {
  children: ReactNode;
  className?: string;
}

export default function H2({ children, className = "" }: H2Props) {
  // text-xl   -> Mobile (HP)
  // sm:text-2xl -> Layar sedang / Tablet
  // md:text-3xl -> Laptop kecil
  // lg:text-4xl -> Desktop
  const defaultStyle =
    "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug";

  return <h2 className={`${defaultStyle} ${className}`.trim()}>{children}</h2>;
}
