import { Text } from 'react-native';
import { KeyboardAwareScrollView } from '~/components/ui/KeyboardAwareScrollView';

import CompanyDetailsForm from '~/components/forms/CompanyDetailsForm';

export default function RecipientDetails() {
  return (
    <KeyboardAwareScrollView>
      <Text className="mb-5 text-2xl font-bold">Your Company Info</Text>
      <CompanyDetailsForm companyType="recipient" />
    </KeyboardAwareScrollView>
  );
}
