import type { Testimonial } from "../../types";
import "./TestimonialCard.css";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {"★".repeat(testimonial.rating)}
        {"☆".repeat(5 - testimonial.rating)}
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <p className="testimonial-author">— {testimonial.name}</p>
    </div>
  );
}
