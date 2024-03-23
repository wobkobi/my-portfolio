"use client";
import cn from "@/utils/cn"; // Make sure this utility path is correct
import sendEmail from "@/utils/sendEmail";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      const response = await sendEmail(data);
      if (response.message === "Email sent") {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6")}>
      <input
        type="text"
        className={cn(
          "w-full rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum",
          errors.name && "border-red-500"
        )}
        placeholder="Full Name or Company Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="email"
        className={cn(
          "w-full rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum",
          errors.email && "border-red-500"
        )}
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="text"
        className={cn(
          "w-full rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum",
          errors.subject && "border-red-500"
        )}
        placeholder="Subject"
        {...register("subject", { required: "Subject is required" })}
      />
      {errors.subject && (
        <p className="text-red-500">{errors.subject.message}</p>
      )}

      <textarea
        className={cn(
          "w-full resize-none rounded border bg-white p-3 text-jet dark:border-transparent dark:bg-jet dark:text-platinum",
          errors.message && "border-red-500"
        )}
        placeholder="Message"
        {...register("message", { required: "Message is required" })}
        rows={4}
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-2 w-full rounded bg-indigo_dye px-4 py-2 text-white hover:bg-caribbean_current
        dark:bg-caribbean_current dark:hover:bg-indigo_dye ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}>
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
