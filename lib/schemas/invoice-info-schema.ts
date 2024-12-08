import { z } from 'zod';

export const paymentTypes = ['cash', 'by card', 'by bank'] as const;

export type CurrencyInfo = {
  currency: string;
  sign: string;
  signPosition: 'front' | 'end';
};

export const currencies = [
  { currency: 'USD', sign: '$', signPosition: 'front' },
  { currency: 'EUR', sign: '€', signPosition: 'front' },
  { currency: 'BGN', sign: 'лв.', signPosition: 'end' },
] as const;

export const currencySchema = z.object({
  currency: z.enum(['USD', 'EUR', 'BGN']),
  sign: z.enum(['$', '€', 'лв.']),
  signPosition: z.enum(['front', 'end']),
});

export const invoiceInfoSchema = z.object({
  invoiceNumber: z.string().min(1, 'Invoice number is required'),

  issueDate: z.date({
    required_error: 'Issue date is required',
    invalid_type_error: 'Invalid date format',
  }),

  dueDate: z
    .date({
      invalid_type_error: 'Invalid date format',
    })
    .optional()
    .or(z.literal('')),

  taxEventDate: z.date({
    required_error: 'Issue date is required',
    invalid_type_error: 'Invalid date format',
  }),

  paymentType: z.enum(paymentTypes, {
    errorMap: () => ({ message: 'Please select a valid payment type' }),
  }),

  currency: currencySchema.default(currencies[0]),

  discount: z
    .number()
    .min(0, 'Discount cannot be negative')
    .max(100, 'Discount cannot exceed 100%')
    .optional()
    .or(z.literal('')),

  tax: z.number().min(0, 'Tax cannot be negative').max(100, 'Tax cannot exceed 100%'),

  notes: z.string().max(500, 'Notes cannot exceed 500 characters').optional().or(z.literal('')),
});

export type InvoiceInfoSchema = z.infer<typeof invoiceInfoSchema>;
