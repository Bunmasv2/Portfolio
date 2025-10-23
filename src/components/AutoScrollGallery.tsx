"use client";

import React, { useEffect, useRef, useState } from "react";

interface AutoScrollGalleryProps {
    images: string[];
    className?: string;
    scrollSpeed?: number;
}

const AutoScrollGallery: React.FC<AutoScrollGalleryProps> = ({
    images,
    className = "h-[490px] sm:h-[320px]", // Chiều cao mặc định
    scrollSpeed = 0.5,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [itemsVisible, setItemsVisible] = useState(2);

    // 🧩 Responsive: xác định số ảnh hiển thị
    useEffect(() => {
        const handleResize = () => {
            setItemsVisible(window.innerWidth < 640 ? 1 : 2);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 🎞️ Animation vô hạn
    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        let offset = 0;
        const totalHeight = wrapper.scrollHeight / 2;

        const animate = () => {
            offset += scrollSpeed;
            if (offset >= totalHeight) offset -= totalHeight;
            wrapper.style.transform = `translateY(-${offset}px)`;
            requestAnimationFrame(animate);
        };

        animate();
    }, [scrollSpeed]);

    const singleItemHeight = itemsVisible === 1 ? 320 : 245;
    const galleryHeight = singleItemHeight * itemsVisible;

    return (
        <div
            className={`relative w-full overflow-hidden ${className}`}
        >
            <div
                ref={wrapperRef}
                className="flex flex-col will-change-transform"
                style={{ transform: "translateY(0)" }}
            >
                {[...images, ...images].map((img, i) => (
                    <div key={i} className="h-full w-full flex-shrink-0">
                        <img
                            src={img}
                            alt={`gallery-${i}`}
                            className="h-full w-full object-cover"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutoScrollGallery;
