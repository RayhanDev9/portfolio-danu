import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// =============================================
// MAPPING TITLE HALAMAN BERDASARKAN RUTE
// =============================================
const PAGE_TITLES: Record<string, string> = {
  "/": "Home | Danu Satya - Graphic & Motion Designer",
  "/experience": "Experience | Danu Satya",
  "/graphic-design/majlis": "Majlis Ta'lim - Graphic Design | Danu Satya",
  "/graphic-design/horison": "Horison Altama - Graphic Design | Danu Satya",
  "/graphic-design/astraotoshop": "Astra Otoshop - Graphic Design | Danu Satya",
  "/graphic-design/mister-klinner": "Mister Klinner - Graphic Design | Danu Satya",
  "/graphic-design/geonerations": "Geonerations - Graphic Design | Danu Satya",
  "/graphic-design/via-fabula": "Via Fabula - Graphic Design | Danu Satya",
  "/motion-graphic": "Motion Graphic | Danu Satya",
  "/graphic-motion": "Motion Graphic | Danu Satya",
  "/creative-journey": "Brands & Creative Journey | Danu Satya",
  "/contact": "Contact & Inquiry | Danu Satya",
  "/profile": "About Danu Satya | Profile",
};

export default function RootLayout() {
  const { pathname } = useLocation();

  // 1. Update Document Title & Scroll to Top saat rute berganti
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Set dynamic browser tab title
    const newTitle =
      PAGE_TITLES[pathname] || "Danu Satya | Graphic & Motion Designer";
    document.title = newTitle;
  }, [pathname]);

  // 2. Set Favicon ke danu-duduk.avif
  useEffect(() => {
    const faviconUrl = `${import.meta.env.BASE_URL}img/profile/danu-duduk.avif`;
    let link: HTMLLinkElement | null =
      document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = faviconUrl;
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
