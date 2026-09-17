import type { ExperienceDetailItem } from "../data/experienceData";

interface ExperienceDetailCardProps {
  item: ExperienceDetailItem;
}

export default function ExperienceDetailCard({
  item,
}: ExperienceDetailCardProps) {
  return (
    <div className="relative pl-8 sm:pl-12 pb-10 last:pb-0">
      {/* Node Lingkaran Ungu di Garis Vertikal */}
      <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-[#5b13ec] border-2 border-white shadow-md z-10" />

      {/* Nama Perusahaan */}
      <h3 className="font-spartan font-bold text-xl sm:text-2xl md:text-3xl text-[#5b13ec] uppercase tracking-wide mb-2">
        {item.companyName}
      </h3>

      {/* Deskripsi Perusahaan */}
      <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed font-normal max-w-4xl mb-3">
        {item.description}
      </p>

      {/* Posisi / Role (Kanan Bawah) */}
      <div className="w-full flex justify-end">
        <span className="font-sans italic text-sm sm:text-base md:text-lg text-[#5b13ec] font-semibold">
          {item.role}
        </span>
      </div>
    </div>
  );
}
