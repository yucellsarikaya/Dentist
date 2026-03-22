import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaTooth, FaSyringe, FaStethoscope, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQPage.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqCategories: { title: string; icon: ReactNode; items: FAQItem[] }[] = [
  {
    title: "Genel Sorular",
    icon: <FaTooth />,
    items: [
      {
        question: "İlk muayene ücretli midir?",
        answer: "Hayır, kliniğimizde ilk muayene ve konsültasyon tamamen ücretsizdir. Tedavi planınız ve fiyat bilgisi muayene sonrasında detaylı olarak paylaşılır.",
      },
      {
        question: "Randevumu nasıl iptal edebilirim?",
        answer: "Randevunuzu telefon, WhatsApp veya online randevu sistemi üzerinden en az 24 saat öncesinden iptal edebilir veya erteleyebilirsiniz.",
      },
      {
        question: "Kliniğinizde hangi sigorta ve anlaşmalar geçerli?",
        answer: "SGK anlaşmamız bulunmamaktadır, ancak özel sağlık sigortalarının birçoğu ile anlaşmalıyız. Detaylı bilgi için bizi arayabilirsiniz.",
      },
      {
        question: "Taksit seçeneğiniz var mı?",
        answer: "Evet, tüm kredi kartlarına 12 aya kadar taksit imkanı sunuyoruz. Ayrıca anlaşmalı bankalarla özel taksit kampanyalarımız da mevcuttur.",
      },
    ],
  },
  {
    title: "Tedaviler Hakkında",
    icon: <FaSyringe />,
    items: [
      {
        question: "Diş implantı ne kadar sürer?",
        answer: "İmplant cerrahisi genellikle 30-60 dakika sürer. Ancak implantın kemiğe kaynaşması (osseointegrasyon) 2-4 ay arasında sürebilir. Bu süre sonunda üst protez yerleştirilir.",
      },
      {
        question: "Diş beyazlatma zararlı mıdır?",
        answer: "Profesyonel diş beyazlatma işlemi, uzman kontrolünde yapıldığında diş minesine zarar vermez. Kliniğimizde kullanılan ürünler uluslararası sertifikalara sahiptir.",
      },
      {
        question: "Kanal tedavisi ağrılı mıdır?",
        answer: "Modern anestezi yöntemleri sayesinde kanal tedavisi sırasında ağrı hissedilmez. Tedavi sonrasında hafif bir hassasiyet olabilir, bu birkaç gün içinde geçer.",
      },
      {
        question: "Ortodonti tedavisi kaç ay sürer?",
        answer: "Ortodonti tedavisi kişinin diş yapısına göre 6 ay ile 2 yıl arasında değişebilir. Şeffaf plak tedavilerinde süre genellikle daha kısadır.",
      },
      {
        question: "Laminate veneer kaç yıl dayanır?",
        answer: "Kaliteli porselen laminate veneer uygulamaları, doğru bakım ile 10-15 yıl ve üzeri dayanabilir. Düzenli diş hekimi kontrolleri ömrünü uzatır.",
      },
    ],
  },
  {
    title: "Bakım & Sonrası",
    icon: <FaStethoscope />,
    items: [
      {
        question: "Tedavi sonrası nelere dikkat etmeliyim?",
        answer: "Tedavi türüne göre değişmekle birlikte, genel olarak ilk 24 saat sıcak yiyecek ve içeceklerden kaçınılması, yumuşak gıda tüketilmesi önerilir. Doktorunuz size özel talimatlar verecektir.",
      },
      {
        question: "Diş implantı sonrası ne zaman yemek yiyebilirim?",
        answer: "İmplant cerrahisi sonrası ilk 2-3 gün yumuşak gıdalar tüketmeniz önerilir. Tam iyileşme ve üst yapı yerleştikten sonra normal beslenmenize dönebilirsiniz.",
      },
      {
        question: "Ne sıklıkla diş kontrolüne gitmeliyim?",
        answer: "Genel olarak 6 ayda bir diş kontrolü yaptırmanız önerilir. Ortodonti veya implant tedavisi olan hastaların kontrol sıklığı doktorun önerisine göre değişebilir.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({
    "Genel Sorular": 0,
    "Tedaviler Hakkında": null,
    "Bakım & Sonrası": null,
  });

  const toggle = (category: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="faq-page">
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <h1>Sıkça Sorulan Sorular</h1>
          <p>Merak ettiklerinize hızlıca yanıt bulun</p>
          <div className="about-hero-breadcrumb">
            <Link to="/">Ana Sayfa</Link>
            <span>/</span>
            <span>SSS</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="faq-categories">
            {faqCategories.map((cat) => (
              <div key={cat.title} className="faq-category">
                <div className="faq-category-header">
                  <span className="faq-category-icon">{cat.icon}</span>
                  <h2>{cat.title}</h2>
                </div>
                <div className="faq-list">
                  {cat.items.map((item, index) => (
                    <div
                      key={index}
                      className={`faq-item ${openItems[cat.title] === index ? "faq-open" : ""}`}
                    >
                      <button className="faq-question" onClick={() => toggle(cat.title, index)}>
                        <span>{item.question}</span>
                        <span className="faq-toggle-icon">
                          {openItems[cat.title] === index ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </button>
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact-cta">
            <h3>Sorunuzun cevabını bulamadınız mı?</h3>
            <p>Bize ulaşın, size yardımcı olalım.</p>
            <div className="faq-cta-buttons">
              <Link to="/iletisim" className="faq-cta-btn primary">İletişime Geç</Link>
              <Link to="/randevu" className="faq-cta-btn secondary">Randevu Al</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
