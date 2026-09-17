# Plan Implementasi Footer "Lets CONNECT There"

Panduan implementasi **Footer** untuk portofolio Danu, dari desain desktop hingga **responsif mobile**. Ditulis untuk junior programmer dan low-cost AI.

---

## 1. Analisis Visual (Berdasarkan Foto Referensi)

```
+---------------------------------------------------------------+
| [Background: Ungu Tua/Gelap #2d0fa3]                         |
| [Diagonal stripe pattern tipis di background - efek retro]   |
|                                                               |
|         Lets   CONNECT   There                                |
|         (putih) (KUNING)  (putih)                             |
|                                                               |
|  +------------------+  +------------------+  +------------+  |
|  |  NAVIGATION      |  |  Gmail           |  |  [Foto     |  |
|  |  (kuning bold)   |  |  (kuning bold)   |  |  Danu Jas  |  |
|  |                  |  |  Danusatya9@...  |  |  Melambai] |  |
|  |  Home            |  |                  |  |            |  |
|  |  Experience      |  |  Instagram       |  |            |  |
|  |  Graphic designer|  |  (kuning bold)   |  |            |  |
|  |  Motion graphic  |  |  dnustya_        |  |            |  |
|  |  Contact         |  |                  |  |            |  |
|  |                  |  |  WhatsApp        |  |            |  |
|  |  (italic+underln)|  |  (kuning bold)   |  |            |  |
|  |                  |  |  +62 881...      |  |            |  |
|  +------------------+  +------------------+  +------------+  |
|                                                               |
|  ---------------------------------------------------------   |
|  (c) 2026                                                     |
+---------------------------------------------------------------+
```

---

## 2. Spesifikasi Detail Visual

### A. Warna
| Elemen | Warna | Tailwind Class |
|---|---|---|
| Background footer | Ungu gelap lebih tua | `bg-[#2d0fa3]` |
| Stripe diagonal di bg | Garis miring putih tipis (CSS) | Inline style |
| Teks "Lets" dan "There" | Putih | `text-white` |
| Teks "CONNECT" | Kuning neon | `text-[#e5fc34]` |
| Label kolom (NAVIGATION, Gmail, dll) | Kuning neon bold | `text-[#e5fc34] font-bold` |
| Link navigasi | Putih, italic, underline | `text-white italic underline` |
| Teks kontak | Putih | `text-white` |
| Garis pemisah bawah | Putih transparan | `border-white/30` |
| Teks copyright | Putih | `text-white` |

### B. Tipografi
- **"Lets CONNECT There"**: "Lets" dan "There" pakai `font-playfair italic`, "CONNECT" pakai `font-spartan font-black`
- **Label Kolom**: `font-spartan font-bold text-[#e5fc34]`
- **Link Navigasi**: `font-sans italic underline text-white`
- **Teks Kontak**: `font-sans text-white`

---

## 3. Strategi Responsif (Mobile ke Desktop)

| Breakpoint | Layout Kolom | Foto Danu | Judul |
|---|---|---|---|
| **Mobile (< 768px)** | 1 kolom stack vertikal | Tersembunyi (`hidden`) | `text-3xl` |
| **Tablet (768px-1023px)** | 2 kolom: Navigasi + Kontak | Tersembunyi (`hidden`) | `text-5xl` |
| **Desktop (>=1024px)** | 3 kolom: Navigasi + Kontak + Foto | Tampil di kanan | `text-7xl` |

---

## 4. Data Konten Footer

```tsx
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Graphic designer", href: "/graphic-design" },
  { label: "Motion graphic", href: "/motion-graphic" },
  { label: "Contact", href: "/contact" },
];

const contactList = [
  {
    label: "Gmail",
    value: "Danusatya9@gmail.com",
    href: "mailto:Danusatya9@gmail.com",
  },
  {
    label: "Instagram",
    value: "dnustya_",
    href: "https://instagram.com/dnustya_",
  },
  {
    label: "WhatsApp",
    value: "+62 881 010 069 341",
    href: "https://wa.me/62881010069341",
  },
];
```

