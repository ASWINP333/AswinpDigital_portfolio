import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "@/assets/assets"; // optional: uses assets.right_arrow for icon
import Image from "next/image";
import { faqs } from "@/common";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faq" className="w-full px-6 sm:px-10 md:px-[12%] py-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-Ovo text-gray-900 dark:text-white mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Answers to common questions about hiring a <strong>Digital Marketing Expert in Malappuram</strong>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-8 max-w-4xl mx-auto"
      >
        <ul className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center">
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 p-4 text-left bg-white dark:bg-transparent"
                  >
                    <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-white">
                      {item.q}
                    </span>

                    <span className="flex items-center ml-4">
                      {/* rotate arrow */}
                      <motion.span
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="inline-block"
                      >
                        {/* optional icon from assets */}
                        <Image src={assets.right_arrow} alt="" className="w-4" />
                      </motion.span>
                    </span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-4 pb-4 bg-white dark:bg-transparent"
                    >
                      <div className="text-sm text-gray-600 dark:text-white/80 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default FAQ;
