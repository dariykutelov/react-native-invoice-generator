import { ScrollView, Text, View } from 'react-native';
import { useStore } from '~/store';

export default function Summary() {
  const invoice = useStore((state) => state.newInvoice);
  const subtotal = useStore((state) => state.getSubtotal());

  return (
    <ScrollView>
      <View className="gap-4 p-3">
        {/* Sender Info Card */}
        {invoice.senderInfo && (
          <View className="rounded-lg bg-white p-4 shadow-sm">
            <Text className="mb-2 text-lg font-semibold">Sender Info</Text>
            <View className="gap-1">
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Company Name:</Text> {invoice.senderInfo.companyName}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Registration Number:</Text>{' '}
                {invoice.senderInfo.registrationNumber}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Tax/ Vat ID:</Text> {invoice.senderInfo.vatNumber}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Responsible Person:</Text>{' '}
                {invoice.senderInfo.responsiblePerson}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Address:</Text> {invoice.senderInfo.address}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">City:</Text> {invoice.senderInfo.city}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">State:</Text> {invoice.senderInfo.state}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Zip Code:</Text> {invoice.senderInfo.zipCode}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Country:</Text> {invoice.senderInfo.country}
              </Text>
            </View>
          </View>
        )}
        {/* Recipient Info Card */}
        {invoice.recipientInfo && (
          <View className="rounded-lg bg-white p-4 shadow-sm">
            <Text className="mb-2 text-lg font-semibold">Recipient Info</Text>
            <View className="gap-1">
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Company Name:</Text> {invoice.recipientInfo.companyName}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Registration Number:</Text>{' '}
                {invoice.recipientInfo.registrationNumber}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Tax/ Vat ID:</Text> {invoice.recipientInfo.vatNumber}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Responsible Person:</Text>{' '}
                {invoice.recipientInfo.responsiblePerson}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Address:</Text> {invoice.recipientInfo.address}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">City:</Text> {invoice.recipientInfo.city}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">State:</Text> {invoice.recipientInfo.state}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Zip Code:</Text> {invoice.recipientInfo.zipCode}
              </Text>
              <Text className="text-sm text-gray-700">
                <Text className="font-bold">Country:</Text> {invoice.recipientInfo.country}
              </Text>
            </View>
          </View>
        )}

        {/* Invoice Info Card */}
        {invoice.invoiceInfo && (
          <View className="rounded-lg bg-white p-4 shadow-sm">
            <Text className="mb-2 text-lg font-semibold">Invoice Info</Text>
            <Text className="text-sm text-gray-700">
              <Text className="font-bold">Invoice Number:</Text> {invoice.invoiceInfo.invoiceNumber}
            </Text>
            <Text className="text-sm text-gray-700">
              <Text className="font-bold">Issue Date:</Text>{' '}
              {new Date(invoice.invoiceInfo.issueDate).toLocaleDateString()}
            </Text>
            <Text className="text-sm text-gray-700">
              <Text className="font-bold">Due Date:</Text>{' '}
              {invoice.invoiceInfo.dueDate
                ? new Date(invoice.invoiceInfo.dueDate).toLocaleDateString()
                : 'N/A'}
            </Text>
            <Text className="text-sm text-gray-700">
              <Text className="font-bold">Tax Event Date:</Text>{' '}
              {new Date(invoice.invoiceInfo.taxEventDate).toLocaleDateString()}
            </Text>
            <Text className="text-sm text-gray-700">
              <Text className="font-bold">Payment Type:</Text> {invoice.invoiceInfo.paymentType}
            </Text>
            <Text className="text-sm text-gray-700">
              <Text className="font-bold">Currency:</Text> {invoice.invoiceInfo.currency.currency} (
              {invoice.invoiceInfo.currency.sign})
            </Text>
            <Text className="text-sm text-gray-700">
              <Text className="font-bold">Discount:</Text>{' '}
              {invoice.invoiceInfo.discount ? `${invoice.invoiceInfo.discount}%` : 'N/A'}
            </Text>
            <Text className="text-sm text-gray-700">
              <Text className="font-bold">Tax:</Text>{' '}
              {invoice.invoiceInfo.tax ? `${invoice.invoiceInfo.tax}%` : 'N/A'}
            </Text>
            <Text className="text-sm text-gray-700">
              <Text className="font-bold">Notes:</Text>{' '}
              {invoice.invoiceInfo.notes ? invoice.invoiceInfo.notes : 'N/A'}
            </Text>
          </View>
        )}

        {/* Invoice Items Card */}
        {invoice.items && (
          <View className="rounded-lg bg-white p-4 shadow-sm">
            <Text className="mb-2 text-lg font-semibold">Invoice Items</Text>
            <View className="flex-row justify-between">
              <Text className="flex-1">Item</Text>
              <Text className="w-20 text-right">Quantity</Text>
              <Text className="w-20 text-right">Price</Text>
              <Text className="w-20 text-right">Total</Text>
            </View>
            {invoice.items.items.map((item) => (
              <View key={item.itemName} className="flex-row justify-between">
                <Text className="flex-1">{item.itemName}</Text>
                <Text className="w-20 text-right">
                  {item.itemQuantity} {item.itemUnit}
                </Text>
                <Text className="w-20 text-right">{item.itemPrice}</Text>
                <Text className="w-20 text-right">{item.itemPrice * item.itemQuantity}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Totals Card */}
        <View className="rounded-lg bg-white p-4 shadow-sm">
          <Text className="mb-2 text-lg font-semibold">Totals</Text>
          <Text className="text-sm text-gray-700">
            {invoice.invoiceInfo?.tax ? 'Subtotal' : 'Total amount'}: ${subtotal}
          </Text>
        </View>
        {invoice.invoiceInfo && invoice.invoiceInfo.tax && (
          <>
            <Text className="text-sm text-gray-700">
              Tax: ${subtotal * (invoice.invoiceInfo.tax / 100)}
            </Text>
            <View className="flex-row justify-between border-t border-gray-200 pt-2">
              <Text className="text-sm text-gray-700">
                Total After Tax: ${subtotal + subtotal * (invoice.invoiceInfo.tax / 100)}
              </Text>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}
