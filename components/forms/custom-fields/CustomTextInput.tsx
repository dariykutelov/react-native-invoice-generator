import { useController } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { Control, RegisterOptions } from 'react-hook-form';
import { TextInput, Text, View, TextInputProps } from 'react-native';

type CustomTextInputProps = TextInputProps & {
  label: string;
  name: string;
  control: Control<FieldValues>;
  rules?: RegisterOptions<FieldValues, string>;
};

export const CustomTextInput = ({
  label,
  control,
  name,
  rules,
  ...props
}: CustomTextInputProps) => {
  const {
    field: { onChange, value, onBlur },
    fieldState: { error },
  } = useController({ control, name, rules });

  return (
    <View className="gap-2">
      <Text className="text-lg">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        className={`rounded border p-4 ${
          error ? 'border-red-500' : 'border-gray-300'
        } bg-white ${props.className}`}
        {...props}
      />
      {error && <Text className="text-sm text-red-500">{error.message}</Text>}
    </View>
  );
};
