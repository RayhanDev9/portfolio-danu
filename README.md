# Rencana Implementasi UI Portofolio Danu (`Home.tsx`)

Dokumen ini berisi rencana komprehensif untuk mengimplementasikan halaman hero/beranda portofolio Danu di file [`src/pages/sections/Home.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Home.tsx) agar 100% sesuai dengan gambar referensi desain.

---

## 1. Analisis Visual & Spesifikasi Desain

Berdasarkan gambar desain referensi, terdapat 3 lapisan utama (sections/layers):

### A. Palet Warna (Color Palette)
| Elemen | Kode Warna Hex | Catatan |
|---|---|---|
| **Background Utama** | `#5b13ec` / `#5a10ec` | Vibrant Royal Violet / Purple |
| **Aksen Banner & Teks "I'M"** | `#eaff00` / `#f6ed28` | Electric Neon Yellow |
| **WhatsApp Button** | `#22c55e` / `#25d366` | WhatsApp Green |
| **Instagram Button** | `linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)` | Instagram Signature Gradient |
| **Gmail Button** | `#ffffff` | Clean White Card |
| **Teks & Garis Ornamen** | `#ffffff` | Pure White dengan opacity variatif (60% - 100%) |

### B. Tipografi (Typography) dari `@theme` di `index.css`
- **`font-playfair`** (`--font-playfair: "Playfair Display", serif`): Digunakan pada teks *"Hi There!"* dan *"Software I"* (italic, elegan).
- **`font-spartan`** (`--font-spartan: "League Spartan", sans-serif`): Digunakan pada judul *"I'M DANU"* (`font-black`, tebal dan bold).
- **`font-bubbles`** (`--font-bubbles: "Rubik Bubbles", cursive`): Digunakan pada teks *"USE"* (chunky, retro bubble ungu).
- **`font-sans`** (`--font-sans: "Inter", sans-serif`): Font default untuk seluruh teks body dan deskripsi.

### C. Layering & Posisi (Z-Index Architecture)
1. **Layer 0 (Background)**: Warna dasar ungu `#5b13ec` + ornamen garis lengkung kanan atas dan ornamen cross/plus (`+`).
2. **Layer 10 (Yellow Banner & Social Row)**: Banner kuning memanjang horizontal dan baris tombol sosial media di bawah.
3. **Layer 20 (Hero Content Text)**: Kolom teks nama "Hi There! I'M DANU" dan deskripsi perkenalan di sisi kanan.
4. **Layer 30 (Foto Profil Danu)**: Foto Danu ditempatkan di pojok kiri bawah (`absolute bottom-0 left-0`), menembus dan berada di atas banner kuning secara mulus.

---

## 2. Struktur Komponen `Home.tsx`

```
Home (Section: #home)
├── Background Ornaments
│   ├── Golden Curve / Line (Kanan Atas)
│   └── Plus / Sparkle Grid Ornaments (+)
├── Foto Danu (Cutout PNG di kiri bawah - Layer z-30)
├── Hero Content Grid (Layer z-20)
│   ├── Kolom Kosong (Spacer Foto Danu)
│   ├── Kolom Identitas:
│   │   ├── "Hi There!" (Italic Serif)
│   │   ├── "I'M DANU" (Kuning & Putih)
│   │   ├── Garis Barbell (●─────────●)
│   │   └── Sub-teks profesi ("I'm a graphic designer...")
│   └── Kolom Deskripsi Kanan:
│       ├── Garis Vertikal Putih (|)
│       └── Teks "Welcome to my creative space..."
└── Bottom Section (Layer z-10)
    ├── Banner Kuning "Software I USE"
    │   ├── Label "Software I" + Garis Penghubung
    │   ├── Bubbly Text "USE"
    │   └── 5 Tool Badges (Ps, Ai, Ae, Canva, Pr)
    └── Baris Tombol Sosial Media
        ├── WhatsApp Card (Ikon WA + Panah Atas-Kanan ↗)
        ├── Instagram Card (Ikon IG + Panah Atas-Kanan ↗)
        └── Gmail Card (Logo Gmail + Panah Atas-Kanan ↗)
```

---

## 3. Langkah-Langkah Pengerjaan (Step-by-Step Plan)

### Tahap 1: Verifikasi Asset & Font
- Pastikan font Google Fonts terhubung di `index.html` (*League Spartan*, *Playfair Display*, *Rubik Bubbles*, *Inter*).
- Pastikan asset foto dan icon tersedia:
  - Foto: `/img/profile/danu.png`
  - Software Icons: `/img/tools-skills/{ps,ai,ae,canva,pr}.png`

### Tahap 2: Implementasi Banner Kuning "Software I USE"
- Atur banner kuning dengan background `#f6ed28`.
- Berikan layout flexbox untuk teks "Software I", garis horizontal, teks "USE", dan daftar ikon tool.
- Gunakan badge gambar atau stylize div box dengan border halus menyerupai UI aslinya.

### Tahap 3: Implementasi Kartu Sosial Media
- Buat tombol WhatsApp dengan background hijau `#24d058`.
- Buat tombol Instagram dengan linear gradient oranye-pink-ungu.
- Buat tombol Gmail dengan background putih dan logo multi-warna Google.
- Tambahkan icon panah miring ke atas (`lucide-react: ArrowUpRight` atau icon panah putih/hitam).

### Tahap 4: Penyesuaian Foto & Ornamen Retro
- Posisikan foto Danu secara `absolute` di sisi kiri bawah agar menumpuk rapi di atas banner kuning.
- Tambahkan elemen cross/plus (`+`) dengan garis putus-putus tipis menyerupai style desain grafis retro.

### Tahap 5: Finishing & Responsivitas
- Optimalkan tata letak agar proporsional pada layar desktop lebar maupun layar mobile/tablet.

---

## 4. Blueprint / Kode Lengkap `Home.tsx`

Berikut adalah kode yang siap dipasang di [`src/pages/sections/Home.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Home.tsx):

```tsx
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const softwareList = [
    { name: "Photoshop", icon: "/img/tools-skills/ps.png", code: "Ps", bg: "bg-[#001e36]", text: "text-[#31a8ff]" },
    { name: "Illustrator", icon: "/img/tools-skills/ai.png", code: "Ai", bg: "bg-[#330000]", text: "text-[#ff9a00]" },
    { name: "After Effects", icon: "/img/tools-skills/ae.png", code: "Ae", bg: "bg-[#00005b]", text: "text-[#9999ff]" },
    { name: "Canva", icon: "/img/tools-skills/canva.png", code: "Canva", isCanva: true },
    { name: "Premiere Pro", icon: "/img/tools-skills/pr.png", code: "Pr", bg: "bg-[#00005b]", text: "text-[#ea77ff]" },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#5b13ec] text-white overflow-hidden select-none font-sans flex flex-col justify-between"
    >
      {/* 1. Ornamen Cross Retro (+) */}
      <div className="absolute top-24 left-[5%] flex items-center justify-center pointer-events-none opacity-70">
        <span className="text-xl font-light text-white">+</span>
        <div className="absolute w-10 border-t border-dashed border-white/40"></div>
        <div className="absolute h-10 border-l border-dashed border-white/40"></div>
      </div>
      <div className="absolute top-[48%] left-[22%] flex items-center justify-center pointer-events-none opacity-80 z-30">
        <span className="text-xl font-light text-white">+</span>
        <div className="absolute w-10 border-t border-dashed border-white/40"></div>
        <div className="absolute h-10 border-l border-dashed border-white/40"></div>
      </div>
      <div className="absolute top-20 right-[5%] flex items-center justify-center pointer-events-none opacity-50">
        <span className="text-sm font-light text-white">+</span>
        <div className="absolute w-8 border-t border-dashed border-white/30"></div>
        <div className="absolute h-8 border-l border-dashed border-white/30"></div>
      </div>

      {/* 2. FOTO DANU (Menempel di sudut kiri bawah & menembus banner kuning) */}
      <div className="absolute left-0 bottom-0 z-30 pointer-events-none flex items-end">
        <img
          src="/img/profile/danu.png"
          alt="Danu"
          className="w-[380px] sm:w-[500px] md:w-[620px] lg:w-[720px] max-h-[95vh] object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      {/* 3. Hero Section (Atas) */}
      <div className="relative z-20 w-full pt-12 md:pt-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Spacer area foto */}
          <div className="hidden md:block md:col-span-4 lg:col-span-4" />

          {/* Kolom Teks Nama */}
          <div className="md:col-span-5 lg:col-span-5 pb-4">
            <h2 className="font-playfair italic text-3xl sm:text-4xl text-white font-normal tracking-wide">
              Hi There!
            </h2>
            <h1 className="font-spartan font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none my-1 flex items-baseline gap-3">
              <span className="text-[#e5fc34]">I'M</span>
              <span className="text-white">DANU</span>
            </h1>

            {/* Garis Horizontal Barbell */}
            <div className="flex items-center my-3 max-w-md">
              <div className="w-2 h-2 rounded-full bg-white shrink-0" />
              <div className="flex-1 h-[2px] bg-white/90" />
              <div className="w-2 h-2 rounded-full bg-white shrink-0" />
            </div>

            <p className="text-xs sm:text-sm text-white/90 font-light max-w-md leading-relaxed">
              I'm a graphic designer, and in my portfolio, you'll find a selection of my best work.
            </p>
          </div>

          {/* Kolom Deskripsi Kanan */}
          <div className="md:col-span-3 lg:col-span-3 border-l-2 border-white pl-4 pb-2 mb-2">
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
              Welcome to my creative space. Here you'll find not only my best work, but also the experiences, ideas, and inspirations behind it. This portfolio is a glimpse into who I am, what I value, and how I express myself through design.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bottom Section (Banner Kuning + Tombol Sosial Media) */}
      <div className="relative z-10 w-full mt-auto">
        {/* BANNER KUNING */}
        <div className="w-full bg-[#f6ed28] text-slate-900 py-3.5 sm:py-4 px-6 sm:px-12 lg:px-20 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-end gap-6 lg:gap-10 md:pl-[24rem] lg:pl-[28rem]">
            {/* Teks Software I USE */}
            <div className="flex flex-col items-start leading-none shrink-0">
              <div className="flex items-center gap-2 w-full">
                <span className="font-playfair italic text-2xl sm:text-3xl text-[#5b13ec] font-semibold">
                  Software I
                </span>
                <div className="h-[2px] bg-[#5b13ec] flex-1 min-w-[2.5rem]" />
              </div>
              <span className="font-bubbles text-6xl sm:text-7xl lg:text-8xl text-[#5b13ec] tracking-tighter -mt-2">
                USE
              </span>
            </div>

            {/* Icon Software Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {softwareList.map((item) => (
                <div
                  key={item.name}
                  className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-lg sm:text-xl shadow-md border border-black/10 overflow-hidden ${
                    item.isCanva
                      ? "rounded-full bg-gradient-to-tr from-[#00c4cc] to-[#7d2ae8] text-white font-serif italic"
                      : `rounded-2xl ${item.bg} ${item.text}`
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="fallback-text">{item.code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BARIS KARTU SOSIAL MEDIA */}
        <div className="w-full bg-[#5b13ec] py-5 sm:py-6 px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:pl-[24rem] lg:pl-[28rem]">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-3.5 bg-[#24d058] hover:bg-[#20bd50] text-white rounded-2xl font-semibold shadow-md transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-.981z" />
                </svg>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/danu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-3.5 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white rounded-2xl font-semibold shadow-md transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>

            {/* Gmail */}
            <a
              href="mailto:danu@example.com"
              className="flex items-center justify-between px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 rounded-2xl font-semibold shadow-md transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-800" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

# Plan Responsif `Home.tsx` — Mobile → Desktop

Dokumen ini berisi rencana detail untuk membuat halaman `Home.tsx` yang saat ini sudah optimal di desktop, agar menjadi **fully responsive** dari layar mobile kecil (320px) hingga desktop besar (1440px+).

---

## 1. Analisis Masalah Saat Ini (Desktop-Only)

Berikut elemen-elemen yang saat ini **belum/kurang responsif** di mobile:

| Elemen | Masalah di Mobile |
|---|---|
| **Foto Danu** | Posisi `absolute -left-[70.8px]` membuat foto terpotong / overflow di layar kecil |
| **Grid Hero Text** | Spacer `md:col-span-4` hidden di mobile → teks tidak punya ruang yang benar |
| **Yellow Banner** | `md:pl-[24rem]` / `lg:pl-[28rem]` hanya cocok desktop — di mobile konten terdorong jauh |
| **Social Media Row** | `md:pl-[24rem]` sama — di mobile terpotong atau sempit |
| **Ornamen Cross (+)** | Posisi `absolute` hardcoded berdasarkan viewport desktop |
| **`overflow-hidden`** | Di mobile konten bisa ter-clip secara tidak terduga |

---

## 2. Breakpoint Strategy (Tailwind CSS v4)

| Prefix | Min-Width | Target Device |
|---|---|---|
| *(none)* | `0px` | Mobile portrait (320px–639px) |
| `sm:` | `640px` | Mobile landscape / tablet kecil |
| `md:` | `768px` | Tablet (iPad portrait) |
| `lg:` | `1024px` | Tablet landscape / laptop kecil |
| `xl:` | `1280px` | Desktop |

---

## 3. Layout Per Breakpoint

### 📱 Mobile (< 768px) — Stack Vertical

```
┌─────────────────────────────┐
│  [bg purple]                │
│  ┌─────────────────────┐    │
│  │  "Hi There!"        │    │ ← teks centered/left, padding normal
│  │  "I'M DANU"         │    │
│  │  ●───────────────●  │    │
│  │  Sub-text         │    │
│  └─────────────────────┘    │
│  ┌─────────────────────┐    │
│  │     [Foto Danu]     │    │ ← foto dalam flow, centered, w-full
│  └─────────────────────┘    │
│  ┌─────────────────────┐    │ ← Yellow Banner tanpa padding kiri
│  │  Software I USE 🎨  │    │
│  └─────────────────────┘    │
│  ┌─────────────────────┐    │ ← 1 kolom, stacked
│  │     [WhatsApp]      │    │
│  │     [Instagram]     │    │
│  │     [Gmail]         │    │
│  └─────────────────────┘    │
└─────────────────────────────┘
```

### 💻 Desktop (≥ 768px) — Full Layered (Kondisi Saat Ini)

Layout saat ini dipertahankan penuh:
- Foto `absolute` di kiri bawah menembus banner kuning
- Grid 12 kolom untuk hero text
- Banner & social row dengan `pl-[24rem]` / `lg:pl-[28rem]`

---

## 4. Perubahan Detail Per Elemen

### 4.1 — Foto Danu (Prioritas Utama)

**Strategi**: relative di mobile (masuk dalam document flow), absolute di `md+`.

```tsx
// SEBELUM:
<div className="absolute -left-[70.8px] bottom-0 z-30 pointer-events-none flex items-end">
  <img className="w-[380px] sm:w-[500px] md:w-[620px] lg:w-[720px] ..." />
</div>

// SESUDAH:
<div className="
  relative flex justify-center items-end w-full mt-4 z-30 pointer-events-none
  md:absolute md:-left-[70.8px] md:bottom-0 md:w-auto md:mt-0
">
  <img className="
    w-[280px] sm:w-[380px] md:w-[500px] lg:w-[620px] xl:w-[720px]
    max-h-[55vh] md:max-h-[90vh]
    object-contain object-bottom drop-shadow-2xl
  " />
</div>
```

### 4.2 — Hero Text Grid

```tsx
// SESUDAH:
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
  {/* Spacer: hidden di mobile */}
  <div className="hidden md:block md:col-span-4 lg:col-span-4" />

  {/* Nama: centered di mobile, left di desktop */}
  <div className="md:col-span-5 pb-4 text-center md:text-left">
    <p className="font-playfair italic text-2xl sm:text-3xl ...">Hi There!</p>
    <h1 className="font-spartan text-5xl sm:text-6xl lg:text-7xl xl:text-8xl ...">
      <span className="text-[#e5fc34]">I'M</span>
      <span className="text-white">DANU</span>
    </h1>
    {/* Barbell: max-w dan margin auto di mobile */}
    <div className="flex items-center my-3 max-w-[280px] sm:max-w-md mx-auto md:mx-0"> ... </div>
    <p className="text-xs sm:text-sm max-w-sm mx-auto md:mx-0"> ... </p>
  </div>

  {/* Deskripsi kanan: hidden di mobile agar tidak sesak */}
  <div className="hidden md:block md:col-span-3 border-l-2 border-white pl-4 pb-2 mb-2">
    <p> ... deskripsi ... </p>
  </div>
</div>
```

### 4.3 — Yellow Banner "Software I USE"

```tsx
// SESUDAH:
<div className="
  max-w-7xl mx-auto
  flex flex-col items-center gap-4    /* mobile: column, centered */
  md:flex-row md:justify-end          /* desktop: row */
  md:pl-[24rem] lg:pl-[28rem]
">
  {/* Label: centered di mobile */}
  <div className="flex flex-col items-center md:items-start shrink-0">
    ...
  </div>

  {/* Icons: wrap dan centered di mobile */}
  <div className="flex flex-wrap justify-center md:justify-start items-center gap-2.5">
    ...
  </div>
</div>
```

### 4.4 — Social Media Buttons

```tsx
// SESUDAH — 1 kolom di mobile, 3 kolom di sm+:
<div className="
  max-w-7xl mx-auto
  grid grid-cols-1 gap-3
  sm:grid-cols-3
  md:pl-[24rem] lg:pl-[28rem]
">
  ... tombol WA / IG / Gmail ...
</div>
```

### 4.5 — Ornamen Cross (+)

```tsx
// Cross tengah (left-[22%]): hidden di mobile — posisi tidak relevan di narrow screen
<div className="hidden md:flex absolute top-[48%] left-[22%] ...">
```

### 4.6 — Section Overflow

```tsx
// SEBELUM:
className="... overflow-hidden ..."

// SESUDAH:
className="... overflow-x-hidden ..." // hanya clip horizontal, konten vertikal tetap scroll
```

---

## 5. Urutan Implementasi

- [ ] **Step 1** — Perbaiki Foto Danu: `relative` di mobile → `md:absolute`
- [ ] **Step 2** — Perbaiki Hero Text Grid: centering & `text-center md:text-left`
- [ ] **Step 3** — Perbaiki Yellow Banner: `flex-col` di mobile, `md:flex-row`
- [ ] **Step 4** — Perbaiki Social Media Row: `grid-cols-1` di mobile, `sm:grid-cols-3`
- [ ] **Step 5** — Sembunyikan ornamen tengah di mobile
- [ ] **Step 6** — Ganti `overflow-hidden` → `overflow-x-hidden`
- [ ] **Step 7** — Testing di semua breakpoint

---

## 6. Target Visual Per Breakpoint

| Breakpoint | Layout |
|---|---|
| `320px` (Mobile S) | Stack vertical; teks → foto → banner → buttons |
| `375px` (Mobile M) | Sama, font sedikit lebih besar |
| `414px` (Mobile L) | Foto lebih besar, spacing lebih nyaman |
| `768px` (Tablet) | Foto absolute di kiri, grid 12 kolom aktif |
| `1024px` (Laptop) | Layout desktop penuh |
| `1280px+` (Desktop) | Layout desktop saat ini (sudah optimal) |

---

## 7. File yang Diubah

| File | Perubahan |
|---|---|
| [`src/pages/sections/Home.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Home.tsx) | **Perubahan utama** — semua responsive classes |
| [`src/index.css`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/index.css) | Tambah utility jika diperlukan (opsional) |

> **Catatan**: Tidak ada komponen baru. Semua perubahan menggunakan Tailwind responsive prefix langsung di `Home.tsx`.

---

# Plan Implementasi: Section "My Portofolio." (Junior & Low-AI Friendly)

Panduan ini dibuat sesederhana mungkin agar mudah dipahami oleh **junior programmer** maupun diproses oleh **low AI**. Semua instruksi dibuat terstruktur langkah-demi-langkah (step-by-step) beserta potongan kodenya.

Section ini akan diletakkan di dalam file [`src/pages/sections/Home.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Home.tsx), tepat di bawah section Hero yang baru saja dibuat.

---

## 1. Analisis Visual Berdasarkan Foto Referensi

Berdasarkan foto yang diberikan, section ini memiliki komponen:

```
┌─────────────────────────────────────────────────────────────┐
│ [Background Ungu: #5b13ec]                                 │
│                                                             │
│       My                                                    │  ← "My" (Tulisan tangan/cursive warna putih)
│      Portofolio.                                            │  ← "Portofolio." (Teks tebal kuning neon)
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ [Kotak Kuning Neon: bg-[#f6ed28] / p-6 rounded-2xl] │   │  ← Container kuning pembungkus 3 card
│   │                                                     │   │
│   │  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │   │
│   │  │  Experience  │  │Graphic Desig.│  │motion grp.│  │   │  ← Header Card (Hitam pekat, teks putih)
│   │  ├──────────────┤  ├──────────────┤  ├───────────┤  │   │
│   │  │              │  │              │  │           │  │   │
│   │  │  [Thumbnail  │  │  [Thumbnail  │  │ [Thumbnail │  │   │  ← Foto proyek/karya (aspect 3:4 atau 4:5)
│   │  │   Karya]     │  │   Karya]     │  │  Karya]   │  │   │
│   │  │           ⤴  │  │           ⤴  │  │        ⤴  │  │   │  ← Ikon panah lengkung ungu di pojok kanan bawah
│   │  └──────────────┘  └──────────────┘  └───────────┘  │   │
│   └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Struktur Data (Data Array)

Agar kode rapi, mudah diedit, dan tidak mengulang-ulang HTML (DRY - *Don't Repeat Yourself*), kita buat satu array data kartu portofolio:

```tsx
const portfolioCategories = [
  {
    id: "experience",
    title: "Experience",
    image: "/img/profile/danu-salinan.png", // Bisa diganti gambar karya nyata
    link: "#experience",
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    image: "/img/profile/danu-jas.png", // Bisa diganti gambar karya grafis
    link: "#graphic-design",
  },
  {
    id: "motion-graphic",
    title: "motion graphic",
    image: "/img/profile/danu.png", // Bisa diganti preview video/motion
    link: "#motion-graphic",
  },
];
```

---

## 3. Strategi Responsif (Mobile → Desktop)

Junior programmer cukup mengingat aturan sederhana Tailwind CSS berikut:

| Breakpoint | Kode Tailwind | Tampilan Kotak Kuning & 3 Kartu |
|---|---|---|
| **Mobile** (< 768px) | Default (`grid-cols-1`) | 3 kartu disusun **menurun vertikal** (1 kolom), padding nyaman agar tidak mepet layar |
| **Tablet** (768px - 1023px) | `md:grid-cols-3` | 3 kartu mulai berjajar ke samping secara fleksibel |
| **Desktop** (≥ 1024px) | `lg:grid-cols-3` | 3 kartu berjajar rapi 3 kolom dengan batas lebar maksimal (`max-w-6xl`) di tengah |

---

## 4. Bedah Komponen Elemen per Elemen

### A. Judul "My Portofolio."
- **"My"**: Teks warna putih, tulisan miring/script, sedikit bertumpuk di atas "Portofolio."
  - Class: `font-playfair italic text-3xl sm:text-4xl md:text-5xl text-white -mb-2 sm:-mb-3 ml-2 z-10`
- **"Portofolio."**: Teks warna kuning neon (`#e5fc34` / `#f6ed28`), font tebal dan padat.
  - Class: `font-spartan font-black text-4xl sm:text-6xl md:text-7xl text-[#f6ed28] tracking-tight`

### B. Wadah Kuning (Yellow Frame Box)
- Warna kuning neon sama persis dengan banner hero.
- Class: `w-full max-w-6xl bg-[#f6ed28] p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl`

### C. Grid 3 Kartu
- Menampilkan 1 kolom di mobile, dan 3 kolom di layar md/lg.
- Class: `grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6`

### D. Tiap Kartu (Card Item)
1. **Header Hitam**:
   - Background: `bg-black text-white`
   - Teks: `font-serif font-bold text-center py-2.5 sm:py-3 px-4 text-base sm:text-lg`
2. **Area Gambar (Thumbnail)**:
   - Aspect ratio seragam: `relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-slate-800`
   - Efek Zoom saat di-hover: `group-hover:scale-105 transition-transform duration-300`
3. **Ikon Panah Lengkung Ungu (Bottom-Right)**:
   - Posisi melayang di pojok kanan bawah: `absolute bottom-3 right-3 z-10`
   - Bentuk panah lengkung khas berwarna ungu (#5b13ec) dengan kontur putih tajam.

---

## 5. Template Kode Siap Pakai (Full Snippet)

Salin kode ini dan letakkan tepat di bawah Hero Section di `Home.tsx`:

```tsx
{/* ============================================================ */}
{/* SECTION: MY PORTOFOLIO (Responsif Mobile -> Desktop)          */}
{/* ============================================================ */}
<section id="portfolio" className="w-full bg-[#5b13ec] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
  <div className="max-w-6xl mx-auto flex flex-col items-center">
    
    {/* 1. Header Judul: "My Portofolio." */}
    <div className="flex flex-col items-start w-full mb-6 sm:mb-8 pl-2 sm:pl-4">
      <span className="font-playfair italic text-3xl sm:text-4xl md:text-5xl text-white -mb-2 sm:-mb-3 ml-2 select-none">
        My
      </span>
      <h2 className="font-spartan font-black text-4xl sm:text-6xl md:text-7xl text-[#f6ed28] tracking-tight leading-none">
        Portofolio.
      </h2>
    </div>

    {/* 2. Container Kuning (Yellow Frame) */}
    <div className="w-full bg-[#f6ed28] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {portfolioCategories.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="group relative flex flex-col bg-white overflow-hidden shadow-lg border-2 border-black/10 transition-transform duration-300 hover:-translate-y-1.5"
          >
            {/* Header Hitam Kartu */}
            <div className="bg-black text-white text-center py-2.5 sm:py-3 px-4 font-serif font-bold text-base sm:text-lg tracking-wide select-none">
              {item.title}
            </div>

            {/* Thumbnail Proyek */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-slate-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Ikon Panah Lengkung Ungu di Pojok Kanan Bawah */}
              <div className="absolute bottom-3 right-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center drop-shadow-md">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-full h-full text-[#5b13ec] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  {/* Outer White Contour */}
                  <path
                    d="M12 36C18 36 28 32 32 20M32 20L22 18M32 20L34 30"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Inner Purple Arrow */}
                  <path
                    d="M12 36C18 36 28 32 32 20M32 20L22 18M32 20L34 30"
                    stroke="#5b13ec"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>

  </div>
</section>
```

---

## 6. Checklist Langkah Implementasi

- [ ] **Langkah 1**: Buka [`src/pages/sections/Home.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Home.tsx).
- [ ] **Langkah 2**: Tambahkan array `portfolioCategories` di dalam komponen `Home()`.
- [ ] **Langkah 3**: Tambahkan markup `<section id="portfolio">` tepat sebelum penutup `</section>` atau di bawah section hero utama.
- [ ] **Langkah 4**: Pastikan gambar thumbnail tersedia di folder `public/img/` (atau gunakan gambar yang sudah ada sebagai placeholder awal).
- [ ] **Langkah 5**: Uji tampilan di mode responsive (Inspect Element: iPhone SE 375px, iPad 768px, Desktop 1280px).

---

# Plan Implementasi Halaman `Experience` (Junior & Low-AI Friendly)

Dokumen ini berisi panduan dan rencana implementasi komprehensif untuk halaman **Experience** ([`src/pages/sections/Experience/Experience.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/Experience.tsx)) berdasarkan acuan desain Gambar 1, Gambar 2, dan Gambar 3.

---

## 1. Analisis Visual & Spesifikasi Desain

### A. Komponen Utama Layar (Berdasarkan Foto Referensi)

1. **Section 1: Hero Experience (Gambar 1)**
   - **Background**: Ungu-Biru Gradient (`bg-[#5b13ec]` / `bg-gradient-to-r from-[#3b82f6] to-[#5b13ec]`) dengan tekstur retro halus.
   - **Judul Raksasa "EXPER I ENCE"**:
     - Teks warna kuning neon (`#e5fc34` / `#f6ed28`), font `League Spartan` (`font-spartan font-black`).
     - Di tengah-tengah antara kata "EXPER" dan "ENCE", terdapat **Foto Danu berdiri memakai jas** (`danu-jas.png` / `danu.png`) yang bertindak melambangkan huruf "I".
     - Aksesori Crop Marks / Cross (`+`) kecil di sudut-sudut huruf "E" awal dan akhir.
   - **Timeline Horizontal (Overview)**:
     - Garis horizontal warna kuning neon (`#e5fc34`) dengan 3 titik node lingkaran kuning (`●`).
     - **Node 1 (2024)**: Teks `2024 (June - December)` di atas garis, Logo **Horison Altama Pandeglang** di bawah garis.
     - **Node 2 (2025)**: Logo **FABULA** di atas garis, Teks `2025 (August - December)` di bawah garis.
     - **Node 3 (2026)**: Teks `2026 (Februari - juli)` di atas garis, Logo **NEO DIGITAL** di bawah garis.

2. **Section 2: Container Detail Experience (Gambar 2 & 3)**
   - **Wadah / Frame Krem**: Kotak besar warna krem / paper texture (`bg-[#f4f1d6]` / `bg-[#ece8cd]`) dengan border tipis pekat dan shadow.
   - **Garis Timeline Vertikal Ungu**: Garis lurus ungu di sebelah kiri beserta lingkaran titik ungu pada tiap entri pengalaman.
   - **Detail Pengalaman**:
     1. **HORISON ALTAMA PANDEGLANG**
        - Deskripsi: *"Horison Altama Pandeglang is a modern hospitality destination strategically located in Pandeglang, Banten. Combining comfort, professional service, and well-appointed facilities, the hotel offers an exceptional experience for both business and leisure travelers."*
        - Posisi/Peran: `as marketing communication` (Teks warna ungu, posisi kanan bawah).
     2. **FABULA**
        - Deskripsi: *"Via Fabula is a creative agency focused on storytelling, and event organizing. Through compelling narratives, innovative creative solutions, and memorable experiences, Via Fabula helps brands connect with their audiences in meaningful and impactful ways."*
        - Posisi/Peran: `as graphic designer` (Teks warna ungu, posisi kanan bawah).
     3. **NEO DIGITAL**
        - Deskripsi: *"Neo Digital is a creative and technology-driven company specializing in digital solutions, innovative marketing strategies, and brand development. By combining creativity with technology, Neo Digital helps businesses strengthen their digital presence and connect effectively with their target audience."*
        - Posisi/Peran: `as visual designer` (Teks warna ungu, posisi kanan bawah).

---

## 2. Struktur Folder & Komponen Modular

Sesuai dengan arsitektur folder yang sudah disiapkan pada [`src/pages/sections/Experience/`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience):

```
src/pages/sections/Experience/
├── Experience.tsx                      ← Main Section Component (Komposer Utama)
├── data/
│   └── experienceData.ts               ← Array Data Statis (Perusahaan, Tahun, Deskripsi, Peran)
└── components/
    ├── ExperienceHero.tsx              ← Sub-komponen Judul Raksasa "EXPER I ENCE" + Foto Danu
    ├── ExperienceTimelineOverview.tsx  ← Sub-komponen Timeline Horizontal (Kuning) + Logo
    ├── ExperienceDetailCard.tsx        ← Sub-komponen Kartu Individu Detail Pengalaman
    └── ExperienceDetailSection.tsx     ← Sub-komponen Container Krem & Garis Vertikal Ungu
```

---

## 3. Strategi Responsif (Mobile → Desktop)

| Breakpoint | Layout Hero & Timeline Overview | Layout Container Detail |
|---|---|---|
| **Mobile (< 768px)** | - Judul `text-4xl sm:text-6xl`<br>- Foto Danu diskalakan rapi<br>- Timeline Horizontal diset `overflow-x-auto` (dapat di-swipe) atau stacked vertikal | - Container krem `p-4 sm:p-6`<br>- Garis vertikal ungu disesuaikan agar tidak menghalangi teks<br>- Teks peran `as ...` rapi di kanan bawah |
| **Tablet (768px - 1023px)** | - Judul `text-6xl md:text-7xl`<br>- Timeline horizontal menyesuaikan lebar layar | - Container krem `p-8 sm:p-10`<br>- Padding dan font-size sedang |
| **Desktop (≥ 1024px)** | - Judul `text-8xl lg:text-9xl` persis Gambar 1<br>- Full Horizontal Timeline | - Container krem lebar `max-w-6xl` di tengah (persis Gambar 2 & 3) |

---

## 4. Blueprint / Kode Lengkap Setiap File

### Step 1: File Data Statis [`src/pages/sections/Experience/data/experienceData.ts`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/data/experienceData.ts)

```typescript
export interface TimelineOverviewItem {
  id: string;
  year: string;
  period: string;
  logo: string;
  companyName: string;
  position: "top" | "bottom"; // Menentukan logo di atas atau di bawah garis horizontal
}

export interface ExperienceDetailItem {
  id: string;
  companyName: string;
  description: string;
  role: string;
}

export const timelineOverviewList: TimelineOverviewItem[] = [
  {
    id: "horison",
    year: "2024",
    period: "(June - December)",
    logo: `${import.meta.env.BASE_URL}img/experience/horison.png`,
    companyName: "HORISON ALTAMA PANDEGLANG",
    position: "top",
  },
  {
    id: "fabula",
    year: "2025",
    period: "(August - December)",
    logo: `${import.meta.env.BASE_URL}img/experience/fabula.png`,
    companyName: "FABULA",
    position: "bottom",
  },
  {
    id: "neodigital",
    year: "2026",
    period: "(Februari - juli)",
    logo: `${import.meta.env.BASE_URL}img/experience/neodigital.png`,
    companyName: "NEO DIGITAL",
    position: "top",
  },
];

export const experienceDetailList: ExperienceDetailItem[] = [
  {
    id: "horison-detail",
    companyName: "HORISON ALTAMA PANDEGLANG",
    description:
      "Horison Altama Pandeglang is a modern hospitality destination strategically located in Pandeglang, Banten. Combining comfort, professional service, and well-appointed facilities, the hotel offers an exceptional experience for both business and leisure travelers.",
    role: "as marketing communication",
  },
  {
    id: "fabula-detail",
    companyName: "FABULA",
    description:
      "Via Fabula is a creative agency focused on storytelling, and event organizing. Through compelling narratives, innovative creative solutions, and memorable experiences, Via Fabula helps brands connect with their audiences in meaningful and impactful ways.",
    role: "as graphic designer",
  },
  {
    id: "neodigital-detail",
    companyName: "NEO DIGITAL",
    description:
      "Neo Digital is a creative and technology-driven company specializing in digital solutions, innovative marketing strategies, and brand development. By combining creativity with technology, Neo Digital helps businesses strengthen their digital presence and connect effectively with their target audience.",
    role: "as visual designer",
  },
];
```

---

### Step 2: Komponen [`ExperienceHero.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceHero.tsx)

```tsx
export default function ExperienceHero() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-8 sm:pt-12 md:pt-16 pb-6 select-none">
      {/* Ornamen Crop Marks (+) */}
      <div className="absolute top-4 left-6 text-white/60 text-lg sm:text-xl font-light">+</div>
      <div className="absolute top-4 right-6 text-white/60 text-lg sm:text-xl font-light">+</div>

      {/* Container Judul EXPER I ENCE */}
      <div className="relative flex items-center justify-center gap-1 sm:gap-2 md:gap-4 font-spartan font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-[#e5fc34]">
        {/* Teks Kiri "EXPER" */}
        <span className="relative">
          EXPER
          <span className="absolute -top-2 -left-2 text-white text-xs font-normal">+</span>
          <span className="absolute -bottom-2 -left-2 text-white text-xs font-normal">+</span>
        </span>

        {/* Foto Danu di Tengah (Menjadi huruf "I") */}
        <div className="relative h-16 sm:h-24 md:h-32 lg:h-40 w-8 sm:w-12 md:w-16 lg:w-20 flex items-end justify-center shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}img/profile/danu-jas.png`}
            alt="Danu"
            className="h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Teks Kanan "ENCE" */}
        <span className="relative">
          ENCE
          <span className="absolute -top-2 -right-2 text-white text-xs font-normal">+</span>
          <span className="absolute -bottom-2 -right-2 text-white text-xs font-normal">+</span>
        </span>
      </div>
    </div>
  );
}
```

---

### Step 3: Komponen [`ExperienceTimelineOverview.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceTimelineOverview.tsx)

