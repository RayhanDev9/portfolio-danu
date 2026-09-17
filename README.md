# Plan Implementasi Halaman "Design Majlis Ta'lim Roudotul Jannah"

Panduan lengkap implementasi halaman **Design Majlis Ta'lim** untuk portofolio Danu. Dibuat modular, terstruktur, dan responsif dari mobile (375px) hingga desktop (1280px+). Format dan gaya kode disesuaikan untuk junior programmer dan low-cost AI.

---

## 1. Analisis Visual per Section (Berdasarkan Foto 1 - 4)

### 🕌 Section 1: Hero & Banner Zikir (Foto 1)
- **Background**: Deep Maroon / Red Velvet Gradient (`from-[#5a0606] via-[#400303] to-[#250101]`).
- **Judul Utama**:
  - `MAJLIS TA'LIM`: Font Spartan bold / font-black warna kuning emas (`text-[#f3b72b]`) dengan stroke/shadow tebal warna putih.
  - `ROUDOTUL JANNAH`: Font Spartan bold / font-black warna putih bersih (`text-white`).
- **Deskripsi & Logo**:
  - Kotak 2 kolom di tengah: Kolom kiri teks penjelasan Majlis Ta'lim, garis pemisah putih vertikal, kolom kanan Logo Majlis (`logo.png`).
- **Display Banner Mockup**:
  - Gambar banner dzikir maulid (`banner-zikir.png`) ditampilkan di tengah dengan perspektif karpet panggung merah di bagian bawah (`bg-gradient-to-t from-red-800 to-transparent`).

---

### ✉️ Section 2: Invitation Letter Design (Foto 2)
- **Judul Section**: `Majlis Ta'Lim Roudotul Zannaah` (huruf putih dengan underline).
- **Sub-judul**: `Invitation Letter Design` (huruf putih dengan underline).
- **Layout**:
  - **Kiri**: Paragraf penjelasan desain surat undangan (konsep, pemilihan warna, tipografi, layout).
  - **Kanan**: Grid mockup undangan lipat 3 (`undangan.png`) berjajar rapi (grid 2x2).
- **Ornamen**: Ornamen lengkung Islami di pojok kiri bawah (`ornament-corner-bl.png`).

---

### 📜 Section 3: Certificate Design (Foto 3)
- **Sub-judul**: `Certificate Design` (huruf putih tebal dengan underline).
- **Layout**:
  - **Kiri**: 2 sertifikat bersisian:
    - Sertifikat Belakang (`sertifikat-belakang.png`) dengan label **"Belakang"** di bawahnya.
    - Sertifikat Depan (`setifikat-belakang.png`) dengan border neon/glow dan label **"Depan"** di bawahnya.
  - **Kanan**: Paragraf penjelasan proses desain sertifikat untuk kelulusan santri/peserta.
- **Ornamen**: Ornamen lengkung Islami di pojok kanan bawah (`ornament-corner-br.png`).

---

### 🕌 Section 4: Pilgrimage Poster Design (Foto 4)
- **Sub-judul**: `Pilgrimage Poster Design` (huruf putih tebal dengan underline).
- **Layout**:
  - **Kiri**: Paragraf penjelasan desain poster Ziarah Wali (pemilihan warna, tipografi bernuansa religi, dan layout informatif).
  - **Kanan**: 2 poster ziarah (`poster.png`) ditampilkan berdampingan.
- **Ornamen**: Ornamen lengkung Islami di pojok kiri bawah (`ornament-corner-bl.png`).

---

## 2. Struktur File & Komponen

Mengikuti struktur yang sama seperti `Experience` dan `Home`:

```
src/pages/sections/DesignMajlis/
├── DesignMajlis.tsx               # Komponen utama yang merangkum semua sub-section
├── data/
│   └── majlisData.ts              # Data teks deskripsi dan path gambar
└── components/
    ├── MajlisHero.tsx             # Section 1: Title, Deskripsi, Logo, & Banner Zikir
    ├── InvitationSection.tsx      # Section 2: Invitation Letter Design & Mockup Grid
    ├── CertificateSection.tsx     # Section 3: Certificate Design (Depan & Belakang)
    └── PosterSection.tsx          # Section 4: Pilgrimage Poster Design & Previews
```

