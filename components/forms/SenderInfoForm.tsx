import { useForm, SubmitHandler, FieldValues, FormProvider } from 'react-hook-form';
import { View } from 'react-native';
import { CustomTextInput } from '~/components/forms/custom-fields/CustomTextInput';
import { Button } from '~/components/ui/Button';

export default function SenderInfoForm() {
  const form = useForm();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <View className="gap-4">
        <CustomTextInput
          label="Name"
          name="name"
          control={control}
          rules={{ required: 'Name is required' }}
        />

        <CustomTextInput
          label="Address"
          name="address"
          control={control}
          rules={{ required: 'Address is required' }}
        />
        <CustomTextInput
          label="Tax ID"
          name="taxId"
          control={control}
          rules={{ required: 'Tax ID is required' }}
        />
      </View>
      <Button title="Next" className="mt-auto" onPress={handleSubmit(onSubmit)} />
    </FormProvider>
  );
}
