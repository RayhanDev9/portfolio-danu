# Plan: DesignHorison Section

> Dibuat: 2026-09-18
> File utama: `src/pages/sections/DesignHorison/DesignHorison.tsx`
> Referensi desain: 4 screenshot (Hero, Meeting Room, Wedding, Hotel Room)

---

## Analisis 4 Desain dari Screenshot

| No | Section | Isi Utama | Warna |
|----|---------|-----------|-------|
| 1 | HorisonHero | Judul HORISON besar, subtitle ALTAMA PANDEGLANG, deskripsi+logo, 3 preview gambar bawah | Biru `#1a90d9` |
| 2 | MeetingRoomSection | Judul DESIGN MEETING ROOM, grid 5 kartu gambar meeting | Biru + putih |
| 3 | WeddingSection | Judul DESIGN WEDDING, 2 thumbnail kiri + 1 poster besar kanan | Biru |
| 4 | HotelRoomSection | Judul DESIGN HOTEL ROOM, gambar sosmed kiri + kartu promo kamar | Biru |

---

## Struktur File yang Dibuat

```
src/pages/sections/DesignHorison/
├── DesignHorison.tsx               [MODIFY] Root component — rakit semua section
├── components/
│   ├── HorisonHero.tsx             [NEW] Section 1: Judul + deskripsi + logo + 3 preview
│   ├── MeetingRoomSection.tsx      [NEW] Section 2: Judul + grid 5 gambar meeting
│   ├── WeddingSection.tsx          [NEW] Section 3: Thumbnail kiri + poster besar kanan
│   └── HotelRoomSection.tsx        [NEW] Section 4: Judul + grid gambar promo kamar
└── data/
    └── horisonData.ts              [NEW] Semua data: teks, path gambar, alt-text
```

---

## STEP 1 — horisonData.ts

```ts
const BASE = import.meta.env.BASE_URL;
const DIR = BASE + 'img/desain-horison-altama-pandeglang';
const VENDOR = BASE + 'img/vendor-experienc';

export const horisonData = {
  hero: {
    title1: 'HORISON',
    title2: 'ALTAMA PANDEGLANG',
    description:
      "Hotel Horison Altama Pandeglang is a hotel located in Pandeglang, Banten, " +
      "offering comfortable accommodation and facilities to meet guests' needs for " +
      "leisure, business, and other activities. The hotel provides a modern atmosphere, " +
      "friendly service, and a comfortable environment for visitors.",
    logo: VENDOR + '/horison.png',
    previewImages: [
      DIR + '/meeting-room/meeting-room-2.png',
      DIR + '/weeding/weeding-1.png',
      DIR + '/weeding/weeding-3.png',
    ],
  },
  meetingRoom: {
    images: [
      DIR + '/meeting-room/metting-room-1.png',
      DIR + '/meeting-room/meeting-room-2.png',
      DIR + '/meeting-room/meetingroom-3.png',
      DIR + '/meeting-room/meeting-room-4.png',
      DIR + '/meeting-room/metting-room-5.png',
    ],
  },
  wedding: {
    thumbnails: [
      DIR + '/weeding/weeding-1.png',
      DIR + '/weeding/weeding-3.png',
    ],
    mainImage: DIR + '/weeding/weeding-2.png',
  },
  hotelRoom: {
    images: [
      DIR + '/hotel-room/hotel-room-1.jpg',
      DIR + '/hotel-room/hotel-room-2.jpg',
    ],
  },
};
```

---

## STEP 2 — HorisonHero.tsx (Section 1 — Paling Atas)

Layout:
```
[HORISON]                               <- kuning gold besar, stroke biru
[ALTAMA PANDEGLANG]                     <- kuning kecil, tracking lebar
[Deskripsi teks]   |   [Logo Horison]   <- card 2 kolom (md+)
[Gambar1]  [Gambar2]  [Gambar3]         <- 3 preview grid 3 kolom
```

Kode penting:
```tsx
// JARAK NAVBAR: pt-24 sm:pt-28 lg:pt-32 di section ini

// Judul HORISON — kuning besar dengan stroke biru
<h1
  className="font-spartan font-black text-[#FFD700] text-center leading-none
    text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] xl:text-[10rem]"
  style={{ WebkitTextStroke: '3px #1565c0' }}
>
  HORISON
</h1>

// Subtitle
<h2
  className="font-spartan font-black text-[#FFD700] text-center tracking-[0.12em]
    text-[5vw] sm:text-[3.5vw] xl:text-[2.8rem]"
>
  ALTAMA PANDEGLANG
</h2>

// Card deskripsi + logo
<div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto
  bg-black/20 rounded-2xl p-6 border border-white/10 mt-8">
  <p className="text-white/90 text-sm md:text-base leading-relaxed flex-1 text-justify">
    {hero.description}
  </p>
  <div className="hidden md:block w-px bg-white/30 self-stretch" />
  <img src={hero.logo} alt="Logo Horison" className="w-28 h-auto self-center object-contain" />
</div>

// 3 preview gambar bawah
<div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8">
  {hero.previewImages.map((img, i) => (
    <div key={i} className="rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
  ))}
</div>
```

---

## STEP 3 — MeetingRoomSection.tsx (Section 2)

Layout:
```
[DESIGN]         <- putih, besar
[MEETING ROOM]   <- putih + stroke biru, lebih besar
Grid gambar: 2 kolom (mobile) -> 3 kolom (desktop), 5 gambar
```

