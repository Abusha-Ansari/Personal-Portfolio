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
    link: "https://mailassist.abusha.tech",
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
    company: "Independent Client — E-Commerce Platform",
    type: "freelance" as const,
    duration: "Oct 2024 – Jan 2025",
    location: "Remote",
    description:
      "Designed and delivered a complete multi-vendor e-commerce backend for an independent client. Handled everything from initial schema design to deployment, including product catalog APIs, order workflows, and Stripe payment integration.",
    highlights: [
      "Built a RESTful API handling 10+ resource types with full CRUD and role-based access control",
      "Integrated Stripe Checkout and webhook handling for order fulfilment automation",
      "Modelled a PostgreSQL schema with 15+ relational tables, optimised with composite indices",
      "Deployed on Railway with auto-deploy pipelines from GitHub",
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "Supabase", "Stripe API", "TypeScript", "Docker"],
    link: "",
  },
  {
    id: "fl-2",
    role: "Freelance Backend Developer",
    company: "Independent Client — SaaS Dashboard",
    type: "freelance" as const,
    duration: "Mar 2025 – May 2025",
    location: "Remote",
    description:
      "Built the backend API and real-time notification layer for a SaaS analytics dashboard. Implemented WebSocket-based live updates, JWT authentication, and a tenant-aware data model.",
    highlights: [
      "Architected a multi-tenant data model ensuring strict data isolation between tenants",
      "Implemented Socket.io rooms for per-tenant live analytics pushes",
      "Designed a JWT + refresh-token auth flow with Redis-backed session blacklisting",
      "Wrote OpenAPI 3.0 documentation for all 30+ endpoints",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "Socket.io", "JWT", "TypeScript"],
    link: "",
  },
  // ── Internship ─────────────────────────────────────────────────────────────
  {
    id: "intern-1",
    role: "Backend Developer Intern",
    company: "TechVenture Startup (Mumbai)",
    type: "internship" as const,
    duration: "Jun 2024 – Sep 2024",
    location: "Mumbai, India (Hybrid)",
    description:
      "Joined a three-person engineering team at an early-stage startup to build backend infrastructure for their B2B SaaS product. Owned the API layer and database work under the mentorship of a senior engineer.",
    highlights: [
      "Refactored a monolithic Express app into a modular service structure, cutting response latency by ~30%",
      "Built an email-notification microservice using Nodemailer and BullMQ job queues",
      "Wrote integration tests with Jest + Supertest, raising API test coverage from 12% to 68%",
      "Participated in weekly sprint planning and code reviews following Agile practices",
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "BullMQ", "Jest", "Docker", "GitHub Actions"],
    link: "",
  },
  // ── College Projects / Websites ────────────────────────────────────────────
  {
    id: "college-1",
    role: "Technical Head",
    company: "CSI-PCE — Computer Society of India, Pillai College of Engineering",
    type: "college" as const,
    duration: "2024 – Present",
    location: "New Panvel, Mumbai",
    description:
      "Leading the technical wing of CSI-PCE, the largest student body in the Mumbai chapter of the Computer Society of India. Responsible for end-to-end development of the society's online presence and event infrastructure.",
    highlights: [
      "Designed and developed the official CSI-PCE website serving 1,000+ students",
      "Built an event-registration portal with Supabase Auth, reducing manual enrolment effort by 80%",
      "Coordinated and conducted technical workshops on Node.js, SQL, and system design",
      "Mentored 20+ junior developers within the society's tech team",
    ],
    techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://csipce.com",
  },
  {
    id: "college-2",
    role: "Backend Lead",
    company: "Team Project — College Fest Portal",
    type: "college" as const,
    duration: "Dec 2023 – Feb 2024",
    location: "Pillai College of Engineering",
    description:
      "Led the backend development for the annual college technical fest website used by 2,000+ participants across 30+ events. Managed a team of 4 developers and delivered the project 2 weeks ahead of schedule.",
    highlights: [
      "Built an event & team registration API handling concurrent submissions without race conditions",
      "Implemented admin dashboard for real-time participant tracking and CSV export",
      "Integrated Razorpay for online event fee collection with webhook reconciliation",
      "Optimised database queries achieving sub-100ms average response time under load",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Razorpay", "React", "REST API"],
    link: "",
  },
];

