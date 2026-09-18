import ExperienceHero from "./components/ExperienceHero";
import ExperienceTimelineOverview from "./components/ExperienceTimelineOverview";
import ExperienceDetailSection from "./components/ExperienceDetailSection";
import EducationHero from "./components/EducationHero";
import EducationTimeline from "./components/EducationTimeline";
import EducationDetailSection from "./components/EducationDetailSection";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-gradient-to-r from-[#1d59f3] via-[#4328ec] to-[#5b13ec] text-white overflow-x-hidden font-sans py-12 px-4 sm:px-8 md:px-12 flex flex-col justify-between"
    >
      {/* 1. Hero Section "EXPER I ENCE" (Skala Besar) */}
      <ExperienceHero />

      {/* 2. Horizontal Timeline Overview (Skala Besar & Luas) */}
      <ExperienceTimelineOverview />

      {/* 3. Detail Container Krem Pengalaman */}
      <ExperienceDetailSection />

      {/* 4. Section EDUCATION: Hero Title */}
      <EducationHero />

      {/* 5. Section EDUCATION: Horizontal Timeline 3 Sekolah */}
      <EducationTimeline />

      {/* 6. Section EDUCATION: Detail Card Sekolah (Alternating) */}
      <EducationDetailSection />
    </section>
  );
}

