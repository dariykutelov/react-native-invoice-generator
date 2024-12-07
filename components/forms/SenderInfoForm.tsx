import { useForm, SubmitHandler, FieldValues, FormProvider } from 'react-hook-form';
import { View } from 'react-native';
import { CustomTextInput } from '~/components/forms/custom-fields/CustomTextInput';
import { Button } from '~/components/ui/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const senderInfoSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(3, { message: 'Name should be at least 3 characters' }),
  address: z
    .string({ required_error: 'Address is required' })
    .min(3, { message: 'Address should be at least 3 characters' }),
  taxId: z.string().optional(),
});

type SenderInfoSchema = z.infer<typeof senderInfoSchema>;

export default function SenderInfoForm() {
  const form = useForm<SenderInfoSchema>({
    resolver: zodResolver(senderInfoSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<SenderInfoSchema> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <View className="gap-4">
        <CustomTextInput label="Name" name="name" rules={{ required: 'Name is required' }} />

        <CustomTextInput
          label="Address"
          name="address"
          rules={{ required: 'Address is required' }}
        />
        <CustomTextInput label="Tax ID" name="taxId" rules={{ required: 'Tax ID is required' }} />
      </View>
      <Button title="Next" className="mt-auto" onPress={handleSubmit(onSubmit)} />
    </FormProvider>
  );
}
