import ContactForm from "@/components/ContactForm";
import cn from "@/utils/cn";
import { FiMail } from "react-icons/fi";

export default function ContactPage() {
  const yourEmail = "harrisonraynes8@gmail.com";
  return (
    <>
      <div
        className={cn(
          "flex min-h-screen flex-col items-center justify-center bg-white p-4 dark:bg-jet"
        )}>
        <div
          className={cn(
            "xl:w-85% 2xl:w-80% rounded px-6 py-8 shadow-md dark:bg-jet-400 sm:w-11/12 md:w-4/5 lg:w-3/4"
          )}>
          <h1
            className={cn(
              "mb-6 text-center text-2xl font-bold text-indigo_dye dark:text-caribbean_current sm:text-3xl md:text-4xl"
            )}>
            Contact Me
          </h1>

          <div className={cn("mb-8 text-center")}>
            <div
              className={cn(
                "flex items-center justify-center gap-2 text-lg md:text-xl"
              )}>
              <FiMail
                className={cn(
                  "inline text-2xl text-indigo_dye dark:text-caribbean_current md:text-3xl"
                )}
              />
              <a
                href={`mailto:${yourEmail}`}
                className={cn(
                  "text-indigo_dye hover:text-caribbean_current dark:text-caribbean_current dark:hover:text-indigo_dye"
                )}>
                {yourEmail}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
