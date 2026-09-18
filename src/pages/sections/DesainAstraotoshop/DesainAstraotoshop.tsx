import AstraHero from "./components/AstraHero";
import OldStyleSection from "./components/OldStyleSection";
import NewStyleSection from "./components/NewStyleSection";
import AdsDesignSection from "./components/AdsDesignSection";
import FeedDesignSection from "./components/FeedDesignSection";
import ThumbnailDesignSection from "./components/ThumbnailDesignSection";

export default function DesainAstraotoshop() {
  return (
    <main className="w-full min-h-screen bg-slate-900 text-white overflow-hidden selection:bg-yellow-300 selection:text-blue-900">
      {/* 1. Section Hero (Paling Atas dengan jarak aman Navbar) */}
      <AstraHero />

      {/* 2. Section Style Design Lama */}
      <OldStyleSection />

      {/* 3. Section Style Design Versi Baru */}
      <NewStyleSection />

      {/* 4. Section Ads Design */}
      <AdsDesignSection />

      {/* 5. Section Feed Design */}
      <FeedDesignSection />

      {/* 6. Section Thumbnail Design (Paling Bawah) */}
      <ThumbnailDesignSection />
    </main>
  );
}
