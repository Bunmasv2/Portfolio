"use client";
import React from "react";
import BlogCard from "./BlogCard";
import { postsData } from "../data/postsData";
import { useLanguage } from "../context/LanguageContext";

const BlogList = () => {
    const { lang } = useLanguage();
    const postsToDisplay = postsData[lang];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {postsToDisplay.map((post) => (
                <BlogCard key={post.slug} {...post} />
            ))}
        </div>
    );
};

export default BlogList;
