import type { HTMLAttributes, ReactNode } from "react";

export interface MainContentProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  withNavbarOffset?: boolean;
}


export default function MainContent({
  children,
  className = "",
  withNavbarOffset = true,
  ...props
}: MainContentProps) {
  // 1. min-h-screen agar footer selalu berada di bawah meski konten sedikit
  // 2. flex flex-col agar section di dalamnya tersusun rapi secara vertikal
  // 3. pt-16 / pt-20 untuk memberi ruang jika kamu memakai fixed/sticky navbar
  const baseStyle =
    "min-h-screen w-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300";

  const navbarOffsetStyle = withNavbarOffset ? "pt-16 sm:pt-20" : "";

  return (
    <main
      className={`${baseStyle} ${navbarOffsetStyle} ${className}`.trim()}
      {...props}
    >
      {children}
    </main>
  );
}