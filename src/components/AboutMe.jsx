import a from "../assets/a.jpg";

const About = () => {
  return (
    <section
      className="py-16 bg-customdark text-gray-800 backdrop-blur-sm"
      id="about"
      // style={{ backgroundColor: "#D9CFC3" }}
    >
      <div className="mx-auto max-w-7xl flex flex-col px-4 xl:text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-10 px-4 justify-center items-center">
          <div className="lg:col-span-2 space-y-4 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-center text-orange-500 mb-1 tracking-wider font-mono">
              About Me
            </h2>
            <div className="flex justify-center">
              <p className="text-center md:text-lg leading-relaxed  ">
                Hi, I’m Sachin, a full-stack developer with 1 year and 6 months
                of experience. Besides my formal education, I completed an
                intensive bootcamp at Dented Code to further upskill and expand
                my knowledge. <br /> I’m passionate about all aspects of
                development—from crafting intuitive user interfaces to
                optimizing app performance and functionality.My expertise spans
                both frontend and backend development, allowing me to build
                seamless and efficient web applications. With a keen eye for
                design and a strong passion for crafting innovative digital
                solutions, I continuously strive to deliver exceptional user
                experiences and high-quality code. I love solving complex
                problems and turning ideas into seamless digital experiences.{" "}
                <br />
                When I’m not coding, I enjoy mentoring IT students, helping them
                grow in their own journeys. Be sure to check out my projects
                section to see some of my personal work!
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center overflow-hidden xl:hidden">
            <img src={a} alt="Bikash" className="h-[450px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
