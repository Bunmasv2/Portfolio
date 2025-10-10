export interface Project {
  id: number
  title: string
  desc: string
  tech: string
  image: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Clinic Management System",
    desc: "Fullstack healthcare system with doctor scheduling, patient management, and VNPay/MoMo payment integration.",
    tech: "React Bootstrap, ASP.NET Core, SQL Server, Google Cloud",
    image: "/images/Project1.png",
    link: "https://github.com/BanhTuanKiet/BookingCare",
  },
  {
    id: 2,
    title: "Project Management App",
    desc: "Collaborative task management tool with Kanban board, sprints, and real-time notifications.",
    tech: "React, ASP.NET Core, SignalR, Google Cloud Storage",
    image: "/images/Project2.png",
    link: "https://github.com/BanhTuanKiet/ProjectManagement",
  },
]
