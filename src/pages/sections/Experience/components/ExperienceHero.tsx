export default function ExperienceHero() {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-6 sm:pb-8 px-2 sm:px-4 select-none">
      <h1 className="flex flex-col md:flex-row items-center justify-center font-spartan font-black text-6xl xs:text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-[9.5rem] 2xl:text-[10.5rem] tracking-wider leading-none text-[#e8fb31] text-center drop-shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
        <span className="flex flex-col md:flex-row items-center justify-center">
          <span>EX</span>
          <span>PER</span>
        </span>
        <span className="inline-flex items-center justify-center">
          {/* Foto Danu sebagai Huruf 'I' */}
          <span className="inline-flex items-center justify-center h-[1.12em] w-[0.52em] sm:w-[0.56em] mx-0.5 sm:mx-1 shrink-0 overflow-visible">
            <img
              src={`${import.meta.env.BASE_URL}img/profile/danu-jas.avif`}
              alt="Danu"
              className="h-full w-auto object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] pointer-events-none"
            />
          </span>
          <span>ENCE</span>
        </span>
      </h1>
    </div>
  );
}