import { useState, useRef, useCallback } from "react";
import "./BeforeAfter.css";

interface BeforeAfterItem {
  id: string;
  title: string;
  before: string;
  after: string;
}

const cases: BeforeAfterItem[] = [
  {
    id: "1",
    title: "Diş Beyazlatma",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },
  {
    id: "2",
    title: "Laminate Veneer",
    before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
    after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  },
];

function BeforeAfterSlider({ item }: { item: BeforeAfterItem }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    updatePos(e.clientX);

    const onMouseMove = (ev: MouseEvent) => {
      if (isDragging.current) updatePos(ev.clientX);
    };
    const onMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updatePos(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) updatePos(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="ba-card">
      <h3 className="ba-title">{item.title}</h3>
      <div
        className="ba-slider"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* After resmi - tam arka plan */}
        <div className="ba-layer">
          <img src={item.after} alt={`${item.title} - Sonra`} draggable={false} />
        </div>

        {/* Before resmi - clip ile kırpılmış */}
        <div
          className="ba-layer ba-clip"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img src={item.before} alt={`${item.title} - Önce`} draggable={false} />
        </div>

        {/* Çizgi ve Tutamak */}
        <div className="ba-divider" style={{ left: `${sliderPos}%` }}>
          <div className="ba-line"></div>
          <div className="ba-grip">
            <span>◂ ▸</span>
          </div>
        </div>

        {/* Etiketler */}
        <span className="ba-label ba-label-before">ÖNCE</span>
        <span className="ba-label ba-label-after">SONRA</span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="section ba-section">
      <div className="container">
        <h2 className="section-title">Tedavi Öncesi & Sonrası</h2>
        <p className="section-subtitle">
          Tedavi sonuçlarımızı görmek için kaydırıcıyı sürükleyin
        </p>
        <div className="ba-grid">
          {cases.map((c) => (
            <BeforeAfterSlider key={c.id} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
