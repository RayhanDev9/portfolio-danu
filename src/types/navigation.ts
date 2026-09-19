import type { ComponentType } from "react";

export interface NavLinkItem {
  label: string;
  href: string;
  exact?: boolean;
}

export interface DesignSubLinkItem {
  label: string;
  description: string;
  href: string;
  icon?: ComponentType<{ className?: string }>;
}
