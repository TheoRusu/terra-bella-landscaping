"use server";
import { z } from "zod";

const QuoteSchema = z.object({
  fullName: z.string().min(1),
  address: z.string().min(1),
  email: z.string().email(),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/),
  service: z.string().min(1),
  details: z.string().min(1),
});

export async function sendQuote(formData) {
  const data = Object.fromEntries(formData);
  const result = QuoteSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      "Validation failed: " + JSON.stringify(result.error.format())
    );
  }

  console.log(result.data);
}
