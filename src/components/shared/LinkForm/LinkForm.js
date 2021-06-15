import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { GreyButton } from '../StyledButton';
import useLinkForm from './useLinkForm';

export default function LinkForm({
  inputs,
  handleSubmitForm,
}) {
  const {
    data,
    handleSubmit,
    handleChange,
  } = useLinkForm(inputs, handleSubmitForm);

  return (
    <FormContainer
      onSubmit={handleSubmit}
    >
      {Object.entries(data).map(([name, value]) => (
        <Label
          key={name}
        >
          <TextInput
            type='text'
            name={name}
            placeholder={name}
            value={value}
            onChange={handleChange}
          />
        </Label>
      ))}
      <ButtonContainerAlignRight>
        <GreyButton type='submit'>
          Ok
        </GreyButton>
      </ButtonContainerAlignRight>
    </FormContainer>
  );
}

LinkForm.propTypes = {
  inputs: PropTypes.object,
  handleSubmitForm: PropTypes.func,
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  & input {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(255,255,255,1);
  border: 1px solid rgb(243, 243, 243);
  box-shadow: 4px 17px 20px 0px rgb(0 0 0 / 8%);
  padding: 12px 12px;
  box-sizing: border-box;
`;

const TextInput = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  margin: 0;
  font-family: sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  padding: 0;
  padding-left: 8px;
  color: #111111;
  display: inline-block;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0;
  background-color: #fbfbfb;

  &:focus {
    outline: none;
  }
`;

const ButtonContainerAlignRight = styled.div`
  text-align: right;
`;
