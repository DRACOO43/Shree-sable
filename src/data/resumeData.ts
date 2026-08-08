import { Skill, Project, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Shree Sable',
  title: 'Artificial Intelligence & Machine Learning Student',
  headline: 'Passionate AIML Student & Full-Stack Developer',
  email: 'shreesable15@gmail.com',
  phone: '+91 7447694491',
  location: 'Pune, Maharashtra, India',
  profileSummary:
    'Dedicated Artificial Intelligence and Machine Learning student with a strong foundation in programming, full stack web development, and AI technologies. Passionate about developing real world applications.',
  avatarUrl:
    'https://raw.githubusercontent.com/DRACOO43/Shree-sable/e9537d895aee704f818e7f80bc3ee228575adb5c/src/assets/images/ChatGPT%20Image%20Aug%208%2C%202026%2C%2009_59_01%20PM.png',
  heroBgUrl: '/src/assets/images/ai_hero_bg_1786205417203.jpg',
  github: 'https://github.com/shreesable',
  linkedin: 'https://linkedin.com/in/shree-sable',
  institution: 'Ajeenkya DY Patil School of Engineering',
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Ajeenkya DY Patil School of Engineering',
    degree: 'Diploma in Artificial Intelligence & Machine Learning',
    field: 'Artificial Intelligence & Machine Learning (AIML)',
    period: '2024 - 2027',
    location: 'Pune, India',
    description:
      'Rigorous academic program focusing on core computer science fundamentals, machine learning algorithms, database management systems, and practical full-stack web application development.',
    highlights: [
      'Comprehensive coursework in Python Programming & Data Science',
      'Object-Oriented Programming with Java and C',
      'Relational Database Systems with MySQL',
      'Hands-on practical labs and group AI projects',
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Pro Azure',
    role: 'Student Intern',
    duration: '3 months',
    period: '2024 (3 Months)',
    type: 'Internship',
    description:
      'Gained hands-on experience in cloud infrastructure, Azure services, and cloud-integrated software workflows during an intensive 3-month internship.',
    responsibilities: [
      'Explored cloud architecture principles and Microsoft Azure core cloud services.',
      'Assisted in deploying and testing web modules connected to cloud databases.',
      'Collaborated with senior engineers on optimizing cloud workflows and API integrations.',
      'Participated in code reviews, technical documentation, and agile team check-ins.',
    ],
    skillsGained: ['Microsoft Azure', 'Cloud Fundamentals', 'Git/GitHub Workflow', 'API Integration'],
  },
];

export const TECHNICAL_SKILLS: Skill[] = [
  {
    name: 'Python',
    category: 'Programming',
    level: 90,
    description: 'Core language for AI/ML algorithms, data manipulation, automation, and script development.',
    badge: 'Primary Language',
  },
  {
    name: 'Java',
    category: 'Programming',
    level: 82,
    description: 'Object-Oriented Programming, application logic, and software design principles.',
    badge: 'OOP Focus',
  },
  {
    name: 'C Language',
    category: 'Programming',
    level: 80,
    description: 'Low-level programming, pointers, memory management, and core algorithmic logic.',
    badge: 'Foundation',
  },
  {
    name: 'MySQL',
    category: 'Programming',
    level: 85,
    description: 'Relational database schema design, complex SQL queries, indexing, and data management.',
    badge: 'Database Management',
  },
];

export const TOOLS_TECHNOLOGIES: Skill[] = [
  {
    name: 'Git',
    category: 'Tools & Tech',
    level: 88,
    description: 'Distributed version control, branching strategies, and commit hygiene.',
  },
  {
    name: 'GitHub',
    category: 'Tools & Tech',
    level: 90,
    description: 'Repository hosting, collaborative code reviews, issue tracking, and GitHub Pages.',
  },
  {
    name: 'VS Code',
    category: 'Tools & Tech',
    level: 95,
    description: 'Primary IDE setup with extensions, debugging tools, and integrated terminal.',
  },
  {
    name: 'Figma',
    category: 'Tools & Tech',
    level: 80,
    description: 'UI/UX wireframing, prototyping, layout planning, and developer handoff.',
  },
];

