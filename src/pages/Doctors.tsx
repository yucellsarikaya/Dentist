import DoctorCard from "../components/common/DoctorCard";
import { doctors } from "../config/mockData";
import "./Doctors.css";

export default function Doctors() {
  return (
    <div className="doctors-page">
      <div className="page-header">
        <div className="container">
          <h1>Doktorlarımız</h1>
          <p>Alanında uzman ve deneyimli diş hekimlerimiz</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="doctors-page-grid">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
