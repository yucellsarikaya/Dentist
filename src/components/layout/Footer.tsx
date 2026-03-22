import { Link } from "react-router-dom";
import { FaTooth, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import clinicConfig from "../../config/clinic";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Üst Kısım - CTA Band */}
        <div className="footer-cta">
          <div className="footer-cta-text">
            <h3>Randevu almak ister misiniz?</h3>
            <p>Hemen bizi arayın veya online randevu oluşturun</p>
          </div>
          <div className="footer-cta-actions">
            <a href={`tel:${clinicConfig.phone}`} className="footer-cta-btn phone">
              <FaPhoneAlt /> {clinicConfig.phone}
            </a>
            <Link to="/randevu" className="footer-cta-btn appointment">
              Randevu Al
            </Link>
          </div>
        </div>

        {/* Orta Kısım - 3 Kolon */}
        <div className="footer-main">
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <span><FaTooth /></span>
              <span>{clinicConfig.name}</span>
            </div>
            <p className="footer-desc">{clinicConfig.slogan}</p>
            <div className="footer-social">
              {clinicConfig.socialMedia.instagram && (
                <a href={clinicConfig.socialMedia.instagram} target="_blank" rel="noreferrer">Instagram</a>
              )}
              {clinicConfig.socialMedia.facebook && (
                <a href={clinicConfig.socialMedia.facebook} target="_blank" rel="noreferrer">Facebook</a>
              )}
              {clinicConfig.socialMedia.whatsapp && (
                <a href={clinicConfig.socialMedia.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
              )}
            </div>
          </div>

          <div className="footer-col">
            <h4>İletişim</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="fc-icon"><FaMapMarkerAlt /></span>
                <span>{clinicConfig.location.fullAddress}</span>
              </li>
              <li>
                <span className="fc-icon"><FaPhoneAlt /></span>
                <a href={`tel:${clinicConfig.phone}`}>{clinicConfig.phone}</a>
              </li>
              <li>
                <span className="fc-icon"><FaEnvelope /></span>
                <a href={`mailto:${clinicConfig.email}`}>{clinicConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {clinicConfig.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
