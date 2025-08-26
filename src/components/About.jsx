import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ✅ Modern ServiceCard with WOW hover effect
const ServiceCard = ({ index, title, icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.9 }}
        whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 110,
                damping: 18,
                delay: index * 0.08,
                duration: 0.6,
            },
        }}
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -6, zIndex: 50 }} // lift above row
        className="w-[240px] flex-none relative overflow-visible group"
    >
        <Tilt
            options={{
                max: 12,
                perspective: 900,
                scale: 1, // no zoom
                speed: 400,
                glare: true,
                maxGlare: 0.25,
            }}
            className="relative w-full green-pink-gradient p-[1.2px] rounded-[20px] shadow-card"
        >
            <div
                className="
          relative bg-tertiary rounded-[20px] py-6 px-8 min-h-[260px]
          flex flex-col items-center justify-center gap-4
          overflow-hidden transition-all duration-300
          group-hover:shadow-[0_0_35px_rgba(145,94,255,0.35)]
        "
            >
                {/* Sheen sweep */}
                <span
                    className="
            pointer-events-none absolute -top-1/2 -left-1/2 h-[200%] w-[200%]
            rotate-[18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent
            opacity-0 group-hover:opacity-100
            translate-x-[-60%] group-hover:translate-x-[40%]
            transition-transform duration-1000 ease-out
          "
                />
                {/* Gradient pulse overlay */}
                <span
                    className="
            absolute inset-0 rounded-[20px]
            bg-gradient-to-r from-[#915EFF]/10 via-transparent to-[#915EFF]/10
            opacity-0 group-hover:opacity-100
            animate-pulse
          "
                />
                {/* Icon */}
                <motion.img
                    src={icon}
                    alt="service-icon"
                    className="w-14 h-14 object-contain relative z-10"
                    whileHover={{ rotate: 6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Title */}
                <motion.h3
                    className="text-white text-[17px] font-semibold text-center leading-tight relative z-10"
                    whileHover={{ color: "#A88DFF" }}
                    transition={{ duration: 0.3 }}
                >
                    {title}
                </motion.h3>
            </div>
        </Tilt>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <div className="mt-8 flex flex-col lg:flex-row gap-12 items-start">
                <div className="text-secondary text-[17px] max-w-3xl leading-[30px] space-y-4 flex-1">
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-justify">
                        As a dedicated <b>Software Engineer</b> and graduate of <b>EMSI Casablanca</b>,
                        I specialize in designing and delivering <b>scalable, secure, and high‑performance</b>
                        software systems. My core expertise is in the <b>Java/Spring ecosystem</b> — including
                        Spring Boot, MVC, Security, Cloud, and Spring AI — to build microservices that are
                        robust, maintainable, and cloud‑ready. I design <b>REST</b> and <b>GraphQL</b> APIs with
                        clear contracts using <b>Swagger/OpenAPI</b>, and validate integrations thoroughly with
                        <b> Postman</b> and <b>Insomnia</b>.
                    </motion.p>

                    <motion.p variants={fadeIn("", "", 0.15, 1)} className="text-justify">
                        I implement end‑to‑end <b>CI/CD pipelines</b> across <b>GitHub</b> and <b>Bitbucket</b>
                        with <b>Jenkins</b>, covering automated testing, containerized builds (<b>Docker</b>),
                        and staged deployments. I architect <b>event‑driven</b> systems using <b>Kafka</b> and
                        <b> RabbitMQ</b>, and apply resilience patterns — <b>circuit breakers</b>, retries,
                        timeouts, and bulkheads with <b>Resilience4j</b> — while maintaining centralized
                        observability via logs/metrics/traces (ELK / Prometheus‑Grafana).
                    </motion.p>

                    <motion.p variants={fadeIn("", "", 0.2, 1)} className="text-justify">
                        On the front end, I’m flexible across <b>React</b>, <b>Angular</b>, <b>Vue.js</b>, and
                        <b> Flutter</b>. I collaborate in <b>Figma</b> and follow atomic design and accessibility
                        principles (WCAG) to transform concepts into <b>performant, responsive, and
                        pixel‑accurate UIs</b>. I value developer experience and clean architectures that scale
                        with teams.
                    </motion.p>

                    <motion.p variants={fadeIn("", "", 0.25, 1)} className="text-justify">
                        Recently at <b>HPS</b>, I contributed to an intelligent, secure <b>e‑banking platform</b>
                        for web and mobile, deeply integrated with <b>IBM WebSphere</b> and <b>PowerCARD</b>.
                        The solution supports advanced features such as <b>account and VISA card management</b>
                        (limits, controls, activation/deactivation), <b>secure CVV retrieval via OTP</b>,
                        <b> travel plan management</b>, <b>real‑time notifications</b>, and end‑to‑end secure
                        customer journeys. We worked in a microservices architecture using <b>Spring Boot</b>,
                        <b> Kafka</b>, and <b>PostgreSQL</b>, with modern security (OAuth2/JWT) meeting
                        <b> PCI‑DSS</b> and <b>GDPR</b> expectations.
                    </motion.p>

                    <motion.p variants={fadeIn("", "", 0.3, 1)} className="text-justify">
                        I combine strong engineering fundamentals with business awareness to deliver systems
                        that are <b>technically sound</b> and <b>aligned with strategic objectives</b> —
                        prioritizing scalability, cost efficiency, and long‑term maintainability. I actively
                        explore advances in <b>cloud</b>, <b>AI‑assisted development</b>, and <b>DevOps</b> to
                        build solutions that are <b>future‑proof, resilient,</b> and impactful.
                    </motion.p>
                </div>

                {/* Profile image */}
                {/* Profile image */}
                <motion.div
                    variants={fadeIn("right", "spring", 0.4, 0.75)}
                    className="flex-shrink-0"
                >
                    <div className="relative group">
                        <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#3730A3] p-2">
                            <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0F0F23] to-[#1A1A2E] relative">
                                <img
                                    src="/sami.jpg"                // ✅ file lives in public/sami.jpg
                                    alt="Sami Rhalim"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/20 via-transparent to-transparent rounded-xl" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Services row — scrollbar hidden */}
            <div
                className="
          relative z-20 mt-20 px-4 pt-4
          flex flex-nowrap gap-6
          overflow-x-auto overflow-y-visible
          snap-x snap-mandatory
          will-change-transform transform-gpu isolate
          scrollbar-hide
        "
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
