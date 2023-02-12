import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, List, ListItem } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { deleteContact } from '../../redux/features/contacts/contactsOperations';
import { ContactData } from './ContactItem.styled';

const ContactItem = ({ contactName, number, id }) => {
  const dispatch = useDispatch();

  return (
    <List>
      <ListItem
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={3}
        >
          <Avatar bg="yellow.300" size={'xs'} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <ContactData>{contactName}:</ContactData>
            <ContactData>{number}</ContactData>
          </Box>
        </Box>

        <Button
          type="button"
          variant="ghost"
          colorScheme="blue"
          rightIcon={<DeleteIcon />}
          cursor="pointer"
          onClick={() => dispatch(deleteContact(id))}
        ></Button>
      </ListItem>
    </List>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
