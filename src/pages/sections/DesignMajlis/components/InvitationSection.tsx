import { majlisData } from "../data/majlisData";

export default function InvitationSection() {
  const { invitation, ornaments } = majlisData;

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
        {/* Judul Besar Atas */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-spartan font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-wide underline underline-offset-8 decoration-white/80">
            {invitation.sectionTitle}
          </h2>
        </div>

        {/* Content 2 Kolom: Kiri Teks, Kanan 2x2 Grid Undangan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Kolom Teks */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="font-spartan font-bold text-xl sm:text-2xl md:text-3xl text-white underline underline-offset-4 decoration-white/70">
              {invitation.title}
            </h3>
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed text-justify">
              {invitation.description}
            </p>
          </div>

          {/* Kolom Grid Undangan (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="bg-white/5 p-1 sm:p-1.5 rounded-lg border border-white/20 shadow-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={invitation.image}
                  alt={`Undangan Mockup ${idx}`}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
