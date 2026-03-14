import { Link } from "react-router-dom";
import clinicConfig from "../../config/clinic";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <span className="logo-icon">🦷</span>
              <span>{clinicConfig.name}</span>
            </div>
            <p>{clinicConfig.slogan}</p>
            <div className="footer-social">
              {clinicConfig.socialMedia.instagram && (
                <a href={clinicConfig.socialMedia.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">📷</a>
              )}
              {clinicConfig.socialMedia.facebook && (
                <a href={clinicConfig.socialMedia.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">📘</a>
              )}
              {clinicConfig.socialMedia.whatsapp && (
                <a href={clinicConfig.socialMedia.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
              )}
            </div>
          </div>

          <div className="footer-links">
            <h4>Hızlı Erişim</h4>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/hakkimizda">Hakkımızda</Link></li>
              <li><Link to="/hizmetler">Hizmetler</Link></li>
              <li><Link to="/doktorlar">Doktorlarımız</Link></li>
              <li><Link to="/randevu">Randevu Al</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Hizmetler</h4>
            <ul>
              <li><Link to="/hizmetler">Diş İmplantı</Link></li>
              <li><Link to="/hizmetler">Ortodonti</Link></li>
              <li><Link to="/hizmetler">Diş Beyazlatma</Link></li>
              <li><Link to="/hizmetler">Estetik Diş</Link></li>
              <li><Link to="/hizmetler">Kanal Tedavisi</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>İletişim</h4>
            <ul>
              <li>📍 {clinicConfig.location.fullAddress}</li>
              <li>📞 {clinicConfig.phone}</li>
              <li>✉️ {clinicConfig.email}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {clinicConfig.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
