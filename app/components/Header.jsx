import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:py-2 text-center w-full"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="flex justify-center"
      >
        <Image
          src={assets.profile_img}
          alt="Aswin P"
          className="rounded-full w-28 sm:w-32 md:w-40 object-cover"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-2 text-lg sm:text-2xl font-Ovo mt-3"
      >
        Hi! I'm <span className="font-semibold">Aswin P</span>
        <Image src={assets.hand_icon} alt="wave" className="w-5 sm:w-6" />
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight font-Ovo mt-2 mx-auto"
      >
        Digital Marketer & Web Developer <br className="hidden sm:block" /> (MERN Stack)
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto mt-4 text-sm sm:text-base font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed text-justify sm:text-center"
      >
        I’m a Digital Marketer and Full Stack Web Developer (MERN Stack) from Malappuram, India,
        with 1 year of experience in website design, digital marketing, and web application
        development. I help businesses grow online by combining creative design, strategic
        marketing, and modern web technologies to deliver impactful digital solutions.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-8 py-3 border border-white rounded-full bg-black text-white flex
          items-center gap-2 text-sm sm:text-base dark:bg-transparent hover:scale-105 transition-transform"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          href="/Resume_Aswin_P.pdf"
          download
          className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 
          bg-white text-black dark:text-black hover:scale-105 transition-transform text-sm sm:text-base"
        >
          My Resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
