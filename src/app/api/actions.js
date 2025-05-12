"use server";
import { Resend } from "resend";
import { z } from "zod";
import EmailTemplate from "../components/emailTemplate/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const QuoteSchema = z.object({
  fullName: z.string().min(1),
  address: z.string().min(1),
  email: z.string().email(),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/),
  service: z.string().min(1),
  details: z.string().min(1),
});

export async function sendQuote(formData) {
  const data = Object.fromEntries(formData); // plain object
  const result = QuoteSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      "Validation failed: " + JSON.stringify(result.error.format())
    );
  }
  const { fullName, address, email, phone, service, details } = result.data;

  const { data: resp, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["theoterrabella@gmail.com"],
    subject: `Quote Request - ${service} from ${fullName}`,
    react: (
      <EmailTemplate
        {...{ fullName, address, email, phone, service, details }}
      />
    ),
  });

  if (error) {
    throw new Error("Email send error: " + JSON.stringify(error));
  }

  return { success: true, resp }; // only plain JSON
}
