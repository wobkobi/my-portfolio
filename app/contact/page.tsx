import ContactForm from "@/components/contact/ContactForm";
import cn from "@/utils/cn";
import { FiMail } from "react-icons/fi";

export default function ContactPage() {
  const yourEmail = "harrisonraynes8@gmail.com";
  return (
    <div className={cn("flex grow flex-col items-center justify-center")}>
      <div
        className={cn(
          "bg-platinum-900 dark:bg-jet-400 mt-20 rounded-sm p-4 shadow-md sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-4/5 2xl:w-3/4"
        )}>
        <h1
          className={cn(
            "text-indigo_dye dark:text-caribbean_current mb-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl"
          )}>
          Contact me
        </h1>

        <div className={cn("mb-8 text-center")}>
          <div
            className={cn(
              "flex items-center justify-center gap-2 text-lg md:text-xl"
            )}>
            <FiMail
              className={cn(
                "text-indigo_dye dark:text-caribbean_current inline text-2xl md:text-3xl"
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
  );
}
