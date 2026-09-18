export interface EducationItem {
  id: string;
  title: string;
  period: string;
  image: string;
  description: string;
  imagePosition: "left" | "right";
  timelinePosition: "top" | "bottom";
}

export const educationList: EducationItem[] = [
  {
    id: "sdn",
    title: "SDN 1 KOLELET WETAN",
    period: "2013 - 2019",
    image: `${import.meta.env.BASE_URL}img/education/sdn.png`,
    description:
      "SDN 1 Kolelet Wetan is a public elementary school located in Kolelet Wetan Village, Rangkasbitung District, Lebak Regency, Banten. The school is committed to providing quality education while fostering academic achievement, character development, and creativity in a supportive learning environment.",
    imagePosition: "left",
    timelinePosition: "top",
  },
  {
    id: "smpn",
    title: "SMPN 7 RANGKASBITUNG",
    period: "2019 - 2022",
    image: `${import.meta.env.BASE_URL}img/education/smpn.png`,
    description:
      "SMPN 7 Rangkasbitung is a public junior high school located in Rangkasbitung, Lebak Regency, Banten. Dedicated to academic excellence and character development, the school provides a supportive learning environment that encourages students to grow, achieve, and prepare for future challenges.",
    imagePosition: "right",
    timelinePosition: "bottom",
  },
  {
    id: "smkn",
    title: "SMKN 1 RANGKASBITUNG",
    period: "2022 - 2025",
    image: `${import.meta.env.BASE_URL}img/education/smkn.png`,
    description:
      "SMKN 1 Rangkasbitung is a leading public vocational high school located in Rangkasbitung, Lebak Regency, Banten. Accredited A, the school is committed to developing skilled, innovative, and career-ready graduates through quality education, hands-on training, and industry-oriented learning programs.",
    imagePosition: "left",
    timelinePosition: "top",
  },
];
