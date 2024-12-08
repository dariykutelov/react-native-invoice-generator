import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { View, ScrollView } from 'react-native';
import { CustomTextInput } from '~/components/forms/custom-fields/CustomTextInput';
import { Button } from '~/components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';

import { RelativePathString, router } from 'expo-router';
import {
  currencies,
  invoiceInfoSchema,
  type InvoiceInfoSchema,
} from '~/lib/schemas/invoice-info-schema';
import { useStore } from '~/store';

export default function InvoiceInfoForm() {
  const form = useForm<InvoiceInfoSchema>({
    resolver: zodResolver(invoiceInfoSchema),
    defaultValues: {
      invoiceNumber: '1234567890',
      issueDate: new Date(),
      dueDate: new Date(),
      taxEventDate: new Date(),
      paymentType: 'cash',
      currency: currencies[0],
    },
  });

  const { handleSubmit } = form;
  const addInvoiceInfo = useStore((state) => state.addInvoiceInfo);

  const onSubmit: SubmitHandler<InvoiceInfoSchema> = (data) => {
    console.log(data);
    addInvoiceInfo(data);
    router.push('/invoices/generate/invoice-items' as RelativePathString);
  };

  return (
    <FormProvider {...form}>
      <ScrollView className="flex-1">
        <View className="flex-1 px-4 py-6">
          <View className="gap-4 rounded-lg bg-white p-4 shadow-sm">
            <CustomTextInput
              label="Invoice Number"
              name="invoiceNumber"
              placeholder="Enter invoice number"
            />
            <CustomTextInput label="Issue Date" name="issueDate" placeholder="Enter issue date" />
            <CustomTextInput label="Due Date" name="dueDate" placeholder="Enter due date" />
            <CustomTextInput
              label="Tax Event Date"
              name="taxEventDate"
              placeholder="Enter tax event date"
            />

            <CustomTextInput
              label="Invoice Currency"
              name="currency"
              placeholder="Select invoice currency"
            />
            <CustomTextInput
              label="Payment Type"
              name="paymentType"
              placeholder="Select payment type"
            />
          </View>

          <Button
            title={`Save`}
            className="mt-4 rounded-lg bg-blue-600 py-4"
            // onPress={handleSubmit(onSubmit)}
            onPress={() => router.push('/invoices/generate/invoice-items' as RelativePathString)}
          />
        </View>
      </ScrollView>
    </FormProvider>
  );
}
