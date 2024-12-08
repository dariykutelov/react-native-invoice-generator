import { Text } from 'react-native';
import CompanyDetailsForm from '~/components/forms/CompanyDetailsForm';
import { KeyboardAwareScrollView } from '~/components/ui/KeyboardAwareScrollView';

export default function GenerateInvoice() {
  return (
    <KeyboardAwareScrollView>
      <Text className="mb-5 text-2xl font-bold">Your Company Info</Text>
      <CompanyDetailsForm companyType="sender" />
    </KeyboardAwareScrollView>
  );
}
