import KlinnerHero from "./components/KlinnerHero";
import CleaningSection from "./components/CleaningSection";
import GardeningSection from "./components/GardeningSection";
import FitnessSection from "./components/FitnessSection";

export default function DesignMisterKlinner() {
  return (
    <main className="w-full min-h-screen bg-[#f8f6f0] text-slate-900 overflow-hidden selection:bg-rose-400 selection:text-white">
      {/* 1. Section Hero (Paling Atas dengan jarak aman Navbar) */}
      <KlinnerHero />

      {/* 2. Section Household Cleaning (Dapur) */}
      <CleaningSection />

      {/* 3. Section Gardening & Plants (Taman) */}
      <GardeningSection />

      {/* 4. Section Fitness & Exercise (Gym - Paling Bawah) */}
      <FitnessSection />
    </main>
  );
}
