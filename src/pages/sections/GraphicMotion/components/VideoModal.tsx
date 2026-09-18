import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { MotionItem } from "../data/motionData";

interface VideoModalProps {
  item: MotionItem | null;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (item) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-w-sm sm:max-w-md w-full bg-[#12082b] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Title & Close Button */}
        <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div>
            <h3 className="font-spartan font-bold text-base sm:text-lg text-white leading-tight">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="font-sans text-xs text-[#e8fb31] mt-0.5">
                {item.subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border-none"
            aria-label="Tutup video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-[9/16] max-h-[70vh] bg-black rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
          <video
            ref={videoRef}
            src={item.videoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
