import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Formik, Form } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

import FormError from './FormError';
import MaskedInput from 'react-text-mask';
import { addContact } from '../../redux/features/contacts/contactsOperations';
import { Box, Button, Input } from '@chakra-ui/react';

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

export default function ContactForm() {
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
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={3}
        as="form"
      >
        <Box
          htmlFor={contactId}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          gap={2}
          as="label"
        >
          Name
          <Input
            size="sm"
            w="300px"
            placeholder="John Snow"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={contactId}
            required
          />
          <FormError name="name" />
        </Box>
        <Box
          htmlFor={contactNumberIid}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          gap={2}
          w="300px"
          as="label"
        >
          Number
          <Field name="number">
            {({ field }) => (
              <MaskedInput
                style={{
                  width: '300px',
                  height: '32px',
                  outline: '0.8px solid yellow',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  borderRadius: '2px',
                }}
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
        </Box>
        <Button type="submit">Add contact</Button>
      </Box>
    </Formik>
  );
}
