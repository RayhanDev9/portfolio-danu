import { useState } from "react";
import MotionHero from "./components/MotionHero";
import AstraOtoshopMotion from "./components/AstraOtoshopMotion";
import MisterKlinnerMotion from "./components/MisterKlinnerMotion";
import VideoModal from "./components/VideoModal";
import type { MotionItem } from "./data/motionData";

export default function GraphicMotion() {
  const [selectedVideo, setSelectedVideo] = useState<MotionItem | null>(null);

  return (
    <main
      id="graphic-motion"
      className="relative w-full min-h-screen bg-[#38157e] text-white overflow-x-hidden font-sans selection:bg-[#e8fb31] selection:text-slate-900"
    >
      {/* 1. Hero Title Board: "MOTION GRAFIK" (Wooden Frame) */}
      <MotionHero />

      {/* 2. Section Astra Otoshop: 5 HP + Garis Kuning + 4 Feed Sirkuit Balap */}
      <AstraOtoshopMotion onSelect={(item) => setSelectedVideo(item)} />

      {/* 3. Section Mister Klinner: 4 HP Atas + 3 HP Tengah + Meja Produk */}
      <MisterKlinnerMotion onSelect={(item) => setSelectedVideo(item)} />

      {/* 4. Interactive Video Modal */}
      <VideoModal
        item={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </main>
  );
}
