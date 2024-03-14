"use client";

import { cn } from "../utils/cn"; // Make sure this utility path is correct
import { sendEmail } from "../utils/sendEmail";
import { useForm } from "react-hook-form";

export type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6")}>
      <input
        type="text"
        className={cn("w-full rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum")}
        placeholder="Full Name"
        {...register("fullName", { required: true })}
      />
      <input
        type="email"
        className={cn("w-full rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum")}
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <input
        type="text"
        className={cn("w-full rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum")}
        placeholder="Subject"
        {...register("subject", { required: true })}
      />
      <textarea
        className={cn("w-full rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum")}
        placeholder="Message"
        {...register("message", { required: true })}
        rows={4}
      />
      <button
        type="submit"
        className={cn("mt-2 w-full rounded border border-transparent bg-indigo_dye px-4 py-2 text-white hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye")}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
