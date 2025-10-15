"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

interface BlogCardProps {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    tags: string[];
    date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ slug, title, excerpt, image, tags, date }) => {
    const navigate = useNavigate();
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return (
        <motion.article
            variants={itemVariants}
            // FIX 2: Loại bỏ `y: -5` để sửa lỗi nhảy layout khi hover.
            // Chỉ giữ lại `scale` để có hiệu ứng mượt mà.
            whileHover={!isMobile ? { scale: 1.03 } : {}}
            className="group relative bg-card border border-border rounded-xl overflow-hidden cursor-pointer flex flex-col h-full shadow-md hover:shadow-xl transition-shadow"
            onClick={() => navigate(`/blog/${slug}`)}
        >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {title}
                </h2>

                <div className="flex flex-wrap gap-2 text-xs">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-gray-200 dark:bg-zinc-700 dark:text-gray-300 text-gray-800 px-2 py-1 rounded-lg"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    <span>{date}</span>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;