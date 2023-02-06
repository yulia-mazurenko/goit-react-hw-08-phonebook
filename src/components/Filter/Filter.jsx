import { Box, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/features/contacts/selectors';
import { filterContacts } from '../../redux/features/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="300px"
      as="label"
    >
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </Box>
  );
};

export default Filter;
