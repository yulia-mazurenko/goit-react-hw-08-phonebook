import { Box, Heading } from '@chakra-ui/react';
// import image from '../../src/bgimage.png';

export const HomePage = () => {
  return (
    <Box
      as="div"
      w="500px"
      h="200px"
      mr="auto"
      ml="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* <image /> */}
      <Heading size="lg">
        We greeting you on the main page of the phonebook application
      </Heading>
    </Box>
  );
};
//backgroundImage="url('../images/bgimage.png')"
