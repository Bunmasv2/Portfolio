"use client";

import React, { useEffect, useRef, useState } from "react";

interface AutoScrollGalleryProps {
    images: string[];
    scrollSpeed?: number; // tốc độ di chuyển
}

const AutoScrollGallery: React.FC<AutoScrollGalleryProps> = ({
    images,
    scrollSpeed = 0.55,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [itemsVisible, setItemsVisible] = useState(2); // số ảnh hiển thị cùng lúc

    // 🧩 Xác định số lượng ảnh hiển thị tùy kích thước màn hình
    useEffect(() => {
        const resizeHandler = () => {
            setItemsVisible(window.innerWidth < 640 ? 1 : 2);
        };

        resizeHandler();
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    // 🎞️ Animation chạy trượt dọc vô hạn
    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        let offset = 0;
        const scrollLimit = wrapper.scrollHeight / 2;

        const smoothScroll = () => {
            offset += scrollSpeed;
            if (offset >= scrollLimit) offset = 0;
            wrapper.style.transform = `translateY(-${offset}px)`;
            requestAnimationFrame(smoothScroll);
        };

        smoothScroll();
    }, [scrollSpeed]);

    // 📏 Tính toán kích thước khung hiển thị
    const singleItemHeight = itemsVisible === 1 ? 320 : 245;
    const galleryHeight = singleItemHeight * itemsVisible;

    return (
        <div
            className="relative w-full overflow-hidden rounded-xl border border-border shadow-sm"
            style={{ height: galleryHeight }}
        >
            <div ref={wrapperRef} className="flex flex-col transition-transform duration-500 ease-linear">
                {[...images, ...images].map((img, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full"
                        style={{ height: singleItemHeight }}
                    >
                        <img
                            src={img}
                            alt={`gallery-item-${index}`}
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
