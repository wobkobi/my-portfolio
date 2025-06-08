/**
 * @file Types.tsx
 * @description
 * Type definitions for the application including data models, component props,
 * and form payloads. Provides strong typing for portfolio, contact, and error UI.
 */

import { ReactNode } from "react";

export interface LinkItem {
  url: string;
  text: string;
}
/**
 * Generic data structure for summary boxes in the portfolio.
 * id - Unique identifier for the box.
 * title - Heading text shown on the box.
 * summary - Short summary displayed in collapsed state.
 * details - Full details shown when expanded.
 * [subtitle] - Optional subtitle displayed above details.
 * [link] - Optional link object with URL and link text.
 */
export interface DataBox {
  id: string;
  title: string;
  summary: string;
  subtitle?: string;
  details: string[];
  link?: LinkItem | LinkItem[];
  skills?: string[];
}

/**
 * Props for the DetailBox component, rendering detailed information.
 * id - Identifier matching the DataBox.
 * subtitle - Subtitle text displayed above the details.
 * details - Array of detail lines to render.
 * isVisible - Whether the detail box is currently visible.
 * [link] - Optional link for further action.
 */
export interface DetailBoxProps {
  id: string;
  subtitle: string;
  details: string[];
  skills?: string[];
  isVisible: boolean;
  link?: LinkItem | LinkItem[];
}

/**
 * Props for the ExpandableBox component, showing a summary and toggle control.
 * id - Unique identifier of this box.
 * title - Title displayed on the box header.
 * [summary] - Optional brief summary when collapsed.
 * isExpanded - Current expansion state.
 * onToggle - Callback when header is clicked.
 * [assignRef] - Optional ref assignment callback.
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
 * children - React children nodes to render.
 */
export interface ProvidersProps {
  children: ReactNode;
}

/**
 * Represents a software project with metadata and links.
 * id - Unique project identifier.
 * name - Display name of the project.
 * description - Brief description of functionality.
 * image - URL or path to project image.
 * links - Single or multiple URLs (e.g. repo, live demo).
 * skills - List of skills or technologies used.
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
 * Props for the global error fallback UI.
 * error - The caught error object.
 * reset - Function to reset error boundary state.
 */
export interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Data shape for contact form submission.
 * name - Name of the sender.
 * email - Email address of the sender.
 * subject - Subject line of the message.
 * message - Body text of the message.
 */
export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Props for the email confirmation modal.
 * isOpen - Whether the modal is shown.
 * message - Message text to display.
 * onClose - Callback when modal is dismissed.
 */
export interface EmailModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export interface Certification {
  id: string;
  title: string;
  year: string;
}
