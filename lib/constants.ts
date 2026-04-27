// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

// Social media links
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Abusha-Ansari", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abusha-ansari", icon: "Linkedin" },
];

// Projects data — descriptions rewritten to emphasize backend aspects
export const PROJECTS = [
  {
    id: "project-1",
    title: "Mail Assist",
    description: "A credit-based email platform with a robust backend powered by Supabase for auth, user management, and credit tracking. Integrates the Resend API for transactional email delivery, with server-side logic handling template rendering, rate limiting, and usage analytics.",
    image: "/projects/mailassist.jpg",
    tags: ["Supabase", "Resend API", "Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    srcCode: "https://github.com/Abusha-Ansari/Mail-Assist",
    link: "https://mailassist.abusha.tech",
    featured: true,
    projectType: "full-stack" as const,
  },
  {
    id: "project-5",
    title: "NLP_DB-Manager",
    description: "An AI-powered database interface that translates natural language into SQL queries and executes them against live PostgreSQL databases. The backend handles NLP-to-SQL conversion, query validation, schema introspection, and result serialization with history tracking.",
    image: "/projects/nlpdbmanager.jpg",
    tags: ["Supabase", "PostgreSQL", "NLP", "Next.js", "TypeScript", "SQL"],
    srcCode: "https://github.com/Abusha-Ansari/NLP-DB-MANAGER",
    link: "https://nlp2sql.abusha.tech",
    featured: true,
    projectType: "backend" as const,
  },
  {
    id: "project-2",
    title: "LeetDash",
    description: "A full-stack dashboard built on a Node.js/Express backend with MongoDB for data persistence. Features a GraphQL API layer for efficient data fetching, user session management, and server-side data aggregation from the LeetCode API.",
    image: "/projects/leetdash.jpg",
    tags: ["Node.js", "Express", "MongoDB", "GraphQL", "React", "TypeScript"],
    srcCode: "https://github.com/Abusha-Ansari/LeetDash",
    link: "https://leetdash.vercel.app",
    featured: false,
    projectType: "backend" as const,
  },
  {
    id: "project-4",
    title: "Coursely",
    description: "A course management platform with a Supabase-powered backend handling CRUD operations, relational data modeling for courses, resources, and user associations, with row-level security policies for access control.",
    image: "/projects/coursely.jpg",
    tags: ["Supabase", "PostgreSQL", "Next.js", "TypeScript", "REST API"],
    srcCode: "https://github.com/Abusha-Ansari/CourseLy",
    link: "https://coursely.abusha.tech",
    featured: true,
    projectType: "full-stack" as const,
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experience. Built with Next.js and features server-side rendering, API routes for contact form handling, and optimized static generation.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    srcCode: "https://github.com/Abusha-Ansari/Personal-Portfolio",
    link: "https://abusha.tech",
    featured: false,
    projectType: "full-stack" as const,
  },
];

// Skills data — restructured with backend-first focus
export const SKILLS = [
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
      { name: "Socket.io", level: 75 },
      { name: "WebRTC", level: 65 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 60 },
      { name: "Supabase", level: 75 },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", level: 65 },
      { name: "AWS", level: 50 },
      { name: "Git", level: 80 },
      { name: "CI/CD", level: 55 },
      { name: "Linux", level: 60 },
    ],
  },
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
] as const;

// Architecture concepts for the system design section
export const ARCHITECTURE_CONCEPTS = [
  {
    id: "api-design",
    title: "RESTful API Design",
    description: "Building well-structured APIs with proper versioning, pagination, error handling, and authentication. Following REST principles for predictable and maintainable endpoints.",
    diagram: `graph LR
    Client[Client] --> Gateway[API Gateway]
    Gateway --> Auth[Auth Middleware]
    Auth --> Router[Route Handler]
    Router --> Controller[Controller]
    Controller --> Service[Service Layer]
    Service --> DB[(Database)]
    Service --> Cache[(Redis Cache)]`,
  },
  {
    id: "db-design",
    title: "Database Architecture",
    description: "Designing normalized schemas with proper indexing strategies, implementing connection pooling, and choosing the right database for each use case — SQL for relational data, NoSQL for flexibility.",
    diagram: `graph TD
    App[Application] --> Pool[Connection Pool]
    Pool --> Primary[(Primary DB)]
    Primary --> Replica1[(Read Replica)]
    Primary --> Replica2[(Read Replica)]
    App --> Cache[(Redis Cache)]
    Cache -.-> Primary`,
  },
  {
    id: "microservices",
    title: "Scalable Architecture",
    description: "Designing systems that scale horizontally with message queues, load balancing, and service decomposition. Understanding when monoliths make sense and when to break apart.",
    diagram: `graph LR
    LB[Load Balancer] --> S1[Service A]
    LB --> S2[Service B]
    S1 --> MQ[Message Queue]
    S2 --> MQ
    MQ --> Worker[Worker Service]
    Worker --> DB[(Database)]
    S1 --> Cache[(Shared Cache)]
    S2 --> Cache`,
  },
];
