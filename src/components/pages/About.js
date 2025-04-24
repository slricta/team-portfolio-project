import React from 'react'
import { motion } from "framer-motion";
import { useEffect } from 'react';
import team from './images/team.JPG';
import { Link } from 'react-router-dom';

export const About = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col justify-center items-start h-[50vh] md:h-screen pt-10 md:pl-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">About Us</h1>
        </div>

        <hr className="w-full md:w-5/6 mx-auto border-t-2 border-[#333333] mb-5" />

        {/* Team Image */}
        <div className='flex justify-center'>
          <img 
            src={team}
            alt="Team"
            className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 h-auto rounded-lg shadow-md"
          />
        </div>

        <br />

        {/* Paragraph Section */}
        <div className='text-justify text-base sm:text-lg md:text-lg lg:text-xl px-2 sm:px-4 md:px-16 lg:px-36'>
          <p>
            We are <b>Hacktivate</b>, a passionate group of Information Technology students from <b>Cavite State University - Imus Campus</b>. United by our love for technology and innovation, we collaborate to build impactful digital solutions that solve real-world problems.
            <br /><br />
            Driven by curiosity and creativity, we continuously explore new technologies, refine our skills, and embrace challenges that push us beyond our limits. Our mission is to transform ideas into reality through well-crafted software, intuitive designs, and efficient solutions.
            <br /><br />
            Our expertise lies in <b>PHP, HTML, CSS, Java, and Python</b>, allowing us to develop dynamic websites, robust applications, and efficient software systems. Whether it’s front-end design, back-end development, or full-stack solutions, we leverage these technologies to create seamless and effective digital experiences.
            <br /><br />
            With a shared vision of growth and excellence, we work together to foster innovation, enhance our technical expertise, and prepare ourselves for the ever-evolving tech industry. Through dedication and teamwork, we strive to deliver quality projects, embrace lifelong learning, and make a meaningful impact in the world of technology.
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-8 mb-12 text-center">
          <Link 
            to="/Projects" 
            className="btnLearnMore text-xl"
          >
            Learn about our projects!
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
