import { FaStar, FaRegStar } from "react-icons/fa";
import type { Testimonial } from "../../types";
import "./TestimonialCard.css";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {Array.from({ length: 5 }, (_, i) =>
          i < testimonial.rating ? (
            <FaStar key={i} className="star-filled" />
          ) : (
            <FaRegStar key={i} className="star-empty" />
          )
        )}
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <p className="testimonial-author">— {testimonial.name}</p>
    </div>
  );
}
