import React, { useContext } from 'react';
import styled from 'styled-components';
import * as ICON from 'react-feather';
import { ProjectContext } from '../../contexts/ProjectContext';

export default function ProjectStepBar() {
  const { step, prevStep, nextStep } = useContext(ProjectContext);

  return (
    <Container>
      <Button onClick={prevStep}>
        <ICON.ArrowLeftCircle color='white' />
      </Button>
      <Bar>
        current step is...
        {' '}
        {step}
      </Bar>
      <Button onClick={nextStep}>
        <ICON.ArrowRightCircle color='white' />
      </Button>
    </Container>
  );
}

const Bar = styled.div`
  height: 100px;
  width: 500px;
`;

const Button = styled.button`
  all: unset;
  border-radius: 50%;
  background-color: grey;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
