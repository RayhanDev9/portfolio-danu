import { Play } from "lucide-react";
import type { MotionItem } from "../data/motionData";

interface SmartphoneMockupProps {
  item: MotionItem;
  onSelect: (item: MotionItem) => void;
}

export default function SmartphoneMockup({ item, onSelect }: SmartphoneMockupProps) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="relative group cursor-pointer flex flex-col items-center transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      {/* Smartphone Outer Shell */}
      <div className="relative w-full aspect-[9/16] bg-[#0c0c0e] rounded-[32px] sm:rounded-[38px] p-2.5 sm:p-3 border-[4px] sm:border-[6px] border-[#222226] shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between">
        {/* Top Speaker / Camera Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-white/10" />
          <div className="w-8 h-1 rounded-full bg-[#1a1a1a]" />
        </div>

        {/* Video / Screen Area */}
        <div className="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-900 flex items-center justify-center">
          <video
            src={item.videoUrl}
            poster={item.poster}
            muted
            loop
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/40 flex items-center justify-center shadow-lg group-hover:bg-[#5b13ec] group-hover:border-[#e8fb31] group-hover:text-[#e8fb31] group-hover:scale-110 transition-all duration-300">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
            </div>
          </div>

          {/* Bottom Title Bar Inside Phone */}
          <div className="absolute bottom-3 inset-x-3 text-center z-10">
            <span className="text-[11px] sm:text-xs font-bold text-white line-clamp-1 drop-shadow-md">
              {item.title}
            </span>
          </div>
        </div>

        {/* Bottom Home Indicator Dots */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
