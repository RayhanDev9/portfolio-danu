import { portfolioCategories } from "../data/homeData";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-full bg-[#5b13ec] py-16 px-4 sm:px-8 md:px-12 lg:px-20"
    >
      {/* 1. Header Judul: "My Portofolio." */}
      <div className="flex flex-col items-center w-full mb-6 sm:mb-8">
        <div className="flex items-center gap-1 sm:gap-2 select-none mb-6 sm:mb-8 pl-2 sm:pl-4">
          {/* Kata "My" bergaya tulisan tangan / cursive / script */}
          <span className="font-['Playfair_Display',cursive] italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white rotate-12 sm:rotate-[3deg] -mr-1 sm:-mr-1 -translate-y-3 sm:-translate-y-5 md:-translate-y-12 inline-block">
            My
          </span>

          {/* Kata "Portofolio." font tebal warna kuning neon */}
          <h2 className="font-spartan font-semibold font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#e8ea38] tracking-tight leading-none">
            Portofolio.
          </h2>
        </div>

        {/* 2. Container Kuning (Yellow Frame) */}
        <div className="w-full bg-[#f6ed28] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {portfolioCategories.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
