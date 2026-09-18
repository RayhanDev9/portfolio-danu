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
    bg: `${BG}/bg-1.jpg`,
    description:
      "Mister Klinner is a household products brand that offers practical and essential products for everyday home use. Its product range includes food wrapping solutions, plastic gloves, trash bags, dishwashing products, and other household essentials. The brand focuses on convenience, cleanliness, hygiene, and making everyday household activities easier.",
  },
  cleaning: {
    title: "Design",
    badge: "Focus on household cleaning activities.",
    bg: `${BG}/bg-2.jpg`,
    cards: [
      {
        id: 1,
        title: "Cleaning Date di Rumah",
        image: `${CLEANING}/Cleaning Date di Rumah.png`,
      },
      {
        id: 2,
        title: "Clean Cooking Routine",
        image: `${CLEANING}/clean cooking routin.png`,
      },
      {
        id: 3,
        title: "Kenapa Talenan Perlu Dicuci Meskipun Cuma Memotong Sayur?",
        image: `${CLEANING}/Kenapa talenan perlu dicuci meskipun cuma dipakai memotong sayur.png`,
      },
      {
        id: 4,
        title: "Moms and Super Team di Dapur",
        image: `${CLEANING}/Moms and Super Team di Dapur.png`,
      },
      {
        id: 5,
        title: "Sunday Reset: Memulai Minggu Baru dengan Space yang Bersih",
        image: `${CLEANING}/Sunday Reset.png`,
      },
      {
        id: 6,
        title: "Smart Home Juga Butuh Smart Cleaning Tools",
        image: `${CLEANING}/Smart Home Juga Butuh.png`,
      },
      {
        id: 7,
        title: "Rumah Nyaman Berawal dari Kebiasaan Sederhana",
        image: `${CLEANING}/Rumah Nyaman Berawal dari Kebiasaan Sederhana.png`,
      },
      {
        id: 8,
        title: "Jadi Dewasa Passwordnya?",
        image: `${CLEANING}/Jadi dewasa passwordnya.png`,
      },
    ],
  },
  gardening: {
    title: "Design",
    badge: "Focus on plants and gardening activities.",
    bg: `${BG}/bg-3.jpg`,
    cards: [
      {
        id: 1,
        title: "Pilih Warna Sayuran Favoritmu",
        image: `${GARDENING}/Pilih Warna Sayuran Favoritmu.png`,
      },
      {
        id: 2,
        title: "Gardening Starter Pack",
        image: `${GARDENING}/gardening starter pack.png`,
      },
      {
        id: 3,
        title: "Fresh from Garden, Ready for the Table",
        image: `${GARDENING}/fresh from garden.png`,
      },
      {
        id: 4,
        title: "Mau Mulai Berkebun?",
        image: `${GARDENING}/mau mulai berkebun.png`,
      },
    ],
  },
  fitness: {
    title: "Design",
    badge: "Focus on exercise, and fitness activities.",
    bg: `${BG}/bg-4.jpg`,
    cards: [
      {
        id: 1,
        title: "Quick Clean After Sweat Session",
        image: `${CLEANING}/Cleaning Date di Rumah.png`,
      },
      {
        id: 2,
        title: "Wellness Bukan Cuma Soal Olahraga",
        image: `${CLEANING}/Sunday Reset.png`,
      },
      {
        id: 3,
        title: "Protein Shake Sudah Habis?",
        image: `${FITNESS}/Protein shake sudah habis.png`,
      },
      {
        id: 4,
        title: "Tebak Kalori: Kukus vs Goreng",
        image: `${CLEANING}/clean cooking routin.png`,
      },
    ],
  },
};
