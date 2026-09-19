export interface BrandItem {
  id: string;
  name: string;
  logo: string;
  initials: string;
  color: string;
}

export const brandList: BrandItem[] = [
  {
    id: "fabula",
    name: "via fabula",
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/fabula.avif`,
    initials: "VF",
    color: "#2a1a6e",
  },
  {
    id: "horison",
    name: "horison",
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/horison.avif`,
    initials: "HO",
    color: "#1a3a6e",
  },
  {
    id: "klinner",
    name: "mr klinner",
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/horison.avif`,
    initials: "MK",
    color: "#6e1a1a",
  },
  {
    id: "astra",
    name: `Astastoshop`,
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/astastoshop.avif`,
    initials: "AO",
    color: "#1a5a1a",
  },
  {
    id: "geo",
    name: "geonerations",
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/geonerations.avif`,
    initials: "GN",
    color: "#3a1a6e",
  },
  {
    id: "roudotul",
    name: "roudotul janah",
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/majlis-ta'lim.avif`,
    initials: "RJ",
    color: "#6e3a1a",
  },
];

astastoshop;
