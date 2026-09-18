import { useState } from "react";
import { klinnerData } from "../data/klinnerData";
import ImageModal from "./ImageModal";

export default function CleaningSection() {
  const { cleaning } = klinnerData;
  const [selectedImg, setSelectedImg] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 flex flex-col items-center bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/20 min-h-[90vh]"
      style={{
        backgroundImage: `url('${cleaning.bg}')`,
      }}
    >
      {/* Overlay Dapur Bersih */}
      <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />

      {/* 1. Header Section: Judul Design + Subtitle Pill Badge */}
      <div className="text-center relative z-10 mb-10 sm:mb-14 select-none flex flex-col items-center">
        <h2
          className="font-spartan font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11rem] 2xl:text-[12rem]  tracking-tight leading-none text-[#253b80] drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
          style={{
            WebkitTextStroke: "4px #ffffff",
            paintOrder: "stroke fill",
          }}
        >
          {cleaning.title}
        </h2>

        {/* Subtitle Pill Badge */}
        <div className="inline-block bg-[#1b296b] text-white font-sans font-bold text-xs sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-2.5 rounded-full mt-3 sm:mt-4 shadow-xl border border-white/30 tracking-wide">
          {cleaning.badge}
        </div>
      </div>

      {/* 2. Grid 8 Kartu Desain Bersih-Bersih Rumah (2 Baris x 4 Kolom di Desktop) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mb-8 sm:mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {cleaning.cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl p-1.5 sm:p-2 border-2 border-blue-900/40 shadow-2xl overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              onClick={() =>
                setSelectedImg({ src: card.image, title: card.title })
              }
            >
              {/* Image Container */}
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-gray-100">
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
                <span className="bg-[#253b80] text-white font-black text-xs px-4 py-1.5 rounded-full shadow-xl border border-white/40">
                  🔍 Zoom Desain
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