```tsx
import { timelineOverviewList } from "../data/experienceData";

export default function ExperienceTimelineOverview() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 overflow-x-auto">
      <div className="min-w-[600px] relative flex flex-col items-center">
        {/* Garis Horizontal Kuning */}
        <div className="relative w-full h-[3px] bg-[#e5fc34] flex items-center justify-between my-16 px-12">
          {/* Ujung Kanan-Kiri Garis Barbell */}
          <div className="absolute left-0 w-2 h-2 rounded-full bg-[#e5fc34]" />
          <div className="absolute right-0 w-2 h-2 rounded-full bg-[#e5fc34]" />

          {/* Node Iterasi 3 Perusahaan */}
          {timelineOverviewList.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Lingkaran Node Kuning */}
              <div className="w-5 h-5 rounded-full bg-[#e5fc34] border-2 border-[#5b13ec] shadow-md z-10" />

              {/* Element Atas Garis */}
              <div className="absolute bottom-8 flex flex-col items-center text-center">
                {item.position === "top" ? (
                  <>
                    <span className="font-spartan font-bold text-lg sm:text-xl text-[#e5fc34]">
                      {item.year}
                    </span>
                    <span className="font-sans italic text-xs text-white/90">
                      {item.period}
                    </span>
                  </>
                ) : (
                  <div className="h-10 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.companyName}
                      className="max-h-8 object-contain filter brightness-0 invert"
                      onError={(e) => {
                        /* Fallback jika logo belum ada */
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="font-bold text-white text-sm">
                      {item.companyName}
                    </span>
                  </div>
                )}
              </div>

              {/* Element Bawah Garis */}
              <div className="absolute top-8 flex flex-col items-center text-center">
                {item.position === "top" ? (
                  <div className="h-10 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.companyName}
                      className="max-h-8 object-contain filter brightness-0 invert"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="font-bold text-white text-sm">
                      {item.companyName}
                    </span>
                  </div>
                ) : (
                  <>
                    <span className="font-spartan font-bold text-lg sm:text-xl text-[#e5fc34]">
                      {item.year}
                    </span>
                    <span className="font-sans italic text-xs text-white/90">
                      {item.period}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

### Step 4: Komponen [`ExperienceDetailCard.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceDetailCard.tsx)

