import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import FollowImage from "../hoc/follow.jsx";

// ✅ Ultra-modern ServiceCard (with icon zoom on card hover)
const ServiceCard = ({ index, title, icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.95 }}
        whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 120, damping: 20, delay: index * 0.07 },
        }}
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="w-full max-w-[300px] relative overflow-hidden isolate group"
    >
        <Tilt
            options={{ max: 15, perspective: 1100, scale: 1, speed: 500, glare: true, maxGlare: 0.25 }}
            className="relative h-full"
        >
            {/* Animated border gradient */}
            <div className="relative p-[2px] rounded-[24px] overflow-hidden h-full isolate">
                <div
                    className="
            absolute inset-0 rounded-[24px]
            before:content-[''] before:absolute before:inset-[-2px] before:rounded-[28px]
            before:[background:conic-gradient(from_var(--angle),#0ea5e9_0deg,#1e40af_120deg,#312e81_240deg,#0ea5e9_360deg)]
            before:animate-rotateBorder
            before:opacity-80 z-0
          "
                    style={{ "--angle": "0deg" }}
                />

                {/* Inner glass card */}
                <div
                    className="
            relative rounded-[22px] backdrop-blur-2xl
            bg-gradient-to-br from-[#0f172a]/70 via-[#1e293b]/50 to-[#0f172a]/70
            border border-white/10
            shadow-[0_15px_35px_rgba(0,0,0,0.5)]
            overflow-hidden h-[300px]
            transition-all duration-500 group-hover:border-cyan-400/40
          "
                >
                    {/* Shine sweep */}
                    <span
                        className="
              pointer-events-none absolute inset-0
              bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]
              translate-x-[-130%] group-hover:translate-x-[130%]
              transition-transform duration-[1200ms] ease-out rounded-[22px] z-0
            "
                    />

                    {/* Glow hover effect */}
                    <span
                        className="
              pointer-events-none absolute inset-0 rounded-[28px]
              bg-[radial-gradient(70%_70%_at_50%_-20%,rgba(56,189,248,0.3),transparent_70%)]
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[18px] z-0
            "
                    />

                    {/* Content */}
                    <div className="relative z-10 px-7 py-8 h-full flex flex-col items-center justify-center gap-6 pointer-events-auto">
                        {/* Icon with zoom + glow aura */}
                        <div className="relative">
                            <img
                                src={icon}
                                alt={title}
                                className="
                  w-16 h-16 object-contain
                  drop-shadow-[0_12px_28px_rgba(56,189,248,0.55)]
                  transform transition-transform duration-500 ease-out
                  group-hover:scale-[1.7]
                "
                            />
                            {/* Aura behind icon */}
                            <div className="
                absolute inset-0 rounded-full blur-2xl opacity-0
                group-hover:opacity-100 transition duration-500
                bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
              " />
                        </div>

                        {/* Title */}
                        <motion.h3
                            className="text-white text-[19px] font-semibold text-center leading-tight tracking-wide"
                            whileHover={{ color: "#38bdf8" }}
                            transition={{ duration: 0.25 }}
                        >
                            {title}
                        </motion.h3>

                        {/* Accent line */}
                        <div className="w-14 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-90" />
                    </div>
                </div>
            </div>
        </Tilt>
    </motion.div>
);

const About = () => {
    return (
        <div className="relative z-0 overflow-hidden isolate pb-24">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <div className="mt-8 flex flex-col lg:flex-row gap-12 items-start">
                <div className="text-secondary text-[17px] max-w-3xl leading-[30px] space-y-4 flex-1">
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-justify">
                        As a dedicated <b>Software Engineer</b> and graduate of <b>EMSI Casablanca</b>, I specialize in
                        designing and delivering <b>scalable, secure, and high-performance</b> software systems. My core
                        expertise is in the <b>Java/Spring ecosystem</b> — including <b>Spring Boot</b>, <b>MVC</b>,
                        <b> Security</b>, <b>Cloud</b>, <b>Spring Batch</b>, and <b>Spring AI</b> — to build
                        microservices
                        that are robust, maintainable, and cloud-ready. I design <b>REST</b> and <b>GraphQL</b> APIs
                        with
                        clear contracts using <b>Swagger/OpenAPI</b>, and validate integrations thoroughly with
                        <b> Postman</b> and <b>Insomnia</b>.
                    </motion.p>

                    <motion.p variants={fadeIn("", "", 0.15, 1)} className="text-justify">
                        I implement end-to-end <b>CI/CD pipelines</b> across <b>GitHub</b> and <b>Bitbucket</b> with
                        <b> Jenkins</b>, covering automated testing, containerized builds (<b>Docker</b>), and staged
                        deployments. I architect <b>event-driven</b> systems using <b>Kafka</b> and <b>RabbitMQ</b>, and
                        apply resilience patterns — <b>circuit breakers</b>, retries, timeouts, and bulkheads with
                        <b> Resilience4j</b>.
                    </motion.p>

                    <motion.p variants={fadeIn("", "", 0.2, 1)} className="text-justify">
                        On the front end, I’m flexible across <b>React</b>, <b>Angular</b>, <b>Vue.js</b>, and
                        <b> Flutter</b>. I collaborate in <b>Figma</b> and follow atomic design and accessibility
                        principles (WCAG) to transform concepts into <b>performant, responsive, and pixel-accurate
                        UIs</b>.
                        I value developer experience and clean architectures that scale with teams.
                    </motion.p>

                    <motion.p variants={fadeIn("", "", 0.25, 1)} className="text-justify">
                        Recently at <b>HPS</b>, I contributed to an intelligent, secure <b>e-banking platform</b> for
                        web
                        and mobile, deeply integrated with <b>IBM WebSphere</b> and <b>PowerCARD</b>. The solution
                        supports
                        advanced features such as <b>account and VISA card management</b> (limits, controls,
                        activation/deactivation),
                        <b> secure CVV retrieval via OTP</b>, <b>travel plan management</b>, <b>real-time
                        notifications</b>,
                        and end-to-end secure customer journeys. We worked in a microservices architecture using
                        <b> Spring Boot</b>, <b>Spring Batch</b>, <b>Kafka</b>, and <b>PostgreSQL</b>, with modern
                        security
                        based on <b>OAuth2/JWT</b>.
                    </motion.p>

                    <motion.p variants={fadeIn("", "", 0.27, 1)} className="text-justify">
                        In this project, I also implemented a <b>Spring Batch pipeline</b> integrated
                        with <b>Kafka</b> to
                        send <b>emails and notifications</b>, contributed to an <b>NLP model</b> for <b>transaction
                        classification</b>,
                        and integrated an <b>AI-powered chatbot</b> based on <b>GPT-4o</b>, combined with
                        <b> Retrieval-Augmented Generation (RAG)</b> and <b>PostgreSQL vector storage</b>, to deliver
                        contextual, accurate, and real-time support for cardholders.
                    </motion.p>

                    <motion.p variants={fadeIn("", "", 0.3, 1)} className="text-justify">
                        I combine strong engineering fundamentals with business awareness to deliver systems that are
                        <b> technically sound</b> and <b>aligned with strategic objectives</b> — prioritizing
                        <b> scalability</b>, <b>cost efficiency</b>, and <b>long-term maintainability</b>. I actively
                        explore advances in <b>cloud</b>, <b>AI-assisted development</b>, and <b>DevOps</b> to build
                        solutions that are <b>future-proof, resilient,</b> and impactful.
                    </motion.p>
                </div>

                {/* Profile image */}
                <motion.div variants={fadeIn("right", "spring", 0.4, 0.75)} className="relative z-0">
                    <FollowImage/>
                </motion.div>

            </div>

            {/* Services grid — replaces horizontal scroll row */}
            <div className="relative z-0 mt-20 px-4 isolate">
                <div
                    className="
            grid gap-6 place-items-center
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            max-w-7xl mx-auto pointer-events-none
          "
                >
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");
