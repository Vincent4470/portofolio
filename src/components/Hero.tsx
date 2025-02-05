import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook,  } from "react-icons/fa";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center px-6">
      <motion.h2
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi There <span className="inline-block">👋</span>
      </motion.h2>
      <motion.h1
        className="text-6xl font-bold text-blue-500"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        I`m HeyCent.
      </motion.h1>
      <motion.p
        className="text-lg mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        I am a Front End web developer who enjoys building beautiful web applications.
      </motion.p>
      <div className="flex gap-4 mt-6">
        <FaGithub className="text-2xl cursor-pointer" />
        <FaLinkedin className="text-2xl cursor-pointer" />
        <FaInstagram className="text-2xl cursor-pointer" />
        <FaFacebook className="text-2xl cursor-pointer" />
      </div>
      <div className="flex gap-4 mt-6">
        <button className="bg-blue-500 px-6 py-2 rounded-lg">Contact Me</button>
        <a
          href="./Vincent Etwin Mangapul.pdf"
          download="./Vincent Etwin Mangapul.pdf"
          className="flex items-center bg-gray-700 px-6 py-2 rounded-lg"
        >
          <Download className="mr-2 h-4 w-4" /> Download CV
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
