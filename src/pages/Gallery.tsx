import { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80", title: "Klinik Genel Görünüm", category: "Klinik" },
  { id: "2", src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80", title: "Tedavi Odası", category: "Klinik" },
  { id: "3", src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80", title: "Tedavi Anı", category: "Tedavi" },
  { id: "4", src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80", title: "Gülüş Tasarımı Sonucu", category: "Tedavi" },
  { id: "5", src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80", title: "Modern Ekipmanlar", category: "Klinik" },
  { id: "6", src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80", title: "Sterilizasyon Ünitesi", category: "Klinik" },
  { id: "7", src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80", title: "Ortodonti Tedavisi", category: "Tedavi" },
  { id: "8", src: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=600&q=80", title: "Bekleme Salonu", category: "Klinik" },
];

const categories = ["Tümü", "Klinik", "Tedavi"];

export default function Gallery() {
  const [active, setActive] = useState("Tümü");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "Tümü"
    ? galleryItems
    : galleryItems.filter((i) => i.category === active);

  return (
    <div className="gallery-page">
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <h1>Galeri</h1>
          <p>Kliniğimizden kareler ve tedavi sonuçları</p>
          <div className="about-hero-breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span>Galeri</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filtre */}
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setLightbox(item)}
              >
                <img src={item.src} alt={item.title} />
                <div className="gallery-overlay">
                  <span className="gallery-zoom">🔍</span>
                  <span className="gallery-caption">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox.src} alt={lightbox.title} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption">{lightbox.title}</p>
        </div>
      )}
    </div>
  );
}
