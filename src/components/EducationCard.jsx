import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educations } from "../constants"; // <- we'll add this below
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ edu }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={edu.date}
            iconStyle={{ background: edu.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={edu.icon}
                        alt={edu.school}
                        className={`object-contain ${
                            edu.school?.includes("EMSI")
                                ? "w-[85%] h-[85%]"
                                : edu.school?.includes("EST")
                                    ? "w-[85%] h-[85%]"
                                    : "w-[85%] h-[85%]"
                        }`}
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[22px] font-bold">{edu.degree}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {edu.school} — {edu.city}
                </p>
            </div>

            {edu.points?.length > 0 && (
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {edu.points.map((p, i) => (
                        <li
                            key={`edu-point-${i}`}
                            className="text-white-100 text-[14px] pl-1 tracking-wider text-justify"
                        >
                            {p}
                        </li>
                    ))}
                </ul>
            )}
        </VerticalTimelineElement>
    );
};

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>Where I studied</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {educations.map((edu, idx) => (
                        <EducationCard key={`education-${idx}`} edu={edu} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
