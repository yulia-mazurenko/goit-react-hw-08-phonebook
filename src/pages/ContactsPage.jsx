import { Box, Card, Heading, Text } from '@chakra-ui/react';
import ContactList from '../components/ContactList/ContactList';
import Filter from 'components/Filter';
import { ModalWindow } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/features/contacts/selectors';

export const ContactsPage = () => {
  const filteredFriends = useSelector(selectFilteredContacts);

  return (
    <>
      <Heading size="lg" textAlign="center" pt={2} pb={4}>
        PhoneBook
      </Heading>
      <hr
        style={{ border: '1px solid rgba(66, 153, 225, 0.6)', width: '100%' }}
      />
      <Card
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        w="600px"
        boxShadow="lg"
        borderTopRadius="0"
        px={4}
        gap={3}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mb={5}
          mt={3}
          gap={5}
        >
          <ModalWindow />
          <Filter />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={3}
        >
          {filteredFriends.length > 0 ? (
            <Heading size="md" py={2}>
              Contacts
            </Heading>
          ) : (
            <Text>No contacts</Text>
          )}

          <ContactList />
        </Box>
      </Card>
    </>
  );
};
