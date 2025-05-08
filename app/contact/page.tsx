/**
 * @file ContactPage.tsx
 * @description
 * Renders the contact page with a mailto link and embedded contact form.
 * Utilises Tailwind CSS via the `cn` helper for responsive, dark‑mode friendly styling.
 *
 */

import ContactForm from "@/components/contact/ContactForm";
import cn from "@/utils/cn";
import { JSX } from "react";
import { FiMail } from "react-icons/fi";

/**
 * ContactPage component.
 *
 * Displays a heading, an email link with iconography, and the contact form.
 *
 * @returns {JSX.Element} The contact page layout.
 */
function ContactPage(): JSX.Element {
  /**
   * The site owner's email address for contact.
   * @constant {string}
   */
  const myEmail = "harrisonraynes8@gmail.com";

  // CSS classes for the page container
  const containerClasses = cn("flex grow flex-col items-center justify-center");
  // CSS classes for the content card
  const cardClasses = cn(
    "bg-platinum-900 dark:bg-jet-400 mt-20 rounded-sm p-4 shadow-md",
    "sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-4/5 2xl:w-3/4"
  );
  // CSS classes for the page title
  const titleClasses = cn(
    "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold",
    "sm:text-4xl md:text-5xl"
  );
  // CSS classes for the email link wrapper
  const emailWrapperClasses = cn(
    "flex items-center justify-center gap-2 text-lg md:text-xl"
  );
  // CSS classes for the mail icon
  const iconClasses = cn(
    "text-indigo_dye dark:text-caribbean_current inline text-2xl",
    "md:text-3xl"
  );
  // CSS classes for the mailto link
  const linkClasses = cn(
    "text-indigo_dye hover:text-caribbean_current",
    "dark:text-caribbean_current dark:hover:text-indigo_dye"
  );

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        <h1 className={titleClasses}>Contact me</h1>

        <div className={cn("mb-8 text-center")}>
          <div className={emailWrapperClasses}>
            <FiMail className={iconClasses} aria-hidden="true" />
            <a href={`mailto:${myEmail}`} className={linkClasses}>
              {myEmail}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
