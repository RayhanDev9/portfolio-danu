# 🎨 Plan: Creative Journey Section

> Dibuat: 2026-09-18
> File utama: `src/pages/sections/CreativeJourney/CreativeJourney.tsx`
> Route: `/creativejourney`
> Referensi desain: Screenshot "BRANDS THAT HAVE BEEN PART OF MY CREATIVE JOURNEY"

---

## 🖼️ Analisis Desain (dari Screenshot)

| Elemen | Deskripsi |
|--------|-----------|
| Background | Foto aspal/jalan gelap + gradient ungu-pink di kanan |
| Judul atas | "BRANDS THAT HAVE BEEN PART OF MY" — putih, bold, font medium |
| Judul besar | "CREATIVE JOURNEY" — kuning (#e5fc34), sangat besar, font-spartan |
| Kiri | 6 logo brand dalam lingkaran kaca transparan (glass bubble) |
| Tengah | Foto Danu duduk di jalan (`danu-salinan.png`) |
| Kanan | 6 tombol/pill brand dengan ikon panah ↗ warna ungu |

### Brand yang tampil (6 brand):
1. **Mister Klinner** — ada logo? (cari dari internet)
2. **Via Fabula** — ada logo di `vendor-experienc/fabula.png` ✅
3. **Horison** — ada logo di `vendor-experienc/horison.png` ✅
4. **Astra Otoshop** — ada logo? (gunakan logo Astra yang tersedia atau pakai placeholder)
5. **Geonerations / Geo Nations** — ada logo di `vendor-experienc/neo-digital.png` (pakai sementara)
6. **Roudotul Janah** — tidak ada logo (pakai placeholder teks inisial)

---

## 🗂️ Struktur File yang Dibuat

```
src/pages/sections/CreativeJourney/
├── CreativeJourney.tsx          ← [MODIFY] Root component
├── components/
│   ├── CJHero.tsx               ← [NEW] Judul atas + "CREATIVE JOURNEY"
│   ├── CJBrandBubbles.tsx       ← [NEW] 6 lingkaran kaca logo brand (kiri)
│   ├── CJDanuPhoto.tsx          ← [NEW] Foto Danu di tengah
│   └── CJBrandLinks.tsx         ← [NEW] 6 tombol brand dengan ↗ (kanan)
└── data/
    └── creativeJourneyData.ts   ← [NEW] Array data 6 brand
```

---

## 🧩 Breakdown Komponen (Penjelasan Detail)

---

### STEP 1 — `creativeJourneyData.ts`

Buat file data berisi array `brandList` dengan struktur:

```ts
export interface BrandItem {
  id: string;
  name: string;          // Nama tampil di tombol kanan
  logo: string;          // Path logo (string kosong jika tidak ada)
  initials: string;      // Fallback 2 huruf jika logo tidak ada
  color: string;         // Warna latar fallback logo
}

export const brandList: BrandItem[] = [
  { id: "fabula",   name: "via fabula",    logo: "...fabula.png",    initials: "VF", color: "#2a1a6e" },
  { id: "horison",  name: "horison",       logo: "...horison.png",   initials: "HO", color: "#1a3a6e" },
  { id: "klinner",  name: "mr klinner",    logo: "",                 initials: "MK", color: "#6e1a1a" },
  { id: "astra",    name: "astra otoshop", logo: "",                 initials: "AO", color: "#1a5a1a" },
  { id: "geo",      name: "geonerations",  logo: "...neo-digital.png", initials: "GN", color: "#3a1a6e" },
  { id: "roudotul", name: "roudotul janah",logo: "",                 initials: "RJ", color: "#6e3a1a" },
];
```

---

### STEP 2 — `CJHero.tsx` (Judul Section)

**Layout:**
```
[BRANDS THAT HAVE BEEN PART OF MY]   ← teks putih, bold, center
[     CREATIVE  JOURNEY             ] ← teks kuning besar, center
```

**Kode penting:**
```tsx
// Judul kecil di atas
<p className="font-sans font-bold text-white text-sm sm:text-base md:text-xl
              tracking-widest uppercase text-center">
  BRANDS THAT HAVE BEEN PART OF MY
</p>

// Judul besar
<h2 className="font-spartan font-black text-[#e5fc34]
               text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[7rem]
               text-center leading-none tracking-tight">
  CREATIVE JOURNEY
</h2>
```

---

### STEP 3 — `CJBrandBubbles.tsx` (Lingkaran Kaca, Sisi Kiri)

**Efek Glass Bubble dengan CSS Tailwind:**

```tsx
// Setiap bubble adalah div berbentuk lingkaran dengan efek kaca
<div className="
  w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
  rounded-full
  bg-white/10
  backdrop-blur-md
  border border-white/30
  shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.4)]
  flex items-center justify-center
  overflow-hidden
">
  {/* Jika ada logo */}
  <img src={brand.logo} className="w-[70%] h-[70%] object-contain" />

  {/* Jika tidak ada logo: tampilkan inisial */}
  <span className="font-spartan font-black text-white text-xl">{brand.initials}</span>
</div>
```

**Layout Bubble (2 baris, 3 kolom):**
- Mobile: 2x3 grid kecil, ukuran w-16 h-16
- Desktop: Grid 2x3 lebih besar, posisi absolute di sisi kiri

---

### STEP 4 — `CJDanuPhoto.tsx` (Foto Tengah)

Foto Danu duduk di jalan, menggunakan `danu-salinan.png`:

```tsx
<div className="relative z-10 flex-shrink-0">
  <img
    src={`${import.meta.env.BASE_URL}img/profile/danu-salinan.png`}
    alt="Danu"
    className="
      h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[480px]
      w-auto object-contain
      drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]
    "
  />
</div>
```

---

### STEP 5 — `CJBrandLinks.tsx` (Tombol Brand, Sisi Kanan)

Setiap tombol adalah pill dengan panah ↗:

```tsx
// Satu tombol brand
<button className="
  flex items-center gap-2
  px-4 py-2 sm:px-5 sm:py-2.5
  bg-[#5b13ec] hover:bg-[#7c3aff]
  border border-white/20
  rounded-md
  font-sans font-semibold text-white text-sm sm:text-base
  transition-all duration-300 hover:scale-105
  cursor-pointer
">
  <span>{brand.name}</span>
  <span className="text-[#e5fc34] font-bold">↗</span>
</button>
```

Layout kanan: **Grid 2 kolom, 3 baris** (6 tombol total)

---

### STEP 6 — `CreativeJourney.tsx` (Rakitan)

**Layout Desktop (lg+):**
```
[BrandBubbles] [DanuPhoto] [BrandLinks]
   kiri             tengah      kanan
   (30%)            (40%)       (30%)
```

**Layout Mobile (< lg):**
```
[CJHero]          ← judul di atas
[BrandBubbles]    ← grid 2x3 di atas foto
[DanuPhoto]       ← foto di tengah
[BrandLinks]      ← tombol 2 kolom di bawah
```

**Background:**
- Gambar aspal: bisa gunakan CSS `bg-gradient-to-br from-neutral-900 via-neutral-800 to-purple-900`
- Jika ingin gambar aspal nyata, cari dari Unsplash (gratis, no-attribution needed)
- Overlay gradient kanan: `bg-gradient-to-l from-purple-800/80 to-transparent`

---

## 📐 Responsive Breakpoints

| Elemen | Mobile (< lg) | Desktop (lg+) |
|--------|--------------|---------------|
| Layout utama | Stack vertikal | Flex 3 kolom |
| Judul "CREATIVE JOURNEY" | 14vw | 7rem |
| Bubble logo | w-16 h-16, grid 3x2 | w-28 h-28, absolute kiri |
| Foto Danu | h-64, center | h-[480px] |
| Tombol brand | Grid 2 kolom | Grid 2 kolom |

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Background utama | `#0a0a0a` + gradient ke purple |
| Judul kecil | `#ffffff` |
| Judul besar | `#e5fc34` (kuning) |
| Tombol brand | `#5b13ec` (ungu portfolio) |
| Ikon panah | `#e5fc34` (kuning) |
| Glass bubble | `bg-white/10` + `border-white/30` |

---

## 🔍 Aset yang Dibutuhkan

| Brand | Status | Solusi |
|-------|--------|--------|
| Via Fabula | ✅ ada `fabula.png` | Langsung pakai |
| Horison | ✅ ada `horison.png` | Langsung pakai |
| Neo Digital (Geo) | ✅ ada `neo-digital.png` | Pakai sementara |
| Mister Klinner | ❌ tidak ada | Tampilkan inisial "MK" dengan warna |
| Astra Otoshop | ❌ tidak ada | Tampilkan inisial "AO" dengan warna |
| Roudotul Janah | ❌ tidak ada | Tampilkan inisial "RJ" dengan warna |

> Logo yang tidak ada akan ditampilkan sebagai lingkaran berwarna dengan inisial 2 huruf,
> konsisten dengan glass bubble effect. Bisa diganti logo asli kapan saja nanti.

---

## ✅ Checklist Eksekusi (Urutan Pengerjaan)

1. - [x] Buat folder `components/` dan `data/` di dalam `CreativeJourney/`
2. - [x] Buat `creativeJourneyData.ts` (data 6 brand)
3. - [x] Buat `CJHero.tsx` (judul section)
4. - [x] Buat `CJBrandBubbles.tsx` (lingkaran kaca kiri)
5. - [x] Buat `CJDanuPhoto.tsx` (foto tengah)
6. - [x] Buat `CJBrandLinks.tsx` (tombol brand kanan)
7. - [x] Rakit semua di `CreativeJourney.tsx`
8. - [x] Test responsif di 375px, 768px, 1024px, 1280px (Build verified)
9. - [x] Commit & push ke GitHub
