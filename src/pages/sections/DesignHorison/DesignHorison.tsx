import HorisonHero from "./components/HorisonHero";
import MeetingRoomSection from "./components/MeetingRoomSection";
import WeddingSection from "./components/WeddingSection";
import HotelRoomSection from "./components/HotelRoomSection";

export default function DesignHorison() {
  return (
    <main
      className="w-full min-h-screen bg-[#0080f6] text-white overflow-hidden selection:bg-yellow-300 selection:text-blue-900"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 15%, #1fa2ff 0%, #0080f6 45%, #005bb5 100%)",
      }}
    >
      {/* 1. Section Hero (Paling Atas dengan jarak navbar) */}
      <HorisonHero />

      {/* 2. Section Meeting Room */}
      <MeetingRoomSection />

      {/* 3. Section Wedding */}
      <WeddingSection />

      {/* 4. Section Hotel Room (Paling Bawah) */}
      <HotelRoomSection />
    </main>
  );
}
