"use client";
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { postsData } from "../../data/postsData";
import ThemeToggle from "../../components/ThemeToggle";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
    en: {
        notFoundTitle: "Oops! You're lost...",
        notFoundMessage: "The post you are looking for could not be found.",
        backToBlog: "Back to Blog Page",
        relatedDocs: "📚 Related Documents & Courses",
        backToAllPosts: "Back to all posts",
    },
    vi: {
        notFoundTitle: "Ối! Lạc đường rồi...",
        notFoundMessage: "Không tìm thấy bài viết bạn yêu cầu.",
        backToBlog: "Quay về Trang Blog",
        relatedDocs: "📚 Tài liệu & Khóa học liên quan",
        backToAllPosts: "Quay lại tất cả bài viết",
    },
};

const BlogDetail = () => {
    const { slug } = useParams();
    const { lang } = useLanguage();
    const t = translations[lang];

    const post = postsData[lang].find((p) => p.slug === slug);

    if (!post)
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-700 dark:text-gray-300">
                <h2 className="text-4xl font-bold mb-4">Ối! Lạc đường rồi...</h2>
                <p className="text-lg mb-8">Không tìm thấy bài viết bạn yêu cầu.</p>
                <Link
                    to="/blog" // Thay bằng đường dẫn trang blog của bạn
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    {t.backToBlog}
                </Link>
            </div>
        );

    return (
        <div className="bg-gray-50 dark:bg-zinc-900 min-h-screen transition-colors duration-300">
            <ThemeToggle />
            <Navbar />

            <header className="relative h-[45vh] md:h-[55vh] w-full pt-16">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-6">
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl">
                        {post.title}
                    </h1>
                    <p className="mt-4 text-lg text-gray-200">{post.date}</p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <p className="text-xl italic text-gray-600 dark:text-gray-400 border-l-4 border-blue-500 pl-6 mb-12">
                    {post.excerpt}
                </p>

                <article
                    className="prose dark:prose-invert lg:prose-xl max-w-none text-justify leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {post.relatedLinks && post.relatedLinks.length > 0 && (
                    <div className="mt-16 p-6 bg-gray-100 dark:bg-zinc-800 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                            {t.relatedDocs}
                        </h3>
                        <ul className="space-y-2">
                            {post.relatedLinks.map((link, i) => (
                                <li key={i} className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L8 9.586l4.293-4.293z" clipRule="evenodd"></path></svg>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="mt-16 text-center">
                    <Link
                        to="/blog" // Thay bằng đường dẫn trang blog của bạn
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                    >
                        <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t.backToAllPosts}
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetail;