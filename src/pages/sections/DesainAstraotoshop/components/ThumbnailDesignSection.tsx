import { useState } from "react";
import { astraData } from "../data/astraData";
import ImageModal from "./ImageModal";

export default function ThumbnailDesignSection() {
  const { thumbnailDesign } = astraData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/20 min-h-[90vh]"
      style={{
        backgroundImage: `url('${thumbnailDesign.bg}')`,
      }}
    >
      {/* Overlay Gelap Halus untuk kontras */}
      <div className="absolute inset-0 bg-blue-950/25 pointer-events-none" />

      {/* 1. Judul Section: THUMBNAIL DESIGN */}
      <div className="text-center relative z-10 mb-10 sm:mb-14 select-none">
        <h2
          className="font-sans font-black italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-wider text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          style={{
            textShadow: "0 8px 24px rgba(0, 0, 0, 0.7)",
          }}
        >
          {thumbnailDesign.title}
        </h2>
      </div>

      {/* 2. Grid 4 Kartu Thumbnail Vertikal (9:16) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mb-8 sm:mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
          {thumbnailDesign.cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white/15 backdrop-blur-sm p-2 sm:p-2.5 rounded-2xl border-2 border-white/50 shadow-2xl overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-3 transition-all duration-300 flex flex-col justify-between"
              onClick={() =>
                setSelectedImg({ src: card.image, title: card.title })
              }
            >
              {/* Aspect Ratio 9:16 Vertikal */}
              <div className="aspect-[9/16] w-full rounded-xl overflow-hidden bg-gray-900 shadow-md">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center rounded-2xl pointer-events-none">
                <span className="text-white font-spartan font-bold text-xs sm:text-sm drop-shadow mb-2">
                  {card.title}
                </span>
                <span className="bg-[#FFDE00] text-blue-950 font-black text-xs px-4 py-1.5 rounded-full shadow-xl">
                  🔍 Zoom Thumbnail
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
