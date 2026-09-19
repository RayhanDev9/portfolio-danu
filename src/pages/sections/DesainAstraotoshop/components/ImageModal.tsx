import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title?: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  title,
}: ImageModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] bg-[#0c1222] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/10 text-white">
          <h4 className="font-spartan font-bold text-sm sm:text-base truncate">
            {title || "Astra Otoshop Design Preview"}
          </h4>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-lg font-bold cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Image Display */}
        <div className="p-2 sm:p-4 overflow-auto no-scrollbar flex items-center justify-center max-h-[calc(90vh-60px)]">
          <img
            src={imageSrc}
            alt={title || "Preview"}
            className="max-h-[78vh] max-w-full w-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
