"use client";
import { useForm } from "react-hook-form";
import cn from "../utils/cn"; // Make sure this utility path is correct
import { sendEmail } from "../utils/sendEmail";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data)
      .then((response) => {
        if (response.message === "Email sent") {
          reset();
        }
        alert(response.message);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6")}>
      <input
        type="text"
        className={cn("w-full rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum")}
        placeholder="Full Name or Company Name"
        {...register("name", { required: true })}
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
        className={cn("min-h-[8rem] w-full resize-none rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum")}
        placeholder="Message"
        {...register("message", { required: true })}
      />
      <button
        type="submit"
        className={cn(
          "mt-2 w-full rounded border border-transparent bg-indigo_dye px-4 py-2 text-white hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye"
        )}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
