import { brandList } from "./data/creativeJourneyData";
import { CJHero } from "./components/CJHero";
import { CJBrandBubbles } from "./components/CJBrandBubbles";
import { CJDanuPhoto } from "./components/CJDanuPhoto";
import { CJBrandLinks } from "./components/CJBrandLinks";

export default function CreativeJourney() {
  return (
    <section
      id="creative-journey"
      className="relative w-full min-h-screen bg-[#0d0c13] text-white flex flex-col justify-between overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 select-none"
    >
      {/* Background Decorative Gradients & Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12101e] to-[#0a0a0f] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50vw] h-[100%] bg-gradient-to-l from-[#5b13ec]/25 via-[#7c3aff]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[50vh] bg-radial from-[#5b13ec]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle Road / Texture overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center justify-between min-h-[calc(100vh-6rem)]">
        {/* Top Header */}
        <CJHero />

        {/* Desktop Layout (lg+) */}
        <div className="hidden lg:flex w-full items-center justify-between gap-6 xl:gap-8 my-auto pt-4 pb-2">
          {/* Left Column: Brand Glass Bubbles */}
          <div className="w-[30%] flex justify-center items-center">
            <CJBrandBubbles brands={brandList} />
          </div>

          {/* Center Column: Danu Photo */}
          <div className="w-[40%] flex justify-center items-end">
            <CJDanuPhoto />
          </div>

          {/* Right Column: Brand Links */}
          <div className="w-[30%] flex justify-center items-center">
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
