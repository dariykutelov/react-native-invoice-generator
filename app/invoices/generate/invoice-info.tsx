import { Text } from 'react-native';
import { KeyboardAwareScrollView } from '~/components/ui/KeyboardAwareScrollView';

import InvoiceInfoForm from '~/components/forms/InvoiceInfoForm';

export default function InvoiceInfo() {
  return (
    <KeyboardAwareScrollView>
      <Text className="mb-5 text-2xl font-bold">Invoice Info</Text>
      <InvoiceInfoForm />
    </KeyboardAwareScrollView>
  );
}
