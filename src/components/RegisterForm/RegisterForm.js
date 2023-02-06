import { useDispatch } from 'react-redux';
import { Box, Button, Input } from '@chakra-ui/react';
import { register } from 'redux/features/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
      as="form"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        mb={3}
        w="300px"
        as="label"
      >
        Username
        <Input type="text" name="name" placeholder="Enter your name" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        mb={3}
        w="300px"
        as="label"
      >
        Email
        <Input type="email" name="email" placeholder="Enter your email" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        mb={3}
        w="300px"
        as="label"
      >
        Password
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </Box>
      <Button type="submit" mr="auto" ml="auto">
        Register
      </Button>
    </Box>
  );
};
