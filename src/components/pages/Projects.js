import React from 'react'
import { motion } from "framer-motion";
import { useEffect } from 'react';
import inayawan from './images/inayawan.PNG';
import lazhopee from './images/lazhoppee.jfif';
import login from './images/login.png';
import db from './images/db.jfif';
import juan from './images/juan.PNG';
import rh from './images/reviewhero.png';

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
        <div className="flex flex-col justify-center items-start h-[50vh] md:h-screen pt-10 md:pl-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Projects</h1>
        </div>
      <hr className="w-5/6 mx-auto border-t-2 border-[#333333] mb-20" />

      {/* ReviewHero */}
      <div className="flex items-center gap-8 mx-auto">
          {/* Text Content */}
          <div className="w-full space-y-1 px-10">
            <h2 className="text-2xl font-bold text-white">
              ReviewHero
            </h2>
            <p className="text-white">Hacktivate</p>
            <p className="text-gray-300">
            ReviewHero is an <b>ongoing project</b>. It is a studying platform that uses spaced repetition to create structured sessions, reduce distractions, and make exam prep fun through interactive challenges and quizzes.
            </p>
            <p className="text-white italic">React JS, CSS</p>
            <br/>
            <a href="https://davenwaay.github.io/ReviewHero/" target="_blank" rel="noreferrer" className='btnLearnMore'>Live Demo</a>
          </div>
          {/* Image with Border */}
          <div>
            <img
              src={rh}
              alt="review"
              className="w-full border-[40px] border-r-0 border-gray-400 transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>
        </div>
        <br/><br/><br/>

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
              Juan Luna Gallery
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
        <br/><br/><br/>
        {/* Dave projects */}

        <div className="flex items-center gap-8 mx-auto">
      {/* Image with Border */}
          <div>
            <img
              src={lazhopee}
              alt="lazhopee"
              className="w-full border-[40px] border-l-0 border-gray-400 transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* Text Content */}
          <div className="w-full space-y-1">
            <h2 className="text-2xl font-bold text-white">
              Lazhoppe
            </h2>
            <p className="text-white">Daven H. Waay</p>
            <p className="text-gray-300">
            This is a static, responsive e-commerce website built during my first year of college (2023). It features a homepage with promotions, category pages, product details, a shopping cart interface, and sale highlights. Though it lacks backend functionality, it effectively simulates a real e-commerce flow for front-end practice.
            </p>
            <p className="text-white italic">HTML, CSS, Javascript</p>
            <br/>
            <a href="https://davenwaay.github.io/Lazhoppe/index.html" target="_blank" rel="noreferrer" className='btnLearnMore'>Live Demo</a>
          </div>
        </div>
        <br/><br/><br/>


        <div className="flex items-center gap-8 mx-auto">
          {/* Text Content */}
          <div className="w-full space-y-1 px-10">
            <h2 className="text-2xl font-bold text-white">
              DB Glass & Aluminum
            </h2>
            <p className="text-white">Daven H. Waay</p>
            <p className="text-gray-300">
            A static e-commerce website created for a glass and aluminum business. It features product listings, categories, and a contact section. The site focuses on clean design and basic navigation, serving as a front-end showcase for a small business. Created during Senior High School (2021).
            </p>
            <p className="text-white italic">HTML, CSS, Bootstrap</p>
            <br/>
            <a href="https://davenwaay.github.io/DBGandA/index.html" target="_blank" rel="noreferrer" className='btnLearnMore'>Live Demo</a>
          </div>
          {/* Image with Border */}
          <div>
            <img
              src={db}
              alt="db"
              className="w-full border-[40px] border-r-0 border-gray-400 transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>
        </div>
        <br/><br/><br/>

        <div className="flex items-center gap-8 mx-auto">
      {/* Image with Border */}
          <div>
            <img
              src={login}
              alt="login"
              className="w-full border-[40px] border-l-0 border-gray-400 transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          {/* Text Content */}
          <div className="w-full space-y-1">
            <h2 className="text-2xl font-bold text-white">
              Login-Signup
            </h2>
            <p className="text-white">Gerwin Dean Alcober</p>
            <p className="text-gray-300">
            A simple login and signup page with a dynamic background.
            </p>
            <p className="text-white italic">HTML, CSS</p>
            <br/>
            <a href="https://docurev111.github.io/sample-website/signup.html" target="_blank" rel="noreferrer" className='btnLearnMore'>Live Demo</a>
          </div>
        </div>
        <br/><br/><br/>
    </div>
    </motion.div>
  )
}

