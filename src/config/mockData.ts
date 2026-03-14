import { ServiceCategory } from "./enums";
import type { Doctor, Service, Testimonial } from "../types";

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Ahmet Yılmaz",
    title: "Diş Hekimi",
    specialty: ServiceCategory.GENERAL,
    bio: "15 yıllık deneyime sahip genel diş hekimliği uzmanı. İstanbul Üniversitesi Diş Hekimliği Fakültesi mezunu.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Dr. Elif Kaya",
    title: "Ortodonti Uzmanı",
    specialty: ServiceCategory.ORTHODONTICS,
    bio: "Ortodonti alanında 10 yıllık tecrübe. Görünmez plak ve şeffaf telsiz uygulamalarında uzman.",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Dr. Mehmet Demir",
    title: "İmplant Uzmanı",
    specialty: ServiceCategory.IMPLANT,
    bio: "İmplant cerrahisi ve protez üzerine uzmanlaşmış. Uluslararası sertifikalara sahip.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Dr. Ayşe Öztürk",
    title: "Estetik Diş Hekimi",
    specialty: ServiceCategory.COSMETIC,
    bio: "Gülüş tasarımı ve estetik diş hekimliği konusunda uzman. Laminate veneer ve bonding uygulamaları.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  },
];

export const services: Service[] = [
  {
    id: "1",
    name: "Diş Dolgusu",
    category: ServiceCategory.GENERAL,
    description: "Çürük dişlerin kompozit veya porselen dolgu ile tedavisi. Estetik ve dayanıklı sonuçlar.",
    icon: "🦷",
    duration: 45,
  },
  {
    id: "2",
    name: "Kanal Tedavisi",
    category: ServiceCategory.ENDODONTICS,
    description: "İltihaplanmış veya enfekte olmuş diş sinirlerinin tedavisi. Ağrısız ve güvenli prosedür.",
    icon: "💉",
    duration: 60,
  },
  {
    id: "3",
    name: "Diş İmplantı",
    category: ServiceCategory.IMPLANT,
    description: "Eksik dişlerin titanyum implantlar ile kalıcı ve doğal görünümlü restorasyonu.",
    icon: "🔩",
    duration: 90,
  },
  {
    id: "4",
    name: "Ortodonti (Tel Tedavisi)",
    category: ServiceCategory.ORTHODONTICS,
    description: "Çapraşık ve düzensiz dişlerin metal veya şeffaf braketler ile düzeltilmesi.",
    icon: "😁",
    duration: 30,
  },
  {
    id: "5",
    name: "Diş Beyazlatma",
    category: ServiceCategory.WHITENING,
    description: "Profesyonel diş beyazlatma işlemi ile parlak ve beyaz bir gülümseme.",
    icon: "✨",
    duration: 60,
  },
  {
    id: "6",
    name: "Laminate Veneer",
    category: ServiceCategory.COSMETIC,
    description: "İnce porselen kaplamalar ile mükemmel bir gülüş tasarımı. Doğal ve estetik sonuçlar.",
    icon: "💎",
    duration: 60,
  },
  {
    id: "7",
    name: "Diş Eti Tedavisi",
    category: ServiceCategory.PERIODONTICS,
    description: "Diş eti hastalıklarının teşhisi ve tedavisi. Sağlıklı diş etleri için kapsamlı bakım.",
    icon: "🩺",
    duration: 45,
  },
  {
    id: "8",
    name: "Protez (Takma Diş)",
    category: ServiceCategory.PROSTHETICS,
    description: "Sabit veya hareketli protezler ile eksik dişlerin fonksiyonel ve estetik restorasyonu.",
    icon: "🦷",
    duration: 60,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Zeynep H.",
    text: "İmplant tedavim çok başarılı geçti. Doktorlar çok ilgili ve profesyonel. Kesinlikle tavsiye ederim!",
    rating: 5,
  },
  {
    id: "2",
    name: "Mustafa K.",
    text: "Diş beyazlatma yaptırdım, sonuçlar harika! Kliniğin temizliği ve hijyeni de çok iyi.",
    rating: 5,
  },
  {
    id: "3",
    name: "Fatma S.",
    text: "Yıllardır ertelediğim kanal tedavisini burada yaptırdım. Hiç ağrı hissetmedim, çok memnunum.",
    rating: 4,
  },
  {
    id: "4",
    name: "Ali R.",
    text: "Çocuğumun ortodonti tedavisi için geldik. Doktorlar çocuklara çok iyi yaklaşıyor. Teşekkürler!",
    rating: 5,
  },
];
