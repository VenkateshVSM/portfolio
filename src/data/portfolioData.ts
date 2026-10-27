import type { Project, ExperienceItem, Certification, Achievement, SkillCategory } from '../types/portfolio'

export const personalInfo = {
  name: 'M. Venkatesh',
  shortName: 'Venkatesh',
  role: 'Aspiring Software Analyst / Developer',
  degree: 'B.Tech in Information Technology (2023 – 2027)',
  college: 'Loyola Institute of Science and Technology',
  location: 'Tirunelveli, Tamil Nadu, India',
  email: 'venkatesh292005@gmail.com',
  phone: '+91 88258 99492',
  linkedin: 'https://linkedin.com/in/venkatesh-m-3556722a2',
  github: 'https://github.com/VenkateshVSM',
  status: 'Open to Software Analyst & Developer Roles',
  summary:
    'Final-year B.Tech Information Technology student with hands-on experience in Python, JavaScript, TypeScript, SQL and Supabase. Built database-driven applications covering schema design, record management and responsive front ends. Comfortable with the full development lifecycle (requirements, design, coding, testing and deployment) and debugging, with a strong willingness to learn new technologies. Seeking a Software Analyst role to write clean, efficient code and contribute to software quality and performance.',
  highlights: [
    { label: 'Degree', value: 'B.Tech IT (2023-27)' },
    { label: 'Key Domains', value: 'Full Stack & Data Analytics' },
    { label: 'Internships', value: '3 Industry Experiences' },
    { label: 'Leadership', value: 'NCC "C" Lance Corporal' },
  ]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 'Advanced', tags: 'Automation, Data Science, Scripting' },
      { name: 'TypeScript', level: 'Intermediate', tags: 'Type-Safe Web Apps, Vite, React' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', tags: 'Async/Await, DOM, Modern JS' },
      { name: 'Java', level: 'Intermediate', tags: 'OOP, Expert Training Program' },
      { name: 'HTML5 & CSS3', level: 'Advanced', tags: 'Semantic, Responsive, Flex/Grid' },
    ],
  },
  {
    title: 'Databases & Backend',
    icon: 'Database',
    skills: [
      { name: 'SQL & PostgreSQL', level: 'Advanced', tags: 'Schema Design, Query Optimization, Joins' },
      { name: 'Supabase', level: 'Advanced', tags: 'Auth, Cloud Database, RLS, Realtime' },
      { name: 'Record Management', level: 'Advanced', tags: 'CRUD Lifecycle, Data Integrity' },
      { name: 'Cloud Computing', level: 'Certified', tags: 'NPTEL IIT Kharagpur Certified' },
    ],
  },
  {
    title: 'Frameworks & Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 'Intermediate', tags: 'Hooks, Component Architecture, State' },
      { name: 'Vite', level: 'Advanced', tags: 'Fast Bundling, Modern Tooling' },
      { name: 'Tailwind CSS', level: 'Advanced', tags: 'Utility-first Modern Responsive Design' },
      { name: 'Bootstrap', level: 'Advanced', tags: 'Responsive Layouts, UI Components' },
    ],
  },
  {
    title: 'Data & Analytics Tools',
    icon: 'BarChart3',
    skills: [
      { name: 'Power BI', level: 'Advanced', tags: 'Interactive Dashboards, KPI Modeling' },
      { name: 'DAX Formulas', level: 'Intermediate', tags: 'Calculated Columns, Measures, Trends' },
      { name: 'Microsoft Excel', level: 'Advanced', tags: 'Pivot Tables, VLOOKUP, Data Cleaning' },
      { name: 'FFmpeg', level: 'Intermediate', tags: 'Audio/Video Processing, Codecs' },
      { name: 'Git & GitHub', level: 'Advanced', tags: 'Version Control, Branching, Collaboration' },
    ],
  },
  {
    title: 'Core Analyst Strengths',
    icon: 'ShieldCheck',
    skills: [
      { name: 'Debugging & QA', level: 'Expert', tags: 'Root Cause Analysis, Error Tracing' },
      { name: 'Problem Solving', level: 'Expert', tags: 'Algorithmic Thinking, Logic Design' },
      { name: 'Analytical Thinking', level: 'Expert', tags: 'Requirement Gathering, Data-Driven Decisions' },
      { name: 'Attention to Detail', level: 'High', tags: 'Code Quality, Test Scenarios' },
      { name: 'Team Collaboration', level: 'High', tags: 'Agile mindset, NCC Leadership' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'chronicle',
    title: 'Chronicle: Date-Based Noting & Review Workspace (Diary)',
    subtitle: 'Full Stack React & Supabase Knowledge Management System',
    category: 'web',
    tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'GitHub Pages'],
    description:
      'A streamlined, high-performance web workspace designed for writing date-based developer logs, daily technical notes, and structured knowledge reviews with cloud synchronization.',
    bulletPoints: [
      'Built a responsive web workspace with React, TypeScript, and Vite for logging and reviewing notes by date.',
      'Architected Supabase backend with PostgreSQL for real-time cloud persistence, indexing, and record retrieval.',
      'Engineered an intuitive, distraction-free user interface featuring custom typography and dark-mode aesthetics.',
      'Hosted live on GitHub Pages with instant date filtering, search queries, and markdown preview capabilities.',
    ],
    githubUrl: 'https://github.com/VenkateshVSM',
    liveDemoUrl: 'https://venkateshvsm.github.io/diary/',
    featuredMetric: 'Sub-second cloud sync & date indexing',
    highlight: 'Live Production App',
  },
  {
    id: 'student-mgmt',
    title: 'AI-Powered Student Management System',
    subtitle: 'Database-Driven Academic Record & Insights Application',
    category: 'web',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Supabase', 'SQL', 'GitHub Pages'],
    description:
      'Full lifecycle web platform developed from requirements analysis through deployment to manage student records, performance metrics, and automated reporting.',
    bulletPoints: [
      'Designed normalized relational SQL tables to store, update, and query student academic performance and records.',
      'Integrated Supabase cloud backend for secure authentication, storage, and real-time database transactions.',
      'Delivered responsive frontend interfaces with clean validation, dynamic search filters, and record exports.',
      'Live deployment accessible on GitHub Pages with interactive CRUD operations and real-time feedback.',
    ],
    githubUrl: 'https://github.com/VenkateshVSM',
    liveDemoUrl: 'https://venkateshvsm.github.io/student-management-system/',
    featuredMetric: 'Zero data discrepancies across normalized schemas',
    highlight: 'Live Production App',
  },
  {
    id: 'instagram-downloader',
    title: 'Instagram Media & Reel Downloader',
    subtitle: 'High-Speed Social Media Asset Retrieval Web App',
    category: 'web',
    tags: ['React', 'TypeScript', 'API Pipeline', 'Vercel', 'Tailwind CSS'],
    description:
      'Fast, high-performance web application deployed on Vercel designed to fetch, parse, preview, and download high-resolution Instagram reels, photos, and video media directly.',
    bulletPoints: [
      'Architected a modern responsive web app for extracting and previewing Instagram reels, posts, and media in highest resolution.',
      'Engineered client and API handling to validate media URLs, stream asset buffers, and trigger instant one-click browser downloads.',
      'Deployed on Vercel with lightning-fast edge performance, fluid mobile UI, and robust error handling for private/invalid media links.',
    ],
    githubUrl: 'https://github.com/VenkateshVSM',
    liveDemoUrl: 'https://instagram-downloader-8oitem8vy-venkatesh292005-6275s-projects.vercel.app/',
    featuredMetric: 'Ultra-fast media extraction & 1-click download',
    highlight: 'Deployed on Vercel',
  },
  {
    id: 'audio-extractor',
    title: 'MP4 to MP3 Audio Extractor & Converter',
    subtitle: 'High-Performance Media Processing Web Utility',
    category: 'tool',
    tags: ['Python', 'FFmpeg', 'Media Processing', 'Web Audio API', 'GitHub Pages'],
    description:
      'Automated desktop and web utility for extracting high-fidelity audio streams from video files with custom bitrate configuration and batch operations.',
    bulletPoints: [
      'Engineered media processing algorithms leveraging FFmpeg wrappers to isolate audio tracks from MP4 video formats seamlessly.',
      'Implemented robust format validation, error trapping for corrupted streams, and client-side processing.',
      'Live deployment on GitHub Pages enabling one-click media conversion with real-time conversion status indicators.',
    ],
    githubUrl: 'https://github.com/VenkateshVSM',
    liveDemoUrl: 'https://venkateshvsm.github.io/mp4_to_mp3_converter/',
    featuredMetric: 'High-fidelity audio extraction with 1-click export',
    highlight: 'Live Web Converter',
  },
  {
    id: 'powerbi-sales',
    title: 'Sales Dashboard: Interactive Power BI Report',
    subtitle: 'Enterprise Business Intelligence & DAX Analytics',
    category: 'data',
    tags: ['Power BI', 'DAX', 'Data Modeling', 'Business Intelligence', 'Excel'],
    description:
      'Comprehensive 4-page enterprise business intelligence report modeling sales metrics, customer retention cohorts, and profitability across operational territories.',
    bulletPoints: [
      'Engineered a 4-page comprehensive dashboard: Executive Overview, Customer Analysis, Product Breakdown, and Sales & Profitability.',
      'Modeled key metrics: tracked ₹8.76M total sales, ₹2.15M profit, 3K orders, and 545 distinct customers.',
      'Authored complex DAX calculated measures and monthly trend analytics with dynamic slicers.',
      'Analyzed customer segmentation revealing 520 returning customers with an exceptional 95% retention rate.',
    ],
    githubUrl: 'https://github.com/VenkateshVSM',
    featuredMetric: '₹8.76M Sales • ₹2.15M Profit • 95% Retention',
    highlight: 'Data Analytics Showcase',
  },
]

