# 🚀 Plan Implementasi: Desain Astra Otoshop Section

> **Dibuat:** 2026-09-18  
> **File Utama:** `src/pages/sections/DesainAstraotoshop/DesainAstraotoshop.tsx`  
> **Folder Aset:** `public/img/desain-astraotoshop/` (bg, design-lama, design-baru, ads-design, design-thumbnail)  
> **Target Audience:** Junior Developer / AI Assistant  

---

## 📸 Analisis 5 Bagian Desain (Dari Atas ke Bawah)

| No | Section | Judul / Komponen | Elemen Visual & Konten | Background |
|:---|:---|:---|:---|:---|
| **1** | **Hero Section** | `AstraHero.tsx` | • Judul besar **ASTRA OTOSHOP** (biru muda + outline putih tebal)<br>• Card deskripsi biru berlogo `ASTRAOtoshop.com`<br>• Toko Aspira Motoquick & jalan raya | `public/img/desain-astraotoshop/bg/bg-1.jpg` |
| **2** | **Section 2: Style Lama** | `OldStyleSection.tsx` | • Judul **STYLE DESIGN LAMA** (kuning bold + stroke biru tua)<br>• Grid kartu postingan sosial media lama (8 kartu)<br>• Motor balap Moto GP berkecepatan tinggi di trek aspal | `public/img/desain-astraotoshop/bg/bg-2.jpg` (atau `bg-6.jpg`) |
| **3** | **Section 3: Style Baru** | `NewStyleSection.tsx` | • Judul **STYLE DESIGN VERSI BARU** (putih miring 3D + pita confetti emas)<br>• Mobil putih Honda Brio di jalan pegunungan<br>• Podium bulat berisi oli Aspira, aki GS Astra, ban & shockbreaker | `public/img/desain-astraotoshop/bg/bg-3.jpg` |
| **4** | **Section 4: Ads Design** | `AdsDesignSection.tsx` | • Judul **ADS DESIGN** (putih miring 3D + confetti emas)<br>• Grid 8 kartu banner iklan promo e-voucher, ban, oli, dan aki<br>• Aki GS, shockbreaker merah & ban motor di foreground | `public/img/desain-astraotoshop/bg/bg-4.jpg` |
| **5** | **Section 5: Feed Design** | `FeedDesignSection.tsx` | • Judul **FEED DESIGN** (putih miring 3D bold)<br>• Grid 10 kartu konten feed Instagram (2 baris x 5 kolom)<br>• Mobil putih Brio + meja kayu pajangan aki & oli di pemandangan perbukitan | `public/img/desain-astraotoshop/bg/bg-5.jpg` |

---

## 📁 Struktur File & Arsitektur

```
src/pages/sections/DesainAstraotoshop/
├── DesainAstraotoshop.tsx           # [ROOT] Menyatukan ke-5 section dengan urutan rapi
├── data/
│   └── astraData.ts                 # [DATA] Objek data path gambar, judul, dan deskripsi
└── components/
    ├── AstraHero.tsx                # [1] Section Hero + Jarak Navbar
    ├── OldStyleSection.tsx          # [2] Section Style Design Lama
    ├── NewStyleSection.tsx          # [3] Section Style Design Versi Baru
    ├── AdsDesignSection.tsx         # [4] Section Ads Design
    ├── FeedDesignSection.tsx        # [5] Section Feed Design
    └── ImageModal.tsx               # [MODAL] Lightbox zoom interaktif untuk semua kartu
```

---

## 🎨 Design Tokens & Style Guide

- **Warna Utama:**
  - Astra Blue: `#0084ff` / `#0066cc` / `#0050a0`
  - Astra Red: `#ED1C24`
  - Accent Gold / Yellow: `#FFD700` / `#FFE600`
  - White: `#FFFFFF`
  - Dark Slate: `#0f172a`
- **Tipografi:**
  - Font Heading Utama: `font-spartan font-black` / `font-sans font-black italic tracking-wide`
  - Text Stroke: `WebkitTextStroke: "3px #ffffff"` / `WebkitTextStroke: "3px #003399"`
  - Text Shadow: `drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]`
