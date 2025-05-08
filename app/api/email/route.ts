/**
 * @file app/api/email/route.ts
 * @description
 * Serverless API route to accept contact form submissions and queue emails via
 * a pooled Nodemailer transport. Uses Gmail SMTP with connection pooling for
 * efficient delivery. Returns an immediate JSON acknowledgement.
 *
 */

import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

/**
 * Nodemailer transport configuration using SMTP pooling.
 * Pooling reuses connections for multiple messages, improving performance.
 *
 * @constant transport
 * @type {nodemailer.Transporter}
 */
const transport: nodemailer.Transporter = nodemailer.createTransport({
  pool: true, // enable connection pooling
  maxConnections: 5, // allow up to 5 simultaneous SMTP connections
  service: "gmail", // use Gmail SMTP service
  host: "smtp.gmail.com",
  port: 465, // SSL port
  secure: true, // use SSL
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
});

/**
 * POST handler for the email API.
 *
 * @async
 * @param {NextRequest} request - The incoming Next.js API request.
 * @returns {Promise<NextResponse>} JSON response acknowledging queuing.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  // Parse JSON body from the request
  const { email, name, subject, message } = await request.json();

  /**
   * Mail options for Nodemailer.
   *
   * @type {Mail.Options}
   */
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL, // sender address
    to: process.env.MY_EMAIL, // recipient (self)
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
