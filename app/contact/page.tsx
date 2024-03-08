// pages/contact.tsx

import Head from "next/head";
import React from "react";
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav.client";
import { cn } from "../utils/cn";

const ContactPage = () => {
  return (
    <>
      <Nav />
      <Head>
        <title>Contact Me</title>
      </Head>
      {/* The main container for the Contact page */}
      <div
        className={cn(
          "bg-gray-50flex min-h-screen flex-col items-center pt-24",
        )}
      >
        {/* Title placed in the center of the screen at the top */}
        <div className={cn("w-full text-center")}>
          <h1 className={cn("mb-4 text-4xl font-bold")}>Contact Me</h1>
          <p className={cn("mb-8 text-gray-600")}>
            Fill out the form below to send me an email.
          </p>
        </div>
        {/* Form container with 75% screen width on larger screens */}
        <div className={cn("w-full max-w-4xl px-4")}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
