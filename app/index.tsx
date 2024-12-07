import { Stack, Link } from 'expo-router';
import { Text } from 'react-native';
import { Button } from '~/components/ui/Button';
import { Container } from '~/components/ui/Container';

export default function Home() {
  return (
    <>
      <Container>
        <Link href={{ pathname: '/invoices/generate' }} asChild>
          <Button title="New Invoice" />
        </Link>
      </Container>
    </>
  );
}
