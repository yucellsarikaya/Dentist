import ServiceCard from "../components/common/ServiceCard";
import { services } from "../config/mockData";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Hizmetlerimiz</h1>
          <p>Diş sağlığınız için kapsamlı tedavi seçenekleri</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-page-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