Kode penting:
```tsx
// Judul section
<h2 className="font-spartan font-black text-white text-center">
  <span className="block text-[8vw] sm:text-[6vw] lg:text-[5rem]">DESIGN</span>
  <span
    className="block text-[11vw] sm:text-[8vw] lg:text-[7rem]"
    style={{ WebkitTextStroke: '3px #1565c0' }}
  >
    MEETING ROOM
  </span>
</h2>

// Grid gambar 5 kartu
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 max-w-5xl mx-auto">
  {images.map((img, i) => (
    <div key={i} className="rounded-xl overflow-hidden shadow-xl aspect-[3/4]">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  ))}
</div>
```

---

## STEP 4 — WeddingSection.tsx (Section 3)

Layout Desktop (lg+):
```
[Kiri: Judul DESIGN WEDDING + 2 thumbnail] | [Kanan: poster besar weeding-2]
```

Layout Mobile: Stack — judul -> 2 thumbnail -> gambar besar

Kode penting:
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-6xl mx-auto">

  {/* Kiri — judul + 2 thumbnail */}
  <div className="flex flex-col gap-4">
    <h2 className="font-spartan font-black text-white">
      <span className="block text-[8vw] lg:text-[4rem]">DESIGN</span>
      <span
        className="block text-[10vw] lg:text-[6rem]"
        style={{ WebkitTextStroke: '3px #1565c0' }}
      >
        WEDDING
      </span>
    </h2>
    {thumbnails.map((img, i) => (
      <div key={i} className="rounded-xl overflow-hidden shadow-xl border-2 border-white/20">
        <img src={img} alt="" className="w-full h-auto object-cover" />
      </div>
    ))}
  </div>

  {/* Kanan — poster besar */}
  <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
    <img src={mainImage} alt="" className="w-full h-auto object-contain" />
  </div>
</div>
```

---

## STEP 5 — HotelRoomSection.tsx (Section 4 — Paling Bawah)

Layout:
```
[DESIGN]       <- putih besar
[HOTEL ROOM]   <- putih + stroke biru
[2 gambar kiri: grid 2 kolom]  |  [2 gambar kanan: stack landscape]
```

Kode penting:
```tsx
<h2 className="font-spartan font-black text-white text-center">
  <span className="block text-[8vw] lg:text-[5rem]">DESIGN</span>
  <span
    className="block text-[10vw] lg:text-[7rem]"
    style={{ WebkitTextStroke: '3px #1565c0' }}
  >
    HOTEL ROOM
  </span>
</h2>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto">
  {/* Kiri: 2 gambar grid kecil */}
  <div className="grid grid-cols-2 gap-3">
    {images.map((img, i) => (
      <div key={i} className="rounded-xl overflow-hidden shadow-xl">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
  {/* Kanan: 2 gambar stacked */}
  <div className="flex flex-col gap-3">
    {images.map((img, i) => (
      <div key={i} className="rounded-xl overflow-hidden shadow-xl">
        <img src={img} alt="" className="w-full h-auto object-cover" />
      </div>
    ))}
  </div>
</div>
```

---

## STEP 6 — DesignHorison.tsx (Root — Rakit Semua)

```tsx
import HorisonHero from "./components/HorisonHero";
import MeetingRoomSection from "./components/MeetingRoomSection";
import WeddingSection from "./components/WeddingSection";
import HotelRoomSection from "./components/HotelRoomSection";

export default function DesignHorison() {
  return (
    <main
      className="w-full min-h-screen bg-[#1a90d9] text-white overflow-hidden
        selection:bg-yellow-300 selection:text-blue-900"
    >
      <HorisonHero />
      <MeetingRoomSection />
      <WeddingSection />
      <HotelRoomSection />
    </main>
  );
}
```

---

## Design Tokens

| Token | Value |
|-------|-------|
| Background | `#1a90d9` (biru terang) |
| Judul utama HORISON | `#FFD700` (kuning gold) |
| Judul section lain | `#ffffff` (putih) |
| Text stroke outline | `#1565c0` (biru tua) |
| Font semua heading | `font-spartan font-black` |
| Section padding | `py-12 sm:py-16 px-4 sm:px-6 lg:px-12` |
| Card border | `border-white/20` |
| Card background | `bg-black/20 backdrop-blur-sm` |

---

## Responsive Breakpoints

| Elemen | Mobile (< lg) | Desktop (lg+) |
|--------|--------------|---------------|
| Jarak navbar (Hero) | `pt-24` | `pt-32` |
| Judul HORISON | `15vw` | `10rem` |
| Grid meeting room | 2 kolom | 3 kolom |
| Layout wedding | Stack vertikal | 2 kolom |
| Layout hotel room | Stack vertikal | 2 kolom |

---

## Aset Gambar yang Dipakai

| Section | File | Status |
|---------|------|--------|
| Hero logo | `img/vendor-experienc/horison.png` | ada |
| Hero preview 1 | `meeting-room/meeting-room-2.png` | ada |
| Hero preview 2 | `weeding/weeding-1.png` | ada |
| Hero preview 3 | `weeding/weeding-3.png` | ada |
| Meeting Room (5 gambar) | `metting-room-1` s/d `metting-room-5` | ada |
| Wedding thumbnail | `weeding-1.png`, `weeding-3.png` | ada |
| Wedding poster besar | `weeding-2.png` | ada |
| Hotel Room | `hotel-room-1.jpg`, `hotel-room-2.jpg` | ada |

---

## Checklist Eksekusi

1. - [ ] Buat `data/horisonData.ts`
2. - [ ] Buat `components/HorisonHero.tsx` (Section 1 + jarak navbar)
3. - [ ] Buat `components/MeetingRoomSection.tsx` (Section 2)
4. - [ ] Buat `components/WeddingSection.tsx` (Section 3)
5. - [ ] Buat `components/HotelRoomSection.tsx` (Section 4)
6. - [ ] Rakit semua di `DesignHorison.tsx`
7. - [ ] Test responsif 375px, 768px, 1024px, 1280px
8. - [ ] Commit dan push ke GitHub
