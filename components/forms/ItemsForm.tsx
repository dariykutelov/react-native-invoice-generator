import { useForm, SubmitHandler, FormProvider, useFieldArray } from 'react-hook-form';
import { View, ScrollView, Text } from 'react-native';
import { CustomTextInput } from '~/components/forms/custom-fields/CustomTextInput';
import { Button } from '~/components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';

import { RelativePathString, router } from 'expo-router';
import { invoiceItemsSchema, type InvoiceItemsSchema } from '~/lib/schemas/invoice-item-schema';

export default function ItemsForm() {
  const form = useForm<InvoiceItemsSchema>({
    resolver: zodResolver(invoiceItemsSchema),
    defaultValues: {
      items: [
        {
          itemName: '',
          itemPrice: 0,
          itemUnit: 'pcs',
          itemQuantity: 0,
        },
      ],
    },
  });

  const { handleSubmit } = form;
  const { fields, append } = useFieldArray({
    control: form.control,
    name: 'items',
  });

  const onSubmit: SubmitHandler<InvoiceItemsSchema> = (data) => {
    console.log(data);
    //router.push('/invoices/generate/invoice-items' as RelativePathString);
  };

  return (
    <FormProvider {...form}>
      <ScrollView className="flex-1">
        <View className="mb-8 flex-1 px-4 py-6">
          <View className="gap-4">
            {fields.map((_, index) => (
              <View key={index} className="gap-3 rounded-lg bg-white p-4 shadow-sm">
                <Text className="text-lg font-semibold">Item {index + 1}</Text>
                <CustomTextInput
                  label="Item Name"
                  name={`items.${index}.itemName`}
                  placeholder="Enter item name"
                />
                <View className="flex-row items-center justify-between gap-2">
                  <CustomTextInput
                    label="Price"
                    name={`items.${index}.itemPrice`}
                    placeholder="Item price"
                    keyboardType="numeric"
                    inputMode="numeric"
                    onChangeText={(value) => {
                      form.setValue(`items.${index}.itemPrice`, parseFloat(value));
                    }}
                  />
                  <CustomTextInput
                    label="Unit"
                    name={`items.${index}.itemUnit`}
                    placeholder="Item unit"
                  />
                  <CustomTextInput
                    label="Quantity"
                    name={`items.${index}.itemQuantity`}
                    placeholder="Item quantity"
                    keyboardType="numeric"
                    inputMode="numeric"
                    onChangeText={(value) => {
                      form.setValue(`items.${index}.itemQuantity`, parseFloat(value));
                    }}
                  />
                </View>
              </View>
            ))}
          </View>

          <Button
            title={`Add Item`}
            className="mt-4 rounded-lg bg-blue-600 py-4"
            onPress={() => {
              append({
                itemName: '',
                itemPrice: 0,
                itemUnit: 'pcs',
                itemQuantity: 0,
              });
            }}
          />

          <Button
            title={`Save`}
            className="mt-4 rounded-lg bg-blue-600 py-4"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </FormProvider>
  );
}
