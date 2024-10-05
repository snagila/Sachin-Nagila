import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/ContactMe";
import Footer from "./components/Footer";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
