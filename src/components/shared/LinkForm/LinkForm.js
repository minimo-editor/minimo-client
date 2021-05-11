import React, { useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';

export default function LinkForm({
  inputs,
  handleSubmitForm,
}) {
  const [data, setData] = useState(inputs);

  function onChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmitForm(data);
  }

  return (
    <FormContainer
      onSubmit={onSubmit}
    >
      {Object.entries(data).map((input) => (
        <Label key={uuid()}>
          {input[0]}
          <input
            type='text'
            name={input[0]}
            value={input[1]}
            onChange={(e) => onChange(e)}
          />
        </Label>
      ))}
      <button type='submit'>
        SUBMIT
      </button>
    </FormContainer>
  );
}

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`;
