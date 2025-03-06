import React from 'react'
import { motion } from "framer-motion";

export const Contact = () => {
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
      <ul>
        <li>contact form for inquiries</li>
        <li>social media links</li>
      </ul>
    </div>
    </motion.div>
  )
}
