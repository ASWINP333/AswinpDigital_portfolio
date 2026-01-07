"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

const BlogPageClient  = () => {
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

  const blogHeadlines = [
    {
  slug: "how-local-businesses-in-malappuram-can-get-leads-through-digital-marketing",
  title: "How Local Businesses in Malappuram Can Get Leads Through Digital Marketing",
    },
    {
      title:
        "Why Every Small Business in Malappuram Needs a Digital Marketing Expert",
      slug: "why-every-small-business-in-malappuram-needs-a-digital-marketing-expert",
    },
    {
      title: "How a Website Can Transform Your Business in Malappuram",
      slug: "how-a-website-can-transform-your-business-in-malappuram",
    },
    {
      title:
        "Top Digital Marketing Trends in 2025 for Businesses in Malappuram",
      slug: "top-digital-marketing-trends-in-2025-for-businesses-in-malappuram",
    },
    {
      title:
        "Why Hiring a Local Digital Marketing Expert in Malappuram Is Better Than an Agency",
        slug: "why-hiring-a-local-digital-marketing-expert-in-malappuram-is-better-than-an-agency",
    },
  ];
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* Blog content can be added here */}
      <div className="min-h-[100vh] flex flex-col items-center justify-center px-4 py-8 w-full">
        <h1 className="text-4xl font-bold mb-8 mt-12">Blogs</h1>
        <ul className="space-y-6 w-full max-w-3xl">
          {blogHeadlines.map(({ title, slug }, index) => (
            <li key={index} className="border-b pb-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {title}
              </h2>
              <Link href={`/blog/${slug}`} className="inline-block mt-2">
                <FaLocationArrow className="mt-2 hover:text-blue-700 cursor-pointer" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default BlogPageClient;
