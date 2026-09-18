import CrossOrnaments from "./components/CrossOrnaments";
import ProfileHero from "./components/ProfileHero";
import ProfileStats from "./components/ProfileStats";
import ProfileSkills from "./components/ProfileSkills";
import ProfileValues from "./components/ProfileValues";
import ProfileCTA from "./components/ProfileCTA";

export default function Profile() {
  return (
    <main
      id="profile"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#5b13ec] via-[#4811be] to-[#340c8c] text-white overflow-x-hidden font-sans selection:bg-[#e8fb31] selection:text-slate-900 flex flex-col justify-between"
    >
      {/* 1. Retro Cross Ornaments (+) */}
      <CrossOrnaments />

      {/* 2. Hero Section: Foto 3D + Bio + CTA */}
      <ProfileHero />

      {/* 3. Stats & Highlights */}
      <ProfileStats />

      {/* 4. Software & Skills Proficiency */}
      <ProfileSkills />

      {/* 5. Work Principles & Values */}
      <ProfileValues />

      {/* 6. Bottom CTA Banner */}
      <ProfileCTA />
    </main>
  );
}
