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
                        initial={{opacity: 0, scale: 0.9, y: 60, filter: "blur(8px)"}}
                        animate={{opacity: 1, scale: 1, y: 0, filter: "blur(0px)"}}
                        exit={{opacity: 0, scale: 0.9, y: 60, filter: "blur(8px)"}}
                        transition={{type: "spring", stiffness: 200, damping: 24}}
                        className={`
    fixed bottom-8 right-8 z-[9999] w-[420px] max-w-[90vw]
    px-8 py-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.25)]
    backdrop-blur-xl bg-white/10 border-[1.5px]
    ${toastType === "success"
                            ? "border-green-400/40 text-green-100"
                            : "border-red-400/40 text-red-100"
                        }
  `}
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-4xl mt-1">
                                {toastType === "success" ? "🎉" : "🚫"}
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-base font-medium leading-relaxed">
                                    {toastMessage}
                                </p>

                                {/* Progress Bar */}
                                <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                                    <motion.div
                                        initial={{width: "100%"}}
                                        animate={{width: 0}}
                                        transition={{duration: 4, ease: "linear"}}
                                        className={`h-full rounded-full ${
                                            toastType === "success" ? "bg-green-400" : "bg-red-400"
                                        }`}
                                    />
                                </div>
                            </div>
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
                        className='relative group overflow-hidden bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 py-3 px-8 rounded-full outline-none w-fit self-center text-white font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        <span className="absolute inset-0 rounded-full ring-1 ring-white/10" aria-hidden="true" />
                        <span className="absolute -inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.indigo.500),theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.indigo.500))] animate-[spin_2s_linear_infinite] blur-[0.5px]" aria-hidden="true" />
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_180deg,theme(colors.fuchsia.500),theme(colors.violet.500),theme(colors.indigo.500),theme(colors.fuchsia.500))] animate-[spin_3s_linear_infinite] [animation-direction:reverse] opacity-70 blur-[1px]" aria-hidden="true" />
            </span>
                        <span className="absolute inset-0 rounded-full [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] animate-[pulse_2.5s_ease-in-out_infinite]" aria-hidden="true" />
                        {loading ? (
                            <div className="relative z-10 flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                            </div>
                        ) : (
                            <span className="relative z-10">Send Message</span>
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
