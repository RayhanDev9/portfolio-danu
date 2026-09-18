import type { BrandItem } from "../data/creativeJourneyData";

interface CJBrandBubblesProps {
  brands: BrandItem[];
}

export const CJBrandBubbles = ({ brands }: CJBrandBubblesProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-items-center">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[inset_0_2px_8px_rgba(255,255,255,0.35),0_8px_24px_rgba(0,0,0,0.45)] hover:border-white/60 hover:bg-white/15 hover:scale-110 transition-all duration-300 overflow-hidden cursor-pointer"
          title={brand.name}
        >
          {brand.logo ? (
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-[70%] h-[70%] object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${brand.color}cc, #0b071a)`,
              }}
            >
              <span className="font-spartan font-black text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider drop-shadow-md">
                {brand.initials}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
