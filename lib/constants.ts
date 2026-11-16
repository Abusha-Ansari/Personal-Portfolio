// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
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
    id: "project-9",
    title: "AI API Generator",
    description: "An AI-powered developer platform that transforms OpenAPI 3.x specifications into 5+ development artifacts including TypeScript SDKs, API documentation, unit tests, Postman collections, and request examples — with streaming AI responses and multi-provider LLM support.",
    tags: ["Next.js", "TypeScript", "Node.js", "Vercel AI SDK", "OpenAI API"],
    srcCode: "https://github.com/Abusha-Ansari",
    featured: true,
    projectType: "full-stack" as const,
  },
  {
    id: "project-6",
    title: "DBnano",
    description: "Designed and published an embedded NoSQL database implementing 6 core components including append-only storage, hash-based indexing, schema validation, in-memory caching, advanced query operators, and a fluent TypeScript query builder as a reusable npm package.",
    tags: ["TypeScript", "Node.js", "NoSQL", "NPM"],
    srcCode: "https://github.com/Abusha-Ansari/DBnano",
    link: "https://www.npmjs.com/package/dbnanojs",
    featured: true,
    projectType: "backend" as const,
  },
  {
    id: "project-8",
    title: "DBnano Docs",
    description: "A comprehensive documentation website for the DBnano embedded NoSQL database, featuring API references, getting started guides, and architecture overviews.",
    tags: ["Nextra", "Next.js", "MDX", "Tailwind CSS"],
    link: "https://docs.dbnano.abusha.in/",
    featured: false,
    projectType: "full-stack" as const,
  },
  {
    id: "project-1",
    title: "Mail Assist",
    description: "Developed an email automation platform supporting anonymous messaging, reusable templates, email tracking, CSV-based batch email processing, and backend APIs integrating 3 core services for scalable email delivery.",
    image: "/projects/mailassist.jpg",
    tags: ["Next.js", "Supabase", "Resend API", "TypeScript", "Tailwind CSS"],
    srcCode: "https://github.com/Abusha-Ansari/Mail-Assist",
    link: "https://mailassist.abusha.in",
    featured: true,
    projectType: "full-stack" as const,
  },
  {
    id: "project-7",
    title: "Decentralized Healthcare",
    description: "Built a federated learning platform for decentralized chest X-ray classification featuring 4 key modules: local model training, secure weight aggregation, REST APIs, and an administrative dashboard for real-time evaluation.",
    tags: ["FastAPI", "PyTorch", "Python", "REST API"],
    srcCode: "https://github.com/Abusha-Ansari/Decentralized-Healthcare",
    featured: true,
    projectType: "backend" as const,
  },
  {
    id: "project-5",
    title: "NLP_DB-Manager",
    description: "An AI-powered database interface that translates natural language into SQL queries and executes them against live PostgreSQL databases. The backend handles NLP-to-SQL conversion, query validation, schema introspection, and result serialization with history tracking.",
    image: "/projects/nlpdbmanager.jpg",
    tags: ["Supabase", "PostgreSQL", "NLP", "Next.js", "TypeScript", "SQL"],
    srcCode: "https://github.com/Abusha-Ansari/NLP-DB-MANAGER",
    link: "https://nlp2sql.abusha.in",
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
    link: "https://coursely.abusha.in",
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
    link: "https://abusha.in",
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
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
      { name: "WebSockets", level: 75 },
    ],
  },
  {
    category: "Databases & AI",
    items: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "Supabase", level: 80 },
      { name: "Firebase", level: 65 },
      { name: "Vercel AI SDK", level: 75 },
      { name: "OpenAI API", level: 75 },
      { name: "Prompt Engineering", level: 70 },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
      { name: "C++", level: 65 },
      { name: "Java", level: 60 },
    ],
  },
  {
    category: "Cloud & Tools",
    items: [
      { name: "AWS", level: 55 },
      { name: "GCP", level: 50 },
      { name: "Vercel", level: 80 },
      { name: "Railway", level: 70 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Postman", level: 80 },
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
    description: "Designing normalized schemas with proper indexing strategies, implementing connection pooling, and choosing the right database for each use case SQL for relational data, NoSQL for flexibility.",
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

// Experience data — freelance, internship, and college project involvement
export const EXPERIENCE = [
  // ── Freelance ──────────────────────────────────────────────────────────────
  {
    id: "fl-1",
    role: "Freelance Full-Stack Developer",
    company: "Independent Client — Vastu (Real Estate Platform)",
    type: "freelance" as const,
    duration: "Feb 2026 – Mar 2026",
    location: "Remote",
    description:
      "Designed and built Vastu — an AI-powered real estate platform that recommends properties based on Vastu Shastra principles derived from Hindu Vedic texts. The platform combines intelligent property matching, curated consultant listings, and an AI-filtered marketplace for Vastu-approved products.",
    highlights: [
      "Built an AI-powered property recommendation engine that scores and matches homes against Vastu Shastra guidelines using the OpenAI API",
      "Developed a Vastu guides and consultants directory with profile pages, filtering, and booking inquiry flows",
      "Implemented an AI-filtered product marketplace surfacing Vastu-approved items using semantic search and category classification",
      "Architected a full-stack application with a Next.js frontend, Node.js/Express REST API, and PostgreSQL/Supabase backend with relational data modelling for properties, consultants, and products",
    ],
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Supabase", "OpenAI API", "TypeScript"],
    link: "",
  },
  // ── Internship ─────────────────────────────────────────────────────────────
  {
    id: "intern-1",
    role: "Backend Developer Intern",
    company: "UTSAVY",
    type: "internship" as const,
    duration: "Dec 2025 – Feb 2026",
    location: "Remote",
    description:
      "Joined UTSAVY as a Backend Developer Intern, contributing to both frontend and backend development of a digital invitation platform. Worked across the full stack with React, Supabase, and Vercel.",
    highlights: [
      "Developed and integrated 10+ responsive digital invitation templates, enhancing platform customization and user experience",
      "Built frontend features and UI improvements using React, leveraging AI-assisted development tools such as Lovable while manually implementing application logic and backend integrations",
      "Contributed to backend development using Supabase, including database integration, API interactions, and feature implementation for production deployments on Vercel",
      "Collaborated on implementing custom domain (DNS) mapping for invitation websites, researching and testing the infrastructure required to support user-owned domains",
    ],
    techStack: ["React", "TypeScript", "Supabase", "Vercel"],
    link: "",
  },
  // ── College Projects / Clubs ────────────────────────────────────────────
  {
    id: "college-1",
    role: "Head of Technical Student Chapter",
    company: "CSI-PCE — Computer Society of India, Pillai College of Engineering",
    type: "college" as const,
    duration: "2024 – Present",
    location: "New Panvel, Mumbai",
    description:
      "Leading the technical wing of CSI-PCE, the largest student body in the Mumbai chapter of the Computer Society of India. Responsible for driving technical initiatives, organizing events, and conducting workshops for 200+ students.",
    highlights: [
      "Leading 8+ technical initiatives and organizing 6+ technical events for the chapter",
      "Delivered 4+ workshops on Vibe Coding, Full-Stack JavaScript Development, and Competitive Programming for 200+ students",
      "Secured Top-10 position in Hack to Crack 1.0 among 50+ participating teams",
      "Selected for the SIH 2024 Waitlist after progressing through internal college selection among 200+ teams",
    ],
    techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://csipce.com",
  },
];