---

## 3. Daftar Aset Gambar

Semua gambar sudah tersedia di folder: `public/img/desain-majlis-ta'alim/`

| Nama File | Fungsi |
|---|---|
| `banner-zikir.png` | Banner Dzikro Maulid di Section Hero |
| `logo.png` | Logo Majlis Ta'lim Kolelet Wetan |
| `undangan.png` | Mockup Surat Undangan 3-fold |
| `sertifikat-belakang.png` | Sertifikat halaman belakang |
| `setifikat-belakang.png` | Sertifikat halaman depan |
| `poster.png` | Poster Ziarah Wali |
| `ornament-corner-bl.png` | Ornamen Islami sudut kiri bawah |
| `ornament-corner-br.png` | Ornamen Islami sudut kanan bawah |

---

## 4. Strategi Responsif (Mobile ke Desktop)

| Section | Tampilan Mobile (<768px) | Tampilan Tablet (768px-1023px) | Tampilan Desktop (>=1024px) |
|---|---|---|---|
| **Hero** | Judul `text-3xl`, teks deskripsi & logo stack vertikal, banner full-width | Judul `text-5xl`, teks & logo 2 kolom bersebelahan, banner proporsional | Judul `text-6xl` s/d `text-7xl`, layout lebar maksimal, drop shadow tajam |
| **Invitation** | Teks di atas, grid undangan 1 atau 2 kolom | Teks di atas/kiri, grid undangan 2x2 | 2 Kolom: Kiri teks (40%), Kanan grid 2x2 undangan (60%) |
| **Certificate** | 2 sertifikat stack atau 2 kolom kecil di atas teks | 2 sertifikat bersisian di kiri, teks di kanan | 2 Kolom: Kiri 2 sertifikat (55%), Kanan teks penjelasan (45%) |
| **Poster** | Teks di atas, 2 poster sejajar / stack di bawah | Teks di kiri, 2 poster di kanan | 2 Kolom: Kiri teks (45%), Kanan 2 poster sejajar (55%) |

---

## 5. Blueprint Kode Lengkap

### 📄 1. File Data: `src/pages/sections/DesignMajlis/data/majlisData.ts`

```ts
export const majlisData = {
  hero: {
    titleGold: "MAJLIS TA'LIM",
    titleWhite: "ROUDOTUL JANNAH",
    description:
      "Majlis Ta’lim Roudotul Jannah is a religious community based in Kp. Kolelet, Rangkasbitung. It serves as a place for learning and deepening Islamic knowledge through regular religious study sessions for women and children. Through these activities, Roudotul Jannah aims to strengthen Islamic values, foster community bonds, and create a positive and religious environment for the local community.",
    logo: `${import.meta.env.BASE_URL}img/desain-majlis-ta'alim/logo.png`,
    banner: `${import.meta.env.BASE_URL}img/desain-majlis-ta'alim/banner-zikir.png`,
  },
  invitation: {
    sectionTitle: "Majlis  Ta'Lim Roudotul Zannaah",
    title: "Invitation Letter Design",
    description:
      "In this project, I was responsible for designing the invitation letter. My process included determining the design concept, selecting appropriate colors and typography, and arranging the layout to ensure that the information was easy to read and visually appealing.",
    image: `${import.meta.env.BASE_URL}img/desain-majlis-ta'alim/undangan.png`,
  },
  certificate: {
    title: "Certificate Design",
    description:
      "For this project, I was responsible for designing a certificate for a student who had successfully completed the assessment process. The certificate design focused on layout, color selection, and typography to create a clean, clear, formal, and professional appearance.",
    depan: `${import.meta.env.BASE_URL}img/desain-majlis-ta'alim/setifikat-belakang.png`,
    belakang: `${import.meta.env.BASE_URL}img/desain-majlis-ta'alim/sertifikat-belakang.png`,
  },
  poster: {
    title: "Pilgrimage Poster Design",
    description:
      "During this activity, I was responsible for designing a poster for a pilgrimage event. The design process included developing the visual concept, selecting colors and typography that suited the religious theme, and arranging the layout to ensure that the event information was presented clearly and attractively.",
    image: `${import.meta.env.BASE_URL}img/desain-majlis-ta'alim/poster.png`,
  },
  ornaments: {
    cornerBL: `${import.meta.env.BASE_URL}img/desain-majlis-ta'alim/ornament-corner-bl.png`,
    cornerBR: `${import.meta.env.BASE_URL}img/desain-majlis-ta'alim/ornament-corner-br.png`,
  },
};
```

---

### 📄 2. Komponen: `src/pages/sections/DesignMajlis/components/MajlisHero.tsx`

```tsx
import { majlisData } from "../data/majlisData";

