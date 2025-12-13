"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="mylink"
        target="_blank"
         data-gtm="whatsapp-click"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-300"
      >
        <FaWhatsapp size={28} />
      </Link>
    </motion.div>
  );
};

export default WhatsAppButton;
