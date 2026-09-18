import { useState } from "react";
import GeonerationsHero from "./components/GeonerationsHero";
import CarouselSection from "./components/CarouselSection";
import AnotherDesignSection from "./components/AnotherDesignSection";
import ImageModal from "./components/ImageModal";
import type { DesignItem } from "./data/geonerationsData";

export default function DesainGeonerations() {
  const [selectedImage, setSelectedImage] = useState<DesignItem | null>(null);

  return (
    <main className="w-full min-h-screen text-slate-900 overflow-x-hidden selection:bg-red-700 selection:text-white">
      {/* 1. Section 1: Hero & Design Feed (Gambar 1 - Atas) */}
      <GeonerationsHero onSelectImage={(item) => setSelectedImage(item)} />

      {/* 2. Section 2: Carousel Design (Gambar 2 - Tengah) */}
      <CarouselSection onSelectImage={(item) => setSelectedImage(item)} />

      {/* 3. Section 3: Another Design & Callout Footer (Gambar 3 - Bawah) */}
      <AnotherDesignSection onSelectImage={(item) => setSelectedImage(item)} />

      {/* Lightbox Modal Popup */}
      <ImageModal item={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  );
}
