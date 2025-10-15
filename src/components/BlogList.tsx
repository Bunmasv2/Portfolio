"use client";
import React from "react";
import BlogCard from "./BlogCard";
import { postsData } from "../data/postsData";

const BlogList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {postsData.map((post) => (
                <BlogCard key={post.slug} {...post} />
            ))}
        </div>
    );
};

export default BlogList;
