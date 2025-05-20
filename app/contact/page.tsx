// app/contact/page.tsx
/**
 * @file ContactPage.tsx
 * @description
 * Renders the Contact Me page in a centered card container to match site-wide layout conventions.
 */

import ContactForm from "@/components/contact/ContactForm";
import cn from "@/utils/cn";
import { JSX } from "react";
import { FiMail } from "react-icons/fi";

/**
 * ContactPage component.
 * @returns The contact page layout.
 */
function ContactPage(): JSX.Element {
  const containerClasses = cn("flex grow flex-col items-center justify-center");
  const mainClasses = cn("p-4 pt-6 text-center sm:pt-7");
  const contentWrapper = cn(
    "mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 p-4"
  );
  const cardClasses = cn(
    "bg-platinum-700 dark:bg-jet-300 rounded-sm p-4 shadow-md"
  );
  const titleClasses = cn(
    "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold",
    "sm:text-4xl md:text-5xl"
  );
  const emailWrapperClasses = cn(
    "flex items-center justify-center gap-2 text-lg md:text-xl"
  );
  const iconClasses = cn(
    "text-indigo_dye dark:text-caribbean_current inline text-2xl",
    "md:text-3xl"
  );
  const linkClasses = cn(
    "text-indigo_dye hover:text-caribbean_current",
    "dark:text-caribbean_current dark:hover:text-indigo_dye"
  );

  return (
    <div className={containerClasses}>
      <main className={mainClasses}>
        <h1 className={titleClasses}>Contact Me</h1>
        <div className={cn(contentWrapper, cardClasses)}>
          <div className="mb-8 text-center">
            <div className={emailWrapperClasses}>
              <FiMail className={iconClasses} aria-hidden="true" />
              <a
                href="mailto:harrisonraynes8@gmail.com"
                className={linkClasses}>
                harrisonraynes8@gmail.com
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
