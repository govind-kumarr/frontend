import React from "react";
import { about_me } from "../data.ts";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-me__img">
        <img src="img/content-img-02.jpg" alt="ME" />
      </div>
      <div className="about-me__content">
        <h2 className="about-me__content--title">About Me</h2>
        <p className="about-me__content--para text-primary">{about_me.description}</p>
        <a href="#" className="about-me__content--link">
          Read More
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
