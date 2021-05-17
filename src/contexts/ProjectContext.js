import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();
// TODO: steps 로직이 분리되어있음, 매니저와 합치고, 스탭 관련은 스탭바가 가지고 있던, 스탭바 콘텍스트를 만들 던 해야할 듯.
const STEPS = {
  MIN: 1,
  MAX: 4,
};

export function ProjectProvider({ children }) {
  const [project, setProject] = useState(null);
  const [step, setStep] = useState(STEPS.MIN);

  function nextStep() {
    setStep((prev) => ((prev + 1) <= STEPS.MAX ? (prev + 1) : prev));
  }

  function prevStep() {
    setStep((prev) => ((prev - 1) >= STEPS.MIN ? (prev - 1) : prev));
  }

  return (
    <ProjectContext.Provider
      value={{
        step,
        project,
        nextStep,
        prevStep,
        setProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
