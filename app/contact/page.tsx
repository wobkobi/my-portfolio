import ContactForm from "@/components/ContactForm";
import cn from "@/utils/cn";
import Head from "next/head";
import { FiMail } from "react-icons/fi";

const ContactPage = () => {
  const yourEmail = "harrisonraynes8@gmail.com";
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>

      <div className={cn("flex min-h-screen flex-col items-center justify-center bg-white dark:bg-jet")}>
        <div className={cn("w-full max-w-2xl rounded px-6 py-8 shadow-md dark:bg-jet-400")}>
          <h1 className={cn("mb-4 text-center text-4xl font-bold text-indigo_dye dark:text-caribbean_current")}>Contact Me</h1>

          {/* Section for email */}
          <div className={cn("mb-8 text-center")}>
            <div className={cn("flex items-center justify-center gap-2 text-xl")}>
              {" "}
              {/* Increased text size */}
              <FiMail className={cn("inline-block ")} /> {/* Email Icon */}
              <a href={`mailto:${yourEmail}`} className={cn("text-indigo_dye hover:underline dark:text-caribbean_current")}>
                {yourEmail}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
