import { Link } from "react-router-dom";
import HeroSlider from "../components/common/HeroSlider";
import ServiceCard from "../components/common/ServiceCard";
import DoctorCard from "../components/common/DoctorCard";
import TestimonialCard from "../components/common/TestimonialCard";
import AnimatedCounter from "../components/common/AnimatedCounter";
import BeforeAfter from "../components/common/BeforeAfter";
import { services, doctors, testimonials } from "../config/mockData";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <HeroSlider />

      {/* Hizmetler Bölümü */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-subtitle">
            Geniş hizmet yelpazemiz ile diş sağlığınız için ihtiyacınız olan her şey burada.
          </p>
          <div className="services-grid">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/hizmetler" className="btn-outline">
              Tüm Hizmetleri Gör →
            </Link>
          </div>
        </div>
      </section>

      {/* Animasyonlu Sayaçlar */}
      <AnimatedCounter />

      {/* Neden Biz */}
      <section className="section why-us-section">
        <div className="container">
          <h2 className="section-title">Neden Bizi Tercih Etmelisiniz?</h2>
          <div className="why-us-grid">
            <div className="why-us-item">
              <span className="why-icon">🏥</span>
              <h3>Modern Klinik</h3>
              <p>Son teknoloji cihazlar ve sterilizasyon standartları ile donatılmış modern klinik.</p>
            </div>
            <div className="why-us-item">
              <span className="why-icon">👨‍⚕️</span>
              <h3>Uzman Kadro</h3>
              <p>Alanında uzman ve deneyimli diş hekimleri ile güvenilir tedavi.</p>
            </div>
            <div className="why-us-item">
              <span className="why-icon">😊</span>
              <h3>Hasta Memnuniyeti</h3>
              <p>10.000'den fazla mutlu hasta ile %98 memnuniyet oranı.</p>
            </div>
            <div className="why-us-item">
              <span className="why-icon">💰</span>
              <h3>Uygun Fiyat</h3>
              <p>Kaliteli hizmeti uygun fiyatlarla sunuyor, taksit seçenekleri sağlıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tedavi Öncesi/Sonrası */}
      <BeforeAfter />

      {/* Doktorlar Bölümü */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Doktorlarımız</h2>
          <p className="section-subtitle">
            Alanında uzman ve deneyimli diş hekimlerimiz ile tanışın.
          </p>
          <div className="doctors-grid">
            {doctors.slice(0, 4).map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Hasta Yorumları</h2>
          <p className="section-subtitle">
            Hastalarımızın deneyimlerini dinleyin.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Sağlıklı Bir Gülüş İçin Hemen Randevu Alın</h2>
          <p>Uzman ekibimiz sizi bekliyor. İlk muayene ücretsizdir.</p>
          <Link to="/randevu" className="hero-btn hero-btn-primary">
            Randevu Al
          </Link>
        </div>
      </section>
    </div>
  );
}
