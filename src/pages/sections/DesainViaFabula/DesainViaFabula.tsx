import { useState } from "react";
import ViaFabulaHero from "./components/ViaFabulaHero";
import FeedDesignSection from "./components/FeedDesignSection";
import PhotoEditingSection from "./components/PhotoEditingSection";
import ImageModal from "./components/ImageModal";
import type { FabulaItem } from "./data/viaFabulaData";

export default function DesainViaFabula() {
  const [selectedImage, setSelectedImage] = useState<FabulaItem | null>(null);

  return (
    <main className="w-full min-h-screen bg-[#5832a8] text-white overflow-x-hidden selection:bg-[#fef036] selection:text-purple-950">
      {/* 1. Section 1: Hero & Wooden Framed Purple Board (Gambar 1 - Atas) */}
      <ViaFabulaHero />

      {/* 2. Section 2: Feed Design (Gambar 2 - Tengah) */}
      <FeedDesignSection onSelectImage={(item) => setSelectedImage(item)} />

      {/* 3. Section 3: Photo Editing & Green Blackboard (Gambar 3 - Bawah) */}
      <PhotoEditingSection onSelectImage={(item) => setSelectedImage(item)} />

      {/* Lightbox Modal Popup */}
      <ImageModal item={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  );
}