```tsx
import type { ExperienceDetailItem } from "../data/experienceData";

interface ExperienceDetailCardProps {
  item: ExperienceDetailItem;
}

export default function ExperienceDetailCard({ item }: ExperienceDetailCardProps) {
  return (
    <div className="relative pl-8 sm:pl-12 pb-10 last:pb-0">
      {/* Node Lingkaran Ungu di Garis Vertikal */}
      <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-[#5b13ec] border-2 border-white shadow-md z-10" />

      {/* Nama Perusahaan */}
      <h3 className="font-spartan font-bold text-xl sm:text-2xl md:text-3xl text-[#5b13ec] uppercase tracking-wide mb-2">
        {item.companyName}
      </h3>

      {/* Deskripsi Perusahaan */}
      <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed font-normal max-w-4xl mb-3">
        {item.description}
      </p>

      {/* Posisi / Role (Kanan Bawah) */}
      <div className="w-full flex justify-end">
        <span className="font-sans italic text-sm sm:text-base md:text-lg text-[#5b13ec] font-semibold">
          {item.role}
        </span>
      </div>
    </div>
  );
}
```

---

### Step 5: Komponen [`ExperienceDetailSection.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceDetailSection.tsx)

```tsx
import { experienceDetailList } from "../data/experienceData";
import ExperienceDetailCard from "./ExperienceDetailCard";

export default function ExperienceDetailSection() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Frame Krem (Paper Textured Container) */}
      <div className="w-full bg-[#f4f1d6] p-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-black/10 relative">
        {/* Garis Vertikal Ungu di Sisi Kiri */}
        <div className="relative border-l-2 border-[#5b13ec] ml-2 sm:ml-4">
          {experienceDetailList.map((item) => (
            <ExperienceDetailCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

### Step 6: Main Composer [`Experience.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/Experience.tsx)

