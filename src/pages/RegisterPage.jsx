import { Card, CardBody, Divider, Heading, Stack } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const RegisterPage = () => {
  return (
    <Card w="500px" maxW="500px" boxShadow="md" mr="auto" ml="auto" pb={4}>
      <CardBody>
        <Stack spacing="3">
          <Heading size="md" textAlign="center">
            Register
          </Heading>
        </Stack>
      </CardBody>
      <Divider />
      <RegisterForm />
    </Card>
  );
};
