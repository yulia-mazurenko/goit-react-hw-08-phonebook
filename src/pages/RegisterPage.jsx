import { Card, CardBody, Heading, Stack } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const RegisterPage = () => {
  return (
    <Card w="600px" maxW="600px" boxShadow="md" mr="auto" ml="auto" pb={4}>
      <CardBody padding="12px">
        <Stack spacing="3">
          <Heading size="md" textAlign="center">
            Register
          </Heading>
        </Stack>
      </CardBody>
      <hr
        style={{ border: '1px solid rgba(66, 153, 225, 0.6)', width: '100%' }}
      />
      <RegisterForm />
    </Card>
  );
};
