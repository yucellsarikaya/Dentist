import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaTooth, FaSyringe, FaTeethOpen, FaInfoCircle } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { GiSparkles } from "react-icons/gi";
import "./Pricing.css";

interface PriceItem {
  service: string;
  description: string;
  price: string;
  popular?: boolean;
}

const priceCategories: { title: string; icon: ReactNode; items: PriceItem[] }[] = [
  {
    title: "Genel Tedaviler",
    icon: <FaTooth />,
    items: [
      { service: "Diş Muayenesi", description: "Detaylı kontrol ve röntgen", price: "Ücretsiz", popular: true },
      { service: "Diş Dolgusu (Kompozit)", description: "Estetik beyaz dolgu", price: "₺800 - ₺1.500" },
      { service: "Diş Çekimi", description: "Basit diş çekimi", price: "₺500 - ₺1.000" },
      { service: "Diş Taşı Temizliği", description: "Profesyonel ağız bakımı", price: "₺700 - ₺1.200" },
    ],
  },
  {
    title: "Kanal Tedavisi",
    icon: <FaSyringe />,
    items: [
      { service: "Tek Kanal (Ön Diş)", description: "Ön dişlerde kanal tedavisi", price: "₺1.500 - ₺2.500" },
      { service: "Çok Kanallı (Arka Diş)", description: "Arka dişlerde kanal tedavisi", price: "₺2.000 - ₺3.500" },
      { service: "Kanal Yenileme", description: "Başarısız kanal tekrarı", price: "₺2.500 - ₺4.000" },
    ],
  },
  {
    title: "Estetik Diş Hekimliği",
    icon: <GiSparkles />,
    items: [
      { service: "Diş Beyazlatma", description: "Profesyonel beyazlatma", price: "₺2.000 - ₺4.000", popular: true },
      { service: "Laminate Veneer (Adet)", description: "Porselen kaplama", price: "₺3.000 - ₺6.000" },
      { service: "Bonding", description: "Kompozit estetik düzeltme", price: "₺1.000 - ₺2.000" },
      { service: "Gülüş Tasarımı", description: "Komple gülüş estetiği", price: "₺15.000+" },
    ],
  },
  {
    title: "İmplant & Protez",
    icon: <TbDental />,
    items: [
      { service: "Tek Diş İmplant", description: "Titanyum implant + üst yapı", price: "₺10.000 - ₺18.000", popular: true },
      { service: "All-on-4 İmplant", description: "Tam çene implant", price: "₺80.000 - ₺120.000" },
      { service: "Zirkonyum Kron (Adet)", description: "Tam seramik kaplama", price: "₺3.000 - ₺5.000" },
      { service: "Hareketli Protez", description: "Takma diş", price: "₺4.000 - ₺8.000" },
    ],
  },
  {
    title: "Ortodonti",
    icon: <FaTeethOpen />,
    items: [
      { service: "Metal Braket", description: "Geleneksel tel tedavisi", price: "₺15.000 - ₺25.000" },
      { service: "Seramik Braket", description: "Estetik tel tedavisi", price: "₺20.000 - ₺30.000" },
      { service: "Şeffaf Plak (Invisalign)", description: "Görünmez ortodonti", price: "₺25.000 - ₺45.000", popular: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="pricing-page">
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <h1>Fiyat Listesi</h1>
          <p>Şeffaf fiyatlandırma ile tedavi maliyetlerinizi önceden bilin</p>
          <div className="about-hero-breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span>Fiyat Listesi</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="pricing-note">
            <span className="pricing-note-icon"><FaInfoCircle /></span>
            <p>
              Fiyatlar tedavinin kapsamına ve hastanın durumuna göre değişiklik gösterebilir.
              Kesin fiyat bilgisi için ücretsiz muayene randevusu alabilirsiniz.
              <strong> Tüm kredi kartlarına 12 aya kadar taksit imkanı mevcuttur.</strong>
            </p>
          </div>

          <div className="pricing-categories">
            {priceCategories.map((category) => (
              <div key={category.title} className="pricing-category">
                <div className="pricing-category-header">
                  <span className="pricing-category-icon">{category.icon}</span>
                  <h2>{category.title}</h2>
                </div>
                <div className="pricing-table">
                  {category.items.map((item) => (
                    <div
                      key={item.service}
                      className={`pricing-row ${item.popular ? "pricing-popular" : ""}`}
                    >
                      <div className="pricing-service">
                        <h3>
                          {item.service}
                          {item.popular && <span className="popular-badge">Popüler</span>}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                      <div className="pricing-price">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-cta">
            <h3>Ücretsiz Muayene İçin Randevu Alın</h3>
            <p>Tedavi planınızı ve kesin fiyat bilginizi ücretsiz muayenemizde öğrenin.</p>
            <Link to="/randevu" className="pricing-cta-btn">Randevu Al</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
