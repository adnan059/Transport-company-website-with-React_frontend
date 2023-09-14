import React from "react";
import "./Exp.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Estimation from "./components/Estimation/Estimation";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

const Exp = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Estimation />
      <Projects />
      <Blogs />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Exp;
