import type { Project } from "./projects.type";

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
      "Cloudinary",
    ],
    features: [
      "Appointment booking by doctor and schedule",
      "Role-based access control (Admin, Doctor, Patient)",
      "Secure JWT authentication with Identity",
      "VNPay integration for online payments",
    ],
    role: "Developed RESTful APIs with modular architecture, implemented authentication and authorization using ASP.NET Core Identity, and integrated Cloudinary for file and image management.",
    description:
      "A real-time project and task management system that supports team collaboration, sprint planning, drag-and-drop task organization, and file sharing with Cloudinary integration.",
    image: "/images/project/Project2.png",
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
      "MoMo",
    ],
    features: [
      "Full project lifecycle: Backlog → Sprint → Task",
      "Dynamic role and permission system",
      "Real-time updates with SignalR",
      "Task assignment and instant notifications",
    ],
    role: "Developed RESTful APIs for managing users, appointments, and medical records. Integrated payment gateways (VNPay and MoMo) and email OTP verification.",
    description:
      "A comprehensive clinic management platform that handles appointment scheduling, doctor management, and secure payment processing.",
    image: "/images/project/Project1.png",
  },
];
