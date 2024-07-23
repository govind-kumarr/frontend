import React from "react";
import Sidebar from "./Sections/Sidebar";
import Header from "./Sections/Header";
import { data } from "./data.ts";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import AboutMe from "./Sections/AboutMe";
import ContactMe from "./Sections/ContactMe";
import Services from "./Sections/Services.tsx";

const Portfolio = () => {
  return (
    <>
      <Sidebar />
      <main id="main">
        <Header />
        <section id="showcase">
          <div className="showcase__content">
            <h1 className="showcase__content--title">{data.full_name}</h1>
            <p className="showcase__content--para">{data.role}</p>
            <a href="#" className="showcase__content--link">
              My Work
            </a>
          </div>
        </section>
        <Projects />
        <Experience />
        <Services />
        <AboutMe />
        <ContactMe />
      </main>
    </>
  );
};

export default Portfolio;
