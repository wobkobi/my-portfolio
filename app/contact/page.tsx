// pages/contact.tsx

import Head from "next/head";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>

      {/* Apply universal background colors for light and dark modes */}
      <div className="flex min-h-screen flex-col items-center justify-center">
        {/* Ensure the card contrasts against the background appropriately */}
        <div className="w-full max-w-2xl rounded bg-white px-6 py-8 shadow-md dark:bg-jet-400">
          <h1 className="mb-4 text-center text-4xl font-bold text-indigo_dye dark:text-caribbean_current">
            Contact Me
          </h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
