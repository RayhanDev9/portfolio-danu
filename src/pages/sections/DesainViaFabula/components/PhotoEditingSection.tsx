import { PHOTO_EDITING_ITEMS } from "../data/viaFabulaData";
import type { FabulaItem } from "../data/viaFabulaData";

interface PhotoEditingSectionProps {
  onSelectImage: (item: FabulaItem) => void;
}

export default function PhotoEditingSection({
  onSelectImage,
}: PhotoEditingSectionProps) {
  return (
    <section className="relative w-full bg-[#5832a8] py-16 sm:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 1. Yellow Bold Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#fef036] uppercase tracking-wide select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
            PHOTO EDITING
          </h2>
        </div>

        {/* 2. Wooden Framed Green Chalkboard */}
        <div className="relative rounded-3xl p-4 sm:p-7 bg-gradient-to-b from-[#e8c39e] via-[#d4a373] to-[#bc8a5f] shadow-[0_25px_60px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_6px_rgba(0,0,0,0.4)] border-4 sm:border-8 border-[#b07d4f]">
          {/* Inner Green Chalkboard */}
          <div className="rounded-2xl bg-[#1b4332] border-2 border-emerald-600/30 p-4 sm:p-6 md:p-8 shadow-[inset_0_6px_25px_rgba(0,0,0,0.7)]">
            {/* Grid Photo Cards (LIA Series) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
              {PHOTO_EDITING_ITEMS.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectImage(item)}
                  className="bg-white p-1.5 sm:p-2 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-stone-100">
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
        </div>
      </div>
    </section>
  );
}
