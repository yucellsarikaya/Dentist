import { useState } from "react";
import "./FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "İlk muayene ücretli midir?",
    answer: "Hayır, kliniğimizde ilk muayene ve konsültasyon tamamen ücretsizdir. Tedavi planınız ve fiyat bilgisi muayene sonrasında detaylı olarak paylaşılır.",
  },
  {
    question: "Diş implantı ne kadar sürer?",
    answer: "İmplant cerrahisi genellikle 30-60 dakika sürer. Ancak implantın kemiğe kaynaşması (osseointegrasyon) 2-4 ay arasında sürebilir. Bu süre sonunda üst protez yerleştirilir.",
  },
  {
    question: "Diş beyazlatma zararlı mıdır?",
    answer: "Profesyonel diş beyazlatma işlemi, uzman kontrolünde yapıldığında diş minesine zarar vermez. Kliniğimizde kullanılan ürünler uluslararası sertifikalara sahiptir.",
  },
  {
    question: "Ortodonti tedavisi kaç ay sürer?",
    answer: "Ortodonti tedavisi kişinin diş yapısına göre 6 ay ile 2 yıl arasında değişebilir. Şeffaf plak tedavilerinde süre genellikle daha kısadır.",
  },
  {
    question: "Taksit seçeneğiniz var mı?",
    answer: "Evet, tüm kredi kartlarına 12 aya kadar taksit imkanı sunuyoruz. Ayrıca anlaşmalı bankalarla özel taksit kampanyalarımız da mevcuttur.",
  },
  {
    question: "Randevumu nasıl iptal edebilirim?",
    answer: "Randevunuzu telefon, WhatsApp veya online randevu sistemi üzerinden en az 24 saat öncesinden iptal edebilir veya erteleyebilirsiniz.",
  },
  {
    question: "Kliniğinizde hangi sigorta ve anlaşmalar geçerli?",
    answer: "SGK anlaşmamız bulunmamaktadır, ancak özel sağlık sigortalarının birçoğu ile anlaşmalıyız. Detaylı bilgi için bizi arayabilirsiniz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section">
      <div className="container">
        <h2 className="section-title">Sıkça Sorulan Sorular</h2>
        <p className="section-subtitle">Merak ettiklerinize hızlıca yanıt bulun</p>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "faq-open" : ""}`}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span className="faq-toggle-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
