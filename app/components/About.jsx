import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"; // keep your existing motion import

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-6 sm:px-10 md:px-12 py-12 scroll-mt-20"
    >
      {/* Section titles */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white"
        >
          About Me as a Digital Marketing Expert in Malappuram
        </h1>
        <h4 className="text-base sm:text-lg font-Ovo text-gray-600 dark:text-gray-300 mb-4">
          Introduction
        </h4>

        
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
      >
        {/* Left: avatar */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto lg:mx-0 w-44 sm:w-56 md:w-72 rounded-3xl overflow-hidden shadow-sm dark:shadow-none"
        >
          <Image
            src={assets.user_image}
            alt="Digital Marketing Expert in Malappuram | Web Developer-Aswin P"
            width={720}
            height={720}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.figure>

        {/* Right: text + info */}
        <div className="flex flex-col justify-start">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-6 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 text-justify"
          >
            I’m a passionate <strong>Digital Marketing Expert in Malappuram</strong> and
            <strong> Full Stack Web Developer (MERN)</strong> with 1 year of hands-on
            experience building responsive websites and implementing result-driven digital
            marketing strategies. I blend creative design, modern web technologies, and
            data-backed marketing to help businesses grow their online presence, attract the
            right audience, and achieve measurable results. My goal is to deliver digital
            solutions that are visually appealing, SEO-friendly, and aligned with real
            business goals.
          </motion.p>

          {/* Info grid */}
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, i) => (
              <motion.li
                key={i}
                whileHover={{ translateY: -4 }}
                className="flex flex-col items-center lg:items-start gap-3 p-4 border rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent transition-shadow duration-300"
                role="listitem"
                aria-label={title}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={`Digital Marketing Expert in Malappuram | Web Developer ${title} icon`}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white text-center lg:text-left">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-white/80 text-center lg:text-left">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h4 className="text-lg font-Ovo text-gray-800 dark:text-white/80 mb-4 text-center lg:text-left">
              Tools I Use
            </h4>

            <ul className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {toolsData.map((tool, idx) => (
                <li key={idx} className="w-12 sm:w-14 aspect-square">
                  <button
                    type="button"
                    className="w-full h-full flex items-center justify-center border rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent hover:shadow hover:-translate-y-1 transition-transform duration-200"
                    aria-label={`Tool ${idx + 1}`}
                  >
                    <Image src={tool} alt={`Digital Marketing Expert in Malappuram | Web Developer Tools ${idx + 1}`} width={36} height={36} className="object-contain" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
