import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "@/assets/assets"; // optional: uses assets.right_arrow for icon
import Image from "next/image";

const faqs = [
  {
    q: "Why should I hire a Digital Marketing Expert in Malappuram for my small business?",
    a: `A local Digital Marketing Expert in Malappuram understands the local audience, festivals, language preferences and buying behaviour. That local insight helps craft campaigns (SEO, Meta Ads, Google Ads, social media) that reach real customers in Malappuram and convert them — faster and more cost-effectively than a generic national agency.`,
  },
  {
    q: "How does a Digital Marketing Expert in Malappuram improve my Google Maps and local search visibility?",
    a: `A focused local strategy includes Google Business Profile optimization, local keyword research (e.g., "best shop in Malappuram"), citation building and review management. These actions help your business appear in the local pack and on Google Maps, driving high-intent, nearby customers.`,
  },
  {
    q: "Can a Digital Marketing Expert in Malappuram help with website conversions and lead generation?",
    a: `Yes — by building SEO-friendly landing pages, optimizing calls-to-action, improving page speed and running conversion-focused ad campaigns, a Digital Marketing Expert in Malappuram turns website visitors into real leads and customers.`,
  },
  {
    q: "What digital marketing channels should a Digital Marketing Expert in Malappuram focus on first?",
    a: `For most Malappuram businesses the priority order is: 1) Local SEO & Google Business Profile, 2) Social Media (Instagram & WhatsApp visibility), 3) Performance Ads (Meta & Google) and 4) A conversion-optimized website. This order maximizes local discovery and ROI.`,
  },
  {
    q: "How long does it take for a Digital Marketing Expert in Malappuram to show results?",
    a: `Some tactics (like Meta Ads) produce immediate traffic and leads, while SEO and organic growth typically show consistent improvements in 2–4 months. A Digital Marketing Expert in Malappuram will combine short-term ads with long-term SEO for balanced growth.`,
  },
  {
    q: "Do you provide reporting and analytics when hiring a Digital Marketing Expert in Malappuram?",
    a: `Yes. Regular performance reports (Google Analytics / Search Console / Ads) show traffic, leads, conversions and ROI. As a Digital Marketing Expert in Malappuram I focus on measurable KPIs and transparent reporting so you always know how your campaigns perform.`,
  },
  {
    q: "Will a Digital Marketing Expert in Malappuram help with content and social media creation?",
    a: `Absolutely. Localised content (Malayalam + English), short-form videos, reels and customer testimonials are part of the strategy. Content tailored to Malappuram audiences drives trust and higher engagement.`,
  },
  {
    q: "How do I get started with a Digital Marketing Expert in Malappuram?",
    a: `Start with a free consultation — we’ll audit your website, Google Business Profile and social presence, then propose a simple 90-day plan focused on quick wins (local SEO, one high-converting landing page, and a small ad test). Contact me via the contact form or email to begin.`,
  },
];

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