export const experienceData: ExperienceItem[] = [
  {
    id: 'thisai',
    role: 'Web Development Intern',
    company: 'Thisai Technologies Private Limited',
    period: 'Jun 17, 2026 – Jul 4, 2026',
    type: 'Commercial Internship',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Git'],
    bullets: [
      'Gained intensive practical exposure to commercial web development practices and production architecture.',
      'Collaborated on project-based implementation delivering responsive user interfaces and modular components.',
      'Received Certificate of Internship in recognition of successful project delivery and proactive problem-solving.',
    ],
    badge: 'Certified Web Intern',
  },
  {
    id: 'ak-fullstack',
    role: 'Full Stack Web Development Intern',
    company: 'AK Infopark Private Limited',
    period: 'Jul 10, 2025 – Jul 23, 2025',
    type: 'Full Stack Internship',
    technologies: ['Database Design', 'Web Technologies', 'SQL', 'Frontend', 'Backend'],
    bullets: [
      'Developed database-backed web applications focusing on relational data integrity and record management.',
      'Connected frontend client interfaces with backend databases, verifying data flow and API endpoints.',
      'Practiced industry-standard debugging and version control practices within a team development environment.',
    ],
    badge: 'Database & Web Systems',
  },
  {
    id: 'ak-datascience',
    role: 'Data Science with Python Intern',
    company: 'AK Infopark Private Limited',
    period: 'Jan 21, 2025 – Feb 4, 2025',
    type: 'Data Science Internship',
    technologies: ['Python', 'Data Analysis', 'Data Cleaning', 'Team Collaboration'],
    bullets: [
      'Utilized Python for data wrangling, structured exploratory data analysis, and workflow automation.',
      'Collaborated with cross-functional team members during project development and analytical review cycles.',
      'Documented technical findings, analysis scripts, and reproducible notebooks.',
    ],
    badge: 'Data Science & Python',
  },
]

