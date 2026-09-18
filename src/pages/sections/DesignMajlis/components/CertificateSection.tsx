import { majlisData } from "../data/majlisData";
import type { MajlisImageModalItem } from "../data/majlisData";

interface CertificateSectionProps {
  onSelectImage: (item: MajlisImageModalItem) => void;
}

export default function CertificateSection({ onSelectImage }: CertificateSectionProps) {
  const { certificate, ornaments } = majlisData;

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10 overflow-hidden">
      {/* Ornamen Sudut Kanan Bawah */}
      <img
        src={ornaments.cornerBR}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 w-32 sm:w-48 md:w-60 pointer-events-none opacity-40 md:opacity-60"
      />

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Kolom Kiri: 2 Sertifikat (Belakang & Depan) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {/* Sertifikat Belakang */}
            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() =>
                onSelectImage({
                  title: "Desain Sertifikat (Halaman Belakang)",
                  image: certificate.belakang,
                  alt: "Sertifikat Bagian Belakang",
                })
              }
              title="Klik untuk memperbesar sertifikat belakang"
            >
              <div className="bg-white/10 p-1 sm:p-2 rounded-lg border border-white/20 shadow-xl w-full group-hover:scale-[1.03] group-hover:border-[#f5be38] transition-all duration-300 overflow-hidden">
                <img
                  src={certificate.belakang}
                  alt="Sertifikat Bagian Belakang"
                  className="w-full h-auto object-cover rounded group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-spartan font-bold text-white text-base sm:text-xl mt-3 tracking-wide group-hover:text-[#f5be38] transition-colors">
                Belakang
              </span>
            </div>

            {/* Sertifikat Depan */}
            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() =>
                onSelectImage({
                  title: "Desain Sertifikat (Halaman Depan)",
                  image: certificate.depan,
                  alt: "Sertifikat Bagian Depan",
                })
              }
              title="Klik untuk memperbesar sertifikat depan"
            >
              <div className="bg-white/10 p-1 sm:p-2 rounded-lg border-2 border-[#7b2cbf] shadow-[0_0_20px_rgba(123,44,191,0.5)] w-full group-hover:scale-[1.03] group-hover:border-[#f5be38] transition-all duration-300 overflow-hidden">
                <img
                  src={certificate.depan}
                  alt="Sertifikat Bagian Depan"
                  className="w-full h-auto object-cover rounded group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-spartan font-bold text-white text-base sm:text-xl mt-3 tracking-wide group-hover:text-[#f5be38] transition-colors">
                Depan
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Teks Penjelasan */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h2 className="font-spartan font-bold text-2xl sm:text-3xl md:text-4xl text-white underline underline-offset-8 decoration-white/80">
              {certificate.title}
            </h2>
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed text-justify">
              {certificate.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
