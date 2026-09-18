# 🧼 Plan Implementasi: Design Mister Klinner Section

> **Dibuat:** 2026-09-18  
> **File Utama:** `src/pages/sections/DesignMisterKlinner/DesignMisterKlinner.tsx`  
> **Folder Aset:** `public/img/desain-mr-klinner/` (`bg/`, `design-focus-on-household-cleaning-activitites/`, `design-focus-on-and-gardening-activities/`, `design-focus-on-exercise-and fitness-activities/`)  
> **Target Audience:** Junior Developer / AI Assistant  

---

## 📸 Analisis 4 Bagian Desain (Dari Atas ke Bawah)

| No | Section | Judul & Subtitle | Elemen Visual & Konten | Background |
|:---|:---|:---|:---|:---|
| **1** | **Hero Section** | `Mister` (Biru) `Klinner` (Merah)<br>*(Outline putih tebal 3D)* | • Judul besar di atas ruang tamu<br>• Card biru berlogo `Mister Klinner` + deskripsi resmi produk rumah tangga<br>• Ruang tamu cozy modern minimalis | `public/img/desain-mr-klinner/bg/bg-1.jpg` |
| **2** | **Section 2: Household Cleaning** | **Design**<br>*(Pill: Focus on household cleaning activities.)* | • Judul besar `Design` dengan outline putih<br>• Badge pill biru tua<br>• Grid 8 kartu postingan tema bersih-bersih dapur & rumah<br>• Meja dapur (kitchen island) di latar bawah | `public/img/desain-mr-klinner/bg/bg-2.jpg` |
| **3** | **Section 3: Gardening & Plants** | **Design**<br>*(Pill: Focus on plants and gardening activities.)* | • Judul besar `Design` + badge pill biru tua<br>• Grid 4 kartu postingan tema berkebun & sayuran segar<br>• Halaman hijau asri & rumah pedesaan dengan meja kayu produk | `public/img/desain-mr-klinner/bg/bg-3.jpg` |
| **4** | **Section 4: Fitness & Exercise** | **Design**<br>*(Pill: Focus on exercise, and fitness activities.)* | • Judul besar `Design` + badge pill biru tua<br>• Grid 4 kartu postingan tema olahraga, protein shake & gaya hidup sehat<br>• Ruang gym home fitness minimalis | `public/img/desain-mr-klinner/bg/bg-4.jpg` |

---

## 📁 Struktur File & Arsitektur

```
src/pages/sections/DesignMisterKlinner/
├── DesignMisterKlinner.tsx          # [ROOT] Menyatukan ke-4 section secara berurutan
├── data/
│   └── klinnerData.ts               # [DATA] Objek data path background, teks, dan kartu gambar
└── components/
    ├── KlinnerHero.tsx              # [1] Section Hero + Jarak Aman Navbar
    ├── CleaningSection.tsx          # [2] Section Focus on Household Cleaning (8 Kartu)
    ├── GardeningSection.tsx         # [3] Section Focus on Gardening (4 Kartu)
    ├── FitnessSection.tsx           # [4] Section Focus on Fitness (4 Kartu)
    └── ImageModal.tsx               # [MODAL] Lightbox zoom interaktif untuk semua kartu
```

---

## 🎨 Design Tokens & Style Guide

- **Warna Utama:**
  - Klinner Blue: `#253b80` / `#1e3a8a` / `#2b449b` (Biru khas Mister Klinner)
  - Klinner Red: `#e11d48` / `#dc2626` / `#e50914` (Merah teks Klinner)
  - Clean White: `#ffffff`
  - Pill Badge Dark Blue: `#1b296b` / `#162258`
  - Background Neutral Warm: `#f8f6f0`
- **Tipografi:**
  - Font Heading Utama: `font-spartan font-black` / `font-sans font-black tracking-tight`
  - Text Stroke: `WebkitTextStroke: "4px #ffffff"` dengan `paintOrder: "stroke fill"`
  - Text Shadow: `drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]`
- **Jarak Navbar (Wajib):**
  - Section 1 (Hero) wajib memiliki padding atas: `pt-28 sm:pt-32 md:pt-36 lg:pt-40` agar judul tidak tertutup floating navbar kuning.
