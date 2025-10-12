"use client";

import { useState, useEffect } from "react";

const ClockWidget: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const [theme, setTheme] = useState<string>(
        typeof window !== "undefined"
            ? localStorage.getItem("theme") || "light"
            : "light"
    );

    // Cập nhật đồng hồ mỗi 100ms
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 100);
        return () => clearInterval(timer);
    }, []);

    // Theo dõi thay đổi theme (khi người dùng toggle)
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    // === Đồng hồ Việt Nam ===
    const now = time;
    const vietNamTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    }).format(now);

    const [hoursStr, minutesStr, secondsStr] = vietNamTime.split(":");
    const hours24 = parseInt(hoursStr);
    const hours = hours24 % 12;
    const minutes = parseInt(minutesStr);
    const seconds = parseInt(secondsStr);
    const milliseconds = now.getMilliseconds();

    const secondAngle = seconds * 6 + milliseconds * 0.006;
    const minuteAngle = minutes * 6 + seconds * 0.1 + milliseconds * 0.0001666;
    const hourAngle = hours * 30 + minutes * 0.5 + seconds * 0.008333;

    // === Đồng hồ Mỹ (EST) ===
    const usTimeString = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    }).format(now);

    const [usHoursStr, usMinutesStr, usSecondsStr] = usTimeString.split(":");
    const usHours24 = parseInt(usHoursStr);
    const usHours12 = usHours24 % 12;
    const usMinutes = parseInt(usMinutesStr);
    const usSeconds = parseInt(usSecondsStr);
    const usAngle = usHours12 * 30 + usMinutes * 0.5 + usSeconds * 0.008333;

    return (
        <div className="fixed top-6 left-6 z-50">
            <div
                className={`relative w-20 h-20 md:w-40 md:h-40 rounded-full border-2 ${theme === "dark"
                    ? "border-gray-700/50 bg-gray-900/80"
                    : "border-gray-300/50 bg-white/90"
                    } backdrop-blur-lg shadow-lg`}
            >
                {/* Nền mặt đồng hồ */}
                <div
                    className={`absolute inset-1 rounded-full ${theme === "dark" ? "opacity-80" : "opacity-90"
                        }`}
                    style={{
                        backgroundImage: 'url("/images/Clock.svg")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                />

                {/* Kim đồng hồ */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {/* Kim giờ Mỹ (xanh) */}
                    <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="25"
                        stroke={theme === "dark" ? "#60a5fa" : "#3b82f6"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        transform={`rotate(${usAngle} 50 50)`}
                    />
                    {/* Kim giờ VN */}
                    <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="30"
                        stroke={theme === "dark" ? "#ffffff" : "#000000"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        transform={`rotate(${hourAngle} 50 50)`}
                    />
                    {/* Kim phút */}
                    <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="20"
                        stroke={theme === "dark" ? "#ffffff" : "#000000"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        transform={`rotate(${minuteAngle} 50 50)`}
                    />
                    {/* Kim giây */}
                    <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="15"
                        stroke={theme === "dark" ? "#facc15" : "#eab308"}
                        strokeWidth="1"
                        strokeLinecap="round"
                        transform={`rotate(${secondAngle} 50 50)`}
                    />
                    {/* Tâm đồng hồ */}
                    <circle
                        cx="50"
                        cy="50"
                        r="2.5"
                        fill={theme === "dark" ? "#ffffff" : "#000000"}
                    />
                </svg>
            </div>
        </div>
    );
};

export default ClockWidget;
