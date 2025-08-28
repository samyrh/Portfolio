import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className={`object-contain ${
                            experience.company_name.includes("HPS")
                                ? "w-[80%] h-[80%]"
                                : experience.company_name.includes("Vinci")
                                    ? "w-[75%] h-[75%]"
                                    : "w-[60%] h-[60%]"
                        }`}
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider text-justify"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <div className="relative pt-2"> {/* was pt-6 */}
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                className="mt-6 text-center relative z-10" // was mt-10
            >
                <p className={`${styles.sectionSubText}`}>What I have done so far</p>
                <h2 className={`${styles.sectionHeadText} text-white mt-1 inline-block px-3 py-1 rounded`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className="mt-12 flex flex-col"> {/* was mt-20 */}
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, "experience");
