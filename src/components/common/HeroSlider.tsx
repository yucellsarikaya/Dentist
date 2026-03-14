import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import clinicConfig from "../../config/clinic";
import "./HeroSlider.css";

interface Slide {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: clinicConfig.name,
    description:
      "Profesyonel kadro ve güler yüzlü hizmetimiz ile diş sağlığınız emin ellerde.",
    buttonText: "Hakkımızda",
    buttonLink: "/hakkimizda",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80",
  },
  {
    title: "Gülüşünüzü Bizimle Tasarlayın",
    description:
      "Estetik diş hekimliği ve gülüş tasarımı ile hayalinizdeki gülüşe kavuşun.",
    buttonText: "Hizmetlerimiz",
    buttonLink: "/hizmetler",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80",
  },
  {
    title: "Uzman Doktor Kadromuz",
    description:
      "Alanında deneyimli diş hekimlerimiz ile güvenilir ve ağrısız tedavi.",
    buttonText: "Doktorlarımız",
    buttonLink: "/doktorlar",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1600&q=80",
  },
  {
    title: "Hemen Randevu Alın",
    description:
      "Diş sağlığınızı ihmal etmeyin. Online randevu ile hızlıca yerinizi ayırtın.",
    buttonText: "Randevu Al",
    buttonLink: "/randevu",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1600&q=80",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "slide-active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="container slide-content">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-description">{slide.description}</p>
            <Link to={slide.buttonLink} className="slide-btn">
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      {/* Ok Butonları */}
      <button className="slider-arrow slider-arrow-left" onClick={prev} aria-label="Önceki">
        ‹
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={next} aria-label="Sonraki">
        ›
      </button>

      {/* Dot Göstergeleri */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === current ? "dot-active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
