const BASE = import.meta.env.BASE_URL;
const DIR = `${BASE}img/desain-geonerations`;

export const GEONERATIONS_BG = `${DIR}/bg/bg.jpg`;

export interface DesignItem {
  id: string;
  title: string;
  category: "feed" | "carousel-tato" | "carousel-kopi" | "other";
  image: string;
  alt: string;
  description?: string;
}

// 1. Data Design Feed (Section 1)
export const DESIGN_FEEDS: DesignItem[] = [
  {
    id: "feed-1",
    title: "Quiz Dunpildun",
    category: "feed",
    image: `${DIR}/dsign-feed/pildun2.png`,
    alt: "Quiz Dunpildun Tebak Selisih Gol",
  },
  {
    id: "feed-2",
    title: "Party Ngombe Alkohol Wes Gak Jaman",
    category: "feed",
    image: `${DIR}/dsign-feed/party ngombe alkohol wes gak jaman.png`,
    alt: "Party Ngombe Alkohol Wes Gak Jaman - Coffee Rave",
  },
  {
    id: "feed-3",
    title: "Giveaway Kartu Pokemon",
    category: "feed",
    image: `${DIR}/dsign-feed/GIVEAWAY KARTU POKEMON.png`,
    alt: "Giveaway Kartu Pokemon",
  },
  {
    id: "feed-4",
    title: "Ubud Coffee Party",
    category: "feed",
    image: `${DIR}/dsign-feed/nongkrong berhadiah.png`,
    alt: "Ubud Coffee Party Nongkrong Berhadiah",
  },
];

// 2. Data Carousel Design (Section 2)
export const CAROUSEL_TATO_ITEMS: DesignItem[] = [
  {
    id: "tato-1",
    title: "Pas Pacaran IKA / Pas Putus PERSIKABO",
    category: "carousel-tato",
    image: `${DIR}/carousel/sk1.png`,
    alt: "Meme Tato Ika Persikabo",
  },
  {
    id: "tato-2",
    title: "Pas Pacaran NIA / Pas Putus KICAU MANIA",
    category: "carousel-tato",
    image: `${DIR}/carousel/sk2.png`,
    alt: "Meme Tato Nia Kicau Mania",
  },
  {
    id: "tato-3",
    title: "Pas Pacaran DYNA / Pas Putus DYNASTY WARRIORS",
    category: "carousel-tato",
    image: `${DIR}/carousel/sk3.png`,
    alt: "Meme Tato Dyna Dynasty Warriors",
  },
  {
    id: "tato-4",
    title: "Pas Pacaran AVIN / Pas Putus CAMAVINGA",
    category: "carousel-tato",
    image: `${DIR}/carousel/sk4.png`,
    alt: "Meme Tato Avin Camavinga",
  },
];

export const CAROUSEL_KOPI_ITEMS: DesignItem[] = [
  {
    id: "kopi-1",
    title: "Kopi Sing Gak Cocok Gawe Konco Rokokan",
    category: "carousel-kopi",
    image: `${DIR}/carousel/KOPI SING GAK COCOK GAWE KONCO ROKOKAN.png`,
    alt: "Kopi Sing Gak Cocok Gawe Konco Rokokan",
  },
  {
    id: "kopi-2",
    title: "Kopi Visual",
    category: "carousel-kopi",
    image: `${DIR}/carousel/KOPI VISUAL.png`,
    alt: "Kopi Visual Monitor Photoshop",
  },
  {
    id: "kopi-3",
    title: "Kopi Paste",
    category: "carousel-kopi",
    image: `${DIR}/carousel/kopi paste.png`,
    alt: "Kopi Paste Keyboard Ctrl V",
  },
  {
    id: "kopi-4",
    title: "Kopi Kutah",
    category: "carousel-kopi",
    image: `${DIR}/carousel/KOPI KUTAH.png`,
    alt: "Kopi Kutah Tumpah",
  },
];

// 3. Data Another Design (Section 3 - 12 Items)
export const OTHER_DESIGN_ITEMS: DesignItem[] = [
  {
    id: "other-1",
    title: "Pulang",
    category: "other",
    image: `${DIR}/other-design/arek geo.png`,
    alt: "Poster Spion Mobil Pulang",
  },
  {
    id: "other-2",
    title: "Dino Pertama GTA VI Rilis",
    category: "other",
    image: `${DIR}/other-design/dino pertama gta rilis.png`,
    alt: "Dino Pertama GTA VI Rilis",
  },
  {
    id: "other-3",
    title: "Coba Minum Kopi Tanpa AH",
    category: "other",
    image: `${DIR}/other-design/coba minum kopi.png`,
    alt: "Artikel Coba Minum Kopi Tanpa AH",
  },
  {
    id: "other-4",
    title: "Bahasa Jawa-nya Tanah",
    category: "other",
    image: `${DIR}/other-design/Bahasa jawa-nya tanah.png`,
    alt: "Google Translate Sand Pasir",
  },
  {
    id: "other-5",
    title: "Keseruan Robot Duit",
    category: "other",
    image: `${DIR}/other-design/di kejar pocong.png`,
    alt: "Robot Duit 3D",
  },
  {
    id: "other-6",
    title: "Gawe Konco-koncoku Sing Wes Suwe Gak Info Ngopi",
    category: "other",
    image: `${DIR}/other-design/Gawe konco-koncoku sing wes suwe gak info ngopi.png`,
    alt: "Gawe Konco-koncoku Ngopi",
  },
  {
    id: "other-7",
    title: "Onok Koncoku Sing Ngangeti Jajan Koyo Ngene",
    category: "other",
    image: `${DIR}/other-design/ONOK KONCOKU SING NGANGETI JAJAN KOYO NGENE.png`,
    alt: "Ngangeti Jajan di Laptop",
  },
  {
    id: "other-8",
    title: "Ngopi Adalah Cara Bertahan Hidup",
    category: "other",
    image: `${DIR}/other-design/Ngopi adalah cara bertahan hidup_.png`,
    alt: "Dinosaurus Punah Gara-gara Gak Ngopi",
  },
  {
    id: "other-9",
    title: "Kondisi Jatim Saat Ini",
    category: "other",
    image: `${DIR}/other-design/kondisi jatim.png`,
    alt: "Kondisi Panas Jatim Remote AC",
  },
  {
    id: "other-10",
    title: "Kesenjangan Sosial Chat",
    category: "other",
    image: `${DIR}/other-design/KESENJANGAN SOSIAL….png`,
    alt: "Kesenjangan Sosial Iwak Tongkol",
  },
  {
    id: "other-11",
    title: "Iki Piye Karepe?",
    category: "other",
    image: `${DIR}/other-design/iki piye karepe.png`,
    alt: "Persebaya Iki Piye Karepe",
  },
  {
    id: "other-12",
    title: "Iki Manuk Opo Yo Lur?",
    category: "other",
    image: `${DIR}/other-design/Iki manuk opo yo Lur.png`,
    alt: "Burung Pisang di Kandang",
  },
];
