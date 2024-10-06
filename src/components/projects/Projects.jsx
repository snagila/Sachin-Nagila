import React from "react";
import projectArray from "./projectArray";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <>
      <div className="bg-customLight pt-[4rem] md:pt-[4rem] pb-[2rem]">
        <h2 className="text-xl md:text-3xl font-bold text-center text-orange-500 mb-16 tracking-wider font-mono">
          My Skills
        </h2>

        <div className="hello w-[80%] pt-[1rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
          {projectArray.map((project, index) => (
            <div
              key={index}
              className="bg-customdark  rounded-lg shadow-lg transform cursor-pointer hover:-translate-y-6 transition-all duration-200"
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`}
            >
              <div className="relative w-full h-[200px] md:h-[300px]">
                <img
                  src={project.projectImg}
                  alt={project.projectTitle}
                  className="object-fill w-full h-full"
                />
                <a
                  href={project.projectUrl}
                  className="absolute inset-0 flex items-center justify-center bg-customLight bg-opacity-50 text-red-200 backdrop-blur-sm font-bold text-xl opacity-0 hover:opacity-100 transition-opacity duration-200 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to visit {project.projectTitle}
                </a>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold flex items-center space-x-2">
                  {project.projectTitle} &nbsp;
                  <a
                    href={project.projectGIT}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-2xl  hover:text-yellow-500" />
                  </a>
                </h2>
                <p className="text-sm text-dark-400 mt-2">
                  {project.projectDescription.substring(0, 100)}
                  {project.projectDescription.length > 100 ? "..." : ""}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.projectLang.map((lang, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 text-white py-1 px-2 rounded shadow"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
