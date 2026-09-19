const BASE = import.meta.env.BASE_URL;

export interface MotionItem {
  id: string;
  title: string;
  subtitle?: string;
  videoUrl: string;
  poster?: string;
  aspectRatio: "9:16" | "1:1" | "4:5";
  brand: "astra" | "mister-klinner";
  highlightBorder?: boolean;
}

// 1. Data Video Mockup HP Astra Otoshop (5 HP Baris Atas)
export const ASTRA_SMARTPHONES: MotionItem[] = [
  {
    id: "astra-hp-1",
    title: "Tebak Di Mana Letak Velg Ultix",
    subtitle: "Interactive Story Game",
    videoUrl: `${BASE}vidio/motion/general/revisi giveaway ticket1.mp4`,
    aspectRatio: "9:16",
    brand: "astra",
  },
  {
    id: "astra-hp-2",
    title: "3 Hari Lagi",
    subtitle: "Countdown Promo Video",
    videoUrl: `${BASE}vidio/motion/general/revisi panggilan untuk otosob!!.mp4`,
    aspectRatio: "9:16",
    brand: "astra",
  },
  {
    id: "astra-hp-3",
    title: "Panggilan Untuk Otosob",
    subtitle: "Brand Anthem Motion",
    videoUrl: `${BASE}vidio/motion/general/revisi panggilan untuk otosob!!.mp4`,
    aspectRatio: "9:16",
    brand: "astra",
  },
  {
    id: "astra-hp-4",
    title: "Kenaikan Yesus Kristus / Waisak",
    subtitle: "Holiday Celebration Motion",
    videoUrl: `${BASE}vidio/motion/general/kenaikan yesus al masih_1.mp4`,
    aspectRatio: "9:16",
    brand: "astra",
  },
  {
    id: "astra-hp-5",
    title: "Hari Kesaktian Pancasila",
    subtitle: "National Day Greeting",
    videoUrl: `${BASE}vidio/motion/general/greetings pancasila.mp4`,
    aspectRatio: "9:16",
    brand: "astra",
  },
];

// 2. Data Video Feed Balap Motor Astra Otoshop (4 Feed Bawah)
export const ASTRA_FEED_CARDS: MotionItem[] = [
  {
    id: "astra-feed-1",
    title: "Udah Siap Belum...",
    subtitle: "Teaser GIIAS 2026",
    videoUrl: `${BASE}vidio/motion/carousel motion/1.mp4`,
    aspectRatio: "1:1",
    brand: "astra",
  },
  {
    id: "astra-feed-2",
    title: "Astra Otoshop mmmmm...",
    subtitle: "Transition Motion Reel",
    videoUrl: `${BASE}vidio/motion/carousel motion/2.mp4`,
    aspectRatio: "1:1",
    brand: "astra",
  },
  {
    id: "astra-feed-3",
    title: "mmmmmmmmmm...",
    subtitle: "Highlighted Speed Motion",
    videoUrl: `${BASE}vidio/motion/carousel motion/3.mp4`,
    aspectRatio: "1:1",
    brand: "astra",
    highlightBorder: true,
  },
  {
    id: "astra-feed-4",
    title: "5 Hari Lagi Di GIIAS 2026",
    subtitle: "Countdown Final Post",
    videoUrl: `${BASE}vidio/motion/carousel motion/4.mp4`,
    poster: `${BASE}vidio/motion/carousel motion/4.avif`,
    aspectRatio: "1:1",
    brand: "astra",
  },
];

// 3. Data Video Mister Klinner (7 HP: 4 Atas + 3 Tengah)
export const MISTER_KLINNER_ITEMS: MotionItem[] = [
  // Baris Atas (4 HP)
  {
    id: "mk-1",
    title: "Celestial Light Greeting",
    subtitle: "Special Edition Motion",
    videoUrl: `${BASE}vidio/motion/mr-klinner/greetings mr kinnerl_1.mp4`,
    aspectRatio: "9:16",
    brand: "mister-klinner",
  },
  {
    id: "mk-2",
    title: "Selamat Memperingati Maulid Nabi",
    subtitle: "Religious Greeting Reel",
    videoUrl: `${BASE}vidio/motion/mr-klinner/maulid nabi.mp4`,
    aspectRatio: "9:16",
    brand: "mister-klinner",
  },
  {
    id: "mk-3",
    title: "Greetings 17 Agustus",
    subtitle: "Independence Day Motion",
    videoUrl: `${BASE}vidio/motion/mr-klinner/greetings 17 agustus.mp4`,
    aspectRatio: "9:16",
    brand: "mister-klinner",
  },
  {
    id: "mk-4",
    title: "Menutup Hari Dengan Dapur Bersih",
    subtitle: "Household Cleaning Routine",
    videoUrl: `${BASE}vidio/motion/mr-klinner/menutup hari dengan dapur bersih.mp4`,
    aspectRatio: "9:16",
    brand: "mister-klinner",
  },
  // Baris Tengah (3 HP)
  {
    id: "mk-5",
    title: "Merdeka Dari Dapur Yang Berantakan",
    subtitle: "Clean Kitchen Story Reel",
    videoUrl: `${BASE}vidio/motion/mr-klinner/merdeka dari dapur yang berantakan.mp4`,
    aspectRatio: "9:16",
    brand: "mister-klinner",
  },
  {
    id: "mk-6",
    title: "A Peaceful Start to the Day",
    subtitle: "Morning Lifestyle & Plants",
    videoUrl: `${BASE}vidio/motion/mr-klinner/a peaceful start revvisi.mp4`,
    aspectRatio: "9:16",
    brand: "mister-klinner",
  },
  {
    id: "mk-7",
    title: "Meski Setiap Hari Sibuk Beraktivitas",
    subtitle: "Daily Lifestyle Routine",
    videoUrl: `${BASE}vidio/motion/mr-klinner/meski cape pulang kerja.mp4`,
    aspectRatio: "9:16",
    brand: "mister-klinner",
  },
];
