import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const softwareList = [
    {
      name: "Photoshop",
      icon: "/img/tools-skills/ps.png",
      code: "Ps",
      bg: "bg-[#001e36]",
      text: "text-[#31a8ff]",
      isCanva: false,
    },
    {
      name: "Illustrator",
      icon: "/img/tools-skills/ai.png",
      code: "Ai",
      bg: "bg-[#330000]",
      text: "text-[#ff9a00]",
      isCanva: false,
    },
    {
      name: "After Effects",
      icon: "/img/tools-skills/ae.png",
      code: "Ae",
      bg: "bg-[#00005b]",
      text: "text-[#9999ff]",
      isCanva: false,
    },
    {
      name: "Canva",
      icon: "/img/tools-skills/canva.png",
      code: "Canva",
      bg: "",
      text: "",
      isCanva: true,
    },
    {
      name: "Premiere Pro",
      icon: "/img/tools-skills/pr.png",
      code: "Pr",
      bg: "bg-[#00005b]",
      text: "text-[#ea77ff]",
      isCanva: false,
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#5b13ec] text-white overflow-hidden select-none font-sans flex flex-col justify-between"
    >
      {/* 1. Ornamen Cross Retro (+) */}
      <div className="absolute top-24 left-[5%] flex items-center justify-center pointer-events-none opacity-70">
        <span className="text-xl font-light text-white z-10">+</span>
        <div className="absolute w-10 border-t border-dashed border-white/40" />
        <div className="absolute h-10 border-l border-dashed border-white/40" />
      </div>

      <div className="absolute top-[48%] left-[22%] flex items-center justify-center pointer-events-none opacity-80 z-30">
        <span className="text-xl font-light text-white z-10">+</span>
        <div className="absolute w-10 border-t border-dashed border-white/40" />
        <div className="absolute h-10 border-l border-dashed border-white/40" />
      </div>

      <div className="absolute top-20 right-[5%] flex items-center justify-center pointer-events-none opacity-50">
        <span className="text-sm font-light text-white z-10">+</span>
        <div className="absolute w-8 border-t border-dashed border-white/30" />
        <div className="absolute h-8 border-l border-dashed border-white/30" />
      </div>

      {/* 2. FOTO DANU (Menempel di sudut kiri bawah & menembus banner kuning) */}
      <div className="absolute -left-[70.8px] bottom-0 z-30 pointer-events-none flex items-end">
        <img
          src="/img/profile/danu.png"
          alt="Danu"
          className="w-[380px] sm:w-[500px] md:w-[620px] lg:w-[720px] max-h-[95vh] object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      {/* 3. Hero Section (Atas) */}
      <div className="relative z-20 w-full pt-12 md:pt-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Spacer area foto */}
          <div className="hidden md:block md:col-span-4 lg:col-span-4" />

          {/* Kolom Teks Nama */}
          <div className="md:col-span-5 lg:col-span-5 pb-4">
            {/* font-playfair dari @theme */}
            <p className="font-playfair italic text-3xl sm:text-4xl text-white font-normal tracking-wide">
              Hi There!
            </p>

            {/* font-spartan dari @theme */}
            <h1 className="font-spartan font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none my-1 flex items-baseline gap-3">
              <span className="text-[#e5fc34]">I'M</span>
              <span className="text-white">DANU</span>
            </h1>

            {/* Garis Horizontal Barbell (●─────────●) */}
            <div className="flex items-center my-3 max-w-md">
              <div className="w-2 h-2 rounded-full bg-white shrink-0" />
              <div className="flex-1 h-[2px] bg-white/90" />
              <div className="w-2 h-2 rounded-full bg-white shrink-0" />
            </div>

            {/* font-sans (Inter) dari @theme */}
            <p className="font-sans text-xs sm:text-sm text-white/90 font-light max-w-md leading-relaxed">
              I'm a graphic designer, and in my portfolio, you'll find a
              selection of my best work.
            </p>
          </div>

          {/* Kolom Deskripsi Kanan dengan garis vertikal */}
          <div className="md:col-span-3 lg:col-span-3 border-l-2 border-white pl-4 pb-2 mb-2">
            <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed font-light">
              Welcome to my creative space. Here you'll find not only my best
              work, but also the experiences, ideas, and inspirations behind it.
              This portfolio is a glimpse into who I am, what I value, and how I
              express myself through design.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bottom Section (Banner Kuning + Tombol Sosial Media) */}
      <div className="relative z-10 w-full mt-auto">
        {/* BANNER KUNING "Software I USE" */}
        <div className="w-full bg-[#f6ed28] text-slate-900 py-3.5 sm:py-4 px-6 sm:px-12 lg:px-20 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-end gap-6 lg:gap-10 md:pl-[24rem] lg:pl-[28rem]">
            {/* Teks "Software I USE" */}
            <div className="flex flex-col items-start leading-none shrink-0">
              <div className="flex items-center gap-2 w-full">
                {/* font-playfair dari @theme */}
                <span className="font-playfair italic text-2xl sm:text-3xl text-[#5b13ec] font-semibold">
                  Software I
                </span>
                <div className="h-[2px] bg-[#5b13ec] flex-1 min-w-[2.5rem]" />
              </div>
              {/* font-bubbles (Rubik Bubbles) dari @theme */}
              <span className="font-bubbles text-6xl sm:text-7xl lg:text-8xl text-[#5b13ec] tracking-tighter -mt-2">
                USE
              </span>
            </div>

            {/* Icon Software Badges — Tampilkan gambar icon nyata */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {softwareList.map((item) => (
                <div
                  key={item.name}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-lg sm:text-xl shadow-md border border-black/10 overflow-hidden ${
                    item.isCanva
                      ? "rounded-full bg-gradient-to-tr from-[#00c4cc] to-[#7d2ae8] text-white font-serif italic"
                      : `rounded-2xl ${item.bg} ${item.text}`
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      /* Fallback ke teks jika gambar tidak ada */
                      e.currentTarget.style.display = "none";
                      const span = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (span) span.style.display = "flex";
                    }}
                  />
                  <span
                    className="absolute inset-0 items-center justify-center hidden"
                    aria-hidden="true"
                  >
                    {item.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BARIS KARTU SOSIAL MEDIA */}
        <div className="w-full bg-[#5b13ec] py-5 sm:py-6 px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:pl-[24rem] lg:pl-[28rem]">
            {/* WhatsApp */}
            <a
              id="btn-whatsapp"
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-3.5 bg-[#24d058] hover:bg-[#20bd50] text-white rounded-2xl font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 fill-white shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15s-.778.978-.954 1.179-.352.226-.653.075a8.22 8.22 0 0 1-2.42-1.493 9.07 9.07 0 0 1-1.674-2.083c-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.201.05-.376-.025-.527s-.678-1.631-.929-2.234c-.245-.588-.493-.508-.678-.517l-.578-.01c-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.511 1.08 2.912 1.23 3.113c.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.198 1.898.12.578-.087 1.78-.727 2.031-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.352zm2.083-9.923A11.83 11.83 0 0 0 12.003 1C5.372 1 .003 6.37.003 13c0 2.112.551 4.175 1.598 6.002L0 23.5l4.636-1.564A11.84 11.84 0 0 0 12.003 25C18.634 25 24 19.63 24 13a11.85 11.85 0 0 0-3.445-8.541zm-7.552 18.528a9.85 9.85 0 0 1-5.025-1.378l-.36-.214-3.738 1.26 1.281-3.642-.235-.374a9.86 9.86 0 0 1-1.512-5.236c0-5.445 4.433-9.878 9.878-9.878 2.639 0 5.12 1.028 6.985 2.894A9.82 9.82 0 0 1 21.88 13c0 5.445-4.433 9.878-9.878 9.878z" />
                </svg>
              </div>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 fill-white shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              id="btn-instagram"
              href="https://instagram.com/danu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-6 py-3.5 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white rounded-2xl font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 fill-white shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 fill-white shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
              </svg>
            </a>

            {/* Gmail */}
            <a
              id="btn-gmail"
              href="mailto:danu@example.com"
              className="flex items-center justify-between px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 rounded-2xl font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 fill-dark shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
