// Klinik türleri - farklı klinikler için ayarlanabilir
export const ClinicType = {
  GENERAL: "general",
  ORTHODONTICS: "orthodontics",
  PEDIATRIC: "pediatric",
  COSMETIC: "cosmetic",
  IMPLANT: "implant",
} as const;
export type ClinicType = (typeof ClinicType)[keyof typeof ClinicType];

export const AppointmentStatus = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  CANCELLED: "cancelled",
  COMPLETED: "completed",
  NO_SHOW: "no_show",
} as const;
export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus];

export const ServiceCategory = {
  GENERAL: "Genel Diş Hekimliği",
  ORTHODONTICS: "Ortodonti",
  COSMETIC: "Estetik Diş Hekimliği",
  IMPLANT: "İmplant",
  PEDIATRIC: "Çocuk Diş Hekimliği",
  SURGERY: "Ağız ve Diş Cerrahisi",
  ENDODONTICS: "Endodonti (Kanal Tedavisi)",
  PERIODONTICS: "Periodontoloji",
  PROSTHETICS: "Protez Diş Hekimliği",
  WHITENING: "Diş Beyazlatma",
} as const;
export type ServiceCategory = (typeof ServiceCategory)[keyof typeof ServiceCategory];

export const DayOfWeek = {
  MONDAY: "Pazartesi",
  TUESDAY: "Salı",
  WEDNESDAY: "Çarşamba",
  THURSDAY: "Perşembe",
  FRIDAY: "Cuma",
  SATURDAY: "Cumartesi",
  SUNDAY: "Pazar",
} as const;
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const UserRole = {
  ADMIN: "admin",
  DOCTOR: "doctor",
  ASSISTANT: "assistant",
  PATIENT: "patient",
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const Gender = {
  MALE: "Erkek",
  FEMALE: "Kadın",
  OTHER: "Diğer",
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender];

export const PaymentStatus = {
  PENDING: "Beklemede",
  PAID: "Ödendi",
  PARTIAL: "Kısmi Ödeme",
  REFUNDED: "İade Edildi",
} as const;
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

export const PaymentMethod = {
  CASH: "Nakit",
  CREDIT_CARD: "Kredi Kartı",
  INSURANCE: "Sigorta",
  BANK_TRANSFER: "Havale/EFT",
} as const;
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
