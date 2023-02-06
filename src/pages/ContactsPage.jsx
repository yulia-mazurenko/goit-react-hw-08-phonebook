import { Box, Heading } from '@chakra-ui/react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export const ContactsPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="500px"
      ml="auto"
      mr="auto"
      gap={3}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb={5}
      >
        <Heading size="lg">PhoneBook</Heading>
        <ContactForm />
      </Box>
      <Heading size="md">Contacts</Heading>
      <Filter />
      <ContactList />
    </Box>
  );
};
