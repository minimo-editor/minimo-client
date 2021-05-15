import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { checkValidAddress, postProject } from '../../apis/project';
import { ProjectContext } from '../../contexts/ProjectContext';

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
      <form
        onSubmit={onSubmit}
      >
        <label>
          make your own address
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
        </label>
        <button
          disabled={!isAddressValid}
          type='submit'
        >
          publish
        </button>
      </form>
      <div>
        <p>{result ? 'success' : 'fail'}</p>
        <p>{project.address}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  width: fit-content;
`;
