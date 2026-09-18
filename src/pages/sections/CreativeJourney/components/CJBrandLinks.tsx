import type { BrandItem } from "../data/creativeJourneyData";

interface CJBrandLinksProps {
  brands: BrandItem[];
}

export const CJBrandLinks = ({ brands }: CJBrandLinksProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full max-w-[340px] sm:max-w-[460px] md:max-w-[560px]">
      {brands.map((brand) => (
        <button
          key={brand.id}
          type="button"
          
          className="w-full group flex items-center justify-between gap-2 pl-4 pr-3 py-2 sm:py-2.5 
            border-[1.5px] border-[#e5fc34] rounded-lg bg-[#5b13ec]/90 hover:bg-[#6c22ff] 
            hover:border-white shadow-lg shadow-purple-950/40 hover:shadow-purple-700/40 
            hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden"
        >
          {/* Brand name */}
          {/* 3. truncate memastikan teks panjang terpotong jadi "..." dan tidak merusak layout */}
          <span className="font-sans font-bold text-white text-xs sm:text-sm md:text-base capitalize tracking-wide truncate text-left w-full">
            {brand.name}
          </span>

          {/* Arrow icon */}
          <span className="flex-shrink-0 flex items-center justify-center 
            w-5 h-5 sm:w-6 sm:h-6 rounded-xs
            transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
            </svg>
          </span>
        </button>
      ))}
    </div>
  );
};