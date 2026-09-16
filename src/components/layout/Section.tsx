import type { HTMLAttributes, ReactNode } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({
  children,
  id,
  className = "",
  ...props
}: SectionProps) {
  // py-16 di layar mobile, py-24 di layar laptop/desktop untuk ritme spasi vertikal yang lega
  const baseStyle = "w-full py-16 md:py-24 relative";

  return (
    <section id={id} className={`${baseStyle} ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}