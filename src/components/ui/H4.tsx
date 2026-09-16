import type { ReactNode } from "react";

interface H4Props {
  className?: string;
  children: ReactNode;
}

export default function H4({ className = "", children }: H4Props) {
  // text-base  -> Mobile (HP)
  // sm:text-lg  -> Layar sedang / Tablet
  // md:text-xl  -> Laptop / Desktop
  const defaultStyle =
    "text-base sm:text-lg md:text-xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 leading-snug";

  return <h4 className={`${defaultStyle} ${className}`.trim()}>{children}</h4>;
}
