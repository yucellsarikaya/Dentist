import type { ReactNode } from "react";
import { AppointmentStatus, Gender, PaymentMethod, PaymentStatus, ServiceCategory, UserRole } from "../config/enums";

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: ServiceCategory;
  bio: string;
  image: string;
  phone?: string;
  email?: string;
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  icon: ReactNode;
  image?: string;
  duration: number; // dakika
  price?: number;
}

export interface Patient {
  id: string;
  name: string;
  surname: string;
  phone: string;
  email?: string;
  birthDate: string;
  gender: Gender;
  tcNo?: string;
  address?: string;
  notes?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  serviceId: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  notes?: string;
}

export interface Payment {
  id: string;
  patientId: string;
  appointmentId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  date: string;
}

export interface User {
  id: string;
  username: string;
  role: UserRole;
  name: string;
  email: string;
}

export interface MenuItem {
  label: string;
  path: string;
  icon?: ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}
