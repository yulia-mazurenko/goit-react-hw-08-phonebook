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
      alignItems="flex-start"
      justifyContent="space-around"
      gap={2}
      w="200px"
      as="label"
    >
      Find contacts by name:
      <Input
        type="text"
        size="sm"
        value={filter}
        borderColor="rgba(238, 238, 8, 1)"
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </Box>
  );
};

export default Filter;
