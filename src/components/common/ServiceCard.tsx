import type { Service } from "../../types";
import "./ServiceCard.css";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-name">{service.name}</h3>
      <p className="service-category">{service.category}</p>
      <p className="service-description">{service.description}</p>
      <div className="service-meta">
        <span>⏱ {service.duration} dk</span>
      </div>
    </div>
  );
}
