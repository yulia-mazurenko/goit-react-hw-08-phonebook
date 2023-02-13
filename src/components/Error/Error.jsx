import { Box } from '@chakra-ui/react';

export const Error = () => {
  return (
    <Box
      width="100%"
      position="absolute"
      display="flex"
      align-items="center"
      justify-content="center"
      z-index="99"
      height="100%"
      top="0"
      right="0"
      margin-right="auto"
      margin-left="auto"
      background-color="rgb(190 197 203 / 88%)"
    >
      <p>
        Something went wrong =(
        <br />
        Try again
      </p>
    </Box>
  );
};
