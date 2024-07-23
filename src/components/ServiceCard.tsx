import React from "react";
import { ServiceInfo } from "../data";

interface ServiceCardProps {
  service_info: ServiceInfo;
}

const ServiceCard = (props: ServiceCardProps) => {
  const { service_info } = props;
  return (
    <div className="service services__service-1">
      <i className="fas fa-quidditch" />
      <h3 className="services--title services__service-1--title">
        {service_info.title}
      </h3>
      <p className="services--para services__service-1--para">
        {service_info.description}
      </p>
    </div>
  );
};

export default ServiceCard;
