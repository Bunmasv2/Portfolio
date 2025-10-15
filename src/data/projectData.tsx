export interface Project {
  id: number
  title: string
  teamSize: number
  duration: string
  github: string
  demo?: string
  technologies: string[]
  role: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Management",
    teamSize: 3,
    duration: "Sep - Dec 2025",
    github: "https://github.com/BanhTuanKiet/ProjectManagement",
    technologies: [
      "ASP.Net Core Web API",
      "ASP.NET Core Identity",
      "EF Core",
      "NextJS",
      "TailwindCSS",
      "SQL Server",
      "Render",
      "Firebase",
      "Google Cloud",
      "SignalR",
      "Cloudinary"
    ],
    role: "Developed RESTful APIs with modular architecture, implemented authentication and authorization using ASP.NET Core Identity, and integrated Cloudinary for file and image management. Built real-time task updates, notifications, and member presence tracking with SignalR. Designed responsive NextJS + Tailwind interface for sprint, task, and user management.",
    description: "A real-time project and task management system that supports team collaboration, sprint planning, drag-and-drop task organization, and file sharing with Cloudinary integration. It provides instant updates, role-based access control, and real-time communication for better workflow management.",
    image: "/images/project/Project2.png"
  },
  {
    id: 2,
    title: "Clinic Management",
    teamSize: 3,
    duration: "Mar - May 2025",
    github: "https://github.com/BanhTuanKiet/BookingCare",
    technologies: [
      "ReactJS",
      "Bootstrap",
      "ASP.Net Core Web API",
      "ASP.NET Core Identity",
      "EF Core",
      "SQL Server",
      "Google Cloud",
      "VNPay",
      "MoMo"
    ],
    role: "Developed RESTful APIs for managing users, appointments, and medical records. Implemented JWT authentication, role-based authorization, and email OTP verification. Integrated payment gateways (VNPay and MoMo) and automated appointment confirmation emails. Designed responsive UI for patients, doctors, and admin roles using React Bootstrap.",
    description: "A comprehensive clinic management platform that handles appointment scheduling, doctor management, patient records, and secure payment processing. The system improves clinic efficiency through automated workflows and cloud-based data storage.",
    image: "/images/project/Project1.png"
  }
];

// src/data/techDocs.ts

export const techDocs: Record<string, string> = {
  ReactJS: "https://react.dev/",
  "NextJS": "https://nextjs.org/docs",
  TailwindCSS: "https://tailwindcss.com/docs",
  Bootstrap: "https://getbootstrap.com/docs/",
  "ASP.Net Core Web API": "https://learn.microsoft.com/en-us/aspnet/core/web-api/",
  "ASP.NET Core Identity": "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity",
  "EF Core": "https://learn.microsoft.com/en-us/ef/core/",
  "SQL Server": "https://learn.microsoft.com/en-us/sql/sql-server/",
  Firebase: "https://firebase.google.com/docs",
  "Google Cloud": "https://cloud.google.com/docs",
  Render: "https://render.com/docs",
  SignalR: "https://learn.microsoft.com/en-us/aspnet/core/signalr/",
  "Node.js": "https://nodejs.org/en/docs",
  "Java Spring Boot": "https://spring.io/projects/spring-boot",
  MongoDB: "https://www.mongodb.com/docs/",
  Git: "https://git-scm.com/doc",
  "VS Code": "https://code.visualstudio.com/docs",
  Postman: "https://learning.postman.com/docs/getting-started/introduction/",
  Figma: "https://help.figma.com/hc/en-us",
  "JWT Auth": "https://jwt.io/introduction",
  "Google Cloud SQL": "https://cloud.google.com/sql/docs",
  Cloudinary: "https://cloudinary.com/documentation",
  Vercel: "https://vercel.com/docs",
};

