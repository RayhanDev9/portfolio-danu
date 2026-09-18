import {
  CAROUSEL_TATO_ITEMS,
  CAROUSEL_KOPI_ITEMS,
} from "../data/geonerationsData";
import type { DesignItem } from "../data/geonerationsData";

interface CarouselSectionProps {
  onSelectImage: (item: DesignItem) => void;
}

export default function CarouselSection({ onSelectImage }: CarouselSectionProps) {
  return (
    <section className="relative w-full bg-[#a81a1a] py-16 sm:py-20 px-4 sm:px-8 border-b-4 border-[#821313] text-white">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header Banner */}
        <div className="mb-10">
          <div className="inline-block border-[3px] border-white bg-[#a81a1a] px-6 sm:px-8 py-2.5 sm:py-3 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
              CAROUSEL DESIGN
            </h2>
          </div>
        </div>

        {/* 2. Row 1: Meme Tato Series */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {CAROUSEL_TATO_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="group relative rounded-xl overflow-hidden border-[3px] border-white shadow-2xl bg-black/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
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

        {/* 3. Horizontal White Line Divider */}
        <div className="w-full h-[3px] bg-white my-10 sm:my-12 shadow-sm" />

        {/* 4. Row 2: Meme Kopi Series */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAROUSEL_KOPI_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="group relative rounded-xl overflow-hidden border-[3px] border-white shadow-2xl bg-black/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
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
