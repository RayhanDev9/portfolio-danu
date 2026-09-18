import { OTHER_DESIGN_ITEMS, GEONERATIONS_BG } from "../data/geonerationsData";
import type { DesignItem } from "../data/geonerationsData";

interface AnotherDesignSectionProps {
  onSelectImage: (item: DesignItem) => void;
}

export default function AnotherDesignSection({
  onSelectImage,
}: AnotherDesignSectionProps) {
  return (
    <section
      className="relative w-full bg-repeat bg-contain py-16 sm:py-20 px-4 sm:px-8"
      style={{
        backgroundImage: `url('${GEONERATIONS_BG}')`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 1. Header Banner */}
        <div className="mb-10">
          <span className="inline-block bg-[#a81a1a] text-white font-black text-2xl sm:text-4xl md:text-5xl px-6 sm:px-8 py-2.5 rounded-sm shadow-lg uppercase tracking-wider">
            ANOTHER DESIGN
          </span>
        </div>

        {/* 2. Grid 12 Meme & Content Cards (3 Rows x 4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {OTHER_DESIGN_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="group relative rounded-xl overflow-hidden bg-white border-2 sm:border-[3px] border-[#a81a1a] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-stone-100">
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

        {/* 3. Bottom Callout Card */}
        <div className="mt-14 bg-[#a81a1a] text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl mx-auto text-center border-2 border-red-900">
          <p className="font-bold text-base sm:text-lg md:text-xl text-white tracking-wide leading-relaxed">
            Geonerations is known for its humorous, playful, and relatable content,
            often featuring local East Javanese humor.
          </p>
        </div>
      </div>
    </section>
  );
}
