import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <FaHtml5 className="text-orange-500 w-6 h-6" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
    name: "CSS3",
  },
  {
    icon: <FaJs className="text-yellow-500 w-6 h-6" />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript className="text-blue-500 w-6 h-6" />,
    name: "TypeScript",
  },
  {
    icon: <FaReact className="text-blue-400 w-6 h-6" />,
    name: "React",
  },
  {
    icon: <FaNodeJs className="text-green-500 w-6 h-6" />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb className="text-green-400 w-6 h-6" />,
    name: "MongoDB",
  },
  {
    icon: <SiExpress className="text-gray-400 w-6 h-6" />,
    name: "Express",
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 w-6 h-6" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiBootstrap className="text-purple-500 w-6 h-6" />,
    name: "Bootstrap",
  },
  {
    icon: <SiRedux className="text-purple-400 w-6 h-6" />,
    name: "Redux",
  },
  {
    icon: <SiStripe className="text-blue-600 w-6 h-6" />,
    name: "Stripe",
  },
  {
    icon: <FaGit className="text-red-500 w-6 h-6" />,
    name: "Git",
  },
  { icon: <FaGithub className="w-6 h-6" />, name: "GitHub" },
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills]; // Duplicating skills to ensure continuous scrolling

  return (
    <section
      className="px-5 lg:px-20 py-6 backdrop-blur-sm bg-customlight"
      id="skills"
    >
      <div className="mx-auto max-w-[1440px] flex flex-col overflow-hidden">
        <h2 className="text-xl md:text-3xl font-bold text-center text-orange-500 mb-16 tracking-wider font-mono">
          My Skills
        </h2>

        <div className="flex flex-col gap-10">
          {/* First Row - Moving Right to Left */}
          <motion.div
            className="flex gap-12"
            animate={{ x: [-1000, 0] }} // Adjust x values based on your content width
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2 items-center">
                <div>
                  <span>{skill.icon}</span>
                </div>
                <span className="text-gray-400 font-semibold text-xs lg:text-base">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second Row - Moving Left to Right */}
          <motion.div
            className="flex gap-12"
            animate={{ x: [0, -1000] }} // Adjust x values based on your content width
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2 items-center">
                <div>
                  <span>{skill.icon}</span>
                </div>
                <span className="text-gray-400 font-semibold text-xs lg:text-base">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
