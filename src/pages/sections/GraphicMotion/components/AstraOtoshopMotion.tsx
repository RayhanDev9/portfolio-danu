import { Play } from "lucide-react";
import SmartphoneMockup from "./SmartphoneMockup";
import { ASTRA_SMARTPHONES, ASTRA_FEED_CARDS } from "../data/motionData";
import type { MotionItem } from "../data/motionData";

interface AstraOtoshopMotionProps {
  onSelect: (item: MotionItem) => void;
}

export default function AstraOtoshopMotion({ onSelect }: AstraOtoshopMotionProps) {
  const bgRaceTrack = `${import.meta.env.BASE_URL}img/motion/bg/bg-1.jpg`;

  return (
    <section className="relative w-full select-none font-sans">
      {/* 1. Top Section: 5 Smartphones (Solid Blue Background) */}
      <div className="w-full bg-gradient-to-b from-[#185cb8] to-[#124285] py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo Astra Otoshop */}
          <div className="mb-8 flex items-center">
            <div className="bg-white/95 px-4 py-2 rounded-xl shadow-lg border border-black/10 flex items-center gap-1.5">
              <span className="font-spartan font-black text-lg sm:text-xl text-[#e52421] tracking-tight">
                ASTRA
              </span>
              <span className="font-spartan font-bold text-lg sm:text-xl text-[#004f9e] tracking-tight">
                Otoshop<span className="text-xs text-slate-500">.com</span>
              </span>
            </div>
          </div>

          {/* 5 Smartphones Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {ASTRA_SMARTPHONES.map((item) => (
              <SmartphoneMockup key={item.id} item={item} onSelect={onSelect} />
            ))}
          </div>
        </div>
      </div>

      {/* 2. Yellow Neon Divider Bar */}
      {/* <div className="w-full h-2 bg-[#fffff] shadow-[0_0_15px_rgba(232,251,49,0.5)]" /> */}

      {/* 3. Bottom Section: 4 Feed Cards with Race Track Background */}
      <div
        className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bgRaceTrack})` }}
      >
        {/* Dark overlay with vignette */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* 4 Square / Feed Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {ASTRA_FEED_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => onSelect(card)}
                className={`relative group cursor-pointer aspect-square rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 bg-slate-900 ${
                  card.highlightBorder
                    ? "border-4 border-[#a855f7] shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                    : "border-2 border-white/30 hover:border-[#e8fb31]"
                }`}
              >
                {/* Video / Poster preview */}
                <video
                  src={card.videoUrl}
                  poster={card.poster}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/40 flex items-center justify-center shadow-lg group-hover:bg-[#5b13ec] group-hover:text-[#e8fb31] group-hover:scale-110 transition-all">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Title Label */}
                <div className="absolute bottom-2.5 inset-x-2.5 text-center">
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