- **Jarak Navbar (Wajib):**
  - Section pertama (Hero) diberi padding atas aman: `pt-28 sm:pt-32 md:pt-36 lg:pt-40` agar tidak tertutup floating navbar kuning.
- **Interaktivitas:**
  - Hover zoom `hover:scale-105 transition-transform duration-300`
  - Klik kartu untuk membuka modal zoom resolusi penuh (Image Lightbox).

---

## 🛠️ Rincian Implementasi Langkah Demi Langkah (Step-by-Step)

### STEP 1: Buat Data File (`src/pages/sections/DesainAstraotoshop/data/astraData.ts`)

```ts
const BASE = import.meta.env.BASE_URL;
const DIR = `${BASE}img/desain-astraotoshop`;
const BG = `${DIR}/bg`;
const LAMA = `${DIR}/design-lama`;
const BARU = `${DIR}/design-baru`;
const ADS = `${DIR}/ads-design`;

export const astraData = {
  hero: {
    title: "ASTRA OTOSHOP",
    bg: `${BG}/bg-1.jpg`,
    logo: "ASTRAOtoshop.com",
    description:
      "Astra Otoshop is an official automotive e-commerce platform by PT Astra Otoparts Tbk that provides a wide range of spare parts, automotive products, and maintenance solutions for motorcycles and cars. It offers quality products from trusted brands along with convenient online purchasing and professional workshop services.",
  },
  oldStyle: {
    title: "STYLE DESIGN LAMA",
    bg: `${BG}/bg-2.jpg`,
    cards: [
      { id: 1, title: "Kualitas Yang Terjaga", image: `${LAMA}/KUALITAS YANG TERJAGA, HASIL YANG TERASA.jpg` },
      { id: 2, title: "Promo Spesial Ramadhan", image: `${LAMA}/Gemini_Generated_Image_58m35v58m35v58m3 (1).png` },
      { id: 3, title: "Di Astra Otoshop Pasti Otomatis ORI", image: `${LAMA}/Gemini_Generated_Image_m9y7ydm9y7ydm9y7.png` },
      { id: 4, title: "Filter Oli Andal Mesin Optimal", image: `${LAMA}/3011311.png` },
      { id: 5, title: "Selamat Memperingati Jumat Agung", image: `${LAMA}/juqmat agung.jpg` },
      { id: 6, title: "Spare Part Otomatis ORI", image: `${LAMA}/slide 10.jpg` },
      { id: 7, title: "Penyebab Sakit Kepala", image: `${LAMA}/penyebab sakit keapala.jpg` },
      { id: 8, title: "Lebih Susah Nahan Lapar Atau Belanja", image: `${LAMA}/slide2 spare part kw bikin pusing.png` },
    ],
  },
  newStyle: {
    title: "STYLE DESIGN VERSI BARU",
    bg: `${BG}/bg-3.jpg`,
    carImage: `${DIR}/design-thumbnail/kata otoshob.png`, // atau ilustrasi mobil Brio
  },
  adsDesign: {
    title: "ADS DESIGN",
    bg: `${BG}/bg-4.jpg`,
    cards: [
      { id: 1, title: "Beli E-Voucher Aki Mobil", image: `${ADS}/beli E-voucher aki mobil.png` },
      { id: 2, title: "Beli E-Voucher Lebih Hemat 15%", image: `${ADS}/BELI E-VOUCHER.png` },
      { id: 3, title: "Ganti Ban Tanpa Ribet", image: `${ADS}/ganti ban.png` },
      { id: 4, title: "Pilih Ban Yang Pasti Awet", image: `${ADS}/pilih ban yang pasti.png` },
      { id: 5, title: "Pilihan Lengkap Ban Mobil & Motor", image: `${ADS}/PILIHAN LENGKAP.png` },
      { id: 6, title: "Promo Terbatas Oli Shell", image: `${ADS}/promo oli terbatas.png` },
      { id: 7, title: "Promo Oli Beli 4 Lebih Hemat", image: `${ADS}/promo oli hanya bulan ini.png` },
      { id: 8, title: "Starter Gacor GS Astra", image: `${ADS}/starter gacor.png` },
    ],
  },
  feedDesign: {
    title: "FEED DESIGN",
    bg: `${BG}/bg-5.jpg`,
    cards: [
      { id: 1, title: "Ban Andalan Di Jalan", image: `${BARU}/Ban Andalan di Jalan.png` },
      { id: 2, title: "Top Quality Best Deal", image: `${BARU}/Best Deal revisi.png` },
      { id: 3, title: "Millenial vs Gen Z Marketing", image: `${BARU}/Millenial vs Gen Z Marketing slide1.png` },
      { id: 4, title: "Motor Makin Joget Di Jalan", image: `${BARU}/motor makin lama makin goyang dijalan-Recovered.jpg` },
      { id: 5, title: "Piala Dunia 2026", image: `${BARU}/piala dunia.png` },
      { id: 6, title: "Rawat Mesin Sekarang Beli 2 Gratis 2", image: `${BARU}/spanyol angkat piala berkat main yang maksimal opsi sparepart.png` },
      { id: 7, title: "Selamat Untuk Aki GS Astra", image: `${BARU}/Selamat untuk aki gs astra.png` },
      { id: 8, title: "Ada Yang Bisa Tebak Nama Spare Part?", image: `${BARU}/ADA YANG BISA TEBAK NAMA SPARE PART INI.jpg` },
      { id: 9, title: "Spanyol Angkat Piala", image: `${BARU}/spanyol angkat piala berkat main yang maksimal opsi sparepart.png` },
      { id: 10, title: "Sedia Jas Hujan Sebelum Hujan", image: `${BARU}/SEDIA JAS HUJAN.jpg` },
    ],
  },
};
```

