import React, { useState } from 'react';
import * as ICON from 'react-feather';
import styled, { css } from 'styled-components';

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

export default function Stepper({
  steps,
}) {
  const minStep = steps[0].step;
  const maxStep = steps[steps.length - 1].step;

  const [currentStep, setCurrentStep] = useState(minStep);

  function prevStep() {
    setCurrentStep((prev) => {
      if (prev - 1 > minStep) {
        return prev - 1;
      }

      return minStep;
    });
  }

  function nextStep() {
    setCurrentStep((prev) => {
      if (prev + 1 < maxStep) {
        return prev + 1;
      }

      return maxStep;
    });
  }

  return (
    <Container>
      <Button onClick={prevStep}>
        <ICON.ArrowLeftCircle color='white' />
      </Button>
      <StepsContainer>
        {steps.map(({ step, title }) => (
          <Step key={step}>
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
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.button`
  all: unset;
  border-radius: 50%;
  background-color: grey;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
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
