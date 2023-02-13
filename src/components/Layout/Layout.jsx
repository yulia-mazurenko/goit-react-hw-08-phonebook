import { Box } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      ml="auto"
      mr="auto"
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
