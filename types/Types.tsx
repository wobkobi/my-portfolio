/* eslint-disable no-unused-vars */
import { ReactNode } from "react";

export interface DataBox {
  id: string;
  title: string;
  summary: string;
  subtitle?: string;
  details: string[];
  link?: { url: string; text: string };
}

export interface DetailBoxProps {
  id: string;
  subtitle: string;
  details: string[];
  isVisible: boolean;
  link?: { url: string; text: string };
}

export interface ExpandableBoxProps {
  id: string;
  title: string;
  summary?: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  assignRef?: (el: HTMLDivElement) => void;
}

export interface ProvidersProps {
  children: ReactNode;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  links: string | string[]; // Links can be a string or an array of strings
  skills: string[];
}
export interface AboutPageProps {
  Introduction: string;
  Background: string;
  Interests: string;
  Goals: string;
}

export interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export interface EmailModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}
