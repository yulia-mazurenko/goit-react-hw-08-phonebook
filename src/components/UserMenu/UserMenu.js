import { Box, Button, Text } from '@chakra-ui/react';
import { IoMdLogOut } from 'react-icons/io';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/features/auth/authOperations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Box
      as="div"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gridGap={3}
    >
      <Text size="md">
        Welcome, <br />
        {user.name}
      </Text>
      <Button
        variant="outline"
        size="sm"
        colorScheme="black"
        onClick={() => dispatch(logOut())}
      >
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          Logout
          <IoMdLogOut />
        </Box>
      </Button>
    </Box>
  );
};