export const certificationsData: Certification[] = [
  {
    id: 'nptel-cloud',
    title: 'Cloud Computing Certification',
    issuer: 'NPTEL, IIT Kharagpur',
    period: 'Jan – Apr 2025 (12 Weeks)',
    gradeOrDetail: 'Elite 12-Week Rigorous Course',
    category: 'cloud',
    iconName: 'Cloud',
  },
  {
    id: 'ak-python',
    title: 'Placement Oriented Python Training',
    issuer: 'AK Infopark Private Limited',
    period: '2024 – 2025',
    gradeOrDetail: 'Advanced Python, Data Structures & Automation',
    category: 'programming',
    iconName: 'Terminal',
  },
  {
    id: 'ak-java-expert',
    title: 'JAVA Expert Training Program',
    issuer: 'AK Infopark Private Limited',
    period: '2025 – 2026',
    gradeOrDetail: 'Object-Oriented Programming & Enterprise Concepts',
    category: 'programming',
    iconName: 'Coffee',
  },
  {
    id: 'ak-frontend',
    title: 'Front-End Web Development',
    issuer: 'AK Infopark Private Limited',
    period: '2024 – 2025',
    gradeOrDetail: 'HTML5, CSS3, JavaScript, Bootstrap Architecture',
    category: 'web',
    iconName: 'Globe',
  },
  {
    id: 'myinception-java',
    title: 'Java Professional Training',
    issuer: 'MyInception Tech, Chennai',
    period: 'Dec 2025 (10 Days)',
    gradeOrDetail: 'Intensive Practical Java Development Workshop',
    category: 'programming',
    iconName: 'Cpu',
  },
  {
    id: 'tekla-steel',
    title: 'Tekla Structural Steel Basic Training',
    issuer: 'SWT Enterprises',
    period: 'Jul 2023',
    gradeOrDetail: 'Grade A+ Certified',
    category: 'specialized',
    iconName: 'Layers',
  },
  {
    id: 'sololearn-python',
    title: 'Python Certification Suite',
    issuer: 'SoloLearn',
    period: 'Continuous Learning',
    gradeOrDetail: 'Introduction, Beginners & Intermediate Track',
    category: 'programming',
    iconName: 'CheckCircle2',
  },
]

