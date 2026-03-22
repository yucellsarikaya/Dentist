import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import clinicConfig from "../config/clinic";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.");
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>İletişim</h1>
          <p>Bizimle iletişime geçin, sorularınızı yanıtlayalım</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Bize Yazın</h2>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>
              <button type="submit" className="btn-submit">Gönder</button>
            </form>

            <div className="contact-info-panel">
              <div className="contact-info-item">
                <span className="contact-icon"><FaMapMarkerAlt /></span>
                <div>
                  <h3>Adres</h3>
                  <p>{clinicConfig.location.fullAddress}</p>
                  {clinicConfig.location.directions && (
                    <a
                      href={clinicConfig.location.directions}
                      target="_blank"
                      rel="noreferrer"
                      className="directions-link"
                    >
                      Yol Tarifi Al →
                    </a>
                  )}
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon"><FaPhoneAlt /></span>
                <div>
                  <h3>Telefon</h3>
                  <p>{clinicConfig.phone}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon"><FaEnvelope /></span>
                <div>
                  <h3>E-posta</h3>
                  <p>{clinicConfig.email}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon"><FaClock /></span>
                <div>
                  <h3>Çalışma Saatleri</h3>
                  {clinicConfig.workingHours.map((wh) => (
                    <p key={wh.day}>
                      {wh.day}: {wh.isClosed ? "Kapalı" : `${wh.open} - ${wh.close}`}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Bizi Ziyaret Edin</h2>
          <p className="section-subtitle">
            {clinicConfig.location.fullAddress}
          </p>
        </div>
        <div className="map-container">
          <iframe
            title="Klinik Konumu"
            src={clinicConfig.location.mapEmbedUrl || `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2000!2d${clinicConfig.location.lng}!3d${clinicConfig.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
