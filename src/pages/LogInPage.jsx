import { CardBody, Heading, Stack } from '@chakra-ui/react';
import LoginForm from 'components/LoginForm';
import { Delimiter, WrapperCard } from './Pages.styled';

const LogInPage = () => {
  return (
    <WrapperCard mr="auto" ml="auto" pb={4}>
      <CardBody padding="12px">
        <Stack spacing="3">
          <Heading size="md" textAlign="center">
            LogIn
          </Heading>
        </Stack>
      </CardBody>
      <Delimiter />
      <LoginForm />
    </WrapperCard>
  );
};

export default LogInPage;
