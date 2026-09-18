import { useState } from "react";
import { astraData } from "../data/astraData";
import ImageModal from "./ImageModal";

export default function AdsDesignSection() {
  const { adsDesign } = astraData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/20"
      style={{
        backgroundImage: `url('${adsDesign.bg}')`,
      }}
    >
      {/* Overlay Merah/Biru Dinamis */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-red-950/40 pointer-events-none" />

      {/* Floating Confetti Accents */}
      <div className="absolute top-10 left-12 w-14 h-7 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full rotate-45 blur-[0.5px] opacity-80 pointer-events-none" />
      <div className="absolute top-16 right-12 w-12 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full -rotate-45 blur-[0.5px] opacity-80 pointer-events-none" />

      {/* 1. Judul Section */}
      <div className="text-center relative z-10 mb-10 sm:mb-14 select-none">
        <h2
          className="font-sans font-black italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-wider text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          style={{
            textShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
          }}
        >
          {adsDesign.title}
        </h2>
      </div>

      {/* 2. Grid 8 Kartu Banner Ads */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {adsDesign.cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl p-2 shadow-2xl border-2 border-white/40 cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              onClick={() =>
                setSelectedImg({ src: card.image, title: card.title })
              }
            >
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-2 text-center px-1 pb-1">
                <div className="font-spartan font-bold text-xs sm:text-sm text-gray-900 truncate">
                  {card.title}
                </div>
              </div>

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                <span className="bg-[#FFDE00] text-blue-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-xl">
                  🔍 Zoom Ads
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
