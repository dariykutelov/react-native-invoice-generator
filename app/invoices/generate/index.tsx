import { Text } from 'react-native';
import SenderInfoForm from '~/components/forms/SenderInfoForm';
import { KeyboardAwareScrollView } from '~/components/ui/KeyboardAwareScrollView';

export default function GenerateInvoice() {
  return (
    <KeyboardAwareScrollView>
      <Text className="mb-5 text-2xl font-bold">Sender Info</Text>
      <SenderInfoForm />
    </KeyboardAwareScrollView>
  );
}
