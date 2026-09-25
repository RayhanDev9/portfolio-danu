import { CONTACT_CHANNELS } from "../../../../constants/socialMedia";
import type { ContactChannel } from "../../../../types/social";
import { getAssetUrl } from "../../../../utils/asset";

export type { ContactChannel };
export { CONTACT_CHANNELS };

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// 2. Kategori Layanan untuk Form
export const SERVICE_CATEGORIES = [
  "Graphic Design & Social Media Feed",
  "Branding & Visual Identity",
  "Simple Motion Graphic",
  "Poster Design",
  "Full-time / Contract Hiring",
  "Other",
];

// 3. Data FAQ
export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the estimated turnaround time for a design project?",
    answer:
      "Turnaround time varies depending on project complexity. Social media feeds or poster designs usually take 1-2 hours. Comprehensive branding or motion graphics require about 1 business day.",
  },
  {
    id: "faq-2",
    question: "How does the workflow and revision process work?",
    answer:
      "The process starts with a brief & reference discussion, followed by initial concept drafts, revision rounds (standard 2-3 minor revisions), and final high-quality file delivery.",
  },
  {
    id: "faq-3",
    question: "What file formats will I receive?",
    answer:
      "You will receive ready-to-use files (high-resolution JPG/PNG, print-ready PDF) as well as master/source files (AI, PSD, or Canva as agreed upon).",
  },
];

export const PROFILE_INFO = {
  name: "Danu Satya",
  role: "Graphic Designer & Creative Director",
  location: "Rangkasbitung, Indonesia (Open to Remote)",
  status: "Available for Freelance & Full-Time Projects",
  avatar: getAssetUrl("img/profile/danu-duduk.avif"),
};
