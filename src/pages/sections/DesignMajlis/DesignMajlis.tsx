import MajlisHero from "./components/MajlisHero";
import InvitationSection from "./components/InvitationSection";
import CertificateSection from "./components/CertificateSection";
import PosterSection from "./components/PosterSection";

export default function DesignMajlis() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#6b0808] via-[#4d0505] to-[#2b0202] text-white selection:bg-[#f5be38] selection:text-black overflow-hidden">
      <MajlisHero />
      <InvitationSection />
      <CertificateSection />
      <PosterSection />
    </main>
  );
}
