export interface TimelineOverviewItem {
  id: string;
  year: string;
  period: string;
  logo: string;
  companyName: string;
  position: "top" | "bottom"; // Menentukan logo di atas atau di bawah garis horizontal
}

export interface TimeLineOverviemItem {
  id: string;
  year: string;
  peroid: string;
  logo: string;
  companyName: string;
  postion: "top" | "bottom";
}

export interface ExperienceDetailItem {
  id: string;
  companyName: string;
  description: string;
  role: string;
}

export const timelineOverviewList: TimelineOverviewItem[] = [
  {
    id: "horison",
    year: "2024",
    period: "(June - December)",
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/horison.avif`,
    companyName: "HORISON ALTAMA PANDEGLANG",
    position: "top",
  },
  {
    id: "fabula",
    year: "2025",
    period: "(August - December)",
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/fabula.avif`,
    companyName: "FABULA",
    position: "bottom",
  },
  {
    id: "neodigital",
    year: "2026",
    period: "(Februari - Juli)",
    logo: `${import.meta.env.BASE_URL}img/vendor-experienc/neo-digital.avif`,
    companyName: "NEO DIGITAL",
    position: "top",
  },
];

export const experienceDetailList: ExperienceDetailItem[] = [
  {
    id: "horison-detail",
    companyName: "HORISON ALTAMA PANDEGLANG",
    description:
      "Horison Altama Pandeglang is a modern hospitality destination strategically located in Pandeglang, Banten. Combining comfort, professional service, and well-appointed facilities, the hotel offers an exceptional experience for both business and leisure travelers.",
    role: "as marketing communication",
  },
  {
    id: "fabula-detail",
    companyName: "FABULA",
    description:
      "Via Fabula is a creative agency focused on storytelling, and event organizing. Through compelling narratives, innovative creative solutions, and memorable experiences, Via Fabula helps brands connect with their audiences in meaningful and impactful ways.",
    role: "as graphic designer",
  },
  {
    id: "neodigital-detail",
    companyName: "NEO DIGITAL",
    description:
      "Neo Digital is a creative and technology-driven company specializing in digital solutions, innovative marketing strategies, and brand development. By combining creativity with technology, Neo Digital helps businesses strengthen their digital presence and connect effectively with their target audience.",
    role: "as visual designer",
  },
];
