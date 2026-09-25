import { brandList } from "./data/creativeJourneyData";
import { CJHero } from "./components/CJHero";
import { CJBrandBubbles } from "./components/CJBrandBubbles";
import { CJDanuPhoto } from "./components/CJDanuPhoto";
import { CJBrandLinks } from "./components/CJBrandLinks";

export default function CreativeJourney() {
  return (
    <section
      id="creative-journey"
      className="relative w-full min-h-screen text-white flex flex-col justify-between overflow-hidden
        pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-8 sm:pb-12 lg:pb-16
        px-4 sm:px-6 lg:px-12 select-none"
    >
      {/* === BACKGROUND: foto jalan aspal === */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}img/other/jalan.avif')`,
        }}
      />

      {/* Dark overlay agar teks tetap terbaca — lebih terang */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Gradient purple overlay dari kanan */}
      <div className="absolute top-0 right-0 w-[55vw] h-full bg-gradient-to-l from-[#5b13ec]/50 via-[#7c3aff]/20 to-transparent blur-2xl pointer-events-none" />

      {/* Gradient gelap dari bawah */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* Gradient gelap dari atas (blend dengan navbar) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center justify-between min-h-[calc(100vh-8rem)]">
        {/* Top Header */}
        <CJHero />

        {/* Desktop Layout (lg+) */}
        <div className="hidden z-20 lg:flex w-full items-center justify-between gap-6 xl:gap-8 my-auto pt-4 pb-2">
          {/* Left Column: Brand Glass Bubbles */}
          {/* Ubah w-[70%] menjadi flex-1 (supaya membagi sisa ruang secara adil) */}
          <div className="flex-1 flex justify-center items-center z-30">
            <CJBrandBubbles brands={brandList} />
          </div>

          {/* Center Column: Danu Photo */}
          {/* Tambahkan pointer-events-none agar mouse "tembus" melewati area kosong kontainer ini */}
          <div className="w-[30%] flex justify-center items-end pointer-events-none">
            <CJDanuPhoto />
          </div>

          {/* Right Column: Brand Links */}
          {/* Ubah w-[70%] menjadi flex-1 */}
          <div className="flex-1 flex justify-center items-center z-30 relative">
            <CJBrandLinks brands={brandList} />
          </div>
        </div>

        {/* Mobile & Tablet Layout (< lg) */}
        <div className="flex lg:hidden flex-col items-center w-full gap-8 mt-2 pb-6">
          {/* Brand Bubbles */}
          <div className="w-full flex justify-center px-2">
            <CJBrandBubbles brands={brandList} />
          </div>

          {/* Danu Photo */}
          <div className="w-full flex justify-center -my-2">
            <CJDanuPhoto />
          </div>

          {/* Brand Links */}
          <div className="w-full flex justify-center px-4">
            <CJBrandLinks brands={brandList} />
          </div>
        </div>
      </div>
    </section>
  );
}
