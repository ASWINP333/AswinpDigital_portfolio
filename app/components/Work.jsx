import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      id="work"
      className="w-full px-6 sm:px-10 md:px-12 lg:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-base sm:text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
      >
        My Latest Works
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80"
      >
        Welcome to my web development portfolio! Explore projects showcasing my expertise in modern front-end
        and back-end development, UI/UX, and performance-optimized websites.
      </motion.p>

      {/* Responsive cards using flex-wrap so remaining items center on the next row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-wrap justify-center gap-10 my-10"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[22%] aspect-square bg-no-repeat bg-cover bg-center rounded-lg
              relative cursor-pointer group border-[0.5px] border-gray-400 overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* overlay */}
            <div
              className="bg-blue-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                py-2 px-3 opacity-95 flex items-center justify-between gap-4
                duration-500 group-hover:bottom-7 group-hover:opacity-100 dark:text-darkTheme dark:border-white dark:hover:bg-blue-200"
            >
              <div>
                <h2 className="font-semibold text-black dark:text-darkTheme">{project.title}</h2>
                <button className="mt-2 bg-darkHover text-cyan-50 px-4 py-1 rounded-full hover:bg-slate-900 transition">
                  <a href={project.description} target="_blank" rel="noreferrer">git</a>
                </button>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-white transition">
                <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live link`}>
                  <Image src={assets.send_icon} alt="send icon" className="w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show More
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.section>
  );
};

export default Work;
