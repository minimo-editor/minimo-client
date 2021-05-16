import React, {
  createContext,
  useState,
} from 'react';

export const ProjectContext = createContext();

const STEPS = {
  MIN: 0,
  MAX: 3,
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
