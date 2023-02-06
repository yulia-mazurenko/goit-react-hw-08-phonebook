import { Card, CardBody, Divider, Heading, Stack } from '@chakra-ui/react';
import LoginForm from 'components/LoginForm';

export const LogInPage = () => {
  return (
    <Card w="500px" maxW="500px" boxShadow="md" mr="auto" ml="auto" pb={4}>
      <CardBody>
        <Stack spacing="3">
          <Heading size="md" textAlign="center">
            LogIn
          </Heading>
        </Stack>
      </CardBody>
      <Divider />
      <LoginForm />
    </Card>
  );
};
