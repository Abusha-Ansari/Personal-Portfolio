// Navigation link type
export interface NavLink {
  label: string;
  href: string;
}

// Social link type
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

// Project type
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  srcCode?: string;
  link?: string;
  featured: boolean;
  projectType: "backend" | "full-stack";
}

// Skill type
export interface Skill {
  name: string;
  level: number;
}

// Skill category type
export interface SkillCategory {
  category: string;
  items: Skill[];
}

// Timeline item type
export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  type: "education" | "work";
}

// Contact form type
export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Architecture concept type
export interface ArchitectureConcept {
  id: string;
  title: string;
  description: string;
  diagram: string;
}

// GitHub stats type
export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { name: string; percentage: number }[];
}

// Experience item type (freelance / internship)
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: "freelance" | "internship" | "college";
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
  link?: string;
}