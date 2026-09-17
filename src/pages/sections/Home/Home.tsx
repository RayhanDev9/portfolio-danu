import CrossOrnaments from "./components/CrossOrnaments";
import HeroSection from "./components/HeroSection";
import ProfileImage from "./components/ProfileImage";
import SoftwareBanner from "./components/SoftwareBanner";
import SocialBar from "./components/SocialBar";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen bg-[#5b13ec] text-white overflow-x-hidden select-none font-sans flex flex-col justify-between"
      >
        {/* Ornamen Cross Retro (+) */}
        <CrossOrnaments />

        {/* Hero Section (Judul, Subjudul, Deskripsi) */}
        <HeroSection />

        {/* Foto Danu Responsif */}
        <ProfileImage />

        {/* Bottom Section (Banner Kuning Software + Tombol Sosial Media) */}
        <div className="relative z-10 w-full mt-auto">
          <SoftwareBanner />
          <SocialBar />
        </div>
      </section>

      {/* Section: My Portofolio */}
      <PortfolioSection />
    </>
  );
}
