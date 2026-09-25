import type { ContactChannel, SocialLink } from "../types/social";

export const SOCIAL_LINKS = {
  whatsapp: {
    id: "whatsapp",
    label: "WhatsApp",
    value: "0881-0100-69341",
    href: "https://wa.me/62881010069341?text=Hello%20Danu,%20I'm%20interested%20in%20collaborating%20on%20a%20design%20project.",
    badge: "Fast Response",
  },
  email: {
    id: "email",
    label: "Email",
    value: "danusatya9@gmail.com",
    href: "mailto:danusatya9@gmail.com?subject=Design%20Project%20Inquiry",
    badge: "Official Inquiry",
  },
  instagram: {
    id: "instagram",
    label: "Instagram",
    value: "@dnustya_",
    href: "https://instagram.com/dnustya_",
    badge: "Daily Portfolio",
  },
  linkedin: {
    id: "linkedin",
    label: "LinkedIn",
    value: "Danu Satya",
    href: "https://www.linkedin.com/in/danu-satya",
    badge: "Professional Profile",
  },
} as const satisfies Record<string, SocialLink>;

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    ...SOCIAL_LINKS.whatsapp,
    name: "WhatsApp",
    label: "Fast Response (Direct Chat)",
    badge: "Online • < 15 Mins",
    bgColor: "bg-[#24d058] hover:bg-[#1fb84d]",
    textColor: "text-white",
    iconType: "whatsapp",
    isCopyable: true,
  },
  {
    ...SOCIAL_LINKS.email,
    name: "Official Email",
    label: "Send Project Brief / Inquiry",
    badge: "Response < 24 Hours",
    bgColor: "bg-white hover:bg-slate-100",
    textColor: "text-slate-900",
    iconType: "email",
    isCopyable: true,
  },
  {
    ...SOCIAL_LINKS.instagram,
    name: "Instagram",
    label: "Direct Message & Portfolio",
    badge: "Daily Active",
    bgColor:
      "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95",
    textColor: "text-white",
    iconType: "instagram",
    isCopyable: true,
  },
  {
    ...SOCIAL_LINKS.linkedin,
    name: "LinkedIn",
    label: "Professional Profile",
    badge: "Connect",
    bgColor: "bg-[#0077b5] hover:bg-[#00669c]",
    textColor: "text-white",
    iconType: "linkedin",
    isCopyable: true,
  },
];