- **Interaktivitas:**
  - Efek hover kartu membesar halus: `hover:scale-105 hover:-translate-y-2 transition-all duration-300`
  - Klik pada kartu manapun membuka modal lightbox untuk zoom gambar dalam resolusi penuh.

---

## 🛠️ Rincian Implementasi Langkah Demi Langkah (Step-by-Step)

### STEP 1: Buat Data File (`src/pages/sections/DesignMisterKlinner/data/klinnerData.ts`)

```ts
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
      { id: 1, title: "Cleaning Date di Rumah", image: `${CLEANING}/Cleaning Date di Rumah.png` },
      { id: 2, title: "Clean Cooking Routine", image: `${CLEANING}/clean cooking routin.png` },
      { id: 3, title: "Kenapa Talenan Perlu Dicuci?", image: `${CLEANING}/Kenapa talenan perlu dicuci meskipun cuma dipakai memotong sayur.png` },
      { id: 4, title: "Moms and Super Team di Dapur", image: `${CLEANING}/Moms and Super Team di Dapur.png` },
      { id: 5, title: "Sunday Reset Bersih Rumah", image: `${CLEANING}/Sunday Reset.png` },
      { id: 6, title: "Smart Home Juga Butuh Smart Tools", image: `${CLEANING}/Smart Home Juga Butuh.png` },
      { id: 7, title: "Rumah Nyaman Berawal Dari Kebiasaan", image: `${CLEANING}/Rumah Nyaman Berawal dari Kebiasaan Sederhana.png` },
      { id: 8, title: "Jadi Dewasa Passwordnya?", image: `${CLEANING}/Jadi dewasa passwordnya.png` },
    ],
  },
  gardening: {
    title: "Design",
    badge: "Focus on plants and gardening activities.",
    bg: `${BG}/bg-3.jpg`,
    cards: [
      { id: 1, title: "Pilih Warna Sayuran Favoritmu", image: `${GARDENING}/Pilih Warna Sayuran Favoritmu.png` },
      { id: 2, title: "Gardening Starter Pack", image: `${GARDENING}/gardening starter pack.png` },
      { id: 3, title: "Fresh From Garden, Ready for Table", image: `${GARDENING}/fresh from garden.png` },
      { id: 4, title: "Mau Mulai Berkebun?", image: `${GARDENING}/mau mulai berkebun.png` },
    ],
  },
  fitness: {
    title: "Design",
    badge: "Focus on exercise, and fitness activities.",
    bg: `${BG}/bg-4.jpg`,
    cards: [
      { id: 1, title: "Quick Clean After Sweat Session", image: `${CLEANING}/Cleaning Date di Rumah.png` },
      { id: 2, title: "Wellness Bukan Cuma Soal Olahraga", image: `${CLEANING}/Sunday Reset.png` },
      { id: 3, title: "Protein Shake Sudah Habis?", image: `${FITNESS}/Protein shake sudah habis.png` },
      { id: 4, title: "Tebak Kalori: Kukus vs Goreng", image: `${CLEANING}/clean cooking routin.png` },
    ],
  },
};
```

---

### STEP 2: Hero Section (`components/KlinnerHero.tsx`)

- **Jarak Navbar:** `pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16`
- **Background:** `bg-cover bg-center` dengan gambar ruang tamu `bg-1.jpg`.
- **Judul Utama:**
  ```tsx
  <h1 className="font-spartan font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight text-center leading-none select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
    <span
      className="text-[#253b80] block"
      style={{ WebkitTextStroke: "4px #ffffff", paintOrder: "stroke fill" }}
    >
      {hero.titleBlue}
    </span>
    <span
      className="text-[#dc2626] block -mt-2 sm:-mt-4"
      style={{ WebkitTextStroke: "4px #ffffff", paintOrder: "stroke fill" }}
    >
      {hero.titleRed}
    </span>
  </h1>
  ```
- **Card Deskripsi (Kiri Bawah):**
  - Kotak biru tua `bg-[#253b80]` dengan border putih `border-2 border-white/80 rounded-2xl p-6`
  - Logo `Mister Klinner` di atas kotak
  - Teks deskripsi putih rapi font-sans.

---

### STEP 3: Section 2: Household Cleaning (`components/CleaningSection.tsx`)

- **Background:** `bg-2.jpg` (Dapur bersih & modern).
- **Header:**
  - Judul `Design` putih bergaris tepi biru tebal.
  - Subtitle pill badge: `bg-[#1b296b] text-white rounded-full px-6 py-2` -> `"Focus on household cleaning activities."`
