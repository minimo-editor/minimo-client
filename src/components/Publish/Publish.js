import React, {
  useContext, useRef, useState,
} from 'react';
import styled from 'styled-components';
import { checkValidAddress, postProject } from '../../apis/project';
import { ProjectContext } from '../../contexts/ProjectContext';

// TODO: validation ***이곳 매우 중요

export default function Publish() {
  const { project, setProject } = useContext(ProjectContext);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [result, setResult] = useState(false);

  const addressRef = useRef();

  async function onClick() {
    const { value: address } = addressRef.current;
    const isValid = await checkValidAddress(address);
    setIsAddressValid(isValid);

    if (isValid) {
      setProject((prev) => ({
        ...prev,
        address,
      }));
    }
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!isAddressValid) {
      return;
    }

    try {
      const postResult = await postProject(project);
      setResult(postResult);
    } catch (error) {
      setResult(false);
    }
  }

  return (
    <Container>
      <FormContainer
        onSubmit={onSubmit}
      >
        <Label>
          Project name
          <input
            ref={addressRef}
            required
            type='text'
          />
        </Label>
        <Label>
          Address
          <input
            ref={addressRef}
            required
            type='text'
          />
          <button
            type='button'
            onClick={onClick}
          >
            check
          </button>
        </Label>
        <button
          disabled={!isAddressValid}
          type='submit'
        >
          publish
        </button>
      </FormContainer>
      <div>
        <p>{result ? 'success' : 'fail'}</p>
        <p>{project.address}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  background: #fff;
  position: relative;
  border-radius: 2px;
  padding: 2rem;
  width: 550px;
  box-shadow: 
    0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.3);
  transition: transform .1s ease-in-out;
`;

const InputContainer = styled.div`
  position: relative;
  opacity: 0;
  width: 350px;
  height: 100px;
  margin-top: 25px;
  transition: opacity .3s ease-in-out;
`;

const InputLabel = styled.label`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  font-size: 20px;
  font-weight: bold;
  padding: 0 5px;
  transition: .2s ease-in-out;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0 5px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  outline: 0;
  background: transparent;
  box-shadow:none;
`;

const InputProgress = styled.div`
  position: absolute;
  border-bottom: 2px solid #25a3ff;
  padding: 3px 0;
  width: 0;
  transition: width .6s ease-in-out;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  padding: 0 5px;

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
