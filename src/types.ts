export interface Skill {
  name: string;
  category: 'Programming' | 'Tools & Tech' | 'Soft Skills' | 'Languages';
  level: number; // 0 to 100
  description: string;
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'AI/ML' | 'Full Stack' | 'Database' | 'Cloud & Azure';
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  keyFeatures: string[];
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
