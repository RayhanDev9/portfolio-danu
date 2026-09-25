const BASE = import.meta.env.BASE_URL;

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: "lightbulb" | "target" | "palette";
}

// 1. Data Personal Danu
export const PERSONAL_INFO = {
  name: "Danu Satya",
  tagline: "Graphic Designer & Creative Visual Specialist",
  about:
    "I am a Graphic Designer and Motion Graphic Enthusiast focusing on creating strong visual identities, impactful social media content, and story-driven designs. With experience handling various brands from local to national scales, I consistently combine modern aesthetics with visual communication strategies that resonate with audiences.",
  location: "Rangkasbitung, Indonesia",
  experienceYears: "1-2 Years",
  avatar: `${BASE}img/profile/danu-duduk.avif`,
  formalAvatar: `${BASE}img/profile/danu-jas.avif`,
};

// 2. Data Statistik Karir
export const PROFILE_STATS: StatItem[] = [
  {
    id: "stat-1",
    value: "1-2",
    label: "Years of Experience",
    sublabel: "In creative & design industry",
  },
  {
    id: "stat-2",
    value: "50+",
    label: "Projects Completed",
    sublabel: "Feed, poster, branding & motion",
  },
  {
    id: "stat-3",
    value: "6+",
    label: "Brand Partners",
    sublabel: "Agency & SME collaborations",
  },
  {
    id: "stat-4",
    value: "100%",
    label: "On-Time Delivery",
    sublabel: "Dedication & top quality",
  },
];

// 3. Software Proficiency
export const SOFTWARE_SKILLS: SkillItem[] = [

  {
    name: "Adobe Photoshop",
    level: 80,
    icon: `${BASE}img/tools-skills/ps.avif`,
    description: "Photo manipulation, social media feed, & composite editing.",
  },
  {
    name: "Adobe Illustrator",
    level: 50,
    icon: `${BASE}img/tools-skills/ai.avif`,
    description: "Vector illustration, logo branding, & vector assets.",
  },
  {
    name: "Canva ",
    level: 92,
    icon: `${BASE}img/tools-skills/canva.avif`,
    description: "Rapid social media templates & collaborative client designs.",
  },
  {
    name: "Adobe After Effects",
    level: 40,
    icon: `${BASE}img/tools-skills/ae.avif`,
    description: "Motion graphics, title animation, & visual effects.",
  },
  {
    name: "Adobe Premiere Pro",
    level: 30,
    icon: `${BASE}img/tools-skills/pr.avif`,
    description: "Video editing, color grading, & pacing storytelling.",
  },
  {
    name: "CapCut",
    level: 95,
    icon: `${BASE}img/tools-skills/capcut.svg`,
    description: "Short-form video editing, dynamic reels, motion pacing, & captions.",
  },

];

// 4. Kategori Keahlian Desain (Chips)
export const CORE_CAPABILITIES = [
  "Social Media Feed & Carousel Design",
  "Visual Branding & Identity Guidelines",
  "Simple Motion Graphics",
  "Event & Promotional Posters",
];

// 5. Nilai & Prinsip Kerja
export const PROFILE_VALUES: ValueItem[] = [
  {
    id: "val-1",
    title: "Story-Driven Concept",
    description:
      "Design is not just about visual appearance, but how to convey messages and stories that resonate emotionally with the audience.",
    icon: "lightbulb",
  },
  {
    id: "val-2",
    title: "Audience-Centric Approach",
    description:
      "Tailoring visual style, tone of voice, and typography to precisely align with the client brand's target audience demographics.",
    icon: "target",
  },
  {
    id: "val-3",
    title: "Precision & Visual Excellence",
    description:
      "Deep attention to detail, hierarchy, color balance, and clean, stunning finishing.",
    icon: "palette",
  },
];
