import { FEED_DESIGN_ITEMS } from "../data/viaFabulaData";
import type { FabulaItem } from "../data/viaFabulaData";

interface FeedDesignSectionProps {
  onSelectImage: (item: FabulaItem) => void;
}

export default function FeedDesignSection({ onSelectImage }: FeedDesignSectionProps) {
  return (
    <section className="relative w-full bg-[#5832a8] py-16 sm:py-20 px-4 sm:px-8 border-b-4 border-purple-950/40">
      <div className="max-w-7xl mx-auto">
        {/* 1. Yellow Bold Heading with Decorative Arrow Line */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#fef036] uppercase tracking-wide leading-none select-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
            FEED
          </h2>

          {/* Decorative Divider Line with Arrow */}
          <div className="flex items-center my-3 max-w-xs sm:max-w-md">
            <div className="w-3.5 h-3.5 rounded-full bg-white mr-1 shadow" />
            <div className="flex-1 h-[3px] bg-white shadow" />
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-0.5" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#fef036] uppercase tracking-wide leading-none select-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
            DESIGN
          </h2>
        </div>

        {/* 2. Grid Poster Showcase (Polaroid Frame Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {FEED_DESIGN_ITEMS.slice(0, 5).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="bg-white p-2 sm:p-2.5 shadow-2xl hover:shadow-[0_20px_35px_rgba(0,0,0,0.45)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
