import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short').max(100),
  email: z.string().email('Invalid email').max(200),
  phone: z.string().max(30).optional().or(z.literal('')),
  message: z.string().min(5, 'Message is too short').max(2000)
});

export function parseContact(input) {
  return contactSchema.safeParse(input);
}


