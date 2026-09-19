const BASE = import.meta.env.BASE_URL;

export interface ContactChannel {
  id: string;
  name: string;
  label: string;
  value: string;
  href: string;
  badge: string;
  bgColor: string;
  textColor: string;
  iconType: "whatsapp" | "email" | "instagram" | "linkedin";
  isCopyable?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// 1. Data Channel Kontak
export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    label: "Fast Response (Chat Langsung)",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890?text=Halo%20Danu,%20saya%20tertarik%20bekerja%20sama%20untuk%20proyek%20desain.",
    badge: "Online • < 15 Menit",
    bgColor: "bg-[#24d058] hover:bg-[#1fb84d]",
    textColor: "text-white",
    iconType: "whatsapp",
  },
  {
    id: "email",
    name: "Email Resmi",
    label: "Kirim Brief Proyek / Penawaran",
    value: "danu.creative@gmail.com",
    href: "mailto:danu.creative@gmail.com?subject=Inquiry%20Project%20Desain",
    badge: "Respon < 24 Jam",
    bgColor: "bg-white hover:bg-slate-100",
    textColor: "text-slate-900",
    iconType: "email",
    isCopyable: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    label: "Direct Message & Portofolio",
    value: "@danurayhan",
    href: "https://instagram.com",
    badge: "Daily Active",
    bgColor:
      "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95",
    textColor: "text-white",
    iconType: "instagram",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    label: "Professional Profile",
    value: "Danu Rayhan",
    href: "https://linkedin.com",
    badge: "Connect",
    bgColor: "bg-[#0077b5] hover:bg-[#00669c]",
    textColor: "text-white",
    iconType: "linkedin",
  },
];

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
  name: "Danu Rayhan",
  role: "Graphic Designer & Creative Director",
  location: "Rangkasbitung, Indonesia (Open to Remote)",
  status: "Available for Freelance & Full-Time Projects",
  avatar: `${BASE}img/profile/danu-duduk.png`,
};
