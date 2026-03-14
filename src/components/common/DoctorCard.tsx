import type { Doctor } from "../../types";
import "./DoctorCard.css";

interface Props {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: Props) {
  return (
    <div className="doctor-card">
      <div className="doctor-image">
        <img src={doctor.image} alt={doctor.name} />
      </div>
      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-title">{doctor.title}</p>
        <p className="doctor-specialty">{doctor.specialty}</p>
        <p className="doctor-bio">{doctor.bio}</p>
      </div>
    </div>
  );
}
