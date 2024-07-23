import React from "react";

const Services = () => {
  return (
    <div>
      <div className="p-4 px-10 pb-0 bg-primary">
        <h3 className="experience-section__title text-6xl text-white m-auto">
          Services
        </h3>
      </div>
      <section id="services">
        {/* Service 1 */}
        <div className="service services__service-1">
          <i className="fas fa-quidditch" />
          <h3 className="services--title services__service-1--title">
            UI Design
          </h3>
          <p className="services--para services__service-1--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
        {/* Service 2 */}
        <div className="service services__service-2">
          <i className="fas fa-tasks" />
          <h3 className="services--title services__service-2--title">
            Web Development
          </h3>
          <p className="services--para services__service-2--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
        {/* Service 3 */}
        <div className="service services__service-3">
          <i className="fas fa-mobile-alt" />
          <h3 className="services--title services__service-3--title">
            App Development
          </h3>
          <p className="services--para services__service-3--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
        {/* Service 4 */}
        <div className="service services__service-4">
          <i className="fas fa-paint-roller" />
          <h3 className="services--title services__service-4--title">
            Type Design
          </h3>
          <p className="services--para services__service-4--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
        {/* Service 5 */}
        <div className="service services__service-5">
          <i className="far fa-edit" />
          <h3 className="services--title services__service-5--title">
            Blog Writer
          </h3>
          <p className="services--para services__service-5--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
        {/* Service 6 */}
        <div className="service services__service-6">
          <i className="fas fa-project-diagram" />
          <h3 className="services--title services__service-6--title">
            Project Management
          </h3>
          <p className="services--para services__service-6--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
