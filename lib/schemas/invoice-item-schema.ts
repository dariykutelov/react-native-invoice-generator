import { z } from 'zod';

export const itemUnits = ['pcs', 'kg', 'tons'] as const;

export const invoiceItemSchema = z.object({
  itemName: z.string().min(1, 'Item name is required'),

  itemPrice: z
    .number()
    .positive('Price must be greater than 0')
    .multipleOf(0.01, 'Price can have up to 2 decimal places'),

  itemUnit: z
    .enum(itemUnits, {
      required_error: 'Unit is required',
      invalid_type_error: 'Invalid unit type',
    })
    .default('pcs'),

  itemQuantity: z
    .number()
    .positive('Quantity must be greater than 0')
    .multipleOf(0.01, 'Quantity can have up to 2 decimal places'),
});

export type InvoiceItemSchema = z.infer<typeof invoiceItemSchema>;

export const invoiceItemsSchema = z.object({
  items: z.array(invoiceItemSchema),
});

export type InvoiceItemsSchema = z.infer<typeof invoiceItemsSchema>;
