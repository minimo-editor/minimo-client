import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import * as ICON from 'react-feather';
import { ProjectContext } from '../../contexts/ProjectContext';

const STEPS = [
  {
    step: 1,
    title: 'Select a template',
  },
  {
    step: 2,
    title: 'Edit your project',
  },
  {
    step: 3,
    title: 'Preview',
  },
  {
    step: 4,
    title: 'Publish',
  },
];

export default function ProjectStepBar() {
  const { step: currentStep, prevStep, nextStep } = useContext(ProjectContext);

  function getStatus(stepNumber, currentStepNumber) {
    switch (true) {
      case (stepNumber === currentStepNumber):
        return 'active';
      case (stepNumber < currentStepNumber):
        return 'done';
      default:
        return 'none';
    }
  }

  return (
    <Container>
      <Button onClick={prevStep}>
        <ICON.ArrowLeftCircle color='white' />
      </Button>
      <StepsContainer>
        {STEPS.map(({ step, title }) => (
          <Step>
            <Circle
              status={getStatus(step, currentStep)}
            >
              <span>{step}</span>
            </Circle>
            <Title>{title}</Title>
            {/* TODO: step min /step max로 관리 */}
            <Bar isLeft={step > 1} />
            <Bar isRight={step < 4} />
          </Step>
        ))}
      </StepsContainer>
      <Button onClick={nextStep}>
        <ICON.ArrowRightCircle color='white' />
      </Button>
    </Container>
  );
}

const StepsContainer = styled.div`
  height: 100px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const Step = styled.div`
  display: table-cell;
  position: relative;
  padding: 24px;
  width: 25%;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 auto;
  background: #9E9E9E;
  border-radius: 50%;
  text-align: center;
  line-height: 2em;
  font-size: 12px;
  font-weight: bolder;
  color: white;

  ${({ status }) => status === 'active' && css`
      background: rgb(33, 150, 243);
    `
};
`;

const Title = styled.div`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  font-weight: normal;
  color: grey;
`;

const Bar = styled.div`
  position: absolute;
  top: 36px;
  height: 1px;
  border-top: 1px solid #BDBDBD;

  ${({ isLeft }) => isLeft && css`
    left: 0;
    right: 50%;
    margin-right: 20px;
  `};

  ${({ isRight }) => isRight && css`
    right: 0;
    left: 50%;
    margin-left: 20px;
  `};
`;
