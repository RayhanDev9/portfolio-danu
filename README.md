# Plan Fix Navbar Portfolio Danu: Absolute Position & Seamless Color Integration

Panduan perbaikan **Navbar** menjadi `absolute top-0` agar background warna halaman utama (*Hero*, *Experience*, *Graphic Design*) menyatu secara alami dari ujung paling atas viewport tanpa celah warna acak-acakan.

---

## 1. Masalah & Solusi Visual

### Problem Sebelumnya (`fixed top-0` + `pt-20` di Layout):
- `RootLayout` menambahkan `pt-20` yang menggeser seluruh konten ke bawah.
- Akibatnya, area bagian paling atas di belakang navbar menjadi terpisah/memiliki warna acak-acakan yang tidak menyatu dengan background utama halaman.

### Solusi (`absolute top-0` + Outer Transparan):
- `Navbar` menggunakan posisi `absolute top-0 left-0 right-0 z-50` agar berada tepat menempel di atas background hero masing-masing halaman.
- `RootLayout` melepas padding top `pt-20` pada wrapper `<Outlet />`.
- Spacing/jarak aman konten hero disesuaikan per section (`pt-20` ~ `pt-28`) agar teks utama (*Hi There! I'M DANU*, *EXPERIENCE*, *MAJLIS TA'LIM*) berada pas di bawah pill kuning navbar.

---

## 2. Rincian Perubahan Kode

### A. [`src/components/layout/Navbar.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/components/layout/Navbar.tsx)
- Tag `<nav>` diubah dari `fixed` menjadi `absolute`:
  ```tsx
  className="absolute top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-4 sm:py-6 bg-transparent border-none"
  ```

### B. [`src/pages/RootLayout.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/RootLayout.tsx)
- Menghapus kelas `pt-20` agar background halaman utama naik sampai paling atas (`top-0`):
  ```tsx
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
  ```

### C. Adjust Spacing Content Hero Section:
1. **[`HeroSection.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Home/components/HeroSection.tsx)**:
   - Padding top disesuaikan: `pt-20 sm:pt-24 md:pt-28`.
2. **[`ExperienceHero.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/Experience/components/ExperienceHero.tsx)**:
   - Padding top disesuaikan: `pt-16 sm:pt-20 md:pt-24`.
3. **[`MajlisHero.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/sections/DesignMajlis/components/MajlisHero.tsx)**:
   - Padding top sudah pas (`pt-16 sm:pt-20 md:pt-24`).

---

## 3. Checklist Implementasi

- [ ] **Langkah 1**: Update `README.md` dengan plan posisi `absolute`.
- [ ] **Langkah 2**: Ubah `Navbar.tsx` menjadi `absolute top-0`.
- [ ] **Langkah 3**: Hapus `pt-20` pada `RootLayout.tsx`.
- [ ] **Langkah 4**: Adjust `pt` pada `HeroSection.tsx` dan `ExperienceHero.tsx`.
- [ ] **Langkah 5**: Jalankan `npx tsc --noEmit` untuk validasi.
- [ ] **Langkah 6**: Commit & push ke GitHub.
