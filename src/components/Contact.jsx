import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const showToastNotification = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sami Rhalim",
          from_email: form.email,
          to_email: "rhalimsami8@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showToastNotification("Message sent successfully! I'll get back to you soon.", "success");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showToastNotification("Something went wrong. Please try again.", "error");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Professional Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 300, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 300, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed bottom-6 right-6 z-[9999] px-6 py-4 rounded-xl shadow-2xl backdrop-blur-xl border ${
              toastType === "success" 
                ? "bg-green-500/90 border-green-400/50 text-white" 
                : "bg-red-500/90 border-red-400/50 text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                toastType === "success" ? "bg-green-300" : "bg-red-300"
              }`} />
              <span className="font-medium">{toastMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-6 rounded-2xl max-w-md mx-auto xl:mx-0'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-sm'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent focus:border-blue-400/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-sm'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent focus:border-blue-400/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 text-sm'>Your Message</span>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to discuss?'
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent focus:border-blue-400/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm resize-none'
            />
          </label>

          <motion.button
            type='submit'
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-6 rounded-lg outline-none w-fit text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] h-[300px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
