import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setLoading(true);

    try {
      const form = event.target;
      const formData = new FormData(form);

      // Ensure access_key present (from env)
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
      formData.set("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "✅ Thanks — your message has been sent. I’ll contact you soon."
        );
        form.reset();
        router.push("/thankyou");
      } else {
        console.error("Web3Forms error:", data);
        setResult(
          "⚠️ Something went wrong. Please try again or email aswinp910@gmail.com directly."
        );
      }
    } catch (err) {
      console.error(err);
      setResult(
        "⚠️ Network error. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
      // Optionally clear message after some time
      // setTimeout(() => setResult(""), 8000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-6 sm:px-10 md:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-5xl font-Ovo"
      >
        Get in Touch with a Digital Marketing Expert in Malappuram
      </motion.h1>

      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with Me
      </motion.h4>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo text-gray-700 dark:text-gray-300"
      >
        I’d love to hear from you! Whether you have a question, a project idea,
        or want to discuss your business goals, feel free to reach out anytime.
        Let’s work together to build your online presence and create meaningful
        results.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        aria-labelledby="contact-heading"
      >
        {/* Hidden fields for Web3Forms */}
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""}
        />
        <input
          type="hidden"
          name="subject"
          value="New Business Inquiry from TheAswinP.in"
        />
        <input type="hidden" name="email_template" value="table" />
        <input
          type="hidden"
          name="from_name"
          value="TheAswinP Portfolio Contact Form"
        />
        {/* Optional redirect after success */}
        {/* <input type="hidden" name="redirect" value="https://theaswinp.in/thank-you" /> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter your Name"
            required
            className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
            aria-label="Your name"
          />

          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your Email"
            required
            className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
            aria-label="Your email"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Enter Your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
          aria-label="Your message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: loading ? 1 : 1.05 }}
          transition={{ duration: 0.3 }}
          id="form_button"
          type="submit"
          id="contact-us-form"
          className={`py-3 px-8 w-max flex items-center gap-2 rounded-full mx-auto 
            ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-black/80 text-white hover:bg-black"
            } 
            duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover`}
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "Sending..." : "Submit Now"}
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>

        <p
          className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300"
          role="status"
          aria-live="polite"
        >
          {result}
        </p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
