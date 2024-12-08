import { Text } from 'react-native';
import { KeyboardAwareScrollView } from '~/components/ui/KeyboardAwareScrollView';

import CompanyDetailsForm from '~/components/forms/CompanyDetailsForm';

export default function InvoiceInfo() {
  return (
    <KeyboardAwareScrollView>
      <Text className="mb-5 text-2xl font-bold">Invoice Info</Text>
    </KeyboardAwareScrollView>
  );
}
