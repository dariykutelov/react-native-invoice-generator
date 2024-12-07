import { TextInput, Text, View, TextInputProps } from 'react-native';

type CustomTextInputProps = TextInputProps & {
  label: string;
};

export const CustomTextInput = ({ label, ...props }: CustomTextInputProps) => {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-lg">{label}</Text>
      <TextInput
        className={`rounded border border-gray-300 bg-white p-4 ${props.className}`}
        {...props}
      />
    </View>
  );
};
