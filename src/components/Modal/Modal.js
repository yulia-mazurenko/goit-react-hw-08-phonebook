import { MdOutlineClose } from 'react-icons/md';

import ContactForm from 'components/ContactForm';
import {
  ModalBackDrop,
  ModalCloseButton,
  Modal,
  ModalTitle,
} from './Modal.styled';

export function ModalWindow({ onToggle }) {
  return (
    <ModalBackDrop>
      <Modal>
        <ModalTitle>Create new contact</ModalTitle>
        <ContactForm onClose={onToggle} />
        <ModalCloseButton aria-label="close" onClick={onToggle}>
          <MdOutlineClose />
        </ModalCloseButton>
      </Modal>
    </ModalBackDrop>
  );
}
