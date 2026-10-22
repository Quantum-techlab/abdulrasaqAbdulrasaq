// Single source of truth for portfolio content — used by the home page, the sub-pages,
// and (via the SEO data) the prerendered page heads.

export const projects = [
  {
    title: "FaceTrust AI",
    slug: "facetrust-ai",
    caseStudy: {
      headline: "Verify a face, not a document people can fake.",
      problem: "Physical ID cards and paper documents are slow to check and easy to fake, and Nigeria's identity records (NIN and BVN) are hard to use at the point where a person actually needs to be verified.",
      solution: "FaceTrust AI links a NIN or BVN registry identity to a real, live face, then reuses that same proof to identify the person at a merchant desk, bank branch or front desk in seconds, with no card or document needed.",
      highlights: [
        "Liveness checked before every comparison",
        "One face embedding per person, matched 1:N",
        "Replaces physical cards and paper IDs with a secure face scan",
        "Decentralised digital identity and biometric verification platform",
        "₦50M Federal Government Students Venture Capital Grant (S-VCG) 2026 winner",
      ],
      role: "Co-founder (with Elijah Adeniji)",
    },
    description: "AI-powered facial recognition system for secure identity verification and centralized data access using deep learning models. A decentralised digital identity platform that replaces physical cards and paper IDs with a secure 3-second face scan.",
    tech: ["React", "AI/ML", "Deep Learning", "Facial Recognition"],
    github: "https://github.com/Quantum-techlab",
    demo: "https://facetrustai.com/",
    preview: "/previews/facetrust.jpg",
    featured: true,
    tag: "₦50M FG-SVCG Winner",
    credit: "Co-founded with Elijah Adeniji",
  },
  {
    title: "SuperviseOS",
    slug: "superviseos",
    caseStudy: {
      headline: "Project supervision, under control.",
      problem: "Final year project supervision runs on scattered emails, paper logs and memory, so a project that is slipping is often only noticed at the defense.",
      solution: "SuperviseOS gives students and lecturers one live view of every milestone, submission and review, and flags at-risk projects automatically, so problems show up the week they start.",
      highlights: [
        "Milestones tracked end to end for every student",
        "Submissions and reviews in one live view",
        "Risk flagged automatically before deadlines slip",
        "Supervisor workload visible across the department",
      ],
      role: "Creator",
    },
    description: "Digital solution for final year project supervision: an academic command center where students and lecturers track milestones, submissions, reviews, risk detection and supervisor workload, all in one live view.",
    tech: ["Next.js", "Supabase", "Milestone Tracking", "Risk Detection"],
    github: "https://github.com/Quantum-techlab",
    demo: "https://superviseos.vercel.app/",
    preview: "/previews/superviseos.jpg",
    featured: true,
  },
  {
    title: "UniVehicle QR",
    slug: "univehicle-qr",
    caseStudy: {
      headline: "QR code-based vehicle and driver verification.",
      problem: "Campus shuttle and vehicle access at the University of Ilorin relied on manual gate passes and visual identification, which is slow and makes unauthorized entry hard to catch.",
      solution: "UniVehicle QR registers drivers and their documents, issues each vehicle a unique QR code, and lets campus security verify the driver and vehicle in real time by scanning it with any camera-enabled device.",
      highlights: [
        "Driver registration with document upload",
        "A unique QR code generated for every registered vehicle",
        "Real-time verification with any camera-enabled device",
        "Admin dashboard with verification history",
        "Final year project, Department of Information Technology, University of Ilorin (Class of 2026)",
      ],
      role: "Final year project",
    },
    description: "Driver and vehicle verification system for the University of Ilorin campus shuttle using QR code technology. Admins register drivers and generate a unique vehicle QR code; campus security verifies driver and vehicle details in real time with any camera-enabled device.",
    tech: ["Next.js", "Supabase", "QR Codes", "Admin Dashboard"],
    github: "https://github.com/Quantum-techlab",
    demo: "https://univehicleqr.vercel.app/",
    preview: "/previews/univehicleqr.jpg",
    featured: true,
    tag: "Final Year Project",
  },
  {
    title: "MindConnect",
    slug: "mindconnect",
    description: "AI-driven mental wellness platform enabling anonymous conversations, guided support sessions, and mood tracking with intelligent recommendations.",
    tech: ["React", "AI", "Node.js", "Tailwind CSS", "WebSocket"],
    github: "https://github.com/Quantum-techlab",
    demo: "https://mindconnect-one.vercel.app/",
    featured: false,
  },
  {
    title: "Textify OCR",
    slug: "textify-ocr",
    description: "Versatile text extraction app converting images and audio into editable text using Tesseract.js and advanced speech recognition.",
    tech: ["React", "Tesseract.js", "Speech-to-Text", "Tailwind CSS"],
    github: "https://github.com/Quantum-techlab",
    demo: "https://texify-ocr.vercel.app/",
    featured: false,
    tag: "Technical Achievement",
    hasOcrScan: true,
  },
  {
    title: "Attendance System",
    slug: "attendance-system",
    description: "Modern attendance tracking for Ilorin Innovation Hub interns with real-time monitoring and analytics.",
    tech: ["React", "Supabase", "TypeScript", "Geolocation"],
    github: "https://github.com/Quantum-techlab",
    demo: "https://iih-hub.vercel.app/",
    featured: false,
  },
  {
    title: "ScanShare",
    slug: "scanshare",
    description: "Advanced document scanning and sharing platform with OCR capabilities and cloud storage integration.",
    tech: ["React", "OCR", "Cloud Storage", "Web APIs"],
    github: "https://github.com/Quantum-techlab",
    demo: "#",
    featured: false,
  },
  {
    title: "SynBridge",
    slug: "synbridge",
    description: "Cross-device clipboard and file sync tool with end-to-end encryption.",
    tech: ["React", "Supabase", "WebSockets", "Encryption"],
    github: "https://github.com/Quantum-techlab",
    demo: "#",
    featured: false,
  },
];

