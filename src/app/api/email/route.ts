// src/app/api/email/route.ts
/**
 * @description
 * Serverless API route to accept contact form submissions and queue emails via
 * a pooled Nodemailer transport. Uses Gmail SMTP with connection pooling for
 * efficient delivery. Returns an immediate JSON acknowledgement.
 */

import { FormData } from "@/types/Types";
import { NextResponse, type NextRequest } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// Read once so the transport and the handler agree on what is configured.
const MY_EMAIL = process.env.MY_EMAIL;
const MY_PASSWORD = process.env.MY_PASSWORD;

/**
 * Nodemailer transport configuration using SMTP pooling.
 * Pooling reuses connections for multiple messages, improving performance.
 * Auth is left off entirely when either credential is unset, so that importing
 * this module during a build that holds no secrets still succeeds. A request
 * arriving without credentials is refused by the handler instead.
 */
const transport: Transporter = nodemailer.createTransport({
  pool: true, // enable connection pooling
  maxConnections: 5, // allow up to 5 simultaneous SMTP connections
  service: "gmail", // use Gmail SMTP service
  host: "smtp.gmail.com",
  port: 465, // SSL port
  secure: true, // use SSL
  ...(MY_EMAIL && MY_PASSWORD ? { auth: { user: MY_EMAIL, pass: MY_PASSWORD } } : {}),
});

/**
 * POST handler for the email API.
 * @async
 * @param request - The incoming Next.js API request.
 * @returns JSON response acknowledging queuing, or 500 when the mailbox is unset.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  // Nothing can be sent without a mailbox, so refuse rather than acknowledge a
  // send that silently drops.
  if (!MY_EMAIL) {
    console.error("MY_EMAIL is not set; the contact form cannot send mail.");
    return NextResponse.json({ message: "Email is not configured" }, { status: 500 });
  }

  // Parse JSON body from the request
  const { email, name, subject, message } = (await request.json()) as FormData;

  /**
   * Mail options for Nodemailer.
   */
  const mailOptions: Mail.Options = {
    from: MY_EMAIL, // sender address
    to: MY_EMAIL, // recipient (self)
    subject, // subject line from form
    text: `From: ${name}\nEmail: ${email}\n\n${message}`,
  };

  // Send mail asynchronously; errors logged but not awaited
  transport.sendMail(mailOptions, (err) => {
    if (err) {
      console.error("Mail send failed:", err);
      // Option: integrate retry logic or persistent error logging here
    }
  });

  // Return immediate acknowledgement to client
  return NextResponse.json({ message: "Email queued" });
}
