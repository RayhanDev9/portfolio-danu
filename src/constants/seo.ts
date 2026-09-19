export interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogType?: "website" | "profile" | "article";
}

export const SEO_BASE_URL = "https://rayhandev9.github.io/portfolio-danu";

export const DEFAULT_SEO: PageSEOConfig = {
  title: "Danu Satya | Graphic & Motion Designer Portfolio",
  description:
    "Website portofolio resmi Danu Satya — Graphic Designer & Motion Graphic Specialist asal Indonesia. Berpengalaman dalam visual branding, feeds sosial media, dan motion story.",
  keywords:
    "Danu Satya, Graphic Designer Indonesia, Motion Designer, Visual Branding, Social Media Designer, Portofolio Desain Grafis, UI Graphic, Desain Poster, Motion Graphic Artist",
  canonicalPath: "/",
  ogType: "website",
};

export const ROUTE_SEO_CONFIGS: Record<string, PageSEOConfig> = {
  "/": {
    title: "Home | Danu Satya - Graphic & Motion Designer",
    description:
      "Selamat datang di portofolio kreatif Danu Satya. Jelajahi karya terbaik dalam desain grafis, visual branding, dan motion graphic dinamis.",
    keywords:
      "Danu Satya, Graphic Designer, Motion Graphics, Visual Identity, Creative Portfolio, Designer Rangkasbitung, Desain Grafis Indonesia",
    canonicalPath: "/",
    ogType: "website",
  },
  "/experience": {
    title: "Experience | Danu Satya",
    description:
      "Riwayat perjalanan karier dan pengalaman profesional Danu Satya dalam menangani proyek branding, periklanan, perhotelan, dan motion graphic.",
    keywords:
      "Danu Satya Experience, Pengalaman Desainer Grafis, Track Record Desain, Portofolio Kerja Danu Satya",
    canonicalPath: "/experience",
    ogType: "profile",
  },
  "/graphic-design/majlis": {
    title: "Majlis Ta'lim - Graphic Design | Danu Satya",
    description:
      "Studi kasus identitas visual, branding sertifikat, dan materi promosi acara dakwah untuk komunitas Majlis Ta'lim Roudotul Janah oleh Danu Satya.",
    keywords:
      "Desain Majlis Ta'lim, Sertifikat Islami, Desain Brosur Dakwah, Islamic Community Branding, Danu Satya Graphic Design",
    canonicalPath: "/graphic-design/majlis",
    ogType: "article",
  },
  "/graphic-design/horison": {
    title: "Horison Altama - Graphic Design | Danu Satya",
    description:
      "Desain promosi perhotelan & hospitality Horison Altama Pandeglang — Social media feed, standing banner, dan materi wedding showcase oleh Danu Satya.",
    keywords:
      "Desain Hotel Horison Altama, Hotel Branding, Hospitality Promotional Design, Standing Banner Hotel, Danu Satya",
    canonicalPath: "/graphic-design/horison",
    ogType: "article",
  },
  "/graphic-design/astraotoshop": {
    title: "Astra Otoshop - Graphic Design | Danu Satya",
    description:
      "Desain e-commerce dan materi promosi suku cadang otomotif resmi Astra Otoshop — Carousel Instagram, promo flash sale, dan banner visual.",
    keywords:
      "Desain Astra Otoshop, Feed Otomotif Instagram, Desain Promo Sparepart, E-commerce Banner Design, Danu Satya",
    canonicalPath: "/graphic-design/astraotoshop",
    ogType: "article",
  },
  "/graphic-design/mister-klinner": {
    title: "Mister Klinner - Graphic Design | Danu Satya",
    description:
      "Visual branding dan materi pemasaran produk pembersih rumah tangga Mister Klinner — Desain kemasan, poster digital, dan feed Instagram.",
    keywords:
      "Mister Klinner Design, Household Cleaning Branding, Desain Kemasan Produk, Poster Iklan, Danu Satya",
    canonicalPath: "/graphic-design/mister-klinner",
    ogType: "article",
  },
  "/graphic-design/geonerations": {
    title: "Geonerations - Graphic Design | Danu Satya",
    description:
      "Konten visual pop culture anak muda dan meme Jawa Timuran untuk platform Geonerations — Desain santai, relatable, dan viral-driven.",
    keywords:
      "Geonerations Design, Pop Culture Content, Meme Desain Grafis, Youth Social Media Feed, Danu Satya",
    canonicalPath: "/graphic-design/geonerations",
    ogType: "article",
  },
  "/graphic-design/via-fabula": {
    title: "Via Fabula - Graphic Design | Danu Satya",
    description:
      "Desain storytelling kreatif dan event visual untuk Via Fabula oleh Danu Satya — Menggabungkan tipografi kuat dan estetika visual modern.",
    keywords:
      "Via Fabula Design, Creative Storytelling, Event Organizer Branding, Visual Story Danu Satya",
    canonicalPath: "/graphic-design/via-fabula",
    ogType: "article",
  },
  "/motion-graphic": {
    title: "Motion Graphic | Danu Satya",
    description:
      "Showcase animasi motion graphics interaktif dan video editing Danu Satya — Title animation, promo video, dan After Effects motion design.",
    keywords:
      "Motion Graphic Danu Satya, Video Animation, After Effects Portfolio, Animasi Iklan, Motion Designer Indonesia",
    canonicalPath: "/motion-graphic",
    ogType: "website",
  },
  "/graphic-motion": {
    title: "Motion Graphic | Danu Satya",
    description:
      "Showcase animasi motion graphics interaktif dan video editing Danu Satya — Title animation, promo video, dan After Effects motion design.",
    keywords:
      "Motion Graphic Danu Satya, Video Animation, After Effects Portfolio, Animasi Iklan, Motion Designer Indonesia",
    canonicalPath: "/motion-graphic",
    ogType: "website",
  },
  "/creative-journey": {
    title: "Brands & Creative Journey | Danu Satya",
    description:
      "Perjalanan eksplorasi brand dan kolaborasi industri kreatif yang telah ditangani oleh Danu Satya dari skala UMKM hingga korporasi.",
    keywords:
      "Creative Journey Danu Satya, Brand Collaboration, Vendor Experience, Portfolio Brands Danu",
    canonicalPath: "/creative-journey",
    ogType: "website",
  },
  "/contact": {
    title: "Contact & Inquiry | Danu Satya",
    description:
      "Hubungi Danu Satya untuk penawaran proyek desain grafis, branding, atau motion graphics. Tersedia melalui WhatsApp (Fast Response) dan Email.",
    keywords:
      "Kontak Danu Satya, Hire Graphic Designer, WhatsApp Danu Satya, Konsultasi Desain Grafis",
    canonicalPath: "/contact",
    ogType: "website",
  },
  "/profile": {
    title: "About Danu Satya | Profile",
    description:
      "Kenali lebih dekat Danu Satya — Graphic Designer & Motion Graphic Enthusiast. Nilai kerja, tools proficiency (Photoshop, Illustrator, After Effects, Canva), dan biografi.",
    keywords:
      "Profil Danu Satya, Tentang Danu Satya, Skill Designer Grafis, Adobe Photoshop Expert, Canva Pro Designer",
    canonicalPath: "/profile",
    ogType: "profile",
  },
};
