"use client";
import BlogContent from "@/app/components/BlogContent";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { blogs } from "@/common";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const currentSelectedBlog = blogs.find((blog) => blog.slug === params.slug);

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  if (!currentSelectedBlog) {
    return (
      <>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <div className="min-h-[100vh] flex flex-col items-center justify-center px-4 py-8 w-full">
          <h1 className="text-4xl font-bold mb-8 mt-12">Blog Not Found</h1>
          <p className="text-lg">
            The blog you are looking for does not exist.
          </p>
        </div>
        <Footer isDarkMode={isDarkMode} />
      </>
    );
  }
  return (
     <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Blog Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight mt-16">
          {currentSelectedBlog.title}
        </h1>

        {/* Meta data */}
        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 mb-8 text-sm">
          <span>{currentSelectedBlog.date}</span>
          <span>•</span>
          <span>{currentSelectedBlog.author}</span>
        </div>

        {/* Featured Image */}
        {currentSelectedBlog.image && (
          <div className="w-full mb-10">
            <Image
              src={currentSelectedBlog.image}
              alt={currentSelectedBlog.title}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
        )}

        {/* Blog Content */}
        <article className="prose dark:prose-invert prose-lg max-w-none">

          {/* The actual blog HTML content */}
          {/* <div
            dangerouslySetInnerHTML={{ __html: currentSelectedBlog.content }}
          ></div> */}
          <BlogContent html={currentSelectedBlog.content} />


        </article>

      </div>
    </div>

    <Footer isDarkMode={isDarkMode} />
  </>
  )
};

export default Page;
