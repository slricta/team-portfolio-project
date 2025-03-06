import React from 'react'
import { motion } from "framer-motion";
import { useEffect } from 'react';

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
      <ul>
        <li>list of all team members</li>
        <li>Each members profile including: profile pic, name and role, skills and expertise, social media or github links</li>
      </ul>
    </div>
    </motion.div>
  )
}
