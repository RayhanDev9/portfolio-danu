import { majlisData } from "../data/majlisData";
import type { MajlisImageModalItem } from "../data/majlisData";

interface PosterSectionProps {
  onSelectImage: (item: MajlisImageModalItem) => void;
}

export default function PosterSection({ onSelectImage }: PosterSectionProps) {
  const { poster, ornaments } = majlisData;

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10 overflow-hidden">
      {/* Ornamen Sudut Kiri Bawah */}
      <img
        src={ornaments.cornerBL}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 -left-4 w-32 sm:w-48 md:w-60 pointer-events-none opacity-40 md:opacity-60"
      />

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Kolom Kiri: Teks Penjelasan */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h2 className="font-spartan font-bold text-2xl sm:text-3xl md:text-4xl text-white underline underline-offset-8 decoration-white/80">
              {poster.title}
            </h2>
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed text-justify">
              {poster.description}
            </p>
          </div>

          {/* Kolom Kanan: 2 Poster Ziarah Berdampingan */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {[1, 2].map((idx) => (
              <div
                key={idx}
                onClick={() =>
                  onSelectImage({
                    title: `Poster Ziarah Wali (Tampilan ${idx})`,
                    image: poster.image,
                    alt: "Poster Ziarah Wali Majlis Ta'lim Roudotul Jannah",
                  })
                }
                className="bg-white/5 p-1 sm:p-1.5 rounded-lg border border-white/20 shadow-2xl overflow-hidden group hover:scale-[1.03] hover:border-[#f5be38] transition-all duration-300 cursor-pointer"
                title="Klik untuk memperbesar poster"
              >
                <img
                  src={poster.image}
                  alt={`Poster Ziarah Wali ${idx}`}
                  className="w-full h-auto object-cover rounded group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
