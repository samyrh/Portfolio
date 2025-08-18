import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {Tilt} from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  images,
  source_code_link,
}) => {
  const [current, setCurrent] = useState(0);
  const hasCarousel = Array.isArray(images) && images.length > 0;
  const intervalRef = useRef();

  useEffect(() => {
    if (!hasCarousel) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [hasCarousel, images]);

  // Pause autoplay on manual navigation
  const handleManualNav = (nextIdx) => {
    clearInterval(intervalRef.current);
    setCurrent(nextIdx);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ type: "spring", duration: 0.7, delay: index * 0.15, bounce: 0.25 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-2 rounded-lg w-full shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out min-h-[420px]'
      >
        <div className='relative w-full h-[180px] rounded-md overflow-hidden'>
          {hasCarousel ? (
            <>
              <AnimatePresence initial={false}>
                <motion.img
                  key={images[current]}
                  src={images[current]}
                  alt='project_image'
                  className='w-full h-full object-cover rounded-md absolute select-none'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  draggable={false}
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)', willChange: 'opacity' }}
                />
              </AnimatePresence>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-1 text-white z-10"
                onClick={e => { e.stopPropagation(); handleManualNav((current - 1 + images.length) % images.length); }}
                aria-label="Previous image"
              >‹</button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-1 text-white z-10"
                onClick={e => { e.stopPropagation(); handleManualNav((current + 1) % images.length); }}
                aria-label="Next image"
              >›</button>
              {/* Dots indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {images.map((_, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-gray-400'} opacity-80`} />
                ))}
              </div>
            </>
          ) : (
            image && (
              <img
                src={image}
                alt='project_image'
                className='w-full h-full object-cover rounded-md'
              />
            )
          )}
          {source_code_link ? (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:scale-110 transition-transform duration-300'
                style={{ position: 'absolute', top: 16, right: 16 }}
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ) : (
            <div
              className='absolute inset-0 flex items-center justify-center pointer-events-none'
              style={{
                background: 'linear-gradient(135deg, #181824 0%, #23243a 60%, #283655 100%)',
                width: '100%',
                height: '100%',
              }}
            >
              <span className='text-white text-base sm:text-lg font-semibold text-center px-4 drop-shadow-lg tracking-wide' style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>Repo is private due to HPS policy, can&apos;t share it with you.</span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between min-h-[140px] mt-3">
          <h3 className='text-white font-bold text-[16px]'>{name}</h3>
          <p className='mt-1 text-secondary text-[11px] line-clamp-3 text-justify'>{description}</p>
        </div>

        <div className='mt-2 flex flex-wrap gap-0.5'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[10px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-10'>
        {projects.map((project, index) => {
          const isStartOfLastPair = index === projects.length - 2;
          const isLast = index === projects.length - 1;
          if (isStartOfLastPair) {
            const nextProject = projects[index + 1];
            return (
              <div key={`project-group-${index}`} className='lg:col-span-3'>
                <div className='lg:flex lg:justify-center lg:gap-10'>
                  <div className='lg:max-w-md w-full'>
                    <ProjectCard index={index} {...project} />
                  </div>
                  <div className='lg:max-w-md w-full'>
                    <ProjectCard index={index + 1} {...nextProject} />
                  </div>
                </div>
              </div>
            );
          }
          if (isLast) {
            return null;
          }
          return (
            <div key={`project-${index}`}>
              <ProjectCard index={index} {...project} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
