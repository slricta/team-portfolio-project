import React from 'react'
import { motion } from "framer-motion";
import { useEffect } from 'react';
import player456 from './images/player456.jpg';
import github from './images/github.png';
import { Link } from 'react-router-dom';

export const Team = () => {
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
        {/* Team members */}
        <div>
          <h1 className="text-7xl font-bold">Team Members</h1>
        </div>
      </div>
      <hr className="w-5/6 mx-auto border-t-2 border-[#333333] mb-20" />
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16">
          {[
            {
              name: "Gerwin Dean Alcober",
              role: "Back end Developer",
              expertise: "HTML, CSS, Python, PHP",
              github: "https://github.com/docurev111",
              img: player456,
            },
            {
              name: "Rhodel Andaya",
              role: "Frontend Developer",
              expertise: "HTML, CSS, Python",
              github: "https://github.com/rhodelandaya",
              img: player456,
            },
            {
              name: "Matthew Meinrad Quiling",
              role: "Frontend Developer",
              expertise: "HTML, CSS, JavaScript",
              github: "https://github.com/mattquiling",
              img: player456,
            },
            {
              name: "Stephen Rodriguez",
              role: "Full Stack Developer",
              expertise: "Java, HTML, CSS, PHP, MySql",
              github: "https://github.com/slricta",
              img: player456,
            },
            {
              name: "Daven Waay",
              role: "Full Stack Developer",
              expertise: "Java, HTML, CSS, MySql",
              github: "https://github.com/davenwaay",
              img: player456,
            }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <img src={member.img} alt={member.name} className="w-full h-64 object-cover rounded-md shadow-md" />
              <p className="mt-4 text-center text-white text-xl font-semibold">{member.name}</p>
              <p className="text-gray-300 text-lg">{member.role}</p>
              <p className="text-white text-md italic">{member.expertise}</p>

              <div class="flex items-center justify-center">
                <img src={github} alt="IG Logo" className="size-7" />
                <a href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" className="github text-lg">Github</a>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center p-6 text-2xl">
          <Link to="/Projects" className="btnLearnMore">
            Learn about our projects!
          </Link>
        </div>
        </div>

    </div>
    </motion.div>
  )
}
