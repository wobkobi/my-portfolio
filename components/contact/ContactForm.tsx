/**
 * @file ContactForm.tsx
 * @description
 * A controlled contact form using react-hook-form that submits form data to the email API,
 * displays validation errors, and shows a modal confirmation on success or failure.
 */

"use client";

import { FormData } from "@/types/Types";
import sendEmail from "@/utils/SendEmail";
import cn from "@/utils/cn";
import { JSX, useState } from "react";
import { useForm } from "react-hook-form";
import EmailModal from "./EmailModal";

/**
 * ContactForm component.
 *
 * Renders inputs for name, email, subject and message with validation,
 * and handles form submission to send an email. Shows a modal with the
 * result message upon completion.
 * @returns The contact form and confirmation modal.
 */
function ContactForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // Modal open state and message content
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  /**
   * Handle form submission.
   * Sends form data via sendEmail util and displays result in modal.
   * @param data - The validated form data.
   */
  async function onSubmit(data: FormData): Promise<void> {
    try {
      await sendEmail(data);
      setModalMessage("Email Sent!");
    } catch (error) {
      console.error("Email sending error:", error);
      // Show the error message if available, otherwise generic text
      setModalMessage(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );
    }
    setModalOpen(true);
    reset();
  }

  // Common input classes
  const inputClass = cn(
    "text-jet dark:bg-jet dark:text-platinum w-full rounded-sm border bg-white p-3 dark:border-transparent"
  );

  // Button classes with disabled state styling
  const buttonClass = cn(
    "bg-indigo_dye hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye mt-2 w-full rounded px-4 py-2 text-white",
    isSubmitting && "cursor-not-allowed opacity-50"
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6")}>
        <input
          type="text"
          placeholder="Full Name or Company Name"
          className={cn(inputClass, errors.name && "border-red-500")}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          className={cn(inputClass, errors.email && "border-red-500")}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="text"
          placeholder="Subject"
          className={cn(inputClass, errors.subject && "border-red-500")}
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p className="text-red-500">{errors.subject.message}</p>
        )}

        <textarea
          placeholder="Message"
          rows={4}
          className={cn(inputClass, errors.message && "border-red-500")}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <button type="submit" disabled={isSubmitting} className={buttonClass}>
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

export default ContactForm;
