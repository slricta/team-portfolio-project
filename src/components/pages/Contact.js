import React from 'react'
import { motion } from "framer-motion";
import { useEffect } from 'react';

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
    <div>
      {/* Top Section */}
      <div className="flex justify-between items-center h-screen pl-40">
        {/* Contact US */}
        <div>
          <h1 className="text-7xl font-bold">Contact Us</h1>
        </div>
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

        <p>social media links</p>
    </div>
    </motion.div>
  )
}
