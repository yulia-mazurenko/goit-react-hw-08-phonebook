import { BsPersonPlus } from 'react-icons/bs';
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import ContactForm from 'components/ContactForm';

export function ModalWindow() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        type="button"
        onClick={onOpen}
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

      <Modal isOpen={isOpen} size="sm" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#3950af" textAlign="center" pb={2}>
            Create new contact
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody pb={6} ml="auto" mr="auto">
            <ContactForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
