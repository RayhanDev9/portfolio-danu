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
          className=" border-2 border-yellow-200 group flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-[#5b13ec]/90 hover:bg-[#6c22ff] border border-white/20 shadow-lg shadow-purple-950/40 hover:shadow-purple-700/40 hover:border-white/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          <span className="font-sans font-bold text-white text-xs sm:text-sm md:text-base capitalize tracking-wide truncate pr-2 text-left">
            {brand.name}
          </span>
          <span className="text-[#e5fc34] font-black text-sm sm:text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </button>
      ))}
    </div>
  );
};
