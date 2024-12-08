import { Text } from 'react-native';
import { KeyboardAwareScrollView } from '~/components/ui/KeyboardAwareScrollView';

import ItemsForm from '~/components/forms/ItemsForm';

export default function InvoiceInfo() {
  return (
    <KeyboardAwareScrollView>
      <Text className="mb-5 text-2xl font-bold">Invoice Items</Text>
      <ItemsForm />
    </KeyboardAwareScrollView>
  );
}
