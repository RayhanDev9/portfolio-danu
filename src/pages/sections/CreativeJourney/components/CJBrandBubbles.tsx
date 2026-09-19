import { Link } from "react-router-dom";
import type { BrandItem } from "../data/creativeJourneyData";

interface CJBrandBubblesProps {
  brands: BrandItem[];
}

/**
 * Splits a brand name into two lines for display inside the bubble.
 * Example: "via fabula" → ["via", "fabula"]
 *          "mr klinner" → ["Mr", "Klinner"]
 *          "astra otoshop" → ["Astra", "Otoshop"]
 */
function splitBrandName(name: string): [string, string] {
  const words = name.trim().split(" ");
  if (words.length === 1) return [words[0], ""];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export const CJBrandBubbles = ({ brands }: CJBrandBubblesProps) => {
  return (
    <div className="grid grid-cols-3 gap-3  sm:gap-4 md:gap-5 lg:gap-6 items-center justify-items-center lg:justify-evenly">
      {brands.map((brand) => {
        const [line1, line2] = splitBrandName(brand.name);
        return (
          <Link
            key={brand.id}
            to={brand.path}
            className="group relative flex items-center justify-center
              w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 
              rounded-full
              hover:scale-110 transition-all duration-300 cursor-pointer no-underline"
            title={brand.name}
          >
            {/* === REALISTIC GLASS BUBBLE === */}
            <div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                /* Base glass body: semi-transparent with slight colour tint */
                background: `radial-gradient(circle at 38% 38%,
                  rgba(255,255,255,0.55) 0%,
                  rgba(200,220,255,0.18) 30%,
                  rgba(160,180,240,0.08) 55%,
                  rgba(80,80,140,0.28) 80%,
                  rgba(30,30,80,0.55) 100%)`,
                boxShadow: `
                  inset 0 2px 12px rgba(255,255,255,0.55),
                  inset 0 -4px 16px rgba(0,0,0,0.35),
                  0 8px 32px rgba(0,0,0,0.55),
                  0 2px 8px rgba(255,255,255,0.10)
                `,
                border: "1.5px solid rgba(255,255,255,0.45)",
                backdropFilter: "blur(6px)",
              }}
            />

            {/* Top-left glare — the main specular highlight */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                top: "10%",
                left: "14%",
                width: "36%",
                height: "28%",
                background:
                  "radial-gradient(ellipse at 40% 40%, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.30) 50%, transparent 100%)",
                transform: "rotate(-30deg)",
                filter: "blur(1px)",
              }}
            />

            {/* Bottom-right subtle counter-shine */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                bottom: "10%",
                right: "12%",
                width: "22%",
                height: "14%",
                background:
                  "radial-gradient(ellipse, rgba(255,255,255,0.40) 0%, transparent 100%)",
                filter: "blur(2px)",
              }}
            />

            {/* Brand content — logo or styled text */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-1">
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-[58%] h-[58%] object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <>
                  {/* First word — slightly larger, accent colour */}
                  <span
                    className="font-spartan font-black leading-tight tracking-wide capitalize
                      text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-[0.7rem] xl:text-[0.75rem]"
                    style={{
                      color: "#e23232",
                      textShadow:
                        "0 1px 4px rgba(0,0,0,0.7), 0 0 8px rgba(255,80,80,0.4)",
                    }}
                  >
                    {line1}
                  </span>
                  {line2 && (
                    <span
                      className="font-spartan font-black leading-tight tracking-wide capitalize
                        text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-[0.7rem] xl:text-[0.75rem]"
                      style={{
                        color: "#3272e2",
                        textShadow:
                          "0 1px 4px rgba(0,0,0,0.7), 0 0 8px rgba(50,100,255,0.4)",
                      }}
                    >
                      {line2}
                    </span>
                  )}
                </>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
