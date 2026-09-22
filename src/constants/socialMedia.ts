import type { ContactChannel, SocialLink } from "../types/social";

export const SOCIAL_LINKS = {
  whatsapp: {
    id: "whatsapp",
    label: "WhatsApp",
    value: "0881-0100-69341",
    href: "https://wa.me/62881010069341?text=Halo%20Danu,%20saya%20tertarik%20bekerja%20sama%20untuk%20proyek%20desain.",
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
    label: "Fast Response (Chat Langsung)",
    badge: "Online • < 15 Menit",
    bgColor: "bg-[#24d058] hover:bg-[#1fb84d]",
    textColor: "text-white",
    iconType: "whatsapp",
    isCopyable: true,
  },
  {
    ...SOCIAL_LINKS.email,
    name: "Email Resmi",
    label: "Kirim Brief Proyek / Penawaran",
    badge: "Respon < 24 Jam",
    bgColor: "bg-white hover:bg-slate-100",
    textColor: "text-slate-900",
    iconType: "email",
    isCopyable: true,
  },
  {
    ...SOCIAL_LINKS.instagram,
    name: "Instagram",
    label: "Direct Message & Portofolio",
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
