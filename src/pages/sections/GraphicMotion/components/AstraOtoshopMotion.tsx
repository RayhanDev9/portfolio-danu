import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartphoneMockup from "./SmartphoneMockup";
import { ASTRA_SMARTPHONES, ASTRA_FEED_CARDS } from "../data/motionData";
import type { MotionItem } from "../data/motionData";

interface AstraOtoshopMotionProps {
  onSelect: (item: MotionItem) => void;
}

export default function AstraOtoshopMotion({ onSelect }: AstraOtoshopMotionProps) {
  const bgRaceTrack = `${import.meta.env.BASE_URL}img/motion/bg/bg-1.avif`;

  return (
    <section className="relative w-full select-none font-sans overflow-hidden">
      {/* 1. Top Section: 5 Smartphones (Solid Blue Background) */}
      <div className="w-full bg-gradient-to-b from-[#185cb8] to-[#124285] py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo Astra Otoshop */}
          <div className="mb-6 sm:mb-8 flex items-center">
            <div className="bg-white/95 px-4 py-2 rounded-xl shadow-lg border border-black/10 flex items-center gap-1.5">
              <span className="font-spartan font-black text-lg sm:text-xl text-[#e52421] tracking-tight">
                ASTRA
              </span>
              <span className="font-spartan font-bold text-lg sm:text-xl text-[#004f9e] tracking-tight">
                Otoshop<span className="text-xs text-slate-500">.com</span>
              </span>
            </div>
          </div>

          {/* 5 Smartphones: Standard Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {ASTRA_SMARTPHONES.map((item) => (
              <SmartphoneMockup key={item.id} item={item} onSelect={onSelect} />
            ))}
          </div>
        </div>
      </div>

      {/* 2. Bottom Section: 4 Feed Cards with Race Track Background */}
      <div
        className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bgRaceTrack})` }}
      >
        {/* Dark overlay with vignette */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Mobile swipe indicator for feed cards with Lucide icons */}
          <div className="sm:hidden flex justify-end mb-3">
            <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white text-xs font-semibold shadow-sm">
              <ChevronLeft className="w-3.5 h-3.5 text-[#e8fb31]" />
              <span>Geser Kartu</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#e8fb31]" />
            </div>
          </div>

          {/* 4 Square / Feed Cards: Mobile Horizontal Scroll, Tablet/Desktop Grid */}
          <div className="flex sm:grid sm:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {ASTRA_FEED_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => onSelect(card)}
                className={`relative group cursor-pointer aspect-square rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 bg-slate-900 w-[72vw] xs:w-[60vw] sm:w-auto shrink-0 snap-center ${
                  card.highlightBorder
                    ? "border-4 border-[#a855f7] shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                    : "border-2 border-white/30 hover:border-[#e8fb31]"
                }`}
              >
                {/* Media Preview: Image or Video */}
                {card.isImageOnly || !card.videoUrl ? (
                  <img
                    src={card.imageUrl || card.poster}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video
                    src={card.videoUrl}
                    poster={card.poster}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Bottom Title Label */}
                <div className="absolute bottom-2.5 inset-x-2.5 text-center pointer-events-none">
                  <span className="font-spartan font-bold text-xs sm:text-sm text-white drop-shadow-lg line-clamp-1">
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

