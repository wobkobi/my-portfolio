// components/ContactForm.tsx
"use client";

import React, { FC } from "react";
import { cn } from "../utils/cn"; // Make sure this utility path is correct
import { sendEmail } from "../utils/sendEmail";
import { useForm } from "react-hook-form";

export type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6")}>
      <input
        type="text"
        className={cn("w-full rounded border p-3 text-gray-700")}
        placeholder="Full Name"
        {...register("fullName", { required: true })}
      />
      <input
        type="email"
        className={cn("w-full rounded border p-3 text-gray-700")}
        placeholder="Email"
        {...register("email", { required: true })}
      />

      <input
        type="text"
        className={cn("w-full rounded border p-3 text-gray-700")}
        placeholder="Subject"
        {...register("subject", { required: true })}
      />

      <textarea
        className={cn("w-full rounded border p-3 text-gray-700")}
        placeholder="Message"
        {...register("message", { required: true })}
      />
      <button
        type="submit"
        className={cn(
          "bg-plum hover:bg-timberwolf w-full rounded border border-transparent px-4 py-2 text-white",
        )}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