export const achievementsData: Achievement[] = [
  {
    id: 'ncc-c',
    title: "National Cadet Corps (NCC) 'C' Certificate",
    subtitle: 'Rank: Lance Corporal | Grade: "B"',
    year: '2026',
    description:
      'Awarded "B" grade in the prestigious NCC "C" Certificate under 29 (TN) Indep Coy NCC, Tamil Nadu, Puducherry & Andaman Nicobar Directorate. Developed high-caliber team discipline, leadership during high-intensity field maneuvers, and operational resilience.',
    badge: 'Military Leadership & Resilience',
    highlight: 'Lance Corporal Rank',
  },
  {
    id: 'galacticos-fest',
    title: "Galactico's Fest 2K25 National Symposium",
    subtitle: 'Certificate of Achievement & Technical Participation',
    year: '7 Oct 2025',
    description:
      'Secured Certificate of Achievement in Connection event at the national-level technical symposium. Also actively competed in competitive Code Debugging and Web Designing challenges against university participants.',
    badge: 'National Symposium Winner',
    highlight: 'Debugging & Web Design Competitor',
  },
]

export const educationData = [
  {
    degree: 'Bachelor of Technology, Information Technology',
    institution: 'Loyola Institute of Science and Technology',
    period: '2023 – 2027',
    badge: 'Current Degree • Final Year',
    focus: 'Software Engineering, Database Management Systems, Data Structures, Web Technologies, Cloud Architectures.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) - Computer Science',
    institution: 'Kendriya Vidyalaya, Vijayanarayanam, Tirunelveli',
    period: 'Secondary Education',
    badge: 'Computer Science Stream',
    focus: 'Foundational Computer Science, C++/Python programming, Boolean Logic, Database concepts.',
  },
]

export const languagesSpoken = [
  { language: 'English', proficiency: 'Professional Working Proficiency' },
  { language: 'Tamil', proficiency: 'Native Speaker' },
]
