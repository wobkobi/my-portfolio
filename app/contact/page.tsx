// app/contact/page.tsx
/**
 * @description
 * Renders the Contact Me page.
 */

import PageWrapper from "@/components/PageWrapper";
import ContactForm from "@/components/contact/ContactForm";
import { JSX } from "react";
import { FiMail } from "react-icons/fi";

const cardClasses = "bg-platinum-700 dark:bg-jet-300 rounded-sm p-4 shadow-md";
const titleClasses =
  "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl";
const emailWrapperClasses = "flex items-center justify-center gap-2 text-lg md:text-xl";
const iconClasses = "text-indigo_dye dark:text-caribbean_current inline text-2xl md:text-3xl";
const linkClasses =
  "text-indigo_dye hover:text-caribbean_current dark:text-caribbean_current dark:hover:text-indigo_dye";

/**
 * ContactPage component.
 * @returns The contact page layout.
 */
function ContactPage(): JSX.Element {
  return (
    <PageWrapper>
      <h1 className={titleClasses}>Contact Me</h1>
      <div className={cardClasses}>
        <div className="mb-8 text-center">
          <div className={emailWrapperClasses}>
            <FiMail className={iconClasses} aria-hidden="true" />
            <a href="mailto:harrisonraynes8@gmail.com" className={linkClasses}>
              harrisonraynes8@gmail.com
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </PageWrapper>
  );
}

export default ContactPage;