---

### STEP 2: Hero Section (`components/AstraHero.tsx`)

- **Jarak Navbar:** `pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16`
- **Background:** `bg-cover bg-center` menggunakan `bg-1.jpg`.
- **Judul Utama:**
  ```tsx
  <h1
    className="font-spartan font-black text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-wider text-[#0084ff] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
    style={{
      WebkitTextStroke: "4px #ffffff",
      paintOrder: "stroke fill",
    }}
  >
    ASTRA OTOSHOP
  </h1>
  ```
- **Card Deskripsi (Kiri Bawah):**
  - Kotak biru cerah `#007bff` dengan sudut `rounded-2xl`
  - Badge logo `ASTRAOtoshop.com` (icon kursor tap + teks Astra merah & Otoshop hitam)
  - Paragraf deskripsi resmi berbahasa Inggris dengan teks putih yang mudah dibaca.

---

### STEP 3: Section 2 (`components/OldStyleSection.tsx`)

- **Background:** `bg-2.jpg` (Trek balap aspal dengan latar laut & bukit).
- **Judul:**
  ```tsx
  <h2
    className="font-spartan font-black text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider text-[#FFDE00] drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
    style={{
      WebkitTextStroke: "3px #003399",
      paintOrder: "stroke fill",
    }}
  >
    STYLE DESIGN LAMA
  </h2>
  ```
