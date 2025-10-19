// ========================
// 🧠 DB SKILLS DATA (chuẩn theo project thực tế của bạn)
// ========================

export interface DbSkill {
  icon: string;
  title: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
}

export const allSkills: DbSkill[] = [
  {
    icon: "LayoutDashboard",
    title: {
      en: "Frontend Development",
      vi: "Phát Triển Giao Diện (Frontend)",
    },
    description: {
      en: "Building dynamic user interfaces using ReactJS, React-Bootstrap, NextJS and Axios for API integration.",
      vi: "Xây dựng giao diện người dùng động bằng ReactJS, React-Bootstrap, NextJS và tích hợp API qua Axios.",
    },
  },
  {
    icon: "Code",
    title: {
      en: "Backend Development",
      vi: "Phát Triển Backend",
    },
    description: {
      en: "Developing RESTful APIs using ASP.NET Core with layered architecture (Controller, Service, Repository) and clean code principles.",
      vi: "Phát triển RESTful API bằng ASP.NET Core theo mô hình nhiều tầng (Controller, Service, Repository) với cấu trúc rõ ràng, dễ bảo trì.",
    },
  },
  {
    icon: "Database",
    title: {
      en: "Database Management",
      vi: "Quản Lý Cơ Sở Dữ Liệu",
    },
    description: {
      en: "Designing and managing SQL Server databases with stored procedures, foreign keys, and optimized relationships.",
      vi: "Thiết kế và quản lý cơ sở dữ liệu SQL Server với stored procedure, khóa ngoại và mối quan hệ được tối ưu.",
    },
  },

  {
    icon: "Cloud",
    title: {
      en: "Deployment & Hosting",
      vi: "Triển Khai & Lưu Trữ",
    },
    description: {
      en: "Deploying applications on Vercel or IIS and connecting backend to cloud SQL Server databases.",
      vi: "Triển khai ứng dụng trên Vercel hoặc IIS và kết nối backend với cơ sở dữ liệu SQL Server trên cloud.",
    },
  },
  {
    icon: "ShieldCheck",
    title: {
      en: "Security & Authentication",
      vi: "Bảo Mật & Xác Thực",
    },
    description: {
      en: "Implementing secure APIs using JWT authentication, role-based access control, and email OTP verification.",
      vi: "Triển khai API an toàn bằng JWT, phân quyền theo vai trò và xác thực OTP qua email.",
    },
  },
  {
    icon: "ServerCog",
    title: {
      en: "System Integration",
      vi: "Tích Hợp Hệ Thống",
    },
    description: {
      en: "Connecting backend services, databases, and frontend components into a cohesive, maintainable ecosystem.",
      vi: "Kết nối các dịch vụ backend, cơ sở dữ liệu và frontend thành một hệ thống đồng nhất, dễ bảo trì.",
    },
  },
];
