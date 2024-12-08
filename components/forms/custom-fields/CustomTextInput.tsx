import { useController } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form';
import { TextInput, Text, View, TextInputProps } from 'react-native';

type CustomTextInputProps = TextInputProps & {
  label: string;
  name: string;
  rules?: RegisterOptions<FieldValues, string>;
};

export const CustomTextInput = ({ label, name, rules, ...props }: CustomTextInputProps) => {
  const {
    field: { onChange, value, onBlur },
    fieldState: { error },
  } = useController({ name, rules });

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
