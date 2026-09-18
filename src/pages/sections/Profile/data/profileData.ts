const BASE = import.meta.env.BASE_URL;

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: "lightbulb" | "target" | "palette";
}

// 1. Data Personal Danu
export const PERSONAL_INFO = {
  name: "Danu Rayhan",
  tagline: "Graphic Designer & Creative Visual Specialist",
  about:
    "Saya adalah seorang Graphic Designer dan Motion Graphic Enthusiast yang berfokus pada pembuatan identitas visual yang kuat, konten media sosial yang berdampak, dan desain berorientasi pada cerita (story-driven design). Dengan pengalaman menangani berbagai brand dari skala lokal hingga nasional, saya selalu memadukan estetika modern dengan strategi komunikasi visual yang relevan bagi audiens.",
  location: "Jawa Timur, Indonesia",
  experienceYears: "5+ Tahun",
  avatar: `${BASE}img/profile/danu.png`,
  formalAvatar: `${BASE}img/profile/danu-jas.png`,
};

// 2. Data Statistik Karir
export const PROFILE_STATS: StatItem[] = [
  {
    id: "stat-1",
    value: "5+",
    label: "Tahun Pengalaman",
    sublabel: "Di industri kreatif & desain",
  },
  {
    id: "stat-2",
    value: "50+",
    label: "Proyek Selesai",
    sublabel: "Feed, poster, branding & motion",
  },
  {
    id: "stat-3",
    value: "15+",
    label: "Brand Partner",
    sublabel: "Kolaborasi agensi & UMKM",
  },
  {
    id: "stat-4",
    value: "100%",
    label: "On-Time Delivery",
    sublabel: "Dedikasi & kualitas terbaik",
  },
];

// 3. Software Proficiency
export const SOFTWARE_SKILLS: SkillItem[] = [
  {
    name: "Adobe Photoshop",
    level: 95,
    icon: `${BASE}img/tools-skills/ps.png`,
    description: "Photo manipulation, social media feed, & composite editing.",
  },
  {
    name: "Adobe Illustrator",
    level: 90,
    icon: `${BASE}img/tools-skills/ai.png`,
    description: "Vector illustration, logo branding, & vector assets.",
  },
  {
    name: "Adobe Premiere Pro",
    level: 85,
    icon: `${BASE}img/tools-skills/pr.png`,
    description: "Video editing, color grading, & pacing storytelling.",
  },
  {
    name: "Adobe After Effects",
    level: 80,
    icon: `${BASE}img/tools-skills/ae.png`,
    description: "Motion graphics, title animation, & visual effects.",
  },
  {
    name: "Canva Pro",
    level: 92,
    icon: `${BASE}img/tools-skills/canva.png`,
    description: "Rapid social media templates & collaborative client designs.",
  },
];

// 4. Kategori Keahlian Desain (Chips)
export const CORE_CAPABILITIES = [
  "Social Media Feed & Carousel Design",
  "Visual Branding & Identity Guidelines",
  "Motion Graphics & Micro-Animations",
  "Event & Promotional Posters",
  "Packaging & Merchandise Design",
  "Creative Direction & Concept Development",
];

// 5. Nilai & Prinsip Kerja
export const PROFILE_VALUES: ValueItem[] = [
  {
    id: "val-1",
    title: "Story-Driven Concept",
    description:
      "Desain bukan hanya tentang tampilan visual, tetapi bagaimana menyampaikan pesan dan cerita yang menyentuh emosi audiens.",
    icon: "lightbulb",
  },
  {
    id: "val-2",
    title: "Audience-Centric Approach",
    description:
      "Menyesuaikan gaya visual, tone-of-voice, dan tipografi agar tepat sasaran sesuai demografi audiens brand klien.",
    icon: "target",
  },
  {
    id: "val-3",
    title: "Precision & Visual Excellence",
    description:
      "Perhatian mendalam pada detail, hierarchy, balance warna, serta finishing yang rapi dan memukau.",
    icon: "palette",
  },
];
