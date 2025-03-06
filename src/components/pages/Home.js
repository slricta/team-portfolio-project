import React from 'react';
import { Link } from 'react-router-dom';
import player456 from './images/player456.jpg';
import "./Pages.css"
import samplelogo from './images/samplelogo.png';
import { motion } from "framer-motion";
import { useEffect } from 'react';

export const Home = () => {
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
        {/* Team Name on the Left */}
        <div>
          <h1 className="text-7xl font-bold">Team Name</h1>
        </div>

        {/* Logo on the Right */}
        <div>
          <img
            src={samplelogo}
            alt="Logo"
            className="size-11/12 animate-pulse pr-40"
          />
        </div>
      </div>
      <hr className="w-5/6 mx-auto border-t-2 border-[#333333]" />
      {/* Team Members Section */}
      <div className="text-center mx-10">
        <h2 className="text-3xl font-bold mb-4 mt-20">Meet Team Name</h2>
        <p className="text-xl mb-4 mx-40">
          We are <b>Team Name</b>, a passionate group of Information Technology students from Cavite State University - Imus Campus. 
          Driven by curiosity and creativity, we strive to push boundaries, learn continuously, and turn ideas into reality.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-3 gap-4 place-items-center mx-56">
          <div>
            <img src={player456} alt="Team Member 1" className="w-56 h-full object-cover mx-auto" />
            <p className="mt-2 text-center">Gerwin Dean Alcober</p>
          </div>
          <div>
            <img src={player456} alt="Team Member 2" className="w-56 h-full object-cover mx-auto" />
            <p className="mt-2 text-center">Rhodel Andaya</p>
          </div>
          <div>
            <img src={player456} alt="Team Member 3" className="w-56 h-full object-cover mx-auto" />
            <p className="mt-2 text-center">Matthew Meinrad Quiling</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 place-items-center mx-96 mt-4">
          <div>
            <img src={player456} alt="Team Member 4" className="w-56 h-full object-cover mx-auto" />
            <p className="mt-2 text-center">Stephen Rodriguez</p>
          </div>
          <div>
            <img src={player456} alt="Team Member 5" className="w-56 h-full object-cover mx-auto" />
            <p className="mt-2 text-center">Daven Waay</p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-6">
          <Link 
            to="/Team" 
            className="btnLearnMore text-xl"
          >
            Learn more about the Team
          </Link>
        </div>
        <hr className="w-5/6 mx-auto border-t-2 border-[#333333] mt-20" />
        <div className="grid grid-cols-2 gap-10 px-20 mt-20">
          {/* Mission*/}
          <div className="mt-10">
            <h1 className="text-6xl font-bold text-left">Mission</h1>
          </div>

          {/* Mission Text */}
          <div>
            <p className="text-xl font-medium text-left text-white leading-relaxed">
              Our mission is to showcase our team’s skills, projects, and collaborative efforts through an engaging and professional portfolio. We aim to highlight our expertise in web development, software engineering, and innovative problem-solving, demonstrating our readiness to take on real-world challenges.
            </p>
          </div>
        </div>
        <hr className="w-5/6 mx-auto border-t-2 border-[#333333] mt-20" />
        <div className="grid grid-cols-2 gap-10 px-20 mt-20">
          {/* Vision*/}
          <div className="mt-10">
            <h1 className="text-6xl font-bold text-left">Vision</h1>
          </div>

          {/* Vision Text */}
          <div>
            <p className="text-xl font-medium text-left text-white leading-relaxed">
            We envision our portfolio as a dynamic platform that not only represents our achievements but also inspires growth, learning, and future opportunities. By continuously improving our skills and expanding our project experience, we strive to make a lasting impact in the tech industry.
            </p>
          </div>
        </div>

      </div>
    </div>
    </motion.div>
  );
};
