import {TimelineItem} from "@/lib/types";

// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

// Social media links
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Abusha-Ansari", icon: "Github" },
  { label: "LinkedIn", href: "www.linkedin.com/in/abusha-ansari", icon: "Linkedin" },
  // { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Email", href: "abusha.ansari21@gmail.com", icon: "Mail" },
];

// Projects data
export const PROJECTS = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
    image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    link: "https://github.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "AI-Powered Dashboard",
    description: "A dashboard application featuring data visualization and AI-driven insights.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "D3.js", "TensorFlow.js"],
    link: "https://github.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experience.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com",
    featured: false,
  },
  {
    id: "project-4",
    title: "Mobile Banking App",
    description: "A mobile banking application with secure authentication and transaction management.",
    image: "https://images.pexels.com/photos/5926387/pexels-photo-5926387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "TypeScript", "Firebase", "Stripe"],
    link: "https://github.com",
    featured: true,
  },
];

// Skills data
export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 60 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 75 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 50 },
      // { name: "CI/CD", level: 80 },
      { name: "Testing", level: 75 },
    ],
  },
];

// Timeline data for about page
export const TIMELINE = [
  {
    id: "education-1",
    title: "Master of Computer Science",
    organization: "Stanford University",
    location: "Stanford, CA",
    date: "2019 - 2021",
    description: "Specialized in Artificial Intelligence and Machine Learning with focus on Neural Networks and Computer Vision.",
    type: "education",
  },
  {
    id: "education-2",
    title: "Bachelor of Computer Science",
    organization: "MIT",
    location: "Cambridge, MA",
    date: "2015 - 2019",
    description: "Graduated with honors. Focused on Software Engineering and Data Structures.",
    type: "education",
  },
  {
    id: "work-1",
    title: "Senior Frontend Developer",
    organization: "Tech Innovations Inc.",
    location: "Mumbai, India",
    date: "2021 - Present",
    description: "Lead frontend developer for enterprise SaaS applications. Implemented modern React architecture and improved performance by 40%.",
    type: "work",
  },
  {
    id: "work-2",
    title: "Software Engineer",
    organization: "StartUp Ventures",
    location: "New York, NY",
    date: "2019 - 2021",
    description: "Full-stack developer working on a financial technology platform. Built scalable microservices and responsive web interfaces.",
    type: "work",
  },
] as const;