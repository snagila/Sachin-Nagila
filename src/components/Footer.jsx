import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-32 pb-16 bg-customdark text-black backdrop-blur-sm">
      <div className="flex justify-center items-center border-b border-gray-400 pb-24 w-4/5 mx-auto">
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/sachinnagila/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-customlight"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} className="text-[#02050a]" />
          </a>
          <a
            href="https://github.com/snagila"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-customlight"
            aria-label="GitHub"
          >
            <FaGithub size={32} className="text-[#02050a]" />
          </a>
          <a
            href="mailto:sachinnagila2053@gmail.com"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-customlight"
            aria-label="Email"
          >
            <FaEnvelope size={32} className="text-[#02050a]" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; Copyright {new Date().getFullYear()}. All Rights Reserved To{" "}
          <a
            href="https://www.linkedin.com/in/sachinnagila/"
            target="_blank"
            className="underline"
            aria-label="Sachin"
          >
            Sachin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
