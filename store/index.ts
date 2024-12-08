import { create } from 'zustand';
import { CompanyDetailsSchema } from '~/lib/schemas/company-details-schema';
import { InvoiceInfoSchema } from '~/lib/schemas/invoice-info-schema';
import { InvoiceItemsSchema } from '~/lib/schemas/invoice-item-schema';
import { Invoice } from '~/types/invoice';

export interface InvoiceState {
  newInvoice: Partial<Invoice>;
  addSenderInfo: (senderInfo: CompanyDetailsSchema) => void;
  addRecipientInfo: (recipientInfo: CompanyDetailsSchema) => void;
  addInvoiceInfo: (invoiceInfo: InvoiceInfoSchema) => void;
  addItems: (items: InvoiceItemsSchema) => void;
  getSubtotal: () => number;
}

export const useStore = create<InvoiceState>((set, get) => ({
  newInvoice: {},
  addSenderInfo: (senderInfo) =>
    set((state) => ({ newInvoice: { ...state.newInvoice, senderInfo } })),
  addRecipientInfo: (recipientInfo) =>
    set((state) => ({ newInvoice: { ...state.newInvoice, recipientInfo } })),
  addInvoiceInfo: (invoiceInfo) =>
    set((state) => ({ newInvoice: { ...state.newInvoice, invoiceInfo } })),
  addItems: (items) => set((state) => ({ newInvoice: { ...state.newInvoice, items } })),
  getSubtotal: () => {
    const items = get().newInvoice.items?.items;
    if (!items) return 0;
    return items.reduce((acc, item) => acc + item.itemPrice * item.itemQuantity, 0);
  },
}));
