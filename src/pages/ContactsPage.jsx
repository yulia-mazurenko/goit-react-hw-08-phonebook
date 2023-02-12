import { Box, Button, Heading, Text } from '@chakra-ui/react';
import ContactList from '../components/ContactList/ContactList';
import Filter from 'components/Filter';
import { ModalWindow } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/features/contacts/selectors';
import { useState } from 'react';
import { BsPersonPlus } from 'react-icons/bs';
import { Delimiter, WrapperContactsCard } from './Pages.styled';

const ContactsPage = () => {
  const filteredFriends = useSelector(selectFilteredContacts);
  const [isShownModal, setIsShownModal] = useState(false);

  const toggleModal = () => {
    setIsShownModal(!isShownModal);
  };

  return (
    <>
      <Heading size="lg" textAlign="center" pt={2} pb={4}>
        PhoneBook
      </Heading>
      <Delimiter />
      <WrapperContactsCard>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mb={5}
          mt={3}
          gap={5}
        >
          <Button
            type="button"
            onClick={toggleModal}
            colorScheme="yellow"
            mt={2}
            ml="auto"
            mr="auto"
            w="180px"
            gap="8px"
          >
            <BsPersonPlus />
            <Text>Add new contact</Text>
          </Button>
          {isShownModal && <ModalWindow onToggle={toggleModal} />}
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
      </WrapperContactsCard>
    </>
  );
};

export default ContactsPage;