- **Grid Postingan:**
  - Layout responsive: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4`
  - Efek hover kartu: `hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden`
  - Klik kartu membuka modal lightbox untuk melihat detail.

---

### STEP 4: Section 3 (`components/NewStyleSection.tsx`)

- **Background:** `bg-3.jpg` (Jalan pegunungan aspal mulus + langit biru).
- **Judul:**
  - Teks miring/italic tebal `STYLE DESIGN VERSI BARU` putih dengan bayangan 3D.
  - Ornamen partikel pita confetti emas mengambang di sekitar judul.
- **Komposisi Visual:**
  - Sisi Kiri: Mobil putih Honda Brio di atas aspal.
  - Sisi Kanan: Podium 3D bulat putih dengan aneka produk spare parts (Oli Aspira, Aki GS Astra, Badge Garansi ORI, Ban & Shockbreaker).

---

### STEP 5: Section 4 (`components/AdsDesignSection.tsx`)

- **Background:** `bg-4.jpg` (Lintasan atletik merah + langit biru).
- **Judul:** `ADS DESIGN` putih tebal miring + pita confetti emas.
- **Grid Banner Iklan:**
  - Grid responsif: 8 kartu banner ads (voucher aki, ganti ban, promo oli 4L, dll).
  - Di bagian bawah: Display produk aki GS Astra, shockbreaker merah, dan ban motor di atas trek merah.

---

### STEP 6: Section 5 (`components/FeedDesignSection.tsx`)

- **Background:** `bg-5.jpg` (Pemandangan alam perbukitan hijau).
- **Judul:** `FEED DESIGN` putih bold miring.
- **Grid 10 Feed Instagram:**
  - 2 Baris x 5 Kolom di desktop (`grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4`).
  - Efek hover kartu halus dan klik untuk zoom preview.
- **Foreground Bawah:** Meja kayu rustic panjang dengan mobil Brio dan produk suku cadang Astra Otoparts.

---

### STEP 7: Modal Lightbox (`components/ImageModal.tsx`)

- Lightbox modal pop-up yang responsif untuk memperbesar kartu desain saat diklik oleh pengunjung, dilengkapi tombol close `✕` dan event listener `Escape`.

---

### STEP 8: Root Component & Routing

1. **Rakit di `DesainAstraotoshop.tsx`:**
   ```tsx
   import AstraHero from "./components/AstraHero";
   import OldStyleSection from "./components/OldStyleSection";
   import NewStyleSection from "./components/NewStyleSection";
   import AdsDesignSection from "./components/AdsDesignSection";
   import FeedDesignSection from "./components/FeedDesignSection";

   export default function DesainAstraotoshop() {
     return (
       <main className="w-full min-h-screen bg-slate-900 text-white overflow-hidden">
         <AstraHero />
         <OldStyleSection />
         <NewStyleSection />
         <AdsDesignSection />
         <FeedDesignSection />
       </main>
     );
   }
   ```
2. **Tambahkan rute di `App.tsx`:**
   - Path: `graphic-design/astraotoshop` (mengarah ke `DesainAstraotoshop`)
3. **Tambahkan dropdown menu di `Navbar.tsx`:**
   - Label: `"Astra Otoshop"` -> Link: `"/graphic-design/astraotoshop"`

---

## 📱 Responsiveness Matrix

| Breakpoint | Lebar Layar | Layout Hero | Grid Style Lama | Grid Ads | Grid Feed |
|:---|:---|:---|:---|:---|:---|
| **Mobile (xs/sm)** | 320px – 640px | Judul 2.5rem, Card full-width | 2 kolom | 2 kolom | 2 kolom |
| **Tablet (md)** | 768px – 1024px | Judul 4.5rem, Card 2 kolom | 3 - 4 kolom | 3 - 4 kolom | 3 - 4 kolom |
| **Desktop (lg/xl)** | 1024px – 1440px+ | Judul 7rem - 9rem, Card max-w-xl | 4 - 5 kolom | 4 kolom | 5 kolom (2 baris) |

---

## 📋 Checklist Eksekusi untuk Developer

- [ ] 1. Buat file data `src/pages/sections/DesainAstraotoshop/data/astraData.ts`
- [ ] 2. Buat komponen `ImageModal.tsx`
- [ ] 3. Buat `components/AstraHero.tsx` (Lengkap jarak navbar `pt-32` & deskripsi card)
- [ ] 4. Buat `components/OldStyleSection.tsx` (Grid 8 kartu + background trek balap)
- [ ] 5. Buat `components/NewStyleSection.tsx` (Komposisi mobil Brio & podium produk)
- [ ] 6. Buat `components/AdsDesignSection.tsx` (Grid 8 banner ads promo)
- [ ] 7. Buat `components/FeedDesignSection.tsx` (Grid 10 feed Instagram + meja kayu produk)
- [ ] 8. Rakit semua section di `DesainAstraotoshop.tsx`
- [ ] 9. Daftarkan rute di `src/App.tsx` & link di `src/components/layout/Navbar.tsx`
- [ ] 10. Uji responsif dan build `npm run build`
- [ ] 11. Git commit & push ke repository GitHub
