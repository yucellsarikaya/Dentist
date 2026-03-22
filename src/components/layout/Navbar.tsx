import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTooth, FaHome, FaInfoCircle, FaUserMd, FaMoneyBillWave, FaImages, FaQuestionCircle, FaCalendarCheck, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import clinicConfig from "../../config/clinic";
import type { MenuItem } from "../../types";
import "./Navbar.css";

const menuItems: MenuItem[] = [
  { label: "Ana Sayfa", path: "/", icon: <FaHome /> },
  { label: "Hakkımızda", path: "/hakkimizda", icon: <FaInfoCircle /> },
  { label: "Hizmetler", path: "/hizmetler", icon: <FaTooth /> },
  { label: "Doktorlarımız", path: "/doktorlar", icon: <FaUserMd /> },
  { label: "Fiyatlar", path: "/fiyatlar", icon: <FaMoneyBillWave /> },
  { label: "Galeri", path: "/galeri", icon: <FaImages /> },
  { label: "SSS", path: "/sss", icon: <FaQuestionCircle /> },
  { label: "Randevu", path: "/randevu", icon: <FaCalendarCheck /> },
  { label: "İletişim", path: "/iletisim", icon: <FaPhoneAlt /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Menü açıkken body scroll'u kapat
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon"><FaTooth /></span>
          <span className="logo-text">{clinicConfig.name}</span>
        </Link>

        <button
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menüyü aç/kapa"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Backdrop */}
        <div
          className={`mobile-backdrop ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(false)}
        />

        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {/* Mobil menü başlık */}
          <li className="mobile-menu-header">
            <span>Menü</span>
          </li>

          {menuItems.map((item, index) => (
            <li key={item.path} className="menu-item" style={{ animationDelay: `${index * 0.05}s` }}>
              <Link
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="menu-icon">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}

          <li className="navbar-cta" style={{ animationDelay: `${menuItems.length * 0.05}s` }}>
            <Link
              to="/randevu"
              className="btn-appointment"
              onClick={() => setIsOpen(false)}
            >
              Randevu Al
            </Link>
          </li>

          {/* Mobil alt bilgi */}
          <li className="mobile-menu-footer">
            <div className="mobile-contact">
              <a href={`tel:${clinicConfig.phone}`}><FaPhoneAlt /> {clinicConfig.phone}</a>
              <a href={`mailto:${clinicConfig.email}`}><FaEnvelope /> {clinicConfig.email}</a>
            </div>
            <div className="mobile-social">
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
          </li>
        </ul>
      </div>
    </nav>
  );
}
