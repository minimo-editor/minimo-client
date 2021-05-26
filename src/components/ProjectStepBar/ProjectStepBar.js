import React from 'react';
import styled from 'styled-components';
import * as ICON from 'react-feather';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import Publish from '../Publish';
import Templates from '../Templates';
import Stepper from '../shared/Stepper';
import useStepper from '../../hooks/useStepper';

const STEPS = [
  {
    step: 0,
    label: 'Select a template',
  },
  {
    step: 1,
    label: 'Edit your project',
  },
  {
    step: 2,
    label: 'Preview',
  },
  {
    step: 3,
    label: 'Publish',
  },
];

export default function ProjectStepBar() {
  const { currentStep, moveToNextStep, moveToPrevStep } = useStepper(STEPS.length);

  return (
    <>
      <StepperContainer>
        <Button onClick={moveToPrevStep}>
          <ICON.ArrowLeftCircle color='white' />
        </Button>
        <Stepper
          steps={STEPS}
          currentStep={currentStep}
        />
        <Button onClick={moveToNextStep}>
          <ICON.ArrowRightCircle color='white' />
        </Button>
      </StepperContainer>
      {getStepContent(currentStep)}
    </>
  );
}

// TODO: 어떻게하면 한곳에서 정의할 수 있을까 label과 함께..
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Templates />
      );
    case 1:
      return (
        <Editor />
      );
    case 2:
      return (
        <Preview />
      );
    case 3:
      return (
        <Publish />
      );
    default:
      return (
        <div>
          Error, try again.
        </div>
      );
  }
}

const Button = styled.button`
  all: unset;
  border-radius: 50%;
  background-color: grey;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;

const StepperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