- **Grid Postingan:**
  - 8 kartu disusun 2 baris x 4 kolom di desktop (`grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6`).
  - Efek hover kartu dengan border biru elegan & bayangan 3D.
  - Klik kartu membuka modal lightbox.

---

### STEP 4: Section 3: Gardening & Plants (`components/GardeningSection.tsx`)

- **Background:** `bg-3.jpg` (Taman hijau & rumah asri).
- **Header:**
  - Judul `Design` + pill badge `"Focus on plants and gardening activities."`
- **Grid Postingan:**
  - 4 kartu disusun 4 kolom di desktop (`grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6`).
  - Efek hover halus dan klik untuk zoom gambar.

---

### STEP 5: Section 4: Fitness & Exercise (`components/FitnessSection.tsx`)

- **Background:** `bg-4.jpg` (Ruang home gym & fitness).
- **Header:**
  - Judul `Design` + pill badge `"Focus on exercise, and fitness activities."`
- **Grid Postingan:**
  - 4 kartu disusun 4 kolom di desktop (`grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6`).
  - Dilengkapi hover zoom badge dan klik untuk modal lightbox.

---

### STEP 6: Modal Lightbox (`components/ImageModal.tsx`)

- Lightbox modal pop-up dengan latar belakang hitam transparan blur untuk zoom gambar saat diklik, dilengkapi tombol `✕` dan dukungan keyboard `Esc`.

---

### STEP 7: Root Component & Routing

1. **Rakit di `DesignMisterKlinner.tsx`:**
   ```tsx
   import KlinnerHero from "./components/KlinnerHero";
   import CleaningSection from "./components/CleaningSection";
   import GardeningSection from "./components/GardeningSection";
   import FitnessSection from "./components/FitnessSection";

   export default function DesignMisterKlinner() {
     return (
       <main className="w-full min-h-screen bg-[#f8f6f0] text-slate-900 overflow-hidden">
         <KlinnerHero />
         <CleaningSection />
         <GardeningSection />
         <FitnessSection />
       </main>
     );
   }
   ```
2. **Daftarkan rute di `App.tsx`:**
   - Path: `graphic-design/mister-klinner` (mengarah ke `DesignMisterKlinner`)
3. **Tambahkan dropdown menu di `Navbar.tsx`:**
   - Label: `"Mister Klinner"` -> Link: `"/graphic-design/mister-klinner"`

---

## 📱 Responsiveness Matrix

| Breakpoint | Lebar Layar | Layout Hero | Grid Cleaning (8 Kartu) | Grid Gardening (4 Kartu) | Grid Fitness (4 Kartu) |
|:---|:---|:---|:---|:---|:---|
| **Mobile (xs/sm)** | 320px – 640px | Judul 3.5rem, Card full-width | 2 kolom | 2 kolom | 2 kolom |
| **Tablet (md)** | 768px – 1024px | Judul 6rem, Card max-w-lg | 2 - 3 kolom | 2 - 4 kolom | 2 - 4 kolom |
| **Desktop (lg/xl)** | 1024px – 1440px+ | Judul 8rem - 10rem, Card max-w-xl | 4 kolom (2 baris) | 4 kolom (1 baris) | 4 kolom (1 baris) |

---

## 📋 Checklist Eksekusi untuk Developer

- [ ] 1. Buat file data `src/pages/sections/DesignMisterKlinner/data/klinnerData.ts`
- [ ] 2. Buat komponen `ImageModal.tsx`
- [ ] 3. Buat `components/KlinnerHero.tsx` (Lengkap jarak navbar `pt-32` & deskripsi card)
- [ ] 4. Buat `components/CleaningSection.tsx` (Grid 8 kartu + background dapur)
- [ ] 5. Buat `components/GardeningSection.tsx` (Grid 4 kartu + background taman)
- [ ] 6. Buat `components/FitnessSection.tsx` (Grid 4 kartu + background home gym)
- [ ] 7. Rakit semua section di `DesignMisterKlinner.tsx`
- [ ] 8. Daftarkan rute di `src/App.tsx` & link di `src/components/layout/Navbar.tsx`
- [ ] 9. Uji responsif dan build `npm run build`
- [ ] 10. Git commit & push ke repository GitHub