```tsx
import ExperienceHero from "./components/ExperienceHero";
import ExperienceTimelineOverview from "./components/ExperienceTimelineOverview";
import ExperienceDetailSection from "./components/ExperienceDetailSection";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-[#5b13ec] text-white overflow-x-hidden font-sans py-8 px-4 sm:px-8"
    >
      {/* 1. Hero Section "EXPER I ENCE" */}
      <ExperienceHero />

      {/* 2. Horizontal Timeline Overview (2024 - 2025 - 2026) */}
      <ExperienceTimelineOverview />

      {/* 3. Detail Container Krem Pengalaman */}
      <ExperienceDetailSection />
    </section>
  );
}
```

---

## 5. Checklist Langkah Pengerjaan

- [ ] **Langkah 1**: Buat file data [`experienceData.ts`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/data/experienceData.ts).
- [ ] **Langkah 2**: Buat sub-komponen [`ExperienceHero.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceHero.tsx).
- [ ] **Langkah 3**: Buat sub-komponen [`ExperienceTimelineOverview.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceTimelineOverview.tsx).
- [ ] **Langkah 4**: Buat sub-komponen [`ExperienceDetailCard.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceDetailCard.tsx).
- [ ] **Langkah 5**: Buat sub-komponen [`ExperienceDetailSection.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceDetailSection.tsx).
- [ ] **Langkah 6**: Update [`Experience.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/Experience.tsx).
- [ ] **Langkah 7**: Jalankan `npx tsc --noEmit` untuk verifikasi tipe TypeScript.

