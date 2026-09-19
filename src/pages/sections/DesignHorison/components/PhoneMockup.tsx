interface PhoneMockupProps {
  className?: string;
  tilt?: "left" | "right" | "straight";
}

export default function PhoneMockup({
  className = "",
  tilt = "straight",
}: PhoneMockupProps) {
  const BASE = import.meta.env.BASE_URL;
  const logo = `${BASE}img/vendor-experienc/horison.avif`;
  const imgMeeting = `${BASE}img/desain-horison-altama-pandeglang/meeting-room/meeting-room-2.avif`;
  const imgWedding = `${BASE}img/desain-horison-altama-pandeglang/weeding/weeding-1.avif`;
  const imgHotel = `${BASE}img/desain-horison-altama-pandeglang/hotel-room/hotel-room-1.avif`;
  const imgHotel2 = `${BASE}img/desain-horison-altama-pandeglang/hotel-room/hotel-room-2.avif`;

  const tiltClasses = {
    left: "-rotate-6 hover:rotate-0 transition-transform duration-500",
    right: "rotate-6 hover:rotate-0 transition-transform duration-500",
    straight: "hover:scale-[1.02] transition-transform duration-500",
  };

  return (
    <div
      className={`relative w-[260px] sm:w-[280px] md:w-[300px] bg-[#121212] rounded-[38px] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border-[4px] border-[#333333] select-none ${tiltClasses[tilt]} ${className}`}
    >
      {/* Speaker / Dynamic Island pill */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-[#1a1a2e] rounded-full mr-2" />
        <div className="w-2 h-2 bg-[#222] rounded-full" />
      </div>

      {/* Screen Container */}
      <div className="w-full bg-white text-black rounded-[30px] overflow-hidden pt-7 pb-4 px-3 text-[11px] font-sans">
        {/* Top bar Instagram */}
        <div className="flex items-center justify-between py-1 border-b border-gray-100">
          <div className="flex items-center gap-1 font-bold text-xs truncate">
            <span>←</span>
            <span className="truncate">horisonaltamapandeglang</span>
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block text-[8px] text-white text-center leading-none">
              ✓
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-bold">
            <span>•••</span>
          </div>
        </div>

        {/* Profile Info Row */}
        <div className="flex items-center justify-between mt-3 px-1">
          <div className="relative">
            <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600">
              <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="Horison"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-center">
            <div>
              <div className="font-bold text-xs">1.411</div>
              <div className="text-[9px] text-gray-500">postingan</div>
            </div>
            <div>
              <div className="font-bold text-xs">6.958</div>
              <div className="text-[9px] text-gray-500">pengikut</div>
            </div>
            <div>
              <div className="font-bold text-xs">281</div>
              <div className="text-[9px] text-gray-500">mengikuti</div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-2.5 px-1 leading-tight">
          <div className="text-[10px] text-gray-500">Hotel</div>
          <div className="font-bold text-[11px]">
            Official Account of Horison Altama Pandeglang
          </div>
          <div className="text-gray-700 text-[10px] italic">
            &quot;World Class Hospitality with Indonesian Authenticity&quot;
          </div>
          <div className="text-blue-700 font-medium text-[10px] mt-0.5 flex items-center gap-1">
            <span>🔗</span>
            <span>linktr.ee/HorisonAltamaPandeglang</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1.5 mt-3">
          <button
            type="button"
            className="flex-1 bg-[#0095f6] text-white font-semibold py-1 rounded-md text-[10px] shadow-sm"
          >
            Ikuti
          </button>
          <button
            type="button"
            className="flex-1 bg-gray-100 text-gray-800 font-semibold py-1 rounded-md text-[10px]"
          >
            Kirim Pesan
          </button>
          <button
            type="button"
            className="bg-gray-100 px-2 text-gray-800 font-semibold py-1 rounded-md text-[10px]"
          >
            👤+
          </button>
        </div>

        {/* Highlights */}
        <div className="flex gap-2.5 mt-3 overflow-x-auto no-scrollbar py-1">
          {[
            { label: "Promotion", img: imgMeeting },
            { label: "Nginepan", img: imgHotel },
            { label: "KOPULSO", img: imgWedding },
            { label: "INDONESIA", img: imgHotel2 },
          ].map((hl, i) => (
            <div key={i} className="flex flex-col items-center shrink-0">
              <div className="w-10 h-10 rounded-full border border-gray-300 p-[1.5px] overflow-hidden bg-gray-100">
                <img
                  src={hl.img}
                  alt={hl.label}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-[8px] text-gray-600 mt-0.5 truncate max-w-[42px]">
                {hl.label}
              </span>
            </div>
          ))}
        </div>

        {/* Feed Tabs */}
        <div className="flex justify-around border-t border-gray-200 mt-2 pt-1 text-gray-500 font-bold">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-0.5 px-3">
            ▦
          </span>
          <span className="text-gray-400">▶</span>
          <span className="text-gray-400">👤</span>
        </div>

        {/* Grid Preview */}
        <div className="grid grid-cols-3 gap-0.5 mt-1">
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img src={imgHotel} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img
              src={imgMeeting}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img
              src={imgWedding}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
