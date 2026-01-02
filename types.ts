import { LucideIcon } from "lucide-react";

export interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  label: string;
  icon: LucideIcon;
}

export interface Host {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  level: string;
  members: number;
}
