/**
 * @file SendEmail.ts
 * @description
 * Utility function to POST contact form data to the email API endpoint and
 * return a success message or throw an error.
 */

import { FormData } from "@/types/Types";

/**
 * Send email via the serverless API.
 * @async
 * @param data - The form payload containing name, email, subject, message.
 * @returns Resolves with a message on success.
 * @throws {Error} Throws an error with a descriptive message on failure.
 */
async function sendEmail(data: FormData): Promise<{ message: string }> {
  const apiEndpoint = "/api/email";

  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let errorMessage = "An error occurred while sending the email";

    try {
      const parsed: unknown = await response.json();
      if (typeof parsed === "object" && parsed !== null && "error" in parsed) {
        const record = parsed as Record<string, unknown>;
        const errField = record.error;
        if (typeof errField === "string") {
          errorMessage = errField;
        }
      }
    } catch {
      // ignore JSON parse errors
    }

    console.error("Email API error:", errorMessage);
    throw new Error(errorMessage);
  }

  return response.json();
}

export default sendEmail;
