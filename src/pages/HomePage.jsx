import { Box, Heading } from '@chakra-ui/react';
import bgImg from '../bgimage.jpg';

export const HomePage = () => {
  return (
    <Box
      as="div"
      w="600px"
      h="200px"
      mr="auto"
      ml="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ backgroundImage: `url("${bgImg}")` }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Heading size="lg" textAlign="center">
        We greeting you on the main page of the phonebook application:)
      </Heading>
    </Box>
  );
};
