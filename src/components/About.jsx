import React from "react";
import Tilty from "react-tilty";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {Tilt} from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    whileInView={{ 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.2,
        duration: 0.8
      }
    }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className='xs:w-[250px] w-full'
  >
    <Tilt
      options={{
        max: 25,
        scale: 1,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      }}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <motion.div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        whileHover={{ 
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        />

        <motion.h3 
          className='text-white text-[20px] font-bold text-center'
          whileHover={{ 
            color: "#915EFF",
            transition: { duration: 0.3 }
          }}
        >
          {title}
        </motion.h3>
      </motion.div>
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

      <div className='mt-8 flex flex-col lg:flex-row gap-12 items-start'>
        <div className='text-secondary text-[17px] max-w-3xl leading-[30px] space-y-4 flex-1'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-justify'
          >
            As a dedicated Software Engineer and EMSI Casablanca graduate, I design and deliver scalable, secure microservices using Java and the Spring ecosystem (Spring Boot, MVC, Security, Cloud, AI). I build REST and GraphQL APIs, document contracts with Swagger/OpenAPI, and validate endpoints via Postman and Insomnia.
          </motion.p>
          
          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className='text-justify'
          >
            My delivery pipelines use CI/CD on GitHub and Bitbucket with Jenkins (containerized builds and staged deployments). I architect event-driven systems with Kafka and RabbitMQ, and apply resilience patterns—circuit breakers, retries, timeouts, and bulkheads (Resilience4j)—with centralized logging and monitoring.
          </motion.p>
          
          <motion.p
            variants={fadeIn("", "", 0.3, 1)}
            className='text-justify'
          >
            On the front end, I'm flexible across React, Angular, Vue.js, and Flutter, collaborating in Figma to turn designs into accessible, performant UIs. Most recently at HPS, I worked on an intelligent e-banking platform (web & mobile) integrated with IBM WebSphere—enabling account and Visa card management (controls, limits, secure CVV via OTP), travel plans, notifications, and end-to-end secure user journeys.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("right", "spring", 0.4, 0.75)}
          className='flex-shrink-0'
        >
          <div className='relative group'>
            {/* Simple professional frame */}
            <div className='w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#3730A3] p-2'>
              <div className='w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0F0F23] to-[#1A1A2E] relative'>
                <img
                  src='/src/assets/sami.jpg'
                  alt='Sami Rhalim'
                  className='w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/20 via-transparent to-transparent rounded-xl'></div>
              </div>
            </div>
            

          </div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
