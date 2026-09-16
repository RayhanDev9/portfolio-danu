import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export type SocialVariant = "whatsapp" | "instagram" | "gmail" | "custom";

export interface SocialButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: SocialVariant;
  className?: string;
  href: string;
}

export default function SocialButton({
  children,
  variant = "whatsapp",
  className = "",
  href,
  ...props
}: SocialButtonProps) {
  const variantStyles: Record<SocialVariant, string> = {
    whatsapp: "bg-[#25d366] text-white hover:bg-[#20bd5a]",
    instagram:
      "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-95",
    gmail: "bg-white text-slate-900 hover:bg-slate-100",
    custom: "",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between px-6 py-4 rounded-2xl font-semibold text-lg shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight className="w-5 h-5 shrink-0" />
    </a>
  );
}
