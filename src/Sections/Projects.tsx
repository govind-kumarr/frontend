import React from "react";
import { projects } from "../data.ts";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="testimonials">
      {projects.map((project, index) => {
        return <ProjectCard key={index} project_info={project} />;
      })}
    </section>
  );
};

export default Projects;
