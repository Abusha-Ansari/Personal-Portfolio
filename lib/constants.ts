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
  { label: "LinkedIn", href: "https://linkedin.com/in/abusha-ansari", icon: "Linkedin" },
  // { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  // { label: "Email", href: "abusha.ansari21@gmail.com", icon: "Mail" },
];

// Projects data
export const PROJECTS = [
  {
    id: "project-1",
    title: "Mail Assist",
    description: "Mail Assist is a credit based email sending platform where users can send custom or predefined template emails, track their email history, and manage usage all through a clean dashboard.",
    image: "https://res.cloudinary.com/dhi6ul49y/image/upload/v1752160710/Mail_Assist_New_Image_rxlrnw.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Resend", "ShadCN"],
    srcCode: "https://github.com/Abusha-Ansari/Mail-Assist",
    link: "https://mailassist.abusha.tech",
    featured: true,
  },
  {
    id: "project-5",
    title: "NLP_DB-Manager",
    description: "NLP DB Manager is an AI-powered SQL interface that lets users convert natural language queries into SQL, execute them on live databases, and visualize results in a user friendly dashboard with table previews, history tracking, and usage insights.",
    image: "https://res.cloudinary.com/dhi6ul49y/image/upload/v1752163592/NLP_DB_Manager_image_bpsaxj.jpg",
    tags: ["Next.js", "TypeScript", "Supabase"],
    srcCode: "https://github.com/Abusha-Ansari/NLP-DB-MANAGER",
    link: "https://nlp2sql.abusha.tech",
    featured: true,
  },
  {
    id: "project-2",
    title: "LeetDash",
    description: "A dashboard application featuring data visualization of Leetcode.",
    image: "https://res.cloudinary.com/dhi6ul49y/image/upload/v1748360437/ffm3rpa8du0kmt7twafp.jpg",
    tags: ["React", "TypeScript", "MongoDB", "ShadCn", "Node.js", "Express", "GraphQL"],
    srcCode: "https://github.com/Abusha-Ansari/LeetDash",
    link: "https://leetdash.vercel.app",
    featured: false,
  },
  {
    id: "project-4",
    title: "Coursely",
    description: "Coursely is a simple and intuitive course management platform where users can add new courses, browse existing ones, and access related resources all from a clean, organized dashboard.",
    image: "https://res.cloudinary.com/dhi6ul49y/image/upload/v1748360223/v4k2hnt2q1f56bdluk1q.jpg",
    tags: ["Next.js", "TypeScript", "Supabase"],
    srcCode: "https://github.com/Abusha-Ansari/CourseLy",
    link: "https://coursely.abusha.tech",
    featured: true,
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experience.",
    image: "https://res.cloudinary.com/dhi6ul49y/image/upload/v1748360573/sttqxkxjyaljefsn7zdb.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    srcCode: "https://github.com/Abusha-Ansari/Personal-Portfolio",
    link: "https://abusha.tech",
    featured: false,
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
      { name: "Supabase", level: 75 },
      { name: "Socket.io", level: 70 },
      { name: "WebRTC", level: 65 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 75 },
      { name: "Docker", level: 60 },
      { name: "Redis", level: 50 },
      { name: "AWS", level: 40 },
      { name: "Testing", level: 65 },
    ],
  },
];

// Timeline data for about page
export const TIMELINE = [
  {
    id: "education-1",
    title: "B.Tech in Electronics & Computer Engineering",
    organization: "Pillai College of Engineering, Mumbai University",
    location: "New Panvel, Mumbai",
    date: "2023 - 2027",
    description:
      "Pursuing Bachelor's in Electronics & Computer Engineering. Active member of CSI-PCE tech team. Engaged in hands-on software projects using modern stacks.",
    type: "education",
  },
  {
    id: "education-2",
    title: "HSC - 12th Grade",
    organization: "PEST College of Science",
    location: "Thane (E), Mumbai",
    date: "Completed Feb 2023",
    description: "Scored 70% in Higher Secondary Certificate examinations.",
    type: "education",
  },
  {
    id: "education-3",
    title: "SSC - 10th Grade",
    organization: "Saraswati Education Society and Jr. College",
    location: "Mumbai",
    date: "Completed March 2021",
    description: "Scored 80% in Secondary School Certificate examinations.",
    type: "education",
  },
  // {
  //   id: "project-1",
  //   title: "LeetDash Platform",
  //   organization: "Personal Project",
  //   location: "Remote",
  //   date: "Ongoing",
  //   description:
  //     "Developed using MERN Stack and GraphQL. Allows users to track their LeetCode progress via a dashboard with an intuitive interface.",
  //   type: "work",
  // },
  // {
  //   id: "project-2",
  //   title: "Blog Website",
  //   organization: "Personal Project",
  //   location: "Remote",
  //   date: "Ongoing",
  //   description:
  //     "Full-stack blogging platform using React and MongoDB. Enables users to register, log in, and share blog posts publicly.",
  //   type: "work",
  // },
  // {
  //   id: "project-3",
  //   title: "To Do Web-App",
  //   organization: "Personal Project",
  //   location: "Remote",
  //   date: "Ongoing",
  //   description:
  //     "Task management app using React, Express, and MongoDB. Users can add, edit, and delete tasks with real-time updates.",
  //   type: "work",
  // },
  // {
  //   id: "achievement-1",
  //   title: "Top 10 - Hack to Crack 1.0",
  //   organization: "ViMeet College",
  //   location: "Mumbai",
  //   date: "2023",
  //   description: "Secured Top-10 position in the Hack to Crack 1.0 Hackathon.",
  //   type: "work",
  // },
  // {
  //   id: "achievement-2",
  //   title: "Smart Home for Disabled - 2nd Prize",
  //   organization: "Inter School Science Exhibition",
  //   location: "Mumbai",
  //   date: "2020",
  //   description: "Awarded 2nd prize for building an automatic smart home system.",
  //   type: "work",
  // },
  // {
  //   id: "position-1",
  //   title: "Discipline Secretary",
  //   organization: "Saraswati Education Society",
  //   location: "Mumbai",
  //   date: "2020 - 2021",
  //   description: "Managed and coordinated major school events and maintained student discipline.",
  //   type: "work",
  // },
] as const;
