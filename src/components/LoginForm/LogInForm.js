import { useDispatch } from 'react-redux';
import { Box, Button, Input } from '@chakra-ui/react';
import { logIn } from 'redux/features/auth/authOperations';

const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      onSubmit={handleSubmit}
      autoComplete="off"
      pt={4}
      as="form"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        mb={3}
        as="label"
      >
        Email
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          w="300px"
          size="sm"
          borderColor="rgba(238, 238, 8, 1)"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        mb={3}
        as="label"
      >
        Password
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          w="300px"
          size="sm"
          borderColor="rgba(238, 238, 8, 1)"
        />
      </Box>
      <Button
        type="submit"
        colorScheme="yellow"
        mt={2}
        ml="auto"
        mr="auto"
        w="150px"
      >
        LogIn
      </Button>
    </Box>
  );
};

export default LogInForm;
