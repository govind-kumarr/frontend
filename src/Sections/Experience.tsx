import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data.ts";

const Experience = () => {
  return (
    <section className="bg-primary">
      <div className="p-4 px-10">
        <h3 className="experience-section__title text-6xl text-white m-auto">
          Experiences
        </h3>
      </div>

      <div className="work_wrapper px-80 py-12">
        <ol className="relative border-s-2 border-secondary dark:border-secondary">
          {experiences.map((exp, index) => {
            return <ExperienceCard key={index} exp_info={exp} />;
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
