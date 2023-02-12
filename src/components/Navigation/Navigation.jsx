import { useAuth } from 'hooks/useAuth';
import { Heading } from '@chakra-ui/react';
import { NavItem, Wrapper } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper as="nav" display="flex" alignItems="center" gridGap={3}>
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
    </Wrapper>
  );
};

export default Navigation;
