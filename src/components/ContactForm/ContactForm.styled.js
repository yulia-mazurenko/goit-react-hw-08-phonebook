import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import MaskedInput from 'react-text-mask';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 250px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Input = styled(Field)`
  width: 250px;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
  border: 1px solid;
  border-color: rgba(238, 238, 8, 1);
  border-radius: 5px;
  font-family: Roboto, sans-serif;

  ::placeholder {
    font-size: 12px;
  }

  &:focus,
  &:hover,
  &:active {
    outline: 0;
    border: 2px solid;
    border-color: rgba(66, 153, 225, 0.6);
  }
`;

export const InputNumber = styled(MaskedInput)`
  width: 250px;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
  border: 1px solid;
  border-color: rgba(238, 238, 8, 1);
  border-radius: 5px;
  font-family: Roboto, sans-serif;

  &:focus,
  &:hover,
  &:active {
    outline: 0;
    border: 2px solid;
    border-color: rgba(66, 153, 225, 0.6);
  }
`;
