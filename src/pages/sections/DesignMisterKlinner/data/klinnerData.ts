const BASE = import.meta.env.BASE_URL;
const DIR = `${BASE}img/desain-mr-klinner`;
const BG = `${DIR}/bg`;
const CLEANING = `${DIR}/design-focus-on-household-cleaning-activitites`;
const GARDENING = `${DIR}/design-focus-on-and-gardening-activities`;
const FITNESS = `${DIR}/design-focus-on-exercise-and fitness-activities`;

export const klinnerData = {
  hero: {
    titleBlue: "Mister",
    titleRed: "Klinner",
    bg: `${BG}/bg-1.avif`,
    description:
      "Mister Klinner is a household products brand that offers practical and essential products for everyday home use. Its product range includes food wrapping solutions, plastic gloves, trash bags, dishwashing products, and other household essentials. The brand focuses on convenience, cleanliness, hygiene, and making everyday household activities easier.",
  },
  cleaning: {
    title: "Design",
    badge: "Focus on household cleaning activities.",
    bg: `${BG}/bg-2.avif`,
    cards: [
      {
        id: 1,
        title: "Cleaning Date di Rumah",
        image: `${CLEANING}/Cleaning Date di Rumah.avif`,
      },
      {
        id: 2,
        title: "Clean Cooking Routine",
        image: `${CLEANING}/clean cooking routin.avif`,
      },
      {
        id: 3,
        title: "Kenapa Talenan Perlu Dicuci Meskipun Cuma Memotong Sayur?",
        image: `${CLEANING}/Kenapa talenan perlu dicuci meskipun cuma dipakai memotong sayur.avif`,
      },
      {
        id: 4,
        title: "Moms and Super Team di Dapur",
        image: `${CLEANING}/Moms and Super Team di Dapur.avif`,
      },
      {
        id: 5,
        title: "Sunday Reset: Memulai Minggu Baru dengan Space yang Bersih",
        image: `${CLEANING}/Sunday Reset.avif`,
      },
      {
        id: 6,
        title: "Smart Home Juga Butuh Smart Cleaning Tools",
        image: `${CLEANING}/Smart Home Juga Butuh.avif`,
      },
      {
        id: 7,
        title: "Rumah Nyaman Berawal dari Kebiasaan Sederhana",
        image: `${CLEANING}/Rumah Nyaman Berawal dari Kebiasaan Sederhana.avif`,
      },
      {
        id: 8,
        title: "Jadi Dewasa Passwordnya?",
        image: `${CLEANING}/Jadi dewasa passwordnya.avif`,
      },
    ],
  },
  gardening: {
    title: "Design",
    badge: "Focus on plants and gardening activities.",
    bg: `${BG}/bg-3.avif`,
    cards: [
      {
        id: 1,
        title: "Pilih Warna Sayuran Favoritmu",
        image: `${GARDENING}/Pilih Warna Sayuran Favoritmu.avif`,
      },
      {
        id: 2,
        title: "Gardening Starter Pack",
        image: `${GARDENING}/gardening starter pack.avif`,
      },
      {
        id: 3,
        title: "Fresh from Garden, Ready for the Table",
        image: `${GARDENING}/fresh from garden.avif`,
      },
      {
        id: 4,
        title: "Mau Mulai Berkebun?",
        image: `${GARDENING}/mau mulai berkebun.avif`,
      },
    ],
  },
  fitness: {
    title: "Design",
    badge: "Focus on exercise, and fitness activities.",
    bg: `${BG}/bg-4.avif`,
    cards: [
      {
        id: 1,
        title: "Quick Clean After Sweat Session",
        image: `${CLEANING}/Cleaning Date di Rumah.avif`,
      },
      {
        id: 2,
        title: "Wellness Bukan Cuma Soal Olahraga",
        image: `${CLEANING}/Sunday Reset.avif`,
      },
      {
        id: 3,
        title: "Protein Shake Sudah Habis?",
        image: `${FITNESS}/Protein shake sudah habis.avif`,
      },
      {
        id: 4,
        title: "Tebak Kalori: Kukus vs Goreng",
        image: `${CLEANING}/clean cooking routin.avif`,
      },
    ],
  },
};
