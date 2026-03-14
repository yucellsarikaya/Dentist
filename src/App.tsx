import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="hizmetler" element={<Services />} />
          <Route path="doktorlar" element={<Doctors />} />
          <Route path="randevu" element={<Appointment />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="fiyatlar" element={<Pricing />} />
          <Route path="galeri" element={<Gallery />} />
          <Route path="sss" element={<FAQPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
