import { assets } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "suhail k m",
      feedback:
        '“Aswin truly lives up to the title of the best digital marketing expert in Malappuram. He handled our social media ads and redesigned our website. Within a month, we saw a clear increase in leads and customer engagement. Highly professional and easy to work with.”',
      image: assets.suhail,
    },
    {
      name: "aslam",
      feedback:
        '“We hired Aswin for local SEO and Instagram promotions. In just a few weeks, our visibility improved and more customers started discovering us online. He is one of the best digital marketing expert in Malappuram for small businesses.',
      image: assets.aslam,
    },
    {
      name: "Rajitha",
      feedback:
        '“As a fellow designer, I’ve collaborated with Aswin on multiple projects. His combination of design, development, and marketing skills is rare. Clients are always happy with his work. If you’re searching for the best web developer and digital marketer in Malappuram, he won’t disappoint.”',
      image: assets.rajitha,
    },
  ];
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:py-2 text-center w-full"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-Ovo"
      >
        Testimonials — Digital Marketing Expert in Malappuram
      </motion.h1>
   
      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10"
      >
        {testimonialData.map(({ name, feedback, image }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12
              hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
              duration-500 dark:hover:bg-darkHover dark:hover:shadow-white flex flex-col items-center"
          >
            <Image 
  src={image} 
  alt={name} 
  className="w-16 h-16 rounded-full object-cover" 
/>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {feedback}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
