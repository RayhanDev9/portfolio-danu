export const CJDanuPhoto = () => {
  return (
    <div className="relative z-10 flex items-end justify-center w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[580px]">
      <img
        src={`${import.meta.env.BASE_URL}img/profile/danu-salinan.png`}
        alt="Danu"
        className="w-full h-auto max-h-[320px] sm:max-h-[380px] md:max-h-[440px] lg:max-h-[500px] xl:max-h-[540px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-none select-none"
      />
    </div>
  );
};
