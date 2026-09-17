
# Plan Perbaikan: Skala Ukuran (Scale) & Background Gradient Halaman Experience

Dokumen ini berisi rencana perbaikan detail untuk mengatasi **ukuran yang terlalu kecil** serta menambahkan **background gradient dari Biru (atas/awal) ke Ungu (bawah/akhir)** sesuai dengan gambar referensi yang diberikan.

---

## 1. Analisis Kebutuhan & Masalah Saat Ini

| Bagian | Masalah Saat Ini | Target Perbaikan (Sesuai Referensi Gambar) |
|---|---|---|
| **Background Warna** | Background flat ungu tunggal (`#5b13ec`) | **Gradient Horisontal**: Biru Elektrik (`#1d59f3` / `#2563eb`) di sisi kiri beralih mulus ke Ungu Elektrik (`#5b13ec`) di sisi kanan. |
| **Judul "EXPER I ENCE"** | Ukuran font terlalu kecil (`text-5xl ... text-9xl`), terkesan tenggelam | **Extra Large Scale**: Diperbesar hingga `text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem]` dengan line-height padat (`leading-none`). |
| **Foto Danu ("I")** | Ukuran terlalu kecil (`h-16 ... h-40`) tidak seimbang dengan teks | **Proporsional Full Height**: Tinggi foto dinaikkan menjadi `h-32 sm:h-48 md:h-64 lg:h-80 xl:h-[22rem]`, kepala sejajar puncak huruf dan kaki sejajar dasar huruf. |
| **Ornamen Crop Marks (+)** | Hanya 2 titik di atas | Ditambahkan di 4 sudut luar area hero dan 4 sudut di teks `EXPER` & `ENCE` persis seperti desain referensi. |
| **Timeline Horizontal** | Max width sempit (`max-w-5xl`), node & garis kecil | Lebar dinaikkan ke `max-w-7xl`, garis lebih tebal (`h-[4px]`), node lingkaran diperbesar (`w-6 h-6`), teks tahun lebih besar (`text-xl sm:text-2xl`), dan logo diperjelas. |

---

## 2. Spesifikasi Visual & Kode Warna

### A. Palet Gradient Background
- **Warna Awal (Start / Kiri)**: Biru Elektrik Royal (`#1d59f3` / `#235bf6`)
- **Warna Tengah (Transition / Middle)**: Indigo Violet (`#4328ec`)
- **Warna Akhir (End / Kanan)**: Electric Purple (`#5b13ec`)
- **Tailwind Class**: `bg-gradient-to-r from-[#1d59f3] via-[#4328ec] to-[#5b13ec]`

### B. Skala Tipografi & Elemen
- **Font EXPER & ENCE**: `font-spartan font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] tracking-tight leading-none text-[#e5fc34]`
- **Container Foto Danu**: `h-32 sm:h-48 md:h-64 lg:h-80 xl:h-[22rem] w-auto max-w-[200px] flex items-end justify-center`
- **Garis Timeline**: `h-[4px] bg-[#e5fc34]` dengan node lingkaran kuning `w-6 h-6 border-[3px]`
- **Teks Tahun Node**: `text-xl sm:text-2xl md:text-3xl font-bold text-[#e5fc34]`
- **Teks Periode Node**: `text-xs sm:text-sm italic text-white/90`
- **Logo Vendor**: `max-h-10 sm:max-h-12 md:max-h-14`

---

## 3. Blueprint / Rencana Kode Komponen

### File 1: [`src/pages/sections/Experience/Experience.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/Experience.tsx)
Perubahan: Mengganti warna background flat menjadi linear gradient (Biru ke Ungu) pada pembungkus utama halaman.

```tsx
import ExperienceHero from "./components/ExperienceHero";
import ExperienceTimelineOverview from "./components/ExperienceTimelineOverview";
import ExperienceDetailSection from "./components/ExperienceDetailSection";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-gradient-to-r from-[#1d59f3] via-[#4328ec] to-[#5b13ec] text-white overflow-x-hidden font-sans py-12 px-4 sm:px-8 md:px-12 flex flex-col justify-between"
    >
      {/* 1. Hero Section "EXPER I ENCE" (Skala Besar) */}
      <ExperienceHero />

      {/* 2. Horizontal Timeline Overview (Skala Besar & Luas) */}
      <ExperienceTimelineOverview />

      {/* 3. Detail Container Krem Pengalaman */}
      <ExperienceDetailSection />
    </section>
  );
}
```

---

### File 2: [`src/pages/sections/Experience/components/ExperienceHero.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceHero.tsx)
Perubahan:
- Menaikkan ukuran font judul raksasa `EXPER I ENCE` agar memenuhi layar secara proporsional.
- Memperbesar foto Danu sehingga tingginya pas menyatu dari ujung atas huruf hingga ujung bawah huruf.
- Menambahkan ornamen crop marks `+` di sudut-sudut framing.

