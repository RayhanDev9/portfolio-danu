# 🚀 Plan Implementasi: Desain Astra Otoshop Section

> **Dibuat:** 2026-09-18  
> **File Utama:** `src/pages/sections/DesainAstraotoshop/DesainAstraotoshop.tsx`  
> **Folder Aset:** `public/img/desain-astraotoshop/` (bg, design-lama, design-baru, ads-design, design-thumbnail)  
> **Target Audience:** Junior Developer / AI Assistant  

---

## 📸 Analisis 6 Bagian Desain (Dari Atas ke Bawah)

| No | Section | Judul / Komponen | Elemen Visual & Konten | Background |
|:---|:---|:---|:---|:---|
| **1** | **Hero Section** | `AstraHero.tsx` | • Judul besar **ASTRA OTOSHOP** (biru muda + outline putih tebal)<br>• Card deskripsi biru berlogo `ASTRAOtoshop.com`<br>• Toko Aspira Motoquick & jalan raya | `public/img/desain-astraotoshop/bg/bg-1.jpg` |
| **2** | **Section 2: Style Lama** | `OldStyleSection.tsx` | • Judul **STYLE DESIGN LAMA** (kuning bold + stroke biru tua)<br>• Grid 8 kartu postingan sosial media lama (5 atas, 3 bawah kiri)<br>• Motor balap Moto GP di trek aspal kanan bawah | `public/img/desain-astraotoshop/bg/bg-2.jpg` |
| **3** | **Section 3: Style Baru** | `NewStyleSection.tsx` | • Judul **STYLE DESIGN VERSI BARU** (putih miring 3D + pita confetti emas)<br>• Badge keunggulan desain baru 3D<br>• 4 kartu sorotan desain baru modern | `public/img/desain-astraotoshop/bg/bg-3.jpg` |
| **4** | **Section 4: Ads Design** | `AdsDesignSection.tsx` | • Judul **ADS DESIGN** (putih miring 3D + confetti emas)<br>• Grid 8 kartu banner iklan promo e-voucher, ban, oli, dan aki<br>• Latar lintasan atletik / sirkuit | `public/img/desain-astraotoshop/bg/bg-4.jpg` |
| **5** | **Section 5: Feed Design** | `FeedDesignSection.tsx` | • Judul **FEED DESIGN** (putih miring 3D bold)<br>• Grid 10 kartu konten feed Instagram (2 baris x 5 kolom)<br>• Latar pemandangan perbukitan hijau | `public/img/desain-astraotoshop/bg/bg-5.jpg` |
| **6** | **Section 6: Thumbnail Design** | `ThumbnailDesignSection.tsx` | • Judul **THUMBNAIL DESIGN** (putih miring 3D bold)<br>• Grid 4 kartu thumbnail vertikal rasio 9:16 (video Gaikindo/Reels)<br>• Latar sirkuit MotoGP pantai perbukitan | `public/img/desain-astraotoshop/bg/bg-6.jpg` |

---

## 📁 Struktur File & Arsitektur

```
src/pages/sections/DesainAstraotoshop/
├── DesainAstraotoshop.tsx           # [ROOT] Menyatukan ke-6 section dengan urutan rapi
├── data/
│   └── astraData.ts                 # [DATA] Objek data path gambar, judul, dan deskripsi
└── components/
    ├── AstraHero.tsx                # [1] Section Hero + Jarak Navbar
    ├── OldStyleSection.tsx          # [2] Section Style Design Lama
    ├── NewStyleSection.tsx          # [3] Section Style Design Versi Baru
    ├── AdsDesignSection.tsx         # [4] Section Ads Design
    ├── FeedDesignSection.tsx        # [5] Section Feed Design
    ├── ThumbnailDesignSection.tsx   # [6] Section Thumbnail Design (Paling Bawah)
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

## 📱 Responsiveness Matrix

| Breakpoint | Lebar Layar | Layout Hero | Grid Style Lama | Grid Ads | Grid Feed | Grid Thumbnail |
|:---|:---|:---|:---|:---|:---|:---|
| **Mobile (xs/sm)** | 320px – 640px | Judul 2.5rem, Card full-width | 2 kolom | 2 kolom | 2 kolom | 2 kolom |
| **Tablet (md)** | 768px – 1024px | Judul 4.5rem, Card 2 kolom | 3 - 4 kolom | 3 - 4 kolom | 3 - 4 kolom | 2 - 4 kolom |
| **Desktop (lg/xl)** | 1024px – 1440px+ | Judul 7rem - 9rem, Card max-w-xl | 5 kolom (5+3) | 4 kolom | 5 kolom (2 baris) | 4 kolom (9:16) |
