import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[95px] max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4`}
            >
                {/* vertical line + dot */}
                <div className="flex flex-col justify-center items-center mt-4">
                    <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
                    <div className="w-[2px] sm:h-64 h-32 violet-gradient" />
                </div>

                {/* text */}
                <div>
                    <h1
                        className={`text-white font-extrabold tracking-tight leading-snug
              text-[2.65rem] sm:text-[3.3rem] md:text-[4rem]`}
                    >
                        Hi, I'm <span className="text-[#915EFF]">Sami Rhalim</span>
                    </h1>
                    <p
                        className={`mt-4 text-white-100 font-medium leading-relaxed
              text-[1.2rem] sm:text-[1.35rem] md:text-[1.5rem]`}
                    >
                        I'm a Full Stack Software Engineer <br className="sm:block hidden" />
                        Graduate from EMSI (École Marocaine des Sciences de l'Ingénieur){" "}
                        <br className="sm:block hidden" />
                        (Yes, I’ve had more NullPointerExceptions than cups of coffee ☕)
                    </p>
                </div>
            </div>

            <ComputersCanvas />

            {/* scroll indicator */}
            <div className="absolute xs:bottom-8 bottom-28 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[28px] h-[52px] rounded-2xl border-[3px] border-secondary flex justify-center items-start p-1.5">
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-2.5 h-2.5 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
