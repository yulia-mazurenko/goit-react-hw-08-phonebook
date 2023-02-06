import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useToast } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

// const toast= useToast();

// toast({
//     title: 'Account created.',
//     description: "We've created your account for you.",
//     status: 'success',
//     duration: 9000,
//     isClosable: true,
//   })
