export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  about: string;
  location: string;
  experienceYears: string;
  avatar: string;
  formalAvatar?: string;
  status: string;
}

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
