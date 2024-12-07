import { z } from 'zod';

export const senderInfoSchema = z.object({
  // Company Basic Info
  companyName: z.string().min(1, 'Company name is required').max(100, 'Company name is too long'),
  registrationNumber: z.string().min(1, 'Registration number is required'),
  vatNumber: z.string().optional(),
  // Address
  address: z.string().min(1, 'Address is required').max(200, 'Address is too long'),
  city: z.string().min(1, 'City is required').max(100, 'City name is too long'),
  state: z.string().min(1, 'State is required').max(100, 'State name is too long'),
  zipCode: z
    .string()
    .min(1, 'ZIP code is required')
    .regex(/^\d{4,5}(-\d{4})?$/, 'Invalid ZIP code'),
  country: z.string().min(1, 'Country is required'),

  // Banking Information
  bankName: z.string().min(1, 'Bank name is required'),
  bankAccountIBAN: z
    .string()
    .min(1, 'IBAN is required')
    .regex(/^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/, 'Invalid IBAN format'),
  bankSwiftBic: z
    .string()
    .min(1, 'BIC/SWIFT code is required')
    .regex(/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/, 'Invalid BIC/SWIFT code'),

  // Responsible Person
  responsiblePerson: z
    .string()
    .min(1, 'Responsible person name is required')
    .max(100, 'Name is too long'),
});

export type SenderInfoSchema = z.infer<typeof senderInfoSchema>;
