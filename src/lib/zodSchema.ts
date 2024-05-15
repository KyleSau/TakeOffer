// zodSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    company: z.string().optional(), // not required
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
    message: z.string().optional(), // not required
    // files: z.array(z.string()).optional()
});
