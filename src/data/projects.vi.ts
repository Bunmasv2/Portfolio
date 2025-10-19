import type { Project } from "./projects.type";

export const projects: Project[] = [
  {
    id: 1,
    title: "Quản lý Dự án",
    teamSize: 3,
    duration: "Tháng 9 - 12/2025",
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
      "Đặt lịch hẹn theo bác sĩ và khung giờ",
      "Phân quyền người dùng (Admin, Bác sĩ, Bệnh nhân)",
      "Xác thực JWT bảo mật với Identity",
      "Tích hợp thanh toán VNPay trực tuyến",
    ],
    role: "Phát triển RESTful API, triển khai xác thực & phân quyền bằng ASP.NET Core Identity, và tích hợp Cloudinary để quản lý file & hình ảnh.",
    description:
      "Hệ thống quản lý dự án thời gian thực hỗ trợ cộng tác nhóm, lập kế hoạch sprint, kéo-thả task và chia sẻ file qua Cloudinary.",
    image: "/images/project/Project2.png",
  },
  {
    id: 2,
    title: "Quản lý Phòng khám",
    teamSize: 3,
    duration: "Tháng 3 - 5/2025",
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
      "Quy trình phát triển đầy đủ: Backlog → Sprint → Task",
      "Hệ thống phân quyền linh hoạt",
      "Cập nhật thời gian thực với SignalR",
      "Giao nhiệm vụ và thông báo tức thời",
    ],
    role: "Phát triển RESTful API quản lý người dùng, lịch hẹn, và hồ sơ bệnh án. Tích hợp thanh toán VNPay, MoMo và gửi email xác nhận tự động.",
    description:
      "Nền tảng quản lý phòng khám toàn diện giúp đặt lịch, quản lý bác sĩ, bệnh nhân và thanh toán an toàn.",
    image: "/images/project/Project1.png",
  },
];
