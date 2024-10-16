import React from "react";
import "../../src/App.css";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid/index.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BackgroundParticles from "./BackgroundParticles";
import TextAnimation from "./TextAnimation";
import b from "../assets/b.jpg";

const Hero = () => {
  return (
    <div className="h-[88vh] mt-20 sm:mt-[10vh] bg-customlight backdrop-blur-sm">
      {/* <div className="absolute inset-0 overflow-hidden">
        <BackgroundParticles />
      </div> */}

      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-[35px] md:text-[50px] text-black font-bold">
              Hi, I'm <span className="text-orange-600">Sachin </span>{" "}
              <span class="wave">👋</span>
            </h1>
            <TextAnimation />
          </div>

          <p className="mt-[1.5rem] font-bold text-[20px] text-[#00000] text-center">
            FullStack Software Developer with high level of experience in both
            frontend and backend development, producing Quality work.
          </p>

          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <a href="/Sachin_Nagila.pdf" download="sachinnagila-resume.pdf">
              <button className="mt-10 px-10 py-4 text-white bg-teal-800 rounded-lg shadow-lg font-semibold hover:bg-teal-500 flex items-center justify-center">
                Download CV
                <ArrowDownTrayIcon className="h-6 w-6 ml-2" />{" "}
              </button>
            </a>

            <div className="flex space-x-4 mt-4 items-center">
              <a
                href="https://github.com/snagila"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300"
              >
                <FaGithub className="text-2xl md:text-3xl lg:text-4xl hover:text-yellow-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/sachinnagila/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300"
              >
                <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl hover:text-yellow-500" />
              </a>
            </div>
          </motion.div>
        </div>
        <div
          data-aos="zoom-in"
          className="  relative lg:flex items-center justify-center w-[500px] hidden rounded-full h-[500px] overflow-hidden"
        >
          <img src={b} alt="myProfile" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
