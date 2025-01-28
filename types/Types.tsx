/* eslint-disable no-unused-vars */
import { ReactNode } from "react";

export type DataBox = {
  id: string;
  title: string;
  summary: string;
  subtitle?: string;
  details: string[];
  link?: { url: string; text: string };
};

export type DetailBoxProps = {
  id: string;
  subtitle: string;
  details: string[];
  isVisible: boolean;
  link?: { url: string; text: string };
};

export type ExpandableBoxProps = {
  id: string;
  title: string;
  summary?: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  assignRef?: (el: HTMLDivElement) => void;
};

export type ProvidersProps = {
  children: ReactNode;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  links: string | string[]; // Links can be a string or an array of strings
  skills: string[];
};
