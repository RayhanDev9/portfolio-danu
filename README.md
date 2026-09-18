# 🎨 Danu Prasetyo — Graphic & Motion Designer Portfolio

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

Website portofolio interaktif, modern, dan responsif milik **Danu Prasetyo**, seorang *Graphic Designer & Motion Graphic Specialist*. Dibangun dengan estetika visual **Electric Purple (`#5b13ec`)**, aksen **Neon Yellow (`#e8fb31`)**, efek Glassmorphism, kartu portofolio 3D, mockup smartphone interaktif, modal lightbox (gambar & video), serta navigasi mobile bertingkat terinspirasi dari **Supabase**.

---

## 📌 Daftar Isi
1. [Fitur Utama & Arsitektur Halaman](#1-fitur-utama--arsitektur-halaman)
2. [Peta Rute & Halaman (Sitemap)](#2-peta-rute--halaman-sitemap)
3. [Desain Navigasi (Desktop & Mobile Menu)](#3-desain-navigasi-desktop--mobile-menu)
4. [Showcase & Galeri Portofolio](#4-showcase--galeri-portofolio)
   - [Graphic Design (6 Proyek)](#a-graphic-design-6-proyek)
   - [Motion Graphic (Showcase Interaktif & Video Lightbox)](#b-motion-graphic-showcase-interaktif--video-lightbox)
5. [Panduan Biodata Diri & Pemetaan File Data](#5-panduan-biodata-diri--pemetaan-file-data)
6. [Tech Stack & Library](#6-tech-stack--library)
7. [Struktur Direktori Proyek](#7-struktur-direktori-proyek)
8. [Panduan Menjalankan & Deployment](#8-panduan-menjalankan--deployment)

---

## 1. Fitur Utama & Arsitektur Halaman

- ⚡ **Desain Estetik & Berkarakter**: Perpaduan palet warna ungu vibran `#5b13ec`, kuning neon `#e8fb31`, ornamen retro `+`, dan tipografi tegas League Spartan.
- 📱 **Mobile Navigation Bergaya Supabase**: Menu overlay layar penuh dengan pembatas garis halus, accordion proyek desain dengan rotasi chevron, squarish icon box dengan deskripsi singkat, serta tombol CTA WhatsApp.
- 📁 **3D Interactive Portfolio Cards**: Visualisasi kartu kategori bergaya folder arsip kuning 3D untuk Experience, Graphic Design, dan Motion Graphic.
- 🎬 **Motion Graphic Showcase**: Menampilkan mockup smartphone (rasio 9:16) dan carousel feed dengan popup pemutar video HTML5 interaktif (*Video Lightbox Modal*).
- 🖼️ **Image Lightbox Modal**: Fitur zoom gambar penuh dengan backdrop blur dan dukungan tombol `ESC` di seluruh halaman Graphic Design.
- 📝 **Interactive Contact Form & Direct WA**: Form brief proyek dengan generator pesan instan otomatis ke WhatsApp dan accordion FAQ.

---

## 2. Peta Rute & Halaman (Sitemap)

| Rute URL | Komponen Halaman | Deskripsi Konten |
| :--- | :--- | :--- |
| `/` | `Home.tsx` | Hero retro perkenalan, software banner, social bar, dan 3D portfolio categories |
| `/experience` | `Experience.tsx` | Interactive timeline karir, detail peran perusahaan, dan riwayat pendidikan |
| `/graphic-design/majlis` | `DesignMajlis.tsx` | Portofolio desain branding & media dakwah Majlis Ta'lim |
| `/graphic-design/horison` | `DesignHorison.tsx` | Portofolio materi promosi perhotelan Horison Altama Pandeglang |
| `/graphic-design/astraotoshop` | `DesainAstraotoshop.tsx` | Portofolio ads & promo spare part e-commerce Astra Otoshop |
| `/graphic-design/mister-klinner`| `DesignMisterKlinner.tsx` | Portofolio packaging & konten medsos Mister Klinner |
| `/graphic-design/geonerations` | `DesainGeonerations.tsx` | Portofolio pop culture & konten meme kreatif Geonerations |
| `/graphic-design/via-fabula` | `DesainViaFabula.tsx` | Portofolio storytelling & event branding agency Via Fabula |
| `/motion-graphic` | `GraphicMotion.tsx` | Showcase video motion 9:16 & feed balap dengan Video Modal Player |
| `/creative-journey` | `CreativeJourney.tsx` | Galeri perjalanan kreatif & brand partner |
| `/contact` | `Contact.tsx` | Kartu kontak langsung, form brief WhatsApp, dan accordion FAQ |
| `/profile` | `Profile.tsx` | Foto 3D hero, bio karir, software proficiency bar, dan etos kerja desain |

---

## 3. Desain Navigasi (Desktop & Mobile Menu)

### Desktop Navigation (Pill Melayang)
- Bar navigasi melayang berbentuk kapsul kuning neon (`#e8fb31`) di bagian atas layar.
- Dropdown Graphic Design dengan hover glow ungu.
- Foto profil Danu di pojok kanan pill yang dapat diklik langsung menuju halaman `/profile`.

### Mobile Navigation (Supabase Style Layout & Animation)
- **Top Bar (Tertutup)**: Brand avatar Danu di kiri dan tombol hamburger kuning di kanan.
- **Overlay Menu (Terbuka)**:
  - Header: Avatar + Nama *Danu Prasetyo* (*Graphic & Motion Designer*) di kiri + tombol Close `X` di kanan.
  - List item vertikal bergaris pembatas (`divide-y divide-white/10`).
  - Accordion **Graphic Design**: Menampilkan 6 sub-item lengkap dengan box icon rounded, judul tebal, dan deskripsi singkat.
  - Bottom CTA: Tombol *"Let's Talk on WhatsApp"* tebal berwarna kuning neon serta tautan cepat ke Email dan Instagram.

---

## 4. Showcase & Galeri Portofolio

### A. Graphic Design (6 Proyek)
1. **Majlis Ta'lim**: Identitas visual dakwah, banner kajian, dan tipografi kaligrafi modern.
2. **Horison Altama**: Desain promosi hotel, meeting room, restoran, dan paket kamar.
3. **Astra Otoshop**: Desain e-commerce feed otomotif, banner diskon, dan voucher velg/ban.
4. **Mister Klinner**: Desain kemasan kantong sampah, cling wrap, dan feed tips kebersihan rumah.
5. **Geonerations**: Feed humor pop culture, meme bahasa Jawa Timuran, dan carousel kopi/tato.
6. **Via Fabula**: Wooden blackboard board hero, photo editing retro, dan story event organizing.

### B. Motion Graphic (Showcase Interaktif & Video Lightbox)
- **Hero Title Board**: Papan berbingkai kayu (*wooden frame*) dengan judul tebal **"MOTION GRAFIK"**.
- **Astra Otoshop Showcase**: 5 Smartphone Mockup (9:16) di atas + background sirkuit balap motor dengan 4 feed cards di bawah.
- **Mister Klinner Showcase**: Background alam villa kayu + 7 Mockup Smartphone (4 atas + 3 tengah) + display meja produk di bawah.
- **Interactive Video Modal**: Lightbox pemutar video responsif dengan autoplay, kontrol video, tombol close, dan keyboard shortcut `ESC`.

---

## 5. Panduan Biodata Diri & Pemetaan File Data

Untuk mempermudah pembaruan data biodata diri, seluruh konten telah dipisahkan ke dalam file constants modular:

| Kategori Data | Lokasi File Kode | Variabel / Data yang Diatur |
| :--- | :--- | :--- |
| **Profil & Biodata Pribadi** | `src/pages/sections/Profile/data/profileData.ts` | `PERSONAL_INFO`, `PROFILE_STATS`, `SOFTWARE_SKILLS`, `PROFILE_VALUES` |
| **Kontak, WA Brief, & FAQ** | `src/pages/sections/Contact/data/contactData.ts` | `CONTACT_CHANNELS`, `SERVICE_CATEGORIES`, `FAQ_LIST`, `PROFILE_INFO` |
| **Riwayat Pengalaman Kerja** | `src/pages/sections/Experience/data/experienceData.ts` | `timelineOverviewList`, `experienceDetailList` |
| **Riwayat Pendidikan** | `src/pages/sections/Experience/data/educationData.ts` | `educationList` (SD, SMP, SMK/SMA) |
| **Software Banner (Home)** | `src/pages/sections/Home/data/homeData.ts` | `softwareList`, `portfolioCategories` |
| **Kontak Footer** | `src/components/layout/Footer.tsx` | `contactList` (Gmail, Instagram, WhatsApp) |
| **Video Motion Graphic** | `src/pages/sections/GraphicMotion/data/motionData.ts` | `ASTRA_SMARTPHONES`, `ASTRA_FEED_CARDS`, `MISTER_KLINNER_ITEMS` |

---

## 6. Tech Stack & Library

- **Core**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (`tsc -b`)
- **Build Tool**: Vite 8.3
- **Routing**: React Router v7 (`react-router-dom`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React (`lucide-react`)
- **Fonts**: League Spartan, Inter, Playfair Display, Rubik Bubbles

---

## 7. Struktur Direktori Proyek

```
portfolio-danu/
├── public/
│   ├── img/
│   │   ├── category/             # Gambar kategori portofolio 3D
│   │   ├── desain-astraotoshop/  # Aset desain Astra Otoshop
│   │   ├── desain-geonerations/  # Aset desain Geonerations
│   │   ├── desain-horison.../    # Aset desain Horison Altama
│   │   ├── desain-majlis.../     # Aset desain Majlis Ta'lim
│   │   ├── desain-mr-klinner/    # Aset desain Mister Klinner
│   │   ├── desain-via-fabula/    # Aset desain Via Fabula
│   │   ├── education/            # Logo & foto sekolah
│   │   ├── motion/bg/            # Background sirkuit balap & alam
│   │   ├── profile/              # Foto profil Danu (kasual, formal, avatar)
│   │   ├── tools-skills/         # Ikon software (PS, AI, PR, AE, Canva)
│   │   └── vendor-experienc/     # Logo perusahaan partner kerja
│   └── vidio/
│       └── motion/               # Video motion MP4 (general, mr-klinner, carousel)
├── src/
│   ├── components/
│   │   ├── layout/               # Navbar (Supabase style) & Footer
│   │   └── ui/                   # Tombol & modal reusable
│   ├── pages/
│   │   ├── RootLayout.tsx        # Layout root dengan auto scroll-to-top
│   │   └── sections/
│   │       ├── Contact/          # Halaman Kontak & WA form
│   │       ├── CreativeJourney/  # Halaman Brand Partners
│   │       ├── DesainAstraotoshop/
│   │       ├── DesainGeonerations/
│   │       ├── DesignHorison/
│   │       ├── DesignMajlis/
│   │       ├── DesignMisterKlinner/
│   │       ├── DesainViaFabula/
│   │       ├── Experience/       # Halaman Pengalaman & Pendidikan
│   │       ├── GraphicMotion/    # Halaman Motion Graphic & Video Player
│   │       ├── Home/             # Halaman Utama (Hero, Software, Kategori)
│   │       └── Profile/          # Halaman Profil Lengkap & Statistik
│   ├── App.tsx                   # Konfigurasi router & basename GitHub Pages
│   ├── index.css                 # Konfigurasi Tailwind CSS v4 & theme fonts
│   └── main.tsx                  # Entry point React
├── package.json
└── vite.config.ts
```

---

## 8. Panduan Menjalankan & Deployment

### Menjalankan Secara Lokal
```bash
# 1. Clone repository
git clone https://github.com/RayhanDev9/portfolio-danu.git

# 2. Masuk ke direktori proyek
cd portfolio-danu

# 3. Install seluruh dependensi
npm install

# 4. Jalankan local development server
npm run dev
```

### Build Produksi
```bash
# Kompilasi TypeScript dan bundle Vite
npm run build
```

### Deploy ke GitHub Pages
```bash
# Otomatis build dan deploy ke branch gh-pages
npm run deploy
```

---
*© 2026 Danu Prasetyo. All rights reserved.*
