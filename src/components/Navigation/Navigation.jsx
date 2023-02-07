import { useAuth } from 'hooks/useAuth';
import { Box, Heading } from '@chakra-ui/react';
import { NavItem } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav" display="flex" alignItems="center" gridGap={4}>
      <NavItem
        to="/"
        className={({ isActive }) => (isActive ? '.active' : undefined)}
      >
        <Heading size="md" textAlign="center">
          Home
        </Heading>
      </NavItem>
      {isLoggedIn && (
        <NavItem
          to="/contacts"
          className={({ isActive }) => (isActive ? '.active' : undefined)}
        >
          <Heading size="md" textAlign="center">
            Contacts
          </Heading>
        </NavItem>
      )}
    </Box>
  );
};

export default Navigation;
