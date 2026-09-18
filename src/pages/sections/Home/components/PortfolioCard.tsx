import { Link } from "react-router-dom";
import type { PortfolioCategory } from "../data/homeData";

interface PortfolioCardProps {
  item: PortfolioCategory;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Link
      to={item.link}
      className="group relative flex flex-col overflow-hidden shadow-lg border-2 border-black/10 transition-transform duration-300 hover:-translate-y-1.5 bg-black no-underline"
    >
      {/* Header Hitam Kartu */}
      <div className="bg-black text-white text-center py-2.5 sm:py-3 px-4 font-sans font-bold text-sm sm:text-base tracking-wide select-none">
        {item.title}
      </div>

      {/* Thumbnail Proyek */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#0e1322]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Ikon Panah Lengkung Ungu di Pojok Kanan Bawah */}
        <div className="absolute bottom-3 right-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center drop-shadow-md pointer-events-none">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className="w-full h-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            {/* Outer White Contour */}
            <path
              d="M12 36C18 36 28 32 32 20M32 20L22 18M32 20L34 30"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Purple Arrow */}
            <path
              d="M12 36C18 36 28 32 32 20M32 20L22 18M32 20L34 30"
              stroke="#5b13ec"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
