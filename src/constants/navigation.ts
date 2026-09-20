import {
  BookOpen,
  Building2,
  ShoppingBag,
  Sparkles,
  Flame,
  Layers,
} from "lucide-react";
import type { NavLinkItem, DesignSubLinkItem } from "../types/navigation";

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/", exact: true },
  { label: "Experience", href: "/experience" },
  { label: "Motion Graphic", href: "/motion-graphic" },
  { label: "Brands", href: "/creative-journey" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Graphic Design", href: "/graphic-design/majlis" },
  { label: "Motion Graphic", href: "/motion-graphic" },
  { label: "Brands & Journey", href: "/creative-journey" },
  { label: "Profile", href: "/profile" },
  { label: "Contact", href: "/contact" },
];

export const DESIGN_SUB_LINKS: DesignSubLinkItem[] = [
  {
    label: "Majlis Ta'lim",
    description: "Islamic community branding & event materials",
    href: "/graphic-design/majlis",
    icon: BookOpen,
  },
  {
    label: "Horison Altama",
    description: "Hotel & hospitality promotional branding",
    href: "/graphic-design/horison",
    icon: Building2,
  },
  {
    label: "Astra Otoshop",
    description: "Automotive e-commerce & spare parts promo",
    href: "/graphic-design/astraotoshop",
    icon: ShoppingBag,
  },
  {
    label: "Mister Klinner",
    description: "Household cleaning products & lifestyle",
    href: "/graphic-design/mister-klinner",
    icon: Sparkles,
  },
  {
    label: "Geonerations",
    description: "Youth pop culture & East Javanese meme content",
    href: "/graphic-design/geonerations",
    icon: Flame,
  },
  {
    label: "Via Fabula",
    description: "Creative storytelling & event organizing",
    href: "/graphic-design/via-fabula",
    icon: Layers,
  },
];

export const PAGE_TITLES: Record<string, string> = {
  "/": "Home | Danu Satya - Graphic & Simple Motion Designer",
  "/experience": "Experience | Danu Satya",
  "/graphic-design/majlis": "Majlis Ta'lim - Graphic Design | Danu Satya",
  "/graphic-design/horison": "Horison Altama - Graphic Design | Danu Satya",
  "/graphic-design/astraotoshop": "Astra Otoshop - Graphic Design | Danu Satya",
  "/graphic-design/mister-klinner": "Mister Klinner - Graphic Design | Danu Satya",
  "/graphic-design/geonerations": "Geonerations - Graphic Design | Danu Satya",
  "/graphic-design/via-fabula": "Via Fabula - Graphic Design | Danu Satya",
  "/motion-graphic": "Motion Graphic | Danu Satya",
  "/graphic-motion": "Motion Graphic | Danu Satya",
  "/creative-journey": "Brands & Creative Journey | Danu Satya",
  "/contact": "Contact & Inquiry | Danu Satya",
  "/profile": "About Danu Satya | Profile",
};
