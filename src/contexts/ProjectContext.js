import React, {
  createContext,
  useState,
} from 'react';

export const ProjectContext = createContext();

const STEPS = {
  MIN: 0,
  MAX: 3,
};

const mockProject = {
  address: 'anything3',
  category: 'wedding',
  concept: 'basic',
  backgroundColor: '#fff',
  blocks: [
    {
      type: 'title1',
      data: {
        contents: {
          texts: 'Happy Wedding not happy',
        },
        styles: 'default',
      },
    },
    {
      type: 'img1',
      data: {
        contents: {
          src: '//g0.evitecdn.com/pages/signed-out-virtual-homepage/6210705586454528/21f2897a86ca4a338a9ff2a6dd83665f.png',
        },
        styles: 'default',
      },
    },
    {
      type: 'title1',
      data: {
        contents: {
          texts: 'End of Title Title1!!!',
        },
        styles: 'default',
      },
    },
    {
      type: 'social1',
      data: {
        contents: {
          facebookLink: 'https://styled-components.com/docs/advanced',
          twitterLink: 'https://react-simple-img.vercel.app/',
          youtubeLink: 'https://reactjsexample.com/react-lazy-load-images-with-intersectionobserver-api-and-priority-hints/',
        },
      },
    },
  ],
};

export function ProjectProvider({ children }) {
  const [project, setProject] = useState(null);
  const [step, setStep] = useState(STEPS.MIN);

  function loadProjectTemplate() {
    // TODO: only call once -!
    setProject(mockProject);
    console.log('load template');
  }

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
        loadProjectTemplate,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
