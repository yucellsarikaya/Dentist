import { Link } from "react-router-dom";
import clinicConfig from "../../config/clinic";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          {clinicConfig.slogan}
        </h1>
        <p className="hero-subtitle">
          Modern teknoloji ve uzman kadromuz ile diş sağlığınız güvende.
          {clinicConfig.name} olarak size en iyi hizmeti sunuyoruz.
        </p>
        <div className="hero-buttons">
          <Link to="/randevu" className="hero-btn hero-btn-primary">
            Randevu Al
          </Link>
          <Link to="/hizmetler" className="hero-btn hero-btn-secondary">
            Hizmetlerimiz
          </Link>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Yıl Deneyim</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Mutlu Hasta</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Uzman Doktor</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">Hizmet</span>
          </div>
        </div>
      </div>
    </section>
  );
}
