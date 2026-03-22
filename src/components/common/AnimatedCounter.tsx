import { useState, useEffect, useRef, type ReactNode } from "react";
import { FaCalendarAlt, FaSmile, FaUserMd, FaStar } from "react-icons/fa";
import "./AnimatedCounter.css";

interface CounterItem {
  target: number;
  suffix: string;
  label: string;
  icon: ReactNode;
}

const counters: CounterItem[] = [
  { target: 15, suffix: "+", label: "Yıl Deneyim", icon: <FaCalendarAlt /> },
  { target: 10000, suffix: "+", label: "Mutlu Hasta", icon: <FaSmile /> },
  { target: 4, suffix: "", label: "Uzman Doktor", icon: <FaUserMd /> },
  { target: 98, suffix: "%", label: "Memnuniyet", icon: <FaStar /> },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function CounterBox({ item, inView }: { item: CounterItem; inView: boolean }) {
  const count = useCountUp(item.target, 2000, inView);

  return (
    <div className="counter-box">
      <span className="counter-icon">{item.icon}</span>
      <span className="counter-number">
        {count.toLocaleString("tr-TR")}
        {item.suffix}
      </span>
      <span className="counter-label">{item.label}</span>
    </div>
  );
}

export default function AnimatedCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="counter-section" ref={ref}>
      <div className="container counter-grid">
        {counters.map((item) => (
          <CounterBox key={item.label} item={item} inView={inView} />
        ))}
      </div>
    </section>
  );
}
