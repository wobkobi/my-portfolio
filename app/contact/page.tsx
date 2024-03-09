// pages/contact.tsx

import Head from "next/head";
import Nav from "@/components/Nav.client";
import ContactForm from "@/components/ContactForm";
import { cn } from "@/utils/cn";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div
        className={cn(
          "bg-paynes_gray flex min-h-screen flex-col items-center justify-center",
        )}
      >
        <div
          className={cn(
            "w-full max-w-2xl rounded bg-white px-6 py-8 shadow-md",
          )}
        >
          <h1
            className={cn(
              "text-raisin_black mb-4 text-center text-4xl font-bold",
            )}
          >
            Contact Me
          </h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
