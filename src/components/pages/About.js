import React from 'react'
import { motion } from "framer-motion";
import { useEffect } from 'react';
import team from './images/team.jpg';
import { Link } from 'react-router-dom';

export const About = () => {
  useEffect(() => {
      window.scroll(0, 0)
    }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Fade-in + Slide-in from below
      animate={{ opacity: 1, y: 0 }} // Fully visible
      exit={{ opacity: 0, y: -50 }} // Fade-out + Slide-up when leaving
      transition={{ duration: 0.3 }} // Smooth transition effect
    >
    <div>
      {/* Top Section */}
      <div className="flex justify-between items-center h-screen pl-40">
        {/* About Us */}
        <div>
          <h1 className="text-7xl font-bold">About Us</h1>
        </div>
      </div>
      <hr className="w-5/6 mx-auto border-t-2 border-[#333333] mb-5" />
      <div className='flex justify-center'>
      <img src={team}
            alt="Logo"
            className="size-6/12"
            />
      </div>
      <br/>
      <div className='flex justify-center mx-72 text-lg'>
        <p>We are <b>Hacktivate</b>, a passionate group of Information Technology students from <b>Cavite State University - Imus Campus</b>. United by our love for technology and innovation, we collaborate to build impactful digital solutions that solve real-world problems.
        <br/><br/>
          Driven by curiosity and creativity, we continuously explore new technologies, refine our skills, and embrace challenges that push us beyond our limits. Our mission is to transform ideas into reality through well-crafted software, intuitive designs, and efficient solutions.
          <br/><br/>
          Our expertise lies in <b>PHP, HTML, CSS, Java, and Python</b>, allowing us to develop dynamic websites, robust applications, and efficient software systems. Whether it’s front-end design, back-end development, or full-stack solutions, we leverage these technologies to create seamless and effective digital experiences.
          <br/><br/>
          With a shared vision of growth and excellence, we work together to foster innovation, enhance our technical expertise, and prepare ourselves for the ever-evolving tech industry. Through dedication and teamwork, we strive to deliver quality projects, embrace lifelong learning, and make a meaningful impact in the world of technology.</p>
      </div>
      <div className="mt-6 text-center">
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
