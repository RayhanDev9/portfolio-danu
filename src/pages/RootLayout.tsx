import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// =============================================
// MAPPING TITLE HALAMAN BERDASARKAN RUTE
// =============================================
const PAGE_TITLES: Record<string, string> = {
  "/": "Home | Danu Prasetyo - Graphic & Motion Designer",
  "/experience": "Experience | Danu Prasetyo",
  "/graphic-design/majlis": "Majlis Ta'lim - Graphic Design | Danu Prasetyo",
  "/graphic-design/horison": "Horison Altama - Graphic Design | Danu Prasetyo",
  "/graphic-design/astraotoshop": "Astra Otoshop - Graphic Design | Danu Prasetyo",
  "/graphic-design/mister-klinner": "Mister Klinner - Graphic Design | Danu Prasetyo",
  "/graphic-design/geonerations": "Geonerations - Graphic Design | Danu Prasetyo",
  "/graphic-design/via-fabula": "Via Fabula - Graphic Design | Danu Prasetyo",
  "/motion-graphic": "Motion Graphic | Danu Prasetyo",
  "/graphic-motion": "Motion Graphic | Danu Prasetyo",
  "/creative-journey": "Brands & Creative Journey | Danu Prasetyo",
  "/contact": "Contact & Inquiry | Danu Prasetyo",
  "/profile": "About Danu Prasetyo | Profile",
};

export default function RootLayout() {
  const { pathname } = useLocation();

  // 1. Update Document Title & Scroll to Top saat rute berganti
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Set dynamic browser tab title
    const newTitle =
      PAGE_TITLES[pathname] || "Danu Prasetyo | Graphic & Motion Designer";
    document.title = newTitle;
  }, [pathname]);

  // 2. Set Favicon ke danu-duduk.png
  useEffect(() => {
    const faviconUrl = `${import.meta.env.BASE_URL}img/profile/danu-duduk.png`;
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
