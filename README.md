# 🚀 Implementation Plan: Section Profile (Responsive & Modern Portfolio)

Dokumen ini adalah panduan teknis langkah demi langkah (*step-by-step implementation plan*) untuk membangun halaman **Profile (Tentang Saya / Personal Profile)** yang estetik, modern, interaktif, dan responsif, serasi dengan bahasa desain portfolio **Danu** (Electric Purple `#5b13ec`, Aksen Kuning Neon `#e8fb31`, Ornamen Retro `+`, Card Glassmorphism, dan Tipografi Spartan).

Rencana ini dirancang khusus agar mudah dieksekusi oleh **Junior Programmer** maupun **AI Model** tanpa kebingungan.

---

## 📌 Daftar Isi
1. [Ringkasan & Visual Concept](#1-ringkasan--visual-concept)
2. [Update Navbar: Clickable Profile Picture](#2-update-navbar-clickable-profile-picture)
3. [Struktur Folder & File](#3-struktur-folder--file)
4. [Daftar Aset Media & Path Mapping](#4-daftar-aset-media--path-mapping)
5. [Design Tokens & Style Guide](#5-design-tokens--style-guide)
6. [Data Constants (`profileData.ts`)](#6-data-constants-profiledatats)
7. [Spesifikasi & Panduan Komponen](#7-spesifikasi--panduan-komponen)
   - [Komponen 1: Ornamen Retro Cross (`CrossOrnaments.tsx`)](#komponen-1-ornamen-retro-cross-crossornamentstsx)
   - [Komponen 2: Profile Hero & Bio Section (`ProfileHero.tsx`)](#komponen-2-profile-hero--bio-section-profileherotsx)
   - [Komponen 3: Stats & Career Highlights (`ProfileStats.tsx`)](#komponen-3-stats--career-highlights-profilestatstsx)
   - [Komponen 4: Software & Design Skills (`ProfileSkills.tsx`)](#komponen-4-software--design-skills-profileskillstsx)
   - [Komponen 5: Design Philosophy & Work Principles (`ProfileValues.tsx`)](#komponen-5-design-philosophy--work-principles-profilevaluestsx)
   - [Komponen 6: Call To Action Banner (`ProfileCTA.tsx`)](#komponen-6-call-to-action-banner-profilectatsx)
8. [Kode Lengkap Komponen Utama](#8-kode-lengkap-komponen-utama)
9. [Responsive Matrix (Mobile / Tablet / Desktop)](#9-responsive-matrix-mobile--tablet--desktop)
10. [Langkah Eksekusi & Verifikasi](#10-langkah-eksekusi--verifikasi)

---

## 1. Ringkasan & Visual Concept

Halaman **Profile** adalah representasi profesional dan personal tentang **Danu Rayhan**, seorang Graphic Designer & Motion Designer. Halaman ini menyajikan bio komprehensif, filosofi desain, pengalaman, kemampuan software, serta statistik pencapaian karir.

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR (Floating Pill Kuning - Foto Profil Bisa Diklik)     │
└─────────────────────────────────────────────────────────────┘
                               │
               [ Jarak Aman Padding Atas: pt-32 / pt-40 ]
                               │
┌─────────────────────────────────────────────────────────────┐
│ 1. PROFILE HERO & BIO (2 Kolom: Foto 3D + Cerita Karir)     │
│    - Kiri: Foto Danu Frame Kuning + Floating Badges         │
│    - Kanan: Judul Spartan "DANU RAYHAN", Bio, CTA Buttons   │
└─────────────────────────────────────────────────────────────┘
                               │
┌─────────────────────────────────────────────────────────────┐
│ 2. KEY STATS & NUMBERS (Grid 4 Kartu Glassmorphism)         │
│    - 5+ Tahun Pengalaman | 50+ Proyek Desain                │
│    - 15+ Brand Partner   | 100% On-Time Delivery            │
└─────────────────────────────────────────────────────────────┘
                               │
┌─────────────────────────────────────────────────────────────┐
│ 3. SOFTWARE & SKILLS SHOWCASE                               │
│    - Card Software Icons (PS, AI, PR, AE, Canva) + Level Bar│
│    - Chip Keahlian Utama (Branding, Feed Medsos, Motion, dll)│
└─────────────────────────────────────────────────────────────┘
                               │
┌─────────────────────────────────────────────────────────────┐
│ 4. DESIGN VALUES & WORK ETHIC (3 Kartu Prinsip Kerja)       │
│    - Story-Driven | Audience-Centric | Precision & Aesthetic│
└─────────────────────────────────────────────────────────────┘
                               │
┌─────────────────────────────────────────────────────────────┐
│ 5. BOTTOM CTA BANNER: AJAKAN KOLABORASI KE PAGE CONTACT     │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Update Navbar: Clickable Profile Picture

Agar ketika pengguna mengklik foto profil di Navbar (baik di desktop maupun mobile) langsung berpindah ke halaman `/profile`, file `src/components/layout/Navbar.tsx` akan dibungkus dengan `<Link to="/profile">`:

### Perubahan di `src/components/layout/Navbar.tsx`:
1. **Desktop (Pojok Kanan Pill)**:
   ```tsx
   {/* Foto Profil — Klik langsung ke /profile */}
   <Link
     to="/profile"
     title="Lihat Profil Danu"
     className="ml-2 flex-shrink-0 transition-transform duration-200 hover:scale-110 active:scale-95"
   >
     <img
       src={`${import.meta.env.BASE_URL}img/profile/danu-jas.png`}
       alt="Danu Profile"
       className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover object-top border-2 shadow-md ${
         currentPath === "/profile"
           ? "border-white ring-2 ring-[#5b13ec]"
           : "border-[#5b13ec]"
       }`}
     />
   </Link>
   ```

2. **Mobile (Pojok Kiri Atas)**:
   ```tsx
   {/* Foto profil mobile — Klik langsung ke /profile */}
   <Link
     to="/profile"
     title="Lihat Profil Danu"
     className="transition-transform duration-200 hover:scale-105 active:scale-95"
   >
     <img
       src={`${import.meta.env.BASE_URL}img/profile/danu.png`}
       alt="Danu"
       className={`w-10 h-10 rounded-full object-cover object-top border-2 shadow-md ${
         currentPath === "/profile"
           ? "border-white ring-2 ring-[#e8fb31]"
           : "border-[#e8fb31]"
       }`}
     />
   </Link>
   ```

---

## 3. Struktur Folder & File

Susun file secara rapi dan modular di dalam folder `src/pages/sections/Profile/`:

```
src/pages/sections/Profile/
├── Profile.tsx                        # File orchestrator utama
├── components/
│   ├── ProfileHero.tsx                # Section 1: Hero foto 3D + bio & action buttons
│   ├── ProfileStats.tsx               # Section 2: 4 Card statistik karir & pencapaian
│   ├── ProfileSkills.tsx              # Section 3: Software proficiency & core skills
│   ├── ProfileValues.tsx              # Section 4: 3 Kartu filosofi & etos kerja desain
│   ├── ProfileCTA.tsx                 # Section 5: Banner ajakan kolaborasi
│   └── CrossOrnaments.tsx             # Ornamen retro (+) khas tema Danu
└── data/
    └── profileData.ts                 # Data bio, skills, software icons, & stats
```

---

## 4. Daftar Aset Media & Path Mapping

Semua aset lokal menggunakan prefix dinamis `import.meta.env.BASE_URL`:

```typescript
const BASE = import.meta.env.BASE_URL;
```

### Aset yang Digunakan:
1. **Foto Profil Utama**: `${BASE}img/profile/danu.png` (Foto kasual Danu)
2. **Foto Profil Jas/Formal**: `${BASE}img/profile/danu-jas.png` (Foto jas Danu)
3. **Software & Skill Icons**:
   - `${BASE}img/tools-skills/ps.png` (Photoshop)
   - `${BASE}img/tools-skills/ai.png` (Illustrator)
   - `${BASE}img/tools-skills/pr.png` (Premiere Pro)
   - `${BASE}img/tools-skills/ae.png` (After Effects)
   - `${BASE}img/tools-skills/canva.png` (Canva)

---

## 5. Design Tokens & Style Guide

| Elemen | Nilai / Kelas Tailwind | Catatan Visual |
| :--- | :--- | :--- |
| **Main Background** | `bg-gradient-to-b from-[#5b13ec] via-[#4811be] to-[#340c8c]` | Ungu vibran royalti khas Danu |
| **Accent Yellow** | `#e8fb31` / `bg-[#e8fb31] text-[#1a1a1a]` | Aksen kuning neon cerah untuk highlight & tombol |
| **Glassmorphism Card**| `bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl` | Kartu transparan elegan |
| **Heading Font** | `font-spartan font-black uppercase tracking-tight` | Tipografi Spartan tegas |
| **Navbar Offset** | `pt-32 sm:pt-36 md:pt-40` | Jarak aman anti-nabrak floating navbar |

---

## 6. Data Constants (`profileData.ts`)

Buat file baru di `src/pages/sections/Profile/data/profileData.ts`:

```typescript
const BASE = import.meta.env.BASE_URL;

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: "lightbulb" | "target" | "palette";
}

// 1. Data Personal Danu
export const PERSONAL_INFO = {
  name: "Danu Rayhan",
  tagline: "Graphic Designer & Creative Visual Specialist",
  about:
    "Saya adalah seorang Graphic Designer dan Motion Graphic Enthusiast yang berfokus pada pembuatan identitas visual yang kuat, konten media sosial yang berdampak, dan desain berorientasi pada cerita (story-driven design). Dengan pengalaman menangani berbagai brand dari skala lokal hingga nasional, saya selalu memadukan estetika modern dengan strategi komunikasi visual yang relevan bagi audiens.",
  location: "Jawa Timur, Indonesia",
  experienceYears: "5+ Tahun",
  avatar: `${BASE}img/profile/danu.png`,
  formalAvatar: `${BASE}img/profile/danu-jas.png`,
};

// 2. Data Statistik Karir
export const PROFILE_STATS: StatItem[] = [
  {
    id: "stat-1",
    value: "5+",
    label: "Tahun Pengalaman",
    sublabel: "Di industri kreatif & desain",
  },
  {
    id: "stat-2",
    value: "50+",
    label: "Proyek Selesai",
    sublabel: "Feed, poster, branding & motion",
  },
  {
    id: "stat-3",
    value: "15+",
    label: "Brand Partner",
    sublabel: "Kolaborasi agensi & UMKM",
  },
  {
    id: "stat-4",
    value: "100%",
    label: "On-Time Delivery",
    sublabel: "Dedikasi & kualitas terbaik",
  },
];

// 3. Software Proficiency
export const SOFTWARE_SKILLS: SkillItem[] = [
  {
    name: "Adobe Photoshop",
    level: 95,
    icon: `${BASE}img/tools-skills/ps.png`,
    description: "Photo manipulation, social media feed, & composite editing.",
  },
  {
    name: "Adobe Illustrator",
    level: 90,
    icon: `${BASE}img/tools-skills/ai.png`,
    description: "Vector illustration, logo branding, & vector assets.",
  },
  {
    name: "Adobe Premiere Pro",
    level: 85,
    icon: `${BASE}img/tools-skills/pr.png`,
    description: "Video editing, color grading, & pacing storytelling.",
  },
  {
    name: "Adobe After Effects",
    level: 80,
    icon: `${BASE}img/tools-skills/ae.png`,
    description: "Motion graphics, title animation, & visual effects.",
  },
  {
    name: "Canva Pro",
    level: 92,
    icon: `${BASE}img/tools-skills/canva.png`,
    description: "Rapid social media templates & collaborative client designs.",
  },
];

// 4. Kategori Keahlian Desain (Chips)
export const CORE_CAPABILITIES = [
  "Social Media Feed & Carousel Design",
  "Visual Branding & Identity Guidelines",
  "Motion Graphics & Micro-Animations",
  "Event & Promotional Posters",
  "Packaging & Merchandise Design",
  "Creative Direction & Concept Development",
];

// 5. Nilai & Prinsip Kerja
export const PROFILE_VALUES: ValueItem[] = [
  {
    id: "val-1",
    title: "Story-Driven Concept",
    description:
      "Desain bukan hanya tentang tampilan visual, tetapi bagaimana menyampaikan pesan dan cerita yang menyentuh emosi audiens.",
    icon: "lightbulb",
  },
  {
    id: "val-2",
    title: "Audience-Centric Approach",
    description:
      "Menyesuaikan gaya visual, tone-of-voice, dan tipografi agar tepat sasaran sesuai demografi audiens brand klien.",
    icon: "target",
  },
  {
    id: "val-3",
    title: "Precision & Visual Excellence",
    description:
      "Perhatian mendalam pada detail, hierarchy, balance warna, serta finishing yang rapi dan memukau.",
    icon: "palette",
  },
];
```

---

## 7. Spesifikasi & Panduan Komponen

### Komponen 1: Ornamen Retro Cross (`CrossOrnaments.tsx`)
- Menampilkan ornamen `+` kuning `#e8fb31` dan putih berkedip lembut di latar belakang.

### Komponen 2: Profile Hero & Bio Section (`ProfileHero.tsx`)
- **Spacing**: `pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16`.
- **Layout 2 Kolom**:
  - **Sisi Kiri**: Foto profil Danu dengan bingkai ganda kuning `#e8fb31`, bayangan 3D, dan floating badge *"Creative Visual Specialist"*.
  - **Sisi Kanan**: Pill badge *"🟢 ABOUT DANU RAYHAN"*, judul besar Spartan, teks narasi bio, serta 2 tombol CTA (Download Resume & Hubungi Saya).

### Komponen 3: Stats & Career Highlights (`ProfileStats.tsx`)
- Grid 4 kolom (`grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6`).
- Setiap kartu memiliki angka besar kuning `#e8fb31`, judul tebal putih, dan sublabel deskriptif.

### Komponen 4: Software & Design Skills (`ProfileSkills.tsx`)
- Grid kartu software dengan icon resmi (`ps`, `ai`, `pr`, `ae`, `canva`), progress bar persentase, dan chip keahlian utama.

### Komponen 5: Design Philosophy & Work Principles (`ProfileValues.tsx`)
- 3 kartu prinsip kerja dengan icon Lucide (`Lightbulb`, `Target`, `Palette`).

### Komponen 6: Call To Action Banner (`ProfileCTA.tsx`)
- Banner ajakan kolaborasi di bagian bawah yang mengarahkan user ke halaman `/contact`.

---

## 8. Kode Lengkap Komponen Utama

### A. `CrossOrnaments.tsx`
```tsx
export default function CrossOrnaments() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <div className="absolute top-28 left-6 sm:left-12 text-[#e8fb31] text-2xl sm:text-3xl font-black opacity-60 animate-pulse">
        +
      </div>
      <div className="absolute top-48 left-20 sm:left-32 text-white text-xl sm:text-2xl font-black opacity-40">
        +
      </div>
      <div className="absolute top-32 right-8 sm:right-16 text-[#e8fb31] text-3xl sm:text-4xl font-black opacity-70 animate-pulse">
        +
      </div>
      <div className="absolute top-64 right-24 text-white text-lg sm:text-xl font-black opacity-30">
        +
      </div>
      <div className="absolute bottom-40 left-10 text-[#e8fb31] text-3xl font-black opacity-50">
        +
      </div>
      <div className="absolute bottom-24 right-12 text-white text-2xl sm:text-3xl font-black opacity-40 animate-pulse">
        +
      </div>
    </div>
  );
}
```

---

### B. `ProfileHero.tsx`
```tsx
import { Link } from "react-router-dom";
import { Sparkles, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data/profileData";

export default function ProfileHero() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-40 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* 1. Sisi Kiri: Foto Profil 3D (5 Kolom) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#e8fb31] to-purple-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

            {/* Frame Kartu Foto */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-4 border-[#e8fb31] bg-[#5b13ec] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#e8fb31] text-[#1a1a1a] px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border-2 border-white">
              <Sparkles className="w-5 h-5 fill-current" />
              <div>
                <span className="block font-spartan font-black text-sm sm:text-base leading-none">
                  5+ Tahun
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider block">
                  Pengalaman
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Sisi Kanan: Bio & Deskripsi (7 Kolom) */}
        <div className="lg:col-span-7 text-center lg:text-left text-white">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e8fb31] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Creative Visual Specialist</span>
          </div>

          {/* Nama & Tagline */}
          <h1 className="font-spartan font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-none mb-3">
            DANU <span className="text-[#e8fb31]">RAYHAN</span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-200 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 text-[#e8fb31]" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          {/* Paragraf Bio */}
          <p className="text-sm sm:text-base md:text-lg text-purple-100/90 leading-relaxed font-normal mb-8 max-w-2xl mx-auto lg:mx-0">
            {PERSONAL_INFO.about}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3.5 rounded-full bg-[#e8fb31] hover:bg-[#d8ea20] text-[#1a1a1a] font-spartan font-black text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 no-underline"
            >
              <span>Hubungi Saya</span>
              <MessageCircle className="w-4 h-4" />
            </Link>

            <Link
              to="/creative-journey"
              className="px-6 sm:px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-spartan font-bold text-sm sm:text-base uppercase tracking-wider backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 no-underline"
            >
              <span>Lihat Portofolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

### C. `ProfileStats.tsx`
```tsx
import { PROFILE_STATS } from "../data/profileData";

export default function ProfileStats() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PROFILE_STATS.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-7 text-center shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
          >
            <h3 className="font-spartan font-black text-4xl sm:text-5xl text-[#e8fb31] mb-1">
              {item.value}
            </h3>
            <p className="font-bold text-sm sm:text-base text-white mb-0.5">
              {item.label}
            </p>
            <span className="text-[11px] sm:text-xs text-purple-200/80">
              {item.sublabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

### D. `ProfileSkills.tsx`
```tsx
import { SOFTWARE_SKILLS, CORE_CAPABILITIES } from "../data/profileData";

export default function ProfileSkills() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#e8fb31] block mb-2">
            Expertise & Workflow
          </span>
          <h2 className="font-spartan font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase">
            Software & Keahlian
          </h2>
        </div>

        {/* 1. Software Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SOFTWARE_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="bg-black/20 border border-white/10 rounded-2xl p-5 hover:bg-black/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">
                      {skill.name}
                    </h4>
                    <span className="text-xs font-black text-[#e8fb31]">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                    <div
                      className="h-full bg-[#e8fb31] rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-purple-200/80 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Core Capabilities Chips */}
        <div>
          <h4 className="text-center font-bold text-sm uppercase tracking-wider text-purple-200 mb-4">
            Spesialisasi Desain
          </h4>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {CORE_CAPABILITIES.map((cap) => (
              <span
                key={cap}
                className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm shadow-sm"
              >
                ✓ {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

### E. `ProfileValues.tsx`
```tsx
import { Lightbulb, Target, Palette } from "lucide-react";
import { PROFILE_VALUES } from "../data/profileData";

export default function ProfileValues() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
      <div className="text-center mb-10">
        <span className="text-xs font-black uppercase tracking-wider text-[#e8fb31] block mb-2">
          Work Principles
        </span>
        <h2 className="font-spartan font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase">
          Filosofi & Nilai Desain
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROFILE_VALUES.map((val) => (
          <div
            key={val.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#e8fb31] text-[#1a1a1a] flex items-center justify-center mb-5 shadow-md">
                {val.icon === "lightbulb" && <Lightbulb className="w-6 h-6" />}
                {val.icon === "target" && <Target className="w-6 h-6" />}
                {val.icon === "palette" && <Palette className="w-6 h-6" />}
              </div>
              <h3 className="font-spartan font-black text-xl text-white mb-3">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed font-normal">
                {val.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

### F. `ProfileCTA.tsx`
```tsx
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function ProfileCTA() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#e8fb31] text-[#1a1a1a] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-spartan font-black text-2xl sm:text-4xl uppercase tracking-tight leading-tight mb-2">
            Tertarik Berkolaborasi?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-800 font-medium max-w-xl">
            Mari diskusikan kebutuhan desain, branding, atau motion graphic Anda bersama Danu Rayhan.
          </p>
        </div>

        <Link
          to="/contact"
          className="px-8 py-4 rounded-full bg-[#5b13ec] hover:bg-[#4811be] text-white font-spartan font-black text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 no-underline flex-shrink-0"
        >
          <span>Hubungi Saya Sekarang</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
```

---

### G. `Profile.tsx` (Root Orchestrator)
```tsx
import CrossOrnaments from "./components/CrossOrnaments";
import ProfileHero from "./components/ProfileHero";
import ProfileStats from "./components/ProfileStats";
import ProfileSkills from "./components/ProfileSkills";
import ProfileValues from "./components/ProfileValues";
import ProfileCTA from "./components/ProfileCTA";

export default function Profile() {
  return (
    <main
      id="profile"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#5b13ec] via-[#4811be] to-[#340c8c] text-white overflow-x-hidden font-sans selection:bg-[#e8fb31] selection:text-slate-900 flex flex-col justify-between"
    >
      {/* 1. Retro Cross Ornaments (+) */}
      <CrossOrnaments />

      {/* 2. Hero Section: Foto 3D + Bio + CTA */}
      <ProfileHero />

      {/* 3. Stats & Highlights */}
      <ProfileStats />

      {/* 4. Software & Skills Proficiency */}
      <ProfileSkills />

      {/* 5. Work Principles & Values */}
      <ProfileValues />

      {/* 6. Bottom CTA Banner */}
      <ProfileCTA />
    </main>
  );
}
```

---

## 9. Responsive Matrix (Mobile / Tablet / Desktop)

| Viewport | Lebar Layar | Hero Section | Stats Grid | Skills Grid | Principles Grid |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile (Small)** | `< 640px` (375px - 425px) | Padding top `pt-32`, Judul `text-4xl`, Stack vertikal | 2 Kolom (`grid-cols-2`) | 1 Kolom (`grid-cols-1`) | 1 Kolom (`grid-cols-1`) |
| **Tablet** | `640px - 1023px` (768px) | Padding top `pt-36`, Judul `text-6xl`, Stack vertikal lapang | 2 Kolom (`grid-cols-2`) | 2 Kolom (`grid-cols-2`) | 2 Kolom (`grid-cols-2`) |
| **Desktop** | `≥ 1024px` (1024px - 1440px) | Padding top `pt-40`, Judul `text-7xl`, 2 Kolom berdampingan | 4 Kolom (`grid-cols-4`) | 3 Kolom (`grid-cols-3`) | 3 Kolom (`grid-cols-3`) |

---

## 10. Langkah Eksekusi & Verifikasi

Bagi developer / AI yang akan mengimplementasikan:

1. **Update `Navbar.tsx`**:
   - Bungkus gambar profil di desktop dan mobile dengan `<Link to="/profile">` agar langsung membuka halaman `/profile` saat diklik.
2. **Buat file data**: `src/pages/sections/Profile/data/profileData.ts`
3. **Buat subkomponen**:
   - `src/pages/sections/Profile/components/CrossOrnaments.tsx`
   - `src/pages/sections/Profile/components/ProfileHero.tsx`
   - `src/pages/sections/Profile/components/ProfileStats.tsx`
   - `src/pages/sections/Profile/components/ProfileSkills.tsx`
   - `src/pages/sections/Profile/components/ProfileValues.tsx`
   - `src/pages/sections/Profile/components/ProfileCTA.tsx`
4. **Update orchestrator utama**:
   - Ganti isi `src/pages/sections/Profile/Profile.tsx` dengan komponen orchestrator di atas.
5. **Verifikasi Build**:
   - Jalankan `npm run build` di terminal untuk memastikan tidak ada error TypeScript atau missing import.
6. **Verifikasi Tampilan di Browser**:
   - Klik foto profil di Navbar untuk memastikan navigasi langsung ke `/profile`.
   - Pastikan jarak navbar di bagian atas tidak menutupi judul profil.
   - Periksa responsivitas pada layar Mobile, Tablet, dan Desktop.
