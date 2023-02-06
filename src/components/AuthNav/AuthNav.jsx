import { Box, Button } from '@chakra-ui/react';
import { IoMdLogIn } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/register', text: 'Register' },
  { href: '/login', text: 'LogIn' },
];

const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center" gridGap={3}>
      {navItems.map(({ href, text }) => {
        return (
          <Button
            key={href}
            variant="outline"
            size="sm"
            colorScheme="black"
            gap={2}
          >
            <NavLink to={href}>{text}</NavLink>
            <IoMdLogIn />
          </Button>
        );
      })}
    </Box>
  );
};

export default AuthNav;
