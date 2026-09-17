import { experienceDetailList } from "../data/experienceData";
import ExperienceDetailCard from "./ExperienceDetailCard";

export default function ExperienceDetailSection() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Frame Krem (Paper Textured Container) */}
      <div className="w-full bg-[#f4f1d6] p-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-black/10 relative">
        {/* Garis Vertikal Ungu di Sisi Kiri */}
        <div className="relative border-l-2 border-[#5b13ec] ml-2 sm:ml-4">
          {experienceDetailList.map((item) => (
            <ExperienceDetailCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
