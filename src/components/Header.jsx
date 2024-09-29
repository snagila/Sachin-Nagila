import { useEffect, useState } from "react";
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { motion } from "framer-motion";

const navItems = [
  { icon: <FaHome />, name: "Home", to: "#hero" },
  { icon: <FaUser />, name: "About", to: "#about" },
  { icon: <FaProjectDiagram />, name: "Projects", to: "#projects" },
  { icon: <GiGiftOfKnowledge />, name: "Skills", to: "#skills" },
  { icon: <FaEnvelope />, name: "Contact", to: "#contact" },
];

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("10vh");

  const handleClick = (e, to) => {
    e.preventDefault();
    const targetElement = document.querySelector(to);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileView(false);
  };

  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.scrollY > 40) {
          setHeaderHeight("6vh");
        } else {
          setHeaderHeight("10vh");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="z-50 bg-customdark ">
      {/* Desktop Navigation */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full  text-black z-50 bg-customdark "
      >
        <div
          className="flex justify-between items-center p-4 mx-auto max-w-[1440px]"
          style={{ height: headerHeight, transition: "height 0.3s ease" }}
        >
          <a href="#" className="font-bold text-2xl tracking-wider">
            Sachin Nagila
          </a>
          <div className="hidden md:flex md:justify-between md:space-x-8">
            {navItems.map((item, index) => (
              <a
                href={item.to}
                key={index}
                className="group flex items-center transform transition hover:text-yellow-500"
                onClick={(e) => handleClick(e, item.to)}
              >
                <span className="flex flex-col items-center">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </a>
            ))}
          </div>
          <div
            className="md:hidden text-yellow-500"
            onClick={() => setMobileView(!mobileView)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              className="w-[2rem] h-[2rem] cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      {mobileView && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-screen w-full  shadow-lg z-40 "
          style={{ backgroundColor: "#FFFCF7" }}
        >
          <div
            className="text-red-500 flex justify-end p-4 z-50"
            onClick={() => setMobileView(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              className="w-12 h-12 cursor-pointer"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
            </svg>
          </div>
          <div className="space-y-10 h-full flex flex-col items-center text-2xl font-semibold text-black mt-16">
            {navItems.map((item, index) => (
              <a
                href={item.to}
                key={index}
                className="group flex items-center transition hover:text-yellow-500"
                onClick={(e) => handleClick(e, item.to)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