export const experiences = [
  {
    title: "Software Director & Tech Lead",
    company: "ITSA - University of Ilorin",
    period: "2025/2026",
    description: "Led software innovation initiatives within the department while fostering a collaborative environment for student developers.",
    responsibilities: [
      "Spearheaded departmental software development projects",
      "Mentored fellow students in modern web development",
      "Organized coding workshops and technical sessions",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Torvix AI",
    period: "2025 – Present",
    description: "Building modern, responsive web interfaces with a fast-paced AI team, contributing to human-centered digital experiences.",
    responsibilities: [
      "Build responsive web pages using React.js",
      "Convert UI/UX designs into functional interfaces",
      "Ensure cross-browser compatibility and performance",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Ilorin Innovation Hub",
    period: "2025 – Present",
    description: "Developing modern web applications with focus on React ecosystem, building dashboards and implementing advanced features.",
    responsibilities: [
      "Built React components with authentication flows",
      "Implemented Supabase integration for auth and database",
      "Developed geolocation features with role-based access control",
    ],
  },
];

export const certifications = [
  {
    title: "HackerRank Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2025",
    credential: "Verified",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    credential: "Verified",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    credential: "Verified",
  },
];

export const coreStack = [
  { name: "React", icon: "React" },
  { name: "TypeScript", icon: "TypeScript" },
  { name: "Node.js", icon: "Node.js" },
  { name: "Tailwind CSS", icon: "Tailwind CSS" },
  { name: "Supabase", icon: "Supabase" },
  { name: "Next.js", icon: "Next.js" },
];

export const tools = [
  "Git/GitHub", "Docker", "Vite", "Firebase", "PostgreSQL", "MongoDB",
  "REST APIs", "GraphQL", "Figma", "VS Code", "Cloud Deployment", "AI Integration",
  "Prompt Engineering", "OCR", "Accessibility", "Responsive Design",
];

export const testimonials = [
  { text: "Abdulrasaq's attention to detail and technical skill consistently exceeded expectations. A rare talent.", author: "Tech Lead, Torvix AI", role: "Manager" },
  { text: "His ability to translate complex designs into pixel-perfect, performant code is exceptional.", author: "Design Lead, IIH", role: "Colleague" },
  { text: "One of the most dedicated developers I've worked with. Always delivers quality work ahead of schedule.", author: "Senior Developer", role: "Mentor" },
  { text: "Abdulrasaq brings both creativity and solid engineering to every project. Highly recommend.", author: "Project Manager", role: "Client" },
];

export const site = {
  url: "https://abdulrasaq-abdulrasaq.vercel.app",
  name: "Abdulrasaq Alatare",
  email: "ola283dayo@gmail.com",
  github: "https://github.com/Quantum-techlab",
  linkedin: "https://linkedin.com/in/abdulrasaq-abdulrasaq-68b0b1351",
  resume: "https://drive.google.com/file/d/1K8cK897qgGwDqbKxofTqqlURNZgCeWmt/view?usp=drivesdk",
};

export const award = {
  title: "Federal Government Students Venture Capital Grant (S-VCG) 2026",
  amount: "₦50M",
  summary: "Awarded for FaceTrust AI, co-founded with Elijah Adeniji, and selected as one of 45 ventures from over 36,000 student applicants nationwide. The grant was presented at the University of Ilorin on July 28, 2026.",
  source: "https://www.unilorin.edu.ng/3-unilorites-secure-multimillion-naira-grant/",
};

export const caseStudies = projects.filter((p) => "caseStudy" in p);
