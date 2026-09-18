import { educationList } from "../data/educationData";

export default function EducationDetailSection() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Container Timeline Vertikal */}
      <div className="relative">
        {/* Garis Vertikal Kuning di Tengah (Desktop) / Kiri (Mobile) */}
        <div className="absolute left-3 md:left-1/2 top-4 bottom-4 w-[4px] bg-[#e5fc34] -translate-x-1/2">
          {/* Barbell Cap Atas */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-1 bg-[#e5fc34] rounded-full" />
          {/* Barbell Cap Bawah */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-1 bg-[#e5fc34] rounded-full" />
        </div>

        {/* Daftar Sekolah */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {educationList.map((item) => {
            const isLeftImage = item.imagePosition === "left";

            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-center pl-10 md:pl-0"
              >
                {/* Node Titik Bulat Kuning di Garis Vertikal */}
                <div className="absolute left-3 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e5fc34] border-[3px] border-[#4328ec] shadow-lg z-20 transition-transform duration-300 hover:scale-125" />

                {/* Sisi Kiri (Desktop) */}
                <div className="w-full md:w-1/2 md:pr-10 lg:pr-14 flex flex-col justify-center">
                  {isLeftImage ? (
                    // Foto di Kiri (Desktop)
                    <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 sm:h-64 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    // Teks di Kiri (Desktop) - di Mobile disembunyikan jika nanti dirender di bawah
                    <div className="hidden md:flex flex-col text-left">
                      <h3 className="font-spartan font-black text-2xl sm:text-3xl lg:text-4xl text-[#e5fc34] uppercase tracking-wide mb-3">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Sisi Kanan (Desktop) & Fallback Mobile */}
                <div className="w-full md:w-1/2 md:pl-10 lg:pl-14 flex flex-col justify-center mt-4 md:mt-0">
                  {isLeftImage ? (
                    // Teks di Kanan (Desktop) & Mobile
                    <div className="flex flex-col text-left">
                      <h3 className="font-spartan font-black text-2xl sm:text-3xl lg:text-4xl text-[#e5fc34] uppercase tracking-wide mb-3">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    // Untuk item dengan imagePosition right:
                    // Di Mobile: tampilkan Gambar dulu baru Teks
                    // Di Desktop: tampilkan Gambar di Kanan
                    <div className="flex flex-col">
                      <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 group mb-4 md:mb-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 sm:h-64 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {/* Teks di Mobile khusus item isLeftImage === false */}
                      <div className="flex md:hidden flex-col text-left mt-2">
                        <h3 className="font-spartan font-black text-2xl sm:text-3xl text-[#e5fc34] uppercase tracking-wide mb-3">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
