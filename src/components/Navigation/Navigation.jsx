import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Box, Heading } from '@chakra-ui/react';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav" display="flex" alignItems="center" gridGap={3}>
      <NavLink to="/">
        <Heading size="md" textAlign="center">
          Home
        </Heading>
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Box>
  );
};

export default Navigation;
