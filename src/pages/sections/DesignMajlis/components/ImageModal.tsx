import { useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import type { MajlisImageModalItem } from "../data/majlisData";

interface ImageModalProps {
  item: MajlisImageModalItem | null;
  onClose: () => void;
}

export default function ImageModal({ item, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-stone-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-black/50 border-b border-white/10">
          <div className="flex items-center gap-2 text-white">
            <ZoomIn className="w-5 h-5 text-[#f5be38]" />
            <h3 className="font-bold text-sm sm:text-base truncate max-w-md">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Image */}
        <div className="flex-1 overflow-auto p-3 flex items-center justify-center bg-stone-950/60">
          <img
            src={item.image}
            alt={item.alt}
            className="max-h-[75vh] w-auto object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Modal Footer Caption */}
        <div className="px-5 py-2.5 bg-black/60 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm text-stone-300">{item.alt}</p>
        </div>
      </div>
    </div>
  );
}
