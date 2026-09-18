import type { BrandItem } from "../data/creativeJourneyData";

interface CJBrandLinksProps {
  brands: BrandItem[];
}

export const CJBrandLinks = ({ brands }: CJBrandLinksProps) => {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px]">
      {brands.map((brand) => (
        <button
          key={brand.id}
          type="button"
          className="group flex items-center justify-between gap-2 pl-3.5 pr-2 py-2.5 sm:pl-4 sm:pr-2.5 sm:py-3
            rounded-lg sm:rounded-xl bg-[#5b13ec]/90 hover:bg-[#6c22ff]
            border border-white/20 hover:border-white/40
            shadow-lg shadow-purple-950/40 hover:shadow-purple-700/40
            hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          {/* Brand name */}
          <span className="font-sans font-bold text-white text-xs sm:text-sm md:text-base capitalize tracking-wide truncate text-left">
            {brand.name}
          </span>

          {/* Arrow icon — kotak ungu gelap + panah SVG custom */}
          <span className="flex-shrink-0 flex items-center justify-center
            w-6 h-6 sm:w-7 sm:h-7 rounded-md
            bg-[#3a0aaa] group-hover:bg-[#2a0880]
            transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0"
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
