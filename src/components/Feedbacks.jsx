import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
                        index,
                        testimonial,
                        name,
                        designation,
                        company,
                        image,
                      }) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="group relative xs:w-[320px] w-full"
    >
      {/* Gradient border wrapper */}
      <div className="relative p-[2px] rounded-3xl overflow-hidden">
        <div
            className="
          absolute inset-0 rounded-3xl opacity-80
          before:content-[''] before:absolute before:inset-[-2px] before:rounded-[30px]
          before:[background:conic-gradient(from_var(--angle),#60a5fa_0deg,#8b5cf6_120deg,#0b1020_240deg,#60a5fa_360deg)]
          before:opacity-40 group-hover:before:opacity-80
          before:animate-rotateBorder
          pointer-events-none
        "
            style={{ "--angle": "0deg" }}
        />

        {/* Glass card */}
        <div
            className="
          relative rounded-3xl backdrop-blur-2xl
          bg-white/5 border border-white/10
          shadow-[0_12px_30px_rgba(0,0,0,0.45)]
          transition-all duration-500
          group-hover:border-cyan-400/40
        "
        >
          {/* Glow aura */}
          <span
              className="
            pointer-events-none absolute -inset-12 rounded-[40px]
            bg-[radial-gradient(70%_70%_at_50%_-20%,rgba(96,165,250,0.3),transparent_70%)]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500 blur-[22px]
          "
          />

          {/* Shine sweep */}
          <span
              className="
            pointer-events-none absolute inset-0 rounded-3xl
            bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
            translate-x-[-150%] group-hover:translate-x-[150%]
            transition-transform duration-[1200ms] ease-out
          "
          />

          {/* Card content */}
          <div className="relative z-10 p-10">
            <p className="text-white font-black text-[48px] leading-none select-none">“</p>

            <div className="mt-2">
              <p className="text-white tracking-wider text-[18px]">
                {testimonial}
              </p>

              <div className="mt-7 flex justify-between items-center gap-2">
                <div className="flex-1 flex flex-col min-w-0">
                  <p className="text-white font-medium text-[16px] truncate">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">@</span>{" "}
                    {name}
                  </p>
                  <p className="mt-1 text-secondary text-[12px] truncate">
                    {designation} {company}
                  </p>
                </div>

                {typeof image === "string" && image.length === 1 ? (
                    <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_8px_24px_rgba(99,102,241,0.35)]">
                      <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white font-bold text-lg">
                        {image}
                      </div>
                    </div>
                ) : (
                    <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_8px_24px_rgba(99,102,241,0.35)]">
                      <img
                          src={image}
                          alt={`feedback_by-${name}`}
                          className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
);

const Feedbacks = () => {
  return (
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>

        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((t, index) => (
              <FeedbackCard key={t.name} index={index} {...t} />
          ))}
        </div>
      </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
