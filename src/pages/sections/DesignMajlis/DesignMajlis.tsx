import { useState } from "react";
import MajlisHero from "./components/MajlisHero";
import InvitationSection from "./components/InvitationSection";
import CertificateSection from "./components/CertificateSection";
import PosterSection from "./components/PosterSection";
import ImageModal from "./components/ImageModal";
import type { MajlisImageModalItem } from "./data/majlisData";

export default function DesignMajlis() {
  const [selectedImage, setSelectedImage] = useState<MajlisImageModalItem | null>(null);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#6b0808] via-[#4d0505] to-[#2b0202] text-white selection:bg-[#f5be38] selection:text-black overflow-hidden">
      <MajlisHero onSelectImage={(item) => setSelectedImage(item)} />
      <InvitationSection onSelectImage={(item) => setSelectedImage(item)} />
      <CertificateSection onSelectImage={(item) => setSelectedImage(item)} />
      <PosterSection onSelectImage={(item) => setSelectedImage(item)} />

      {/* Lightbox Modal Popup */}
      <ImageModal item={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  );
}