export const SOFT_SKILLS: Skill[] = [
  {
    name: 'Strategic Planning',
    category: 'Soft Skills',
    level: 88,
    description: 'Deconstructing complex engineering tasks into structured milestones and execution roadmaps.',
  },
  {
    name: 'Scheduling',
    category: 'Soft Skills',
    level: 92,
    description: 'Efficient time management, prioritizing deliverables, and managing project deadlines.',
  },
  {
    name: 'Communication Skills',
    category: 'Soft Skills',
    level: 90,
    description: 'Articulating technical concepts clearly to peers, mentors, and cross-functional teams.',
  },
];

export const SPOKEN_LANGUAGES = [
  { name: 'English', proficiency: 'Professional / Fluent', level: 90 },
  { name: 'Hindi', proficiency: 'Native / Fluent', level: 95 },
  { name: 'Marathi', proficiency: 'Native / Mother Tongue', level: 100 },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'AI Crop & Plant Disease Classifier',
    category: 'AI/ML',
    shortDescription: 'Computer vision application built in Python for identifying leaf diseases and providing crop treatment recommendations.',
    fullDescription:
      'An intelligent Machine Learning web tool designed to assist agricultural workers by analyzing leaf images for disease diagnosis. Powered by Python and trained on open plant datasets, it gives real-time health scores and curative action steps.',
    tags: ['Python', 'Machine Learning', 'Computer Vision', 'Full Stack Web'],
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/shreesable/plant-disease-ai',
    demoUrl: 'https://github.com/shreesable/plant-disease-ai',
    keyFeatures: [
      'Image drag-and-drop analysis',
      'Confidence score metrics & disease diagnosis',
      'Preventative treatment guide generator',
      'Python backend image preprocessing',
    ],
  },
  {
    id: 'proj-2',
    title: 'Pro Azure Cloud Resource Monitor',
    category: 'Cloud & Azure',
    shortDescription: 'Dashboard concept developed during internship at Pro Azure for tracking cloud workload metrics and usage logs.',
    fullDescription:
      'Inspired by the 3-month internship experience at Pro Azure, this web interface monitors cloud instances, uptime stats, and database latency. Integrates clean data visualizations and alert triggers.',
    tags: ['Azure Cloud', 'JavaScript', 'HTML/CSS', 'Rest API'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/shreesable/pro-azure-monitor',
    demoUrl: 'https://github.com/shreesable/pro-azure-monitor',
    keyFeatures: [
      'Live metric charts for server CPU and RAM',
      'Azure service status health check indicators',
      'Interactive logs filter by severity level',
      'Responsive dark-mode UI styled in Figma',
    ],
  },
  {
    id: 'proj-3',
    title: 'Smart Student & Exam Management System',
    category: 'Database',
    shortDescription: 'Full database application using MySQL & Java for tracking student records, courses, and exam performance.',
    fullDescription:
      'A robust relational database management system designed for academic institutions. Features structured MySQL schemas with foreign key integrity, stored procedures, and a Java interface for query execution.',
    tags: ['MySQL', 'Java', 'SQL Relational DB', 'OOP'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/shreesable/mysql-student-manager',
    demoUrl: 'https://github.com/shreesable/mysql-student-manager',
    keyFeatures: [
      'Normalized 3NF relational database schema in MySQL',
      'CRUD operations for student records and course enrollments',
      'Java GUI interface for query generation and report printing',
      'Optimized indexing for fast search and record retrieval',
    ],
  },
  {
    id: 'proj-4',
    title: 'Interactive Portfolio & AI Copilot App',
    category: 'Full Stack',
    shortDescription: 'High-performance interactive web application built with React, TypeScript, Tailwind CSS, and Gemini AI integration.',
    fullDescription:
      'A modern developer portfolio displaying Shree Sable’s engineering profile, technical skill breakdown, internship timeline, interactive CLI terminal, and AI-powered interview copilot.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Gemini AI', 'Express'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/shreesable/portfolio-app',
    demoUrl: 'https://github.com/shreesable/portfolio-app',
    keyFeatures: [
      'Interactive developer CLI terminal view',
      'Server-side Gemini AI integration for Q&A',
      'Printable and downloadable resume modal',
      'Responsive dark/light theme execution with smooth motion animations',
    ],
  },
];

export const FREQUENT_QUESTIONS = [
  'What technical skills is Shree proficient in?',
  'Tell me about Shree Sable’s internship experience at Pro Azure.',
  'What program is Shree studying at Ajeenkya DY Patil School of Engineering?',
  'How can I get in touch with Shree for project collaborations?',
];