---

## 5. Blueprint Kode Lengkap `Footer.tsx`

Salin kode ini ke [`src/components/layout/Footer.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/components/layout/Footer.tsx):

```tsx
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Graphic designer", href: "/graphic-design" },
  { label: "Motion graphic", href: "/motion-graphic" },
  { label: "Contact", href: "/contact" },
];

const contactList = [
  {
    label: "Gmail",
    value: "Danusatya9@gmail.com",
    href: "mailto:Danusatya9@gmail.com",
  },
  {
    label: "Instagram",
    value: "dnustya_",
    href: "https://instagram.com/dnustya_",
  },
  {
    label: "WhatsApp",
    value: "+62 881 010 069 341",
    href: "https://wa.me/62881010069341",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full bg-[#2d0fa3] text-white overflow-hidden font-sans select-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(120deg, transparent, transparent 40px, rgba(255,255,255,0.04) 40px, rgba(255,255,255,0.04) 80px)",
      }}
    >
      {/* Judul "Lets CONNECT There" */}
      <div className="w-full text-center pt-10 sm:pt-14 pb-6 sm:pb-8 px-4">
        <h2 className="font-spartan tracking-tight leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="font-playfair italic font-normal text-white">
            Lets{" "}
          </span>
          <span className="font-black text-[#e5fc34]">CONNECT </span>
          <span className="font-playfair italic font-normal text-white">
            There
          </span>
        </h2>
      </div>

      {/* Grid 3 Kolom */}
      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-6">

          {/* Kolom 1: NAVIGATION */}
          <div>
            <h3 className="font-spartan font-bold text-lg sm:text-xl text-[#e5fc34] mb-4 tracking-wide uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans italic underline text-white/90 text-sm sm:text-base hover:text-[#e5fc34] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 2: Kontak */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {contactList.map((item) => (
              <div key={item.label}>
                <h3 className="font-spartan font-bold text-lg sm:text-xl text-[#e5fc34] leading-tight">
                  {item.label}
                </h3>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-sm sm:text-base text-white/90 underline hover:text-[#e5fc34] transition-colors duration-200 break-all"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          {/* Kolom 3: Foto Danu — hanya tampil di desktop (lg+) */}
          <div className="hidden lg:flex items-end justify-center lg:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}img/profile/danu-jas.png`}
              alt="Danu"
              className="h-64 xl:h-80 object-contain object-bottom drop-shadow-2xl"
            />
          </div>

        </div>
      </div>

      {/* Garis Pemisah + Copyright */}
      <div className="w-full border-t border-white/30 px-6 sm:px-10 lg:px-16 py-4 sm:py-5">
        <p className="font-spartan text-base sm:text-lg text-white font-normal">
          © 2026
        </p>
      </div>
    </footer>
  );
}
```

---

## 6. Update RootLayout.tsx

Tambahkan `<Footer />` ke [`src/pages/RootLayout.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/RootLayout.tsx):

```tsx
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
```

---

## 7. Checklist Implementasi

- [x] **Langkah 1**: Salin kode Footer ke [`src/components/layout/Footer.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/components/layout/Footer.tsx).
- [x] **Langkah 2**: Update [`src/pages/RootLayout.tsx`](file:///d:/data%20rayhan/programs/project-2/portfolio-danu/src/pages/RootLayout.tsx) untuk import dan render `<Footer />`.
- [x] **Langkah 3**: Pastikan `public/img/profile/danu-jas.png` tersedia.
- [x] **Langkah 4**: Jalankan `npx tsc --noEmit` untuk validasi TypeScript.
- [x] **Langkah 5**: Uji visual di browser pada lebar 375px (Mobile), 768px (Tablet), dan 1280px (Desktop).
