import { useState } from "react";
import { astraData } from "../data/astraData";
import ImageModal from "./ImageModal";

export default function FeedDesignSection() {
  const { feedDesign } = astraData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/20"
      style={{
        backgroundImage: `url('${feedDesign.bg}')`,
      }}
    >
      {/* Overlay Hijau Alam Halus */}
      <div className="absolute inset-0 bg-emerald-950/20 pointer-events-none" />

      {/* 1. Judul Section */}
      <div className="text-center relative z-10 mb-10 sm:mb-14 select-none">
        <h2
          className="font-sans font-black italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-wider text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          style={{
            textShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
          }}
        >
          {feedDesign.title}
        </h2>
      </div>

      {/* 2. Grid 10 Kartu Feed Desain (2 Baris x 5 Kolom di Desktop) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {feedDesign.cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white/10 p-1.5 sm:p-2 rounded-2xl border border-white/30 shadow-2xl overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              onClick={() =>
                setSelectedImg({ src: card.image, title: card.title })
              }
            >
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-gray-900 shadow-md">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-blue-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center rounded-2xl pointer-events-none">
                <span className="text-white font-spartan font-bold text-xs sm:text-sm drop-shadow">
                  {card.title}
                </span>
                <span className="bg-[#0084ff] text-white font-black text-[10px] px-3 py-1 rounded-full mt-2 shadow-lg">
                  🔍 Zoom Feed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={Boolean(selectedImg)}
        imageSrc={selectedImg?.src || ""}
        title={selectedImg?.title}
        onClose={() => setSelectedImg(null)}
      />
    </section>
  );
}
