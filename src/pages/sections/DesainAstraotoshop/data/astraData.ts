const BASE = import.meta.env.BASE_URL;
const DIR = `${BASE}img/desain-astraotoshop`;
const BG = `${DIR}/bg`;
const LAMA = `${DIR}/design-lama`;
const BARU = `${DIR}/design-baru`;
const ADS = `${DIR}/ads-design`;
const THUMB = `${DIR}/design-thumbnail`;

export const astraData = {
  hero: {
    title: "ASTRA OTOSHOP",
    bg: `${BG}/bg-1.avif`,
    logo: "ASTRAOtoshop.com",
    description:
      "Astra Otoshop is an official automotive e-commerce platform by PT Astra Otoparts Tbk that provides a wide range of spare parts, automotive products, and maintenance solutions for motorcycles and cars. It offers quality products from trusted brands along with convenient online purchasing and professional workshop services.",
  },
  oldStyle: {
    title: "STYLE DESIGN LAMA",
    bg: `${BG}/bg-2.avif`,
    cards: [
      {
        id: 1,
        title: "Kualitas Yang Terjaga, Hasil Yang Terasa",
        image: `${LAMA}/KUALITAS YANG TERJAGA, HASIL YANG TERASA.avif`,
      },
      {
        id: 2,
        title: "Promo Spesial Ramadhan",
        image: `${LAMA}/Gemini_Generated_Image_58m35v58m35v58m3 (1).avif`,
      },
      {
        id: 3,
        title: "Di Astra Otoshop, Pasti Otomatis ORI",
        image: `${LAMA}/Gemini_Generated_Image_m9y7ydm9y7ydm9y7.avif`,
      },
      {
        id: 4,
        title: "Filter Oli Andal, Mesin Optimal",
        image: `${LAMA}/3011311.avif`,
      },
      {
        id: 5,
        title: "Selamat Memperingati Jumat Agung",
        image: `${LAMA}/juqmat agung.avif`,
      },
      {
        id: 6,
        title: "Spare Part Otomatis ORI di Astra Otoshop",
        image: `${LAMA}/slide 10.avif`,
      },
      {
        id: 7,
        title: "Penyebab Sakit Kepala",
        image: `${LAMA}/penyebab sakit keapala.avif`,
      },
      {
        id: 8,
        title: "Lebih Susah Nahan Lapar Atau Belanja Spare Part",
        image: `${LAMA}/slide2 spare part kw bikin pusing.avif`,
      },
    ],
  },
  newStyle: {
    title: "STYLE DESIGN",
    subtitle: "VERSI BARU",
    bg: `${BG}/bg-3.avif`,
    carImage: `${THUMB}/kata otoshob.avif`,
  },
  adsDesign: {
    title: "ADS DESIGN",
    bg: `${BG}/bg-4.avif`,
    cards: [
      {
        id: 1,
        title: "Beli E-Voucher Aki Mobil Sekarang",
        image: `${ADS}/beli E-voucher aki mobil.avif`,
      },
      {
        id: 2,
        title: "Beli E-Voucher Lebih Hemat Disc Up to 15%",
        image: `${ADS}/BELI E-VOUCHER.avif`,
      },
      {
        id: 3,
        title: "Ganti Ban Tanpa Ribet Order Online",
        image: `${ADS}/ganti ban.avif`,
      },
      {
        id: 4,
        title: "Pilih Ban Yang Pasti Awet",
        image: `${ADS}/pilih ban yang pasti.avif`,
      },
      {
        id: 5,
        title: "Pilihan Lengkap Ban Mobil & Motor",
        image: `${ADS}/PILIHAN LENGKAP.avif`,
      },
      {
        id: 6,
        title: "Promo Terbatas Oli Shell Helix",
        image: `${ADS}/promo oli terbatas.avif`,
      },
      {
        id: 7,
        title: "Promo Oli Hanya Bulan Ini Beli 4 Lebih Hemat",
        image: `${ADS}/promo oli hanya bulan ini.avif`,
      },
      {
        id: 8,
        title: "Starter Gacor? GS Astra Jawabannya!",
        image: `${ADS}/starter gacor.avif`,
      },
    ],
  },
  feedDesign: {
    title: "FEED DESIGN",
    bg: `${BG}/bg-5.avif`,
    cards: [
      {
        id: 1,
        title: "Ban Andalan di Jalan",
        image: `${BARU}/Ban Andalan di Jalan.avif`,
      },
      {
        id: 2,
        title: "Top Quality, Best Deal",
        image: `${BARU}/Best Deal revisi.avif`,
      },
      {
        id: 3,
        title: "Millenial vs Gen Z Marketing",
        image: `${BARU}/Millenial vs Gen Z Marketing slide1.avif`,
      },
      {
        id: 4,
        title: "Motor Makin Joget di Jalan",
        image: `${BARU}/motor makin lama makin goyang dijalan-Recovered.avif`,
      },
      {
        id: 5,
        title: "Piala Dunia 2026",
        image: `${BARU}/piala dunia.avif`,
      },
      {
        id: 6,
        title: "Rawat Mesin Sekarang Hematnya Sekalian",
        image: `${BARU}/spanyol angkat piala berkat main yang maksimal opsi sparepart.avif`,
      },
      {
        id: 7,
        title: "Selamat untuk Aki GS Astra",
        image: `${BARU}/Selamat untuk aki gs astra.avif`,
      },
      {
        id: 8,
        title: "Ada yang Bisa Tebak Nama Spare Part Ini?",
        image: `${BARU}/ADA YANG BISA TEBAK NAMA SPARE PART INI.avif`,
      },
      {
        id: 9,
        title: "Spanyol Angkat Piala Berkat Main Maksimal",
        image: `${BARU}/spanyol angkat piala berkat main yang maksimal opsi sparepart.avif`,
      },
      {
        id: 10,
        title: "Sedia Jas Hujan Sebelum Hujan",
        image: `${BARU}/SEDIA JAS HUJAN.avif`,
      },
    ],
  },
  thumbnailDesign: {
    title: "THUMBNAIL DESIGN",
    bg: `${BG}/bg-6.avif`,
    cards: [
      {
        id: 1,
        title: "Kena Prank!! Gaikindo Auto Show",
        image: `${THUMB}/Kena Prank!!.avif`,
      },
      {
        id: 2,
        title: "Lagi Enak-Enak Makan Tiba-Tiba Ada Yang Nyium",
        image: `${THUMB}/TIBA-TIBA ADA YANG NYIUM.avif`,
      },
      {
        id: 3,
        title: "Gak Sadar Gara-Gara Beli Spare Part KW",
        image: `${THUMB}/GAK SADAR.avif`,
      },
      {
        id: 4,
        title: "Kata Otosob Tentang Astra Otoshop",
        image: `${THUMB}/kata otoshob.avif`,
      },
    ],
  },
};
