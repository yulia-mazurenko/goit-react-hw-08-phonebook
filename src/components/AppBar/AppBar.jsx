import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

import { Box, Container } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      as="header"
      py={4}
      px={5}
      backgroundColor={'#7688d2'}
      w="500px"
      mr="auto"
      ml="auto"
    >
      <Container
        maxW={'container.md'}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Box>
  );
};
