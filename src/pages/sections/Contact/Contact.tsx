import CrossOrnaments from "./components/CrossOrnaments";
import ContactHero from "./components/ContactHero";
import ContactCards from "./components/ContactCards";
import ContactFormSection from "./components/ContactFormSection";
import ContactFAQ from "./components/ContactFAQ";

export default function Contact() {
  return (
    <main
      id="contact"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#5b13ec] via-[#4811be] to-[#340c8c] text-white overflow-x-hidden font-sans selection:bg-[#e8fb31] selection:text-slate-900 flex flex-col justify-between"
    >
      {/* 1. Retro Cross Ornaments (+) */}
      <CrossOrnaments />

      {/* 2. Hero Section (Header, Status Badge & Heading) */}
      <ContactHero />

      {/* 3. Quick Action Cards (WhatsApp, Email, Instagram, LinkedIn) */}
      <ContactCards />

      {/* 4. Collaboration Section (Profile Card Danu + Form Pesan Cepat) */}
      <ContactFormSection />

      {/* 5. FAQ Accordion */}
      <ContactFAQ />
    </main>
  );
}