export default function MajlisHero() {
  const { hero } = majlisData;

  return (
    <section className="relative w-full pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 flex flex-col items-center">
      {/* Title Besar */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="font-spartan font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight uppercase select-none drop-shadow-md">
          <span
            className="text-[#f5be38] block"
            style={{
              WebkitTextStroke: "2px #ffffff",
              paintOrder: "stroke fill",
            }}
          >
            {hero.titleGold}
          </span>
          <span className="text-white block mt-1">{hero.titleWhite}</span>
        </h1>
      </div>

      {/* Deskripsi + Logo Card */}
      <div className="w-full max-w-4xl bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-7 md:p-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="flex-1 text-white/95 text-xs sm:text-sm md:text-base leading-relaxed font-sans text-justify md:text-left">
            {hero.description}
          </div>

          <div className="hidden md:block w-px h-28 bg-white/40 self-stretch my-auto" />

          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src={hero.logo}
              alt="Logo Majlis Ta'lim Roudotul Jannah"
              className="w-24 sm:w-28 md:w-32 h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Display Banner Zikir */}
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        <div className="w-full rounded-lg overflow-hidden shadow-2xl border-4 border-amber-400/30">
          <img
            src={hero.banner}
            alt="Banner Dzikro Maulid Nabi Muhammad SAW"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Efek Panggung / Karpet Merah */}
        <div className="w-[110%] h-8 sm:h-12 bg-gradient-to-t from-[#9a0808] to-[#600505] rounded-[50%] -mt-3 sm:-mt-5 shadow-2xl opacity-90 border-t border-red-400/40" />
      </div>
    </section>
  );
}
```

---

### 📄 3. Komponen: `src/pages/sections/DesignMajlis/components/InvitationSection.tsx`

```tsx
import { majlisData } from "../data/majlisData";

