export interface Project {
  id: number;
  title: string;
  teamSize: number;
  duration: string;
  github: string;
  demo?: string;
  technologies: string[];
  features: string[];
  role: string;
  description: string;
  images: string[];
}
