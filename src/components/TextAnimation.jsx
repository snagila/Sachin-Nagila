import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        1000,
        "MERN Stack Developer",
        1000,
        "Designer",
        1000,
        "Developer",
        1000,
      ]}
      wrapper="span"
      speed={10}
      className="text-xl md:text-3xl text-orange-500 font-extrabold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
