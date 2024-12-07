import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { View, Text, ScrollView } from 'react-native';
import { CustomTextInput } from '~/components/forms/custom-fields/CustomTextInput';
import { Button } from '~/components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { senderInfoSchema, type SenderInfoSchema } from '~/lib/schemas/sender-info-schema';

export default function SenderInfoForm() {
  const form = useForm<SenderInfoSchema>({
    resolver: zodResolver(senderInfoSchema),
    defaultValues: {
      companyName: '',
      registrationNumber: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      bankName: '',
      bankAccountIBAN: '',
      bankSwiftBic: '',
    },
  });

  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<SenderInfoSchema> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <ScrollView className="flex-1">
        <View className="flex-1 px-4 py-6">
          {/* Company Basic Info Section */}
          <View className="mb-8">
            <View className="mb-6 border-l-4 border-blue-500 pl-3">
              <Text className="text-xl font-semibold text-gray-800">Company Information</Text>
              <Text className="mt-1 text-sm text-gray-500">Enter your company's basic details</Text>
            </View>
            <View className="gap-4 rounded-lg bg-white p-4 shadow-sm">
              <CustomTextInput
                label="Company Name"
                name="companyName"
                placeholder="Enter company name"
              />
              <CustomTextInput
                label="Registration Number"
                name="registrationNumber"
                placeholder="Enter registration number"
              />
              <CustomTextInput
                label="Tax or VAT Number"
                name="vatNumber"
                placeholder="Enter VAT/Tax number (optional)"
              />
              <CustomTextInput
                label="Responsible Person"
                name="responsiblePerson"
                placeholder="Enter name of responsible person"
              />
            </View>
          </View>

          {/* Address Section */}
          <View className="mb-8">
            <View className="mb-6 border-l-4 border-green-500 pl-3">
              <Text className="text-xl font-semibold text-gray-800">Address</Text>
              <Text className="mt-1 text-sm text-gray-500">
                Provide your company's address details
              </Text>
            </View>
            <View className="gap-4 rounded-lg bg-white p-4 shadow-sm">
              <CustomTextInput
                label="Street Address"
                name="address"
                multiline
                numberOfLines={3}
                placeholder="Enter street address"
              />
              <View className="flex-row gap-4">
                <View className="flex-1">
                  <CustomTextInput label="City" name="city" placeholder="Enter city" />
                </View>
                <View className="flex-1">
                  <CustomTextInput label="State/Province" name="state" placeholder="Enter state" />
                </View>
              </View>
              <View className="flex-row gap-4">
                <View className="flex-1">
                  <CustomTextInput
                    label="ZIP/Postal Code"
                    name="zipCode"
                    keyboardType="numeric"
                    placeholder="Enter ZIP code"
                  />
                </View>
                <View className="flex-1">
                  <CustomTextInput label="Country" name="country" placeholder="Enter country" />
                </View>
              </View>
            </View>
          </View>

          {/* Banking Information Section */}
          <View className="mb-8">
            <View className="mb-6 border-l-4 border-purple-500 pl-3">
              <Text className="text-xl font-semibold text-gray-800">Banking Information</Text>
              <Text className="mt-1 text-sm text-gray-500">
                Add your banking details for invoicing
              </Text>
            </View>
            <View className="gap-4 rounded-lg bg-white p-4 shadow-sm">
              <CustomTextInput label="Bank Name" name="bankName" placeholder="Enter bank name" />
              <CustomTextInput
                label="Account number / IBAN"
                name="bankAccountIBAN"
                autoCapitalize="characters"
                placeholder="Enter IBAN"
              />
              <CustomTextInput
                label="BIC/SWIFT Code"
                name="bankSwiftBic"
                autoCapitalize="characters"
                placeholder="Enter BIC/SWIFT code"
              />
            </View>
          </View>

          <Button
            title="Save Company Information"
            className="mt-4 rounded-lg bg-blue-600 py-4"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </FormProvider>
  );
}
