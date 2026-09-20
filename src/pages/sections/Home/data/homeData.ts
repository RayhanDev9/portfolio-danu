export interface SoftwareItem {
  name: string;
  icon: string;
  code: string;
  bg: string;
  text: string;
  isCanva: boolean;
}



export interface PortfolioCategory {
  id: string;
  title: string;
  image: string;
  link: string;
}

export const softwareList: SoftwareItem[] = [
  {
    name: "Photoshop",
    icon: `${import.meta.env.BASE_URL}img/tools-skills/ps.avif`,
    code: "Ps",
    bg: "bg-[#001e36]",
    text: "text-[#31a8ff]",
    isCanva: false,
  },
  {
    name: "Illustrator",
    icon: `${import.meta.env.BASE_URL}img/tools-skills/ai.avif`,
    code: "Ai",
    bg: "bg-[#330000]",
    text: "text-[#ff9a00]",
    isCanva: false,
  },
  {
    name: "CapCut",
    icon: `${import.meta.env.BASE_URL}img/tools-skills/capcut.svg`,
    code: "Cc",
    bg: "bg-[#000000]",
    text: "text-white",
    isCanva: false,
  },
  {
    name: "Canva",
    icon: `${import.meta.env.BASE_URL}img/tools-skills/canva.avif`,
    code: "Canva",
    bg: "",
    text: "",
    isCanva: true,
  },
  {
    name: "After Effects",
    icon: `${import.meta.env.BASE_URL}img/tools-skills/ae.avif`,
    code: "Ae",
    bg: "bg-[#00005b]",
    text: "text-[#9999ff]",
    isCanva: false,
  },
  {
    name: "Premiere Pro",
    icon: `${import.meta.env.BASE_URL}img/tools-skills/pr.avif`,
    code: "Pr",
    bg: "bg-[#00005b]",
    text: "text-[#ea77ff]",
    isCanva: false,
  },
];


export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "experience",
    title: "Experience",
    image: `${import.meta.env.BASE_URL}img/category/experience.avif`,
    link: "/experience",
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    image: `${import.meta.env.BASE_URL}img/category/graphic-designer.avif`,
    link: "/graphic-design/majlis",
  },
  {
    id: "motion-graphic",
    title: "motion graphic",
    image: `${import.meta.env.BASE_URL}img/category/motion-graphic.avif`,
    link: "/motion-graphic",
  },
];
