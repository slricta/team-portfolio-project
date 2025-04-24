import React from 'react'
import { motion } from "framer-motion";
import { useEffect } from 'react';
import fb from './images/fb.png';
import ig from './images/ig.png';
import gmail from './images/gmail.png';

export const Contact = () => {
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
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col justify-center items-start h-[50vh] md:h-screen pt-10 md:pl-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Contact Us</h1>
        </div>
      <hr className="w-5/6 mx-auto border-t-2 border-[#333333] mb-20" />
      <div class="mt-10 w-full max-w-5xl mx-auto grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 px-8 sm:px-32">
  <div>
    <label for="first-name" class="block text-2xl font-medium text-white">First name</label>
    <div class="mt-2">
      <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline-1 outline-double -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500" />
    </div>
  </div>

  <div>
    <label for="last-name" class="block text-2xl font-medium text-white">Last name</label>
    <div class="mt-2">
      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline-1 outline-double -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500" />
    </div>
  </div>

  <div class="sm:col-span-2">
    <label for="email" class="block text-2xl font-medium text-white">Email</label>
    <div class="mt-2">
      <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline-1 outline-double -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500" />
    </div>
  </div>
  <div class="col-span-full">
          <label for="about" class="block text-2xl font-medium text-white">Inquiries</label>
          <div class="mt-2">
            <textarea name="about" id="about" rows="3" class="block w-full rounded-md bg-black px-3 py-1.5 text-base text-white outline-1 outline-double -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500"></textarea>
          </div>
        </div>
        <div className='col-span-full flex justify-end'>
          <button 
            className="btnLearnMore text-2xl">
            Submit
          </button>
        </div>
        </div>

        <div class="h-56 grid grid-cols-3 gap-4 content-center justify-center text-white pt-20">
          <div class="flex items-center gap-2 justify-center">
            <img src={gmail} alt="Gmail Logo" className="size-10" />
            <p className='btnLearnMore text-xl'>Email</p>
          </div>

          <div class="flex items-center gap-2 justify-center">
            <img src={fb} alt="FB Logo" className="size-10" />
            <p className='btnLearnMore text-xl'>Facebook</p>
          </div>

          <div class="flex items-center gap-2 justify-center">
            <img src={ig} alt="IG Logo" className="size-8" />
            <p className='btnLearnMore text-xl'>Instagram</p>
          </div>


        </div>
    </div>
    </motion.div>
  )
}
