export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  status: 'active' | 'in-progress' | 'scheduled';
  credentialId?: string;
  badgeColor: string;
  description: string;
  topics: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  summary: string;
  content: string; // supports rich Markdown/HTML formatting
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  role: string;
  technologies: string[];
  objectives: string[];
  architecture?: string; // description of topology
  configSnippets: {
    title: string;
    description: string;
    language: string;
    code: string;
  }[];
  verificationSteps: string[];
  bannerImage: string;
}
