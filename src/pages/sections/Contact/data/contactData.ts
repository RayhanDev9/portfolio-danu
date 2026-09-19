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
  "Simpale Motion Graphic",
  "Poster Design",
  "Full-time / Contract Hiring",
  "Lainnya",
];

// 3. Data FAQ
export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "Berapa lama estimasi waktu pengerjaan desain?",
    answer:
      "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk desain feed sosial media atau poster biasanya 1-2 jam. Untuk branding komprehensif atau motion graphic membutuhkan 1 hari kerja.",
  },
  {
    id: "faq-2",
    question: "Bagaimana proses alur kerja dan revisi?",
    answer:
      "Proses diawali dengan diskusi brief & referensi, dilanjutkan pembuatan konsep awal (draft), proses revisi (standar 2-3 kali revisi minor), hingga penyerahan file final kualitas tinggi.",
  },
  {
    id: "faq-3",
    question: "Format file apa saja yang akan saya dapatkan?",
    answer:
      "Anda akan menerima file siap pakai (JPG/PNG resolusi tinggi, PDF cetak) serta file master/source (AI, PSD, atau Canva sesuai kesepakatan awal).",
  },
];

export const PROFILE_INFO = {
  name: "Danu Satya",
  role: "Graphic Designer & Creative Director",
  location: "Rangkasbitung, Indonesia (Open to Remote)",
  status: "Available for Freelance & Full-Time Projects",
  avatar: getAssetUrl("img/profile/danu-duduk.avif"),
};
