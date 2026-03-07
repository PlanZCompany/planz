// app/actions/contact.ts
"use server";

import { sendContactEmail } from "@/lib/mailer";
import type { ContactFormPayload } from "@/lib/ContactEmail";
import { Locale } from "@/types";

export async function submitContactForm(
  data: { payload: ContactFormPayload },
  locale: Locale
) {
  const payload = data.payload;

  if (!payload.name || !payload.email || !payload.message) {
    return {
      ok: false,
      error:
        locale === "en"
          ? "All fields are required."
          : "Всички полета са задължителни.",
    };
  }

  try {
    await sendContactEmail(payload);
    return { ok: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      ok: false,
      error: "Failed to send message.",
    };
  }
}
