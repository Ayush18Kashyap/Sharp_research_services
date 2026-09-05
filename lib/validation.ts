import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200)
    .optional()
    .or(z.literal("")),
  phone: z.string().trim().min(6, "Please enter a valid phone number.").max(20),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  source: z.enum(["contact_form", "quick_panel"]),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