```tsx
export default function ExperienceHero() {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center pt-8 sm:pt-12 md:pt-16 pb-8 select-none">
      {/* Ornamen Crop Marks (+) di Sudut-Sudut Luar */}
      <div className="absolute top-2 left-2 text-white/70 text-xl font-light pointer-events-none">+</div>
      <div className="absolute top-2 right-2 text-white/70 text-xl font-light pointer-events-none">+</div>
      <div className="absolute bottom-2 left-2 text-white/50 text-xl font-light pointer-events-none">+</div>
      <div className="absolute bottom-2 right-2 text-white/50 text-xl font-light pointer-events-none">+</div>

      {/* Container Judul EXPER I ENCE Raksasa */}
      <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6 font-spartan font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] tracking-tight leading-none text-[#e5fc34]">
        {/* Teks Kiri "EXPER" */}
        <span className="relative">
          EXPER
          <span className="absolute -top-3 -left-3 text-white text-xs sm:text-sm font-normal">+</span>
          <span className="absolute -bottom-3 -left-3 text-white text-xs sm:text-sm font-normal">+</span>
        </span>

        {/* Foto Danu di Tengah (Menjadi huruf "I" yang tinggi dan pas) */}
        <div className="relative h-32 sm:h-48 md:h-64 lg:h-80 xl:h-[22rem] flex items-end justify-center shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}img/profile/danu-jas.png`}
            alt="Danu"
            className="h-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Teks Kanan "ENCE" */}
        <span className="relative">
          ENCE
          <span className="absolute -top-3 -right-3 text-white text-xs sm:text-sm font-normal">+</span>
          <span className="absolute -bottom-3 -right-3 text-white text-xs sm:text-sm font-normal">+</span>
        </span>
      </div>
    </div>
  );
}
```

---

### File 3: [`src/pages/sections/Experience/components/ExperienceTimelineOverview.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceTimelineOverview.tsx)
Perubahan:
- Melebarkan kontainer timeline menjadi `max-w-7xl`.
- Mempertebal garis menjadi `h-[4px]` atau `h-[5px]` dengan warna neon yellow menyala.
- Memperbesar ukuran lingkaran node titik node (`w-6 h-6 sm:w-7 sm:h-7`).
- Memperbesar font tahun (`text-xl sm:text-2xl md:text-3xl`) dan memperbesar preview logo vendor.

```tsx
import { timelineOverviewList } from "../data/experienceData";

export default function ExperienceTimelineOverview() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-8 overflow-x-auto">
      <div className="min-w-[720px] relative flex flex-col items-center">
        {/* Garis Horizontal Kuning Tebal */}
        <div className="relative w-full h-[4px] bg-[#e5fc34] flex items-center justify-between my-24 px-12 sm:px-16">
          {/* Ujung Kiri-Kanan Garis Barbell */}
          <div className="absolute left-0 w-3 h-3 rounded-full bg-[#e5fc34]" />
          <div className="absolute right-0 w-3 h-3 rounded-full bg-[#e5fc34]" />

          {/* Node Iterasi 3 Perusahaan */}
          {timelineOverviewList.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Lingkaran Node Kuning Lebih Besar */}
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e5fc34] border-[3px] border-[#4328ec] shadow-lg z-10 transition-transform hover:scale-125" />

              {/* Element di Atas Garis */}
              <div className="absolute bottom-10 flex flex-col items-center text-center w-max">
                {item.position === "top" ? (
                  <>
                    <span className="font-spartan font-bold text-xl sm:text-2xl md:text-3xl text-[#e5fc34] tracking-wide">
                      {item.year}
                    </span>
                    <span className="font-sans italic text-xs sm:text-sm text-white/90 mt-0.5">
                      {item.period}
                    </span>
                  </>
                ) : (
                  <div className="h-14 flex flex-col items-center justify-center gap-1">
                    <img
                      src={item.logo}
                      alt={item.companyName}
                      className="max-h-10 sm:max-h-12 object-contain filter brightness-0 invert drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (sibling) sibling.style.display = "block";
                      }}
                    />
                    <span
                      className="font-bold text-white text-sm hidden"
                      style={{ display: "none" }}
                    >
                      {item.companyName}
                    </span>
                  </div>
                )}
              </div>

              {/* Element di Bawah Garis */}
              <div className="absolute top-10 flex flex-col items-center text-center w-max">
                {item.position === "top" ? (
                  <div className="h-14 flex flex-col items-center justify-center gap-1">
                    <img
                      src={item.logo}
                      alt={item.companyName}
                      className="max-h-10 sm:max-h-12 object-contain filter brightness-0 invert drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (sibling) sibling.style.display = "block";
                      }}
                    />
                    <span
                      className="font-bold text-white text-sm"
                      style={{ display: "none" }}
                    >
                      {item.companyName}
                    </span>
                  </div>
                ) : (
                  <>
                    <span className="font-spartan font-bold text-xl sm:text-2xl md:text-3xl text-[#e5fc34] tracking-wide">
                      {item.year}
                    </span>
                    <span className="font-sans italic text-xs sm:text-sm text-white/90 mt-0.5">
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

## 4. Checklist Rencana Eksekusi

- [ ] **Langkah 1**: Update background gradient di [`Experience.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/Experience.tsx).
- [ ] **Langkah 2**: Update skala judul, foto Danu, dan ornamen crop marks di [`ExperienceHero.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceHero.tsx).
- [ ] **Langkah 3**: Update skala timeline, node, dan logo di [`ExperienceTimelineOverview.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceTimelineOverview.tsx).
- [ ] **Langkah 4**: Jalankan `npx tsc --noEmit` untuk validasi tipe TypeScript.
- [ ] **Langkah 5**: Verifikasi visual di browser pada zoom 100% dan mode responsif.


