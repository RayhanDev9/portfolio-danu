import ExperienceHero from "./components/ExperienceHero";
import ExperienceTimelineOverview from "./components/ExperienceTimelineOverview";
import ExperienceDetailSection from "./components/ExperienceDetailSection";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-[#5b13ec] text-white overflow-x-hidden font-sans py-8 px-4 sm:px-8"
    >
      {/* 1. Hero Section "EXPER I ENCE" */}
      <ExperienceHero />

      {/* 2. Horizontal Timeline Overview (2024 - 2025 - 2026) */}
      <ExperienceTimelineOverview />

      {/* 3. Detail Container Krem Pengalaman */}
      <ExperienceDetailSection />
    </section>
  );
}
