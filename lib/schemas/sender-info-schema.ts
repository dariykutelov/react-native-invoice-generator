import { z } from 'zod';

export const senderInfoSchema = z.object({
  companyName: z.string().min(1, 'Company name is required').max(100, 'Company name is too long'),

  email: z.string().min(1, 'Email is required').email('Invalid email address'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\+?[\d\s-()]{10,}$/, 'Invalid phone number'),

  address: z.string().min(1, 'Address is required').max(200, 'Address is too long'),

  city: z.string().min(1, 'City is required').max(100, 'City name is too long'),

  state: z.string().min(1, 'State is required').max(100, 'State name is too long'),

  zipCode: z
    .string()
    .min(1, 'ZIP code is required')
    .regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
});

export type SenderInfoSchema = z.infer<typeof senderInfoSchema>;
