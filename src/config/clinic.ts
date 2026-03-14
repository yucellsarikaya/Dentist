import { ClinicType, DayOfWeek, ServiceCategory } from "./enums";

export interface ClinicLocation {
  lat: number;
  lng: number;
  zoom: number;
  district: string;
  fullAddress: string;
  directions?: string; // Google Maps yol tarifi linki
  mapEmbedUrl?: string; // Google Maps embed URL - pin ve bilgi kutusu gösterir
}

export interface ClinicConfig {
  name: string;
  slogan: string;
  type: ClinicType;
  logo?: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  location: ClinicLocation;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
    whatsapp?: string;
  };
  workingHours: {
    day: DayOfWeek;
    open: string;
    close: string;
    isClosed: boolean;
  }[];
  services: ServiceCategory[];
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    headerBg: string;
    footerBg: string;
  };
}

// Varsayılan klinik ayarları - her klinik için özelleştirilebilir
const clinicConfig: ClinicConfig = {
  name: "Diş Hekimi Merve Başak Özden",
  slogan: "Sağlıklı Gülüşler, Mutlu Yaşamlar",
  type: ClinicType.GENERAL,
  phone: "+90 (212) 555 0000",
  email: "info@dentcare.com",
  address: "Mutlu, İmam Alim Sultan Cd. NO:95 D:E",
  city: "Ankara",
  location: {
    lat: 39.910757851683435,
    lng: 32.8983972600017,
    zoom: 17,
    district: "Mamak",
    fullAddress: "Mutlu, İmam Alim Sultan Cd. NO:95 D:E, 06630 Mamak/Ankara",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=39.910757851683435,32.8983972600017",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=%C3%96zel+I%C5%9F%C4%B1lt%C4%B1+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Poliklinigi+Mamak+Ankara&t=&z=17&ie=UTF8&iwloc=&output=embed",
  },
  socialMedia: {
    instagram: "https://instagram.com/dentcare",
    facebook: "https://facebook.com/dentcare",
    whatsapp: "https://wa.me/902125550000",
  },
  workingHours: [
    { day: DayOfWeek.MONDAY, open: "09:00", close: "18:00", isClosed: false },
    { day: DayOfWeek.TUESDAY, open: "09:00", close: "18:00", isClosed: false },
    {
      day: DayOfWeek.WEDNESDAY,
      open: "09:00",
      close: "18:00",
      isClosed: false,
    },
    { day: DayOfWeek.THURSDAY, open: "09:00", close: "18:00", isClosed: false },
    { day: DayOfWeek.FRIDAY, open: "09:00", close: "18:00", isClosed: false },
    { day: DayOfWeek.SATURDAY, open: "10:00", close: "14:00", isClosed: false },
    { day: DayOfWeek.SUNDAY, open: "", close: "", isClosed: true },
  ],
  services: [
    ServiceCategory.GENERAL,
    ServiceCategory.ORTHODONTICS,
    ServiceCategory.COSMETIC,
    ServiceCategory.IMPLANT,
    ServiceCategory.WHITENING,
    ServiceCategory.ENDODONTICS,
    ServiceCategory.PERIODONTICS,
    ServiceCategory.PROSTHETICS,
  ],
  theme: {
    primaryColor: "#0ea5e9",
    secondaryColor: "#0284c7",
    accentColor: "#38bdf8",
    headerBg: "#ffffff",
    footerBg: "#0f172a",
  },
};

export default clinicConfig;
