import { Link } from "react-router-dom";
import clinicConfig from "../config/clinic";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Header */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <h1>Hakkımızda</h1>
          <p>{clinicConfig.name} - Güvenilir Diş Sağlığı Merkezi</p>
          <div className="about-hero-breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span>Hakkımızda</span>
          </div>
        </div>
      </div>

      {/* Biz Kimiz */}
      <section className="section">
        <div className="container about-content">
          <div className="about-text">
            <span className="about-badge">Biz Kimiz?</span>
            <h2>{clinicConfig.name}</h2>
            <p>
              {clinicConfig.name}, {clinicConfig.city} {clinicConfig.location.district} merkezinde
              hizmet veren modern ve güvenilir bir diş kliniğidir. 15 yılı aşkın deneyimimiz ile
              hastalarımıza en kaliteli diş sağlığı hizmetini sunmayı hedefliyoruz.
            </p>
            <p>
              Kliniğimizde son teknoloji cihazlar kullanılmakta olup, tüm tedaviler uluslararası
              standartlara uygun olarak gerçekleştirilmektedir. Sterilizasyon ve hijyen
              konusunda en yüksek standartları uyguluyoruz.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">15+</span>
                <span className="highlight-label">Yıl Deneyim</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10K+</span>
                <span className="highlight-label">Mutlu Hasta</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">4</span>
                <span className="highlight-label">Uzman Doktor</span>
              </div>
            </div>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80"
                alt="Klinik"
              />
            </div>
            <div className="about-image-accent"></div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon-wrapper">
                <span className="mission-icon">🎯</span>
              </div>
              <h3>Misyonumuz</h3>
              <p>
                Her hastamıza bireysel ve kapsamlı bir tedavi planı sunarak, diş sağlığı alanında
                en iyi sonuçları elde etmek. Koruyucu diş hekimliği yaklaşımımız ile hastalarımızın
                diş sağlığını uzun vadeli korumayı amaçlıyoruz.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon-wrapper">
                <span className="mission-icon">🔭</span>
              </div>
              <h3>Vizyonumuz</h3>
              <p>
                Türkiye'nin önde gelen diş sağlığı merkezlerinden biri olarak, uluslararası
                standartlarda hizmet sunan, hastalarının güvenini kazanmış bir klinik olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz - Timeline */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Neden {clinicConfig.name}?</h2>
          <p className="section-subtitle">
            Hastalarımızın bizi tercih etme sebepleri
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-bg">
                <span>🏥</span>
              </div>
              <div className="feature-content">
                <h3>Modern Klinik</h3>
                <p>Son teknoloji cihazlar ve sterilizasyon standartları ile donatılmış, konforlu tedavi ortamı.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-bg">
                <span>👨‍⚕️</span>
              </div>
              <div className="feature-content">
                <h3>Uzman Kadro</h3>
                <p>Alanında uzman ve deneyimli diş hekimleri ile güvenilir, kaliteli tedavi hizmeti.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-bg">
                <span>😊</span>
              </div>
              <div className="feature-content">
                <h3>Hasta Memnuniyeti</h3>
                <p>10.000'den fazla mutlu hasta ile %98 memnuniyet oranı ve güler yüzlü hizmet.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-bg">
                <span>🛡️</span>
              </div>
              <div className="feature-content">
                <h3>Hijyen & Sterilizasyon</h3>
                <p>Uluslararası standartlarda sterilizasyon protokolleri ile güvenli tedavi ortamı.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-bg">
                <span>💰</span>
              </div>
              <div className="feature-content">
                <h3>Uygun Fiyat</h3>
                <p>Kaliteli hizmeti uygun fiyatlarla sunuyor, esnek taksit seçenekleri sağlıyoruz.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-bg">
                <span>🕐</span>
              </div>
              <div className="feature-content">
                <h3>Esnek Çalışma Saatleri</h3>
                <p>Hafta içi ve cumartesi günleri hizmet vererek randevu kolaylığı sağlıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Değerlerimiz</h2>
          <p className="section-subtitle">Bizi biz yapan temel değerler</p>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon">🎯</span>
              <h3>Güvenilirlik</h3>
              <p>Hastalarımızın sağlığı ve güveni her zaman önceliğimizdir.</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🔬</span>
              <h3>Teknoloji</h3>
              <p>En son teknolojik gelişmeleri takip eder ve uygularız.</p>
            </div>
            <div className="value-item">
              <span className="value-icon">❤️</span>
              <h3>İnsan Odaklılık</h3>
              <p>Her hastamıza birey olarak yaklaşır, özel ilgi gösteririz.</p>
            </div>
            <div className="value-item">
              <span className="value-icon">📚</span>
              <h3>Sürekli Gelişim</h3>
              <p>Ekibimiz sürekli eğitim alarak kendini geliştirir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta-content">
          <h2>Sağlıklı Gülüşler İçin Bize Ulaşın</h2>
          <p>Uzman ekibimiz sizi bekliyor. Hemen randevu alın.</p>
          <div className="about-cta-buttons">
            <Link to="/randevu" className="about-cta-btn primary">Randevu Al</Link>
            <Link to="/iletisim" className="about-cta-btn secondary">İletişim</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
