import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, List, ListItem } from '@chakra-ui/react';

import { DeleteIcon } from '@chakra-ui/icons';

import { deleteContact } from '../../redux/features/contacts/contactsOperations';

const ContactItem = ({ contactName, number, id }) => {
  const dispatch = useDispatch();

  return (
    <List>
      <ListItem
        display="flex"
        alignItems="center"
        justify-content="space-between"
      >
        <Box display="flex" alignItems="center" gap={3}>
          <Avatar bg="yellow.200" size={'xs'} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p>{contactName}:</p>
            <p>{number}</p>
          </div>
        </Box>
        <Button
          type="button"
          variant="ghost"
          colorScheme="blue"
          rightIcon={<DeleteIcon />}
          cursor="pointer"
          onClick={() => dispatch(deleteContact(id))}
        >
          {/* <DeleteIcon boxSize={6} w={8} h={8} color="red.500" /> */}
          {/* <AiFillDelete width="20px" height="20px" /> */}
        </Button>
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

// export const ListItem = styled.li`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: ${p => p.theme.sizes.wrapper};
//   color: ${p => p.theme.colors.secondary};
// `;

// export const DeleteButton = styled.button`
//   color: ${p => p.theme.colors.accentColor};
//   transform: scale(1);

//   &:hover,
//   &:focus {
//     transform: scale(1.2);
//   }
// `;
