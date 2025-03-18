"use client";
import EmailModal from "@/components/contact/EmailModal";
import SendEmail from "@/utils/SendEmail";
import cn from "@/utils/cn";
import { useState } from "react";
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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  async function onSubmit(data: FormData) {
    try {
      const response = await SendEmail(data);
      if (response.message === "Email sent") {
        setModalMessage("Email sent!");
      } else {
        setModalMessage("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setModalMessage("An error occurred. Please try again.");
    }
    setModalOpen(true);
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6")}>
        <input
          type="text"
          className={cn(
            "text-jet dark:bg-jet dark:text-platinum w-full rounded-sm border bg-white p-3 dark:border-transparent",
            errors.name && "border-red-500"
          )}
          placeholder="Full Name or Company Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          type="email"
          className={cn(
            "text-jet dark:bg-jet dark:text-platinum w-full rounded-sm border bg-white p-3 dark:border-transparent",
            errors.email && "border-red-500"
          )}
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          type="text"
          className={cn(
            "text-jet dark:bg-jet dark:text-platinum w-full rounded-sm border bg-white p-3 dark:border-transparent",
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
            "text-jet dark:bg-jet dark:text-platinum w-full resize-none rounded-sm border bg-white p-3 dark:border-transparent",
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
          className={`bg-indigo_dye hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye mt-2 w-full rounded px-4 py-2 text-white ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
      <EmailModal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