export default function InvitationSection() {
  const { invitation, ornaments } = majlisData;

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10 overflow-hidden">
      {/* Ornamen Sudut Kiri Bawah */}
      <img
        src={ornaments.cornerBL}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 -left-4 w-32 sm:w-48 md:w-60 pointer-events-none opacity-40 md:opacity-60"
      />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Judul Besar Atas */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-spartan font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-wide underline underline-offset-8 decoration-white/80">
            {invitation.sectionTitle}
          </h2>
        </div>

        {/* Content 2 Kolom: Kiri Teks, Kanan 2x2 Grid Undangan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Kolom Teks */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="font-spartan font-bold text-xl sm:text-2xl md:text-3xl text-white underline underline-offset-4 decoration-white/70">
              {invitation.title}
            </h3>
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed text-justify">
              {invitation.description}
            </p>
          </div>

          {/* Kolom Grid Undangan (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="bg-white/5 p-1 sm:p-1.5 rounded-lg border border-white/20 shadow-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={invitation.image}
                  alt={`Undangan Mockup ${idx}`}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### 📄 4. Komponen: `src/pages/sections/DesignMajlis/components/CertificateSection.tsx`

```tsx
import { majlisData } from "../data/majlisData";

export default function CertificateSection() {
  const { certificate, ornaments } = majlisData;

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10 overflow-hidden">
      {/* Ornamen Sudut Kanan Bawah */}
      <img
        src={ornaments.cornerBR}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 w-32 sm:w-48 md:w-60 pointer-events-none opacity-40 md:opacity-60"
      />

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Kolom Kiri: 2 Sertifikat (Belakang & Depan) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {/* Sertifikat Belakang */}
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-1 sm:p-2 rounded-lg border border-white/20 shadow-xl w-full">
                <img
                  src={certificate.belakang}
                  alt="Sertifikat Bagian Belakang"
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <span className="font-spartan font-bold text-white text-base sm:text-xl mt-3 tracking-wide">
                Belakang
              </span>
            </div>

            {/* Sertifikat Depan */}
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-1 sm:p-2 rounded-lg border-2 border-[#7b2cbf] shadow-[0_0_20px_rgba(123,44,191,0.5)] w-full">
                <img
                  src={certificate.depan}
                  alt="Sertifikat Bagian Depan"
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <span className="font-spartan font-bold text-white text-base sm:text-xl mt-3 tracking-wide">
                Depan
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Teks Penjelasan */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h2 className="font-spartan font-bold text-2xl sm:text-3xl md:text-4xl text-white underline underline-offset-8 decoration-white/80">
              {certificate.title}
            </h2>
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed text-justify">
              {certificate.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### 📄 5. Komponen: `src/pages/sections/DesignMajlis/components/PosterSection.tsx`

```tsx
import { majlisData } from "../data/majlisData";

export default function PosterSection() {
  const { poster, ornaments } = majlisData;

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10 overflow-hidden">
      {/* Ornamen Sudut Kiri Bawah */}
      <img
        src={ornaments.cornerBL}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 -left-4 w-32 sm:w-48 md:w-60 pointer-events-none opacity-40 md:opacity-60"
      />

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Kolom Kiri: Teks Penjelasan */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h2 className="font-spartan font-bold text-2xl sm:text-3xl md:text-4xl text-white underline underline-offset-8 decoration-white/80">
              {poster.title}
            </h2>
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed text-justify">
              {poster.description}
            </p>
          </div>

          {/* Kolom Kanan: 2 Poster Ziarah Berdampingan */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {[1, 2].map((idx) => (
              <div
                key={idx}
                className="bg-white/5 p-1 sm:p-1.5 rounded-lg border border-white/20 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={poster.image}
                  alt={`Poster Ziarah Wali ${idx}`}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### 📄 6. Komponen Induk: `src/pages/sections/DesignMajlis/DesignMajlis.tsx`

```tsx
import MajlisHero from "./components/MajlisHero";
import InvitationSection from "./components/InvitationSection";
import CertificateSection from "./components/CertificateSection";
import PosterSection from "./components/PosterSection";

export default function DesignMajlis() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#6b0808] via-[#4d0505] to-[#2b0202] text-white selection:bg-[#f5be38] selection:text-black overflow-hidden">
      <MajlisHero />
      <InvitationSection />
      <CertificateSection />
      <PosterSection />
    </main>
  );
}
```

---

## 6. Checklist Implementasi

- [ ] **Langkah 1**: Buat file data di [`src/pages/sections/DesignMajlis/data/majlisData.ts`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/DesignMajlis/data/majlisData.ts).
- [ ] **Langkah 2**: Buat komponen [`MajlisHero.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/DesignMajlis/components/MajlisHero.tsx).
- [ ] **Langkah 3**: Buat komponen [`InvitationSection.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/DesignMajlis/components/InvitationSection.tsx).
- [ ] **Langkah 4**: Buat komponen [`CertificateSection.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/DesignMajlis/components/CertificateSection.tsx).
- [ ] **Langkah 5**: Buat komponen [`PosterSection.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/DesignMajlis/components/PosterSection.tsx).
- [ ] **Langkah 6**: Gabungkan seluruh komponen di [`DesignMajlis.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/DesignMajlis/DesignMajlis.tsx).
- [ ] **Langkah 7**: Jalankan `npx tsc --noEmit` untuk memastikan tidak ada kesalahan tipe TypeScript.
- [ ] **Langkah 8**: Lakukan commit & push ke repository GitHub.
