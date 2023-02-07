import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Button } from '@chakra-ui/react';

import FormError from './FormError';
import { addContact } from '../../redux/features/contacts/contactsOperations';
import { FormStyle, Label, Input, InputNumber } from './ContactForm.styled';

const phoneNumberMask = [
  '(',
  /[0-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

const schema = yup.object().shape({
  name: yup.string().required('Please, enter correct name'),
  number: yup
    .string()
    .required('Please, check the correctness of phone number'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onClose }) {
  const contactId = nanoid();
  const contactNumberIid = nanoid();
  const dispatch = useDispatch();

  const handleFormSubmit = (values, { resetForm }) => {
    const uppercaseName = values.name
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1, word.length))
      .join(' ');

    dispatch(addContact({ ...values, name: uppercaseName }));

    resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <FormStyle>
        <Label htmlFor={contactId}>
          Name
          <Input
            placeholder="John Snow"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={contactId}
            required
          />
          <FormError name="name" />
        </Label>
        <Label htmlFor={contactNumberIid}>
          Number
          <Field name="number">
            {({ field }) => (
              <InputNumber
                id={contactNumberIid}
                required
                type="tel"
                mask={phoneNumberMask}
                {...field}
                placeholder="(___) ___-__-__"
              />
            )}
          </Field>
          <FormError name="number" />
        </Label>
        <Button
          type="submit"
          colorScheme="yellow"
          mt={2}
          ml="auto"
          mr="auto"
          w="150px"
        >
          Save contact
        </Button>
      </FormStyle>
    </Formik>
  );
}
