import { CardBody, Heading, Stack } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Delimiter, WrapperCard } from './Pages.styled';

const RegisterPage = () => {
  return (
    <WrapperCard mr="auto" ml="auto" pb={4}>
      <CardBody padding="12px">
        <Stack spacing="3">
          <Heading size="md" textAlign="center">
            Register
          </Heading>
        </Stack>
      </CardBody>
      <Delimiter />
      <RegisterForm />
    </WrapperCard>
  );
};

export default RegisterPage;
