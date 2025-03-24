import React from 'react'
import { motion } from "framer-motion";
import { useEffect } from 'react';
import inayawan from './images/inayawan.PNG';
import juan from './images/juan.PNG';

export const Projects = () => {
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
        {/* Projects */}
        <div>
          <h1 className="text-7xl font-bold">Projects</h1>
        </div>
      </div>
      <hr className="w-5/6 mx-auto border-t-2 border-[#333333] mb-20" />

      <div className="flex items-center gap-8 mx-auto">
      {/* Image with Border */}
          <div>
            <img
              src={inayawan}
              alt="inayawan"
              className="w-full border-[40px] border-l-0 border-gray-400 transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* Text Content */}
          <div className="w-full space-y-1">
            <h2 className="text-2xl font-bold text-white">
              Inayawan University
            </h2>
            <p className="text-white">Stephen Rodriguez, Rhodel Andaya</p>
            <p className="text-gray-300">
              A static website for a made-up school that shows the info about the school, admission, etc. Created during first year of college (2023).
            </p>
            <p className="text-white italic">HTML, CSS</p>
            <br/>
            <a href="https://slricta.github.io/inayawan-university/login.html" target="_blank" rel="noreferrer" className='btnLearnMore'>Live Demo</a>
          </div>
        </div>
        <br/><br/><br/>

        {/* Juan Luna */}
        <div className="flex items-center gap-8 mx-auto">
          {/* Text Content */}
          <div className="w-full space-y-1 px-10">
            <h2 className="text-2xl font-bold text-white">
              Juan Luna
            </h2>
            <p className="text-white">Hacktivate</p>
            <p className="text-gray-300">
            A static website showcasing the history, life, and works of Juan Luna. Created first year of college (2023).
            </p>
            <p className="text-white italic">HTML, CSS</p>
            <br/>
            <a href="https://slricta.github.io/juan-luna-website/home.html" target="_blank" rel="noreferrer" className='btnLearnMore'>Live Demo</a>
          </div>
          {/* Image with Border */}
          <div>
            <img
              src={juan}
              alt="juan"
              className="w-full border-[40px] border-r-0 border-gray-400 transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>
        </div>

    </div>
    </motion.div>
  )
}

