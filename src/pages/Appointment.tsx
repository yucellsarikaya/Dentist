import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import { doctors, services } from "../config/mockData";
import "./Appointment.css";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    doctor: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend bağlantısı yapıldığında burası güncellenecek
    alert("Randevu talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.");
  };

  return (
    <div className="appointment-page">
      <div className="page-header">
        <div className="container">
          <h1>Randevu Al</h1>
          <p>Online randevu formumuzu doldurarak kolayca randevu alabilirsiniz</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="appointment-layout">
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="0(5XX) XXX XX XX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ornek@mail.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="doctor">Doktor Seçiniz</label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                  >
                    <option value="">Doktor seçiniz</option>
                    {doctors.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} - {d.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Hizmet Seçiniz</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Hizmet seçiniz</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Tarih *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Saat *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Saat seçiniz</option>
                    {["09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
                      "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
                      "16:00", "16:30", "17:00", "17:30"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Notlarınız</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Şikayetiniz veya eklemek istediğiniz bilgiler..."
                />
              </div>

              <button type="submit" className="btn-submit">
                Randevu Talep Et
              </button>
            </form>

            <div className="appointment-info">
              <div className="info-card">
                <h3><FaPhoneAlt /> Telefonla Randevu</h3>
                <p>Bizi arayarak da randevu alabilirsiniz.</p>
                <a href="tel:+902125550000" className="info-link">+90 (212) 555 0000</a>
              </div>
              <div className="info-card">
                <h3><FaWhatsapp /> WhatsApp</h3>
                <p>WhatsApp üzerinden yazarak randevu alın.</p>
                <a href="https://wa.me/902125550000" className="info-link" target="_blank" rel="noreferrer">
                  WhatsApp ile İletişim
                </a>
              </div>
              <div className="info-card">
                <h3><FaClock /> Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi: 10:00 - 14:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
