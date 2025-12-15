// lib/contact-email.ts

export type ContactFormPayload = {
  name: string;
  email: string;
  business?: string;
  phone?: string;
  website?: string;
  budget?: string;
  message: string;
};

export function buildContactEmail(payload: ContactFormPayload) {
  const receivedAt = new Date();

  // Български формат, часова зона София
  const formatter = new Intl.DateTimeFormat("bg-BG", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Sofia",
  });

  const receivedAtLabel = formatter.format(receivedAt);

  const { name, email, business, phone, website, budget, message } = payload;

  const subject = `Ново запитване от ${name} – PlanZ`;

  const lines: string[] = [
    `Дата и час на получаване: ${receivedAtLabel}`,
    "",
    `Име: ${name}`,
    `Имейл: ${email}`,
    business ? `Бизнес: ${business}` : "",
    phone ? `Телефон: ${phone}` : "",
    website ? `Текущ сайт: ${website}` : "",
    budget ? `Бюджет: ${budget}` : "",
    "",
    "Съобщение:",
    message,
  ].filter(Boolean);

  const text = lines.join("\n");

  const html = `
    <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.5; color: #111827;">
      <h2 style="margin: 0 0 4px 0; font-size: 18px;">Ново запитване от сайта (PlanZ)</h2>
      <p style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280;">
        Дата и час на получаване: <strong>${receivedAtLabel}</strong>
      </p>

      <table style="border-collapse: collapse; width: 100%; max-width: 640px; font-size: 14px;">
        <tbody>
          <tr>
            <td style="padding: 4px 8px; font-weight: 600; width: 140px;">Име</td>
            <td style="padding: 4px 8px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px; font-weight: 600;">Имейл</td>
            <td style="padding: 4px 8px;">${escapeHtml(email)}</td>
          </tr>
          ${
            business
              ? `
          <tr>
            <td style="padding: 4px 8px; font-weight: 600;">Бизнес</td>
            <td style="padding: 4px 8px;">${escapeHtml(business)}</td>
          </tr>`
              : ""
          }
          ${
            phone
              ? `
          <tr>
            <td style="padding: 4px 8px; font-weight: 600;">Телефон</td>
            <td style="padding: 4px 8px;">${escapeHtml(phone)}</td>
          </tr>`
              : ""
          }
          ${
            website
              ? `
          <tr>
            <td style="padding: 4px 8px; font-weight: 600;">Текущ сайт</td>
            <td style="padding: 4px 8px;">${escapeHtml(website)}</td>
          </tr>`
              : ""
          }
          ${
            budget
              ? `
          <tr>
            <td style="padding: 4px 8px; font-weight: 600;">Бюджет</td>
            <td style="padding: 4px 8px;">${escapeHtml(budget)}</td>
          </tr>`
              : ""
          }
        </tbody>
      </table>

      <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #e5e7eb;">
        <div style="font-weight: 600; margin-bottom: 4px;">Съобщение</div>
        <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  return {
    subject,
    text,
    html,
  };
}

// проста helper функция за escape на HTML
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
