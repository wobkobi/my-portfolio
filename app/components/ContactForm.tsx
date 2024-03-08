// components/ContactForm.tsx
"use client";

import React, { useState, ChangeEvent } from "react";
import { cn } from "../utils/cn";

interface FormData {
  fullName: string;
  userEmail: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    userEmail: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data to send:", formData);
  };

  return (
    <div className={cn("w-full rounded-lg bg-white p-6 shadow-md md:w-3/4")}>
      <div
        className={cn(
          "w-full max-w-2xl rounded-lg bg-white p-6 shadow-md md:max-w-3xl",
        )}
      >
        <h2 className={cn("mb-4 text-lg font-semibold text-gray-800")}>
          Contact Me
        </h2>
        <p className={cn("mb-4 text-gray-600")}>
          Fill out the form below to send me an email.
        </p>
        <form onSubmit={handleSubmit} className={cn("space-y-4")}>
          <div>
            <label
              htmlFor="fullName"
              className={cn("block text-sm font-medium text-gray-700")}
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className={cn(
                "focus:border-blue-500 focus:ring-blue-500 mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-1",
              )}
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="userEmail"
              className={cn("block text-sm font-medium text-gray-700")}
            >
              Email
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              className={cn(
                "focus:border-blue-500 focus:ring-blue-500 mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-1",
              )}
              value={formData.userEmail}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className={cn("block text-sm font-medium text-gray-700")}
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className={cn(
                "focus:border-blue-500 focus:ring-blue-500 mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-1",
              )}
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className={cn("block text-sm font-medium text-gray-700")}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className={cn(
                "focus:border-blue-500 focus:ring-blue-500 mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-1",
              )}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className={cn(
              "bg-blue-600 hover:bg-red-600 focus:ring-blue-500 w-full rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
            )}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
