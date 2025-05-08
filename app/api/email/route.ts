// app/api/email/route.ts
import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

//
// 1) Create a single, pooled transport once:
//
const transport = nodemailer.createTransport({
  pool: true, // enable pooling
  maxConnections: 5, // up to 5 simultaneous SMTP connections
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { email, name, subject, message } = await request.json();

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject,
    text: `From: ${name}\nEmail: ${email}\n\n${message}`,
  };

  //
  // 2) Kick off sendMail but don’t await it
  //
  transport.sendMail(mailOptions, (err) => {
    if (err) {
      console.error("Mail send failed:", err);
      // you could optionally retry or log to a database here
    }
  });

  // Immediately return success to the client
  return NextResponse.json({ message: "Email queued" });
}
