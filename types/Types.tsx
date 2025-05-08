/**
 * @file Types.tsx
 * @description
 * Type definitions for the application including data models, component props,
 * and form payloads. Provides strong typing for portfolio, contact, and error UI.
 */

import { ReactNode } from "react";

/**
 * Generic data structure for summary boxes in the portfolio.
 *
 * @interface DataBox
 * @property {string} id - Unique identifier for the box.
 * @property {string} title - Heading text shown on the box.
 * @property {string} summary - Short summary displayed in collapsed state.
 * @property {string[]} details - Full details shown when expanded.
 * @property {string} [subtitle] - Optional subtitle displayed above details.
 * @property {{ url: string; text: string }} [link] - Optional link object with URL and link text.
 */
export interface DataBox {
  id: string;
  title: string;
  summary: string;
  subtitle?: string;
  details: string[];
  link?: { url: string; text: string };
}

/**
 * Props for the DetailBox component, rendering detailed information.
 *
 * @interface DetailBoxProps
 * @property {string} id - Identifier matching the DataBox.
 * @property {string} subtitle - Subtitle text displayed above the details.
 * @property {string[]} details - Array of detail lines to render.
 * @property {boolean} isVisible - Whether the detail box is currently visible.
 * @property {{ url: string; text: string }} [link] - Optional link for further action.
 */
export interface DetailBoxProps {
  id: string;
  subtitle: string;
  details: string[];
  isVisible: boolean;
  link?: { url: string; text: string };
}

/**
 * Props for the ExpandableBox component, showing a summary and toggle control.
 *
 * @interface ExpandableBoxProps
 * @property {string} id - Unique identifier of this box.
 * @property {string} title - Title displayed on the box header.
 * @property {string} [summary] - Optional brief summary when collapsed.
 * @property {boolean} isExpanded - Current expansion state.
 * @property {(id: string) => void} onToggle - Callback when header is clicked.
 * @property {(el: HTMLDivElement) => void} [assignRef] - Optional ref assignment callback.
 */
export interface ExpandableBoxProps {
  id: string;
  title: string;
  summary?: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  assignRef?: (el: HTMLDivElement) => void;
}

/**
 * Props for top‑level Providers component wrapping the app.
 *
 * @interface ProvidersProps
 * @property {ReactNode} children - React children nodes to render.
 */
export interface ProvidersProps {
  children: ReactNode;
}

/**
 * Represents a software project with metadata and links.
 *
 * @interface Project
 * @property {string} id - Unique project identifier.
 * @property {string} name - Display name of the project.
 * @property {string} description - Brief description of functionality.
 * @property {string} image - URL or path to project image.
 * @property {string | string[]} links - Single or multiple URLs (e.g. repo, live demo).
 * @property {string[]} skills - List of skills or technologies used.
 */
export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  links: string | string[];
  skills: string[];
}

/**
 * Props for the AboutPage component, providing content sections.
 *
 * @interface AboutPageProps
 * @property {string} Introduction - Introductory paragraph text.
 * @property {string} Background - Background or biography text.
 * @property {string} Interests - User's hobbies or interests.
 * @property {string} Goals - Short‑term or long‑term goals description.
 */
export interface AboutPageProps {
  Introduction: string;
  Background: string;
  Interests: string;
  Goals: string;
}

/**
 * Props for the global error fallback UI.
 *
 * @interface GlobalErrorProps
 * @property {Error & { digest?: string }} error - The caught error object.
 * @property {() => void} reset - Function to reset error boundary state.
 */
export interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Data shape for contact form submission.
 *
 * @interface FormData
 * @property {string} name - Name of the sender.
 * @property {string} email - Email address of the sender.
 * @property {string} subject - Subject line of the message.
 * @property {string} message - Body text of the message.
 */
export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Props for the email confirmation modal.
 *
 * @interface EmailModalProps
 * @property {boolean} isOpen - Whether the modal is shown.
 * @property {string} message - Message text to display.
 * @property {() => void} onClose - Callback when modal is dismissed.
 */
export interface EmailModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}
