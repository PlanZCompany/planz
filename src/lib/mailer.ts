// lib/mailer.ts
import nodemailer from "nodemailer";
import { buildContactEmail } from "./ContactEmail";
import type { ContactFormPayload } from "./ContactEmail";

const smtpUser = process.env.CONTACT_EMAIL_USER;
const smtpPass = process.env.CONTACT_EMAIL_PASS;
const smtpTo = "simeonrudaski@gmail.com";

if (!smtpUser || !smtpPass) {
  console.warn(
    "CONTACT_EMAIL_USER или CONTACT_EMAIL_PASS не са зададени. Имейлите няма да се изпращат."
  );
}

export const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bulgaria.pomni@gmail.com",
    pass: "mmjsgtjrhlsqnjvk",
  },
});

export async function sendContactEmail(payload: ContactFormPayload) {
  if (!smtpUser || !smtpPass) {
    throw new Error("Email transport is not configured.");
  }

  const { subject, text, html } = buildContactEmail(payload);

  return mailer.sendMail({
    from: `"PlanZ Website" <${smtpUser}>`,
    to: smtpTo,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}
