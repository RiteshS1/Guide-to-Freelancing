"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    <div className="bg-black h-full">
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 10 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        About Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 text-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text font-medium tracking-tight text-transparent  md:text-xl"
      >
        We created this platform to help freelancers find the best opportunities and resources.
        <br />
        Our website provides a comprehensive guide to freelancing, featuring blogs, videos, and more to help you succeed in your freelancing career.
      </motion.p>
    </LampContainer>
    </div>
  );
}
export default LampDemo;