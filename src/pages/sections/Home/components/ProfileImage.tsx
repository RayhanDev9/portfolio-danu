export default function ProfileImage() {
  return (
    <div className="relative flex justify-center items-end w-full mt-4 md:mt-0 md:absolute md:-left-[70.8px] md:bottom-0 md:w-auto z-30 pointer-events-none">
      <picture>
        {/* Layar lg ke atas (min-width: 1024px): tampilkan danu.avif */}
        <source
          media="(min-width: 1024px)"
          srcSet={`${import.meta.env.BASE_URL}img/profile/danu.avif`}
        />

        {/* Layar di bawah lg (mobile & tablet): tampilkan danu-jas.avif */}
        <img
          src={`${import.meta.env.BASE_URL}img/profile/danu-jas.avif`}
          alt="Danu"
          className="w-[260px] sm:w-[340px] md:w-[500px] lg:w-[620px] xl:w-[720px] max-h-[50vh] sm:max-h-[55vh] md:max-h-[95vh] object-contain object-bottom drop-shadow-2xl"
        />
      </picture>
    </div>
  );
}
