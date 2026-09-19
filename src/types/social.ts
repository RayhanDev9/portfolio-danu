export type SocialPlatform = "whatsapp" | "email" | "instagram" | "linkedin";

export interface SocialLink {
  id: SocialPlatform;
  label: string;
  value: string;
  href: string;
  badge?: string;
}

export interface ContactChannel extends SocialLink {
  name: string;
  bgColor: string;
  textColor: string;
  iconType: SocialPlatform;
  isCopyable?: boolean;
}
