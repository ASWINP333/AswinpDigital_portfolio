"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ThankYouClient = () => {
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

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* Blog content can be added here */}
      <div className="min-h-[100vh] flex flex-col items-center justify-center px-4 py-8 w-full">
        <h1 className="text-4xl font-bold mb-8 mt-12">Thank You!</h1>
        <p className="text-lg text-center">
          Your submission has been received. We will get back to you shortly.
        </p>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default ThankYouClient;
