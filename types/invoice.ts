import { CompanyDetailsSchema } from '~/lib/schemas/company-details-schema';
import { InvoiceInfoSchema } from '~/lib/schemas/invoice-info-schema';
import { InvoiceItemsSchema } from '~/lib/schemas/invoice-item-schema';

export type Invoice = {
  senderInfo: CompanyDetailsSchema;
  recipientInfo: CompanyDetailsSchema;
  invoiceInfo: InvoiceInfoSchema;
  items: InvoiceItemsSchema;
};
