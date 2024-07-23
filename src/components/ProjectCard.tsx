import React from "react";
import { ProjectInfo } from "../data.ts";

interface ProjectCardProps {
  project_info: ProjectInfo;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project_info } = props;
  return (
    <div className="testimonials__card">
      <div className="testimonials__card--img">
        <img src="img/testimonials-1.jpg" alt="tony" />
      </div>
      <div className="testimonials__card--content flex flex-col gap-2">
        <span className="block text-4xl">{project_info.title}</span>
        <span className="block text-2xl">{project_info.description}</span>
        <div className="flex gap-4">
          <a
            href={project_info.github_link}
            className="flex gap-2 items-center"
          >
            <i className="fa-brands fa-github fa-xl" />
            <p>Github Link</p>
          </a>
          <a
            href={project_info.deployed_link}
            className="flex gap-2 items-center"
          >
            <i className="fa-solid fa-globe fa-xl" />
            <p>Deployed Link</p>
          </a>
        </div>
        {/* <h3 className="testimonials__card--content__title">
          {project_info.title}
        </h3>
        <div className="">
          <span>kuch bnhi</span>
        </div>
        <p className="testimonials__card--content__para">
          {project_info.description}
        </p> */}
      </div>
    </div>
  );
};

export default ProjectCard;
