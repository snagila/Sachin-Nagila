import a from "../assets/a.jpg";

const About = () => {
  return (
    <section
      className="py-16 bg-gray-500 text-gray-800 backdrop-blur-sm"
      id="about"
      style={{ backgroundColor: "#F6F1EB" }}
    >
      <div className="mx-auto max-w-7xl flex flex-col px-4 xl:text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-10 px-4 justify-center items-center">
          <div className="lg:col-span-2 space-y-4 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-center text-orange-500 mb-1 tracking-wider font-mono">
              About Me
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-justify ">
              I am a dedicated Software Developer with a Bachelor's degree in
              Information Technology, specializing in full-stack development
              using the MERN stack (MongoDB, Express, React, and Node.js). My
              expertise spans both frontend and backend development, allowing me
              to build seamless and efficient web applications. With a keen eye
              for design and a strong passion for crafting innovative digital
              solutions, I continuously strive to deliver exceptional user
              experiences and high-quality code. I thrive on solving complex
              problems and am always eager to learn new technologies and improve
              my skills.
            </p>
          </div>
          <div className="xl:hidden flex justify-center items-center overflow-hidden">
            <img src={a} alt="Bikash" className="h-[450px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
