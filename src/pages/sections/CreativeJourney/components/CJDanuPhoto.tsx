export const CJDanuPhoto = () => {
  return (
    <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 flex items-end justify-center w-full max-w-[340px] pointer-events-none sm:max-w-[420px] md:max-w-[480px] lg:max-w-[620px] xl:max-w-[680px]">
      <img
        src={`${import.meta.env.BASE_URL}img/profile/danu-brands.png`}
        alt="Danu"
        className="w-full h-auto max-h-[350px] sm:max-h-[430px] md:max-h-[450px] lg:max-h-[490px] xl:max-h-[530px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-none select-none"
      />
    </div>
  );
};
