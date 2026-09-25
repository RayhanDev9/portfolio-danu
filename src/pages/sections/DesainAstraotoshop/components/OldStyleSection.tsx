import { useState } from "react";
import { astraData } from "../data/astraData";
import ImageModal from "./ImageModal";

export default function OldStyleSection() {
  const { oldStyle } = astraData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/20 min-h-[90vh]"
      style={{
        backgroundImage: `url('${oldStyle.bg}')`,
      }}
    >
      {/* Overlay Gelap Halus untuk kontras kartu */}
      <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[1px] pointer-events-none" />

      {/* 1. Judul Section STYLE DESIGN LAMA */}
      <div className="text-center relative z-10 mb-10 sm:mb-14 select-none">
        <h2
          className="font-spartan font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-wider text-[#FFDE00] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          style={{
            WebkitTextStroke: "3px #003399",
            paintOrder: "stroke fill",
            textShadow: "0 6px 18px rgba(0, 51, 153, 0.7)",
          }}
        >
          {oldStyle.title}
        </h2>
      </div>

      {/* 2. Grid 8 Kartu Postingan Desain Lama (5 Atas, 3 Bawah Kiri - Menyisakan Area Motor Balap di Kanan Bawah) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 items-start">
          {oldStyle.cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white/10 p-1.5 sm:p-2 rounded-2xl border border-white/40 shadow-2xl overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300"
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
                <span className="bg-[#FFDE00] text-blue-950 font-black text-[10px] px-3 py-1 rounded-full mt-2 shadow-lg">
                  🔍 View Design
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
