import { useState } from "react";
import { astraData } from "../data/astraData";
import ImageModal from "./ImageModal";

export default function NewStyleSection() {
  const { newStyle, feedDesign } = astraData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  // Ambil 4 contoh kartu desain versi baru untuk ditonjolkan
  const highlightCards = feedDesign.cards.slice(0, 4);

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-between min-h-[90vh] bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/20"
      style={{
        backgroundImage: `url('${newStyle.bg}')`,
      }}
    >
      {/* Overlay Langit Cerah */}
      <div className="absolute inset-0 bg-sky-500/15 pointer-events-none" />

      {/* Floating Gold Confetti Ribbon Accents */}
      <div className="absolute top-10 left-8 sm:left-16 w-14 h-7 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 rounded-full rotate-45 blur-[0.5px] opacity-90 animate-pulse pointer-events-none shadow-lg" />
      <div className="absolute top-24 right-10 sm:right-24 w-18 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full -rotate-12 blur-[0.5px] opacity-90 pointer-events-none shadow-lg" />
      <div className="absolute top-1/2 left-6 w-12 h-6 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full rotate-24 opacity-80 pointer-events-none" />
      <div className="absolute top-1/2 right-8 w-14 h-7 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full -rotate-30 opacity-80 pointer-events-none" />

      {/* 1. Judul Utama Section: STYLE DESIGN VERSI BARU */}
      <div className="text-center relative z-10 mb-8 sm:mb-12 select-none">
        <h2 className="font-sans font-black italic uppercase tracking-tight text-center leading-none">
          <span
            className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.7)]"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.8)",
              textShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
            }}
          >
            {newStyle.title}
          </span>
          <span
            className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white mt-1 sm:mt-2 drop-shadow-[0_12px_28px_rgba(0,0,0,0.8)]"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.8)",
              textShadow: "0 10px 28px rgba(0, 0, 0, 0.7)",
            }}
          >
            {newStyle.subtitle}
          </span>
        </h2>

        {/* Subtitle Badge Keterangan Desain Baru */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white font-spartan font-black text-xs sm:text-sm md:text-base px-5 py-2 rounded-full mt-4 shadow-2xl border border-white/40 uppercase tracking-wider">
          <span>✨ Hierarky</span>
          <span>•</span>
          <span>Vibrant Colors</span>
          <span>•</span>
          <span>Modern Typography</span>
        </div>
      </div>

      {/* 2. Showcase Kartu Desain Baru yang Menonjol */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlightCards.map((card, idx) => (
            <div
              key={card.id}
              className="group relative bg-white/20 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl border-2 border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer hover:scale-105 hover:-translate-y-3 transition-all duration-300"
              onClick={() =>
                setSelectedImg({ src: card.image, title: card.title })
              }
            >
              {/* Badge New Style */}
              <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-red-600 to-amber-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg border border-white/50 uppercase">
                NEW #{idx + 1}
              </div>

              {/* Card Image */}
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-gray-900 shadow-md">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Card Footer Caption */}
              <div className="mt-2.5 px-1 pb-1 text-center">
                <div className="font-spartan font-black text-xs sm:text-sm text-white drop-shadow truncate">
                  {card.title}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                <span className="bg-[#FFDE00] text-blue-950 font-black text-xs px-4 py-2 rounded-full shadow-2xl">
                  🔍 Zoom Detail Desain Baru
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
