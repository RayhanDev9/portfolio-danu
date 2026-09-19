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
    logo: "",
    initials: "MK",
    color: "#6e1a1a",
  },
  {
    id: "astra",
    name: "astra otoshop",
    logo: "",
    initials: "AO",
    color: "#1a5a1a",
  },
  {
    id: "geo",
    name: "geonerations",
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/neo-digital.avif`,
    initials: "GN",
    color: "#3a1a6e",
  },
  {
    id: "roudotul",
    name: "roudotul janah",
    logo: "",
    initials: "RJ",
    color: "#6e3a1a",
  },
];
