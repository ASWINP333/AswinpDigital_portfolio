import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-6 sm:px-10 md:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: -2 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Section Titles */}
      <motion.h4
        className="text-center mb-2 text-base sm:text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-10 md:gap-20 my-10 md:my-20"
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-48 sm:w-64 md:w-80 rounded-3xl overflow-hidden"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </motion.div>

        {/* Right Text + Info + Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 w-full text-center sm:text-justify lg:text-left"
        >
          {/* About Paragraph */}
          <p className="mb-10 max-w-2xl mx-auto font-Ovo text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            I’m a passionate <strong>Digital Marketing Specialist</strong> and
            <strong> Full Stack Web Developer (MERN Stack)</strong> from
            Malappuram, India, with 1 year of hands-on experience creating
            responsive websites and implementing result-driven digital marketing
            strategies. I combine creative design, modern web development, and
            data-driven marketing to help businesses grow their online presence,
            increase engagement, and achieve measurable results.
          </p>

          {/* Info Grid */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border border-gray-300 rounded-xl p-5 sm:p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover/50 hover:-translate-y-1 duration-500 dark:border-gray-600"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-6 sm:w-7 mt-2 mx-auto lg:mx-0"
                />
                <h3 className="my-3 font-semibold text-gray-700 text-sm sm:text-base dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-8 text-gray-700 font-Ovo dark:text-white/80 text-lg text-center lg:text-left"
          >
            Tools I Use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-gray-600"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
