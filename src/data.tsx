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
      "SignalR"
    ],
    role: "Developed RESTful APIs, implemented authentication/authorization with custom role-based middleware, built centralized error-handling middleware, and integrated real-time notifications, online status, and user activity tracking using SignalR. Designed responsive UI for project and task collaboration features.",
    description: "A real-time project & task management platform with team collaboration, role-based access control, online presence, and instant notifications.",
    image: "/images/Project2.png"
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
      "Google Cloud"
    ],
    role: "Built RESTful APIs (user, scheduling, medical records), implemented JWT authentication with role-based access, developed error-handling middleware, and created UI for booking and patient records.",
    description: "A web application developed to streamline clinic operations. The system supports efficient management of patient records, appointment bookings, medical examinations, and payment processing.",
    image: "/images/Project1.png"
  }
]

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

