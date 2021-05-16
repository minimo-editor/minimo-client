import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import templates from './templateData';
import ProjectViewer from '../shared/ProjectViewer';
import { ProjectContext } from '../../contexts/ProjectContext';

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const { setProject } = useContext(ProjectContext);

  function onChange(e) {
    const { value } = e.target;

    setSelectedTemplate(value);
    const templateData = templates.find((each) => each.concept === value);
    setProject(templateData);
  }

  return (
    <>
      <Title>Select a template</Title>
      <TemplatesContainer>
        {templates.map((template) => (
          <Template
            key={template.concept}
          >
            <Header>
              <Radio
                type='radio'
                value={template.concept}
                onChange={onChange}
                checked={(selectedTemplate === template.concept)}
              />
              <Title>{template.concept}</Title>
            </Header>
            <ProjectWrapper>
              <ProjectViewer
                project={template}
              />
            </ProjectWrapper>
          </Template>
        ))}
      </TemplatesContainer>
    </>
  );
}

const Title = styled.span`
  text-align: center;
  font-size: 1.5em;
`;

const TemplatesContainer = styled.div`
  width: 800px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Template = styled.div`
  width: fit-content;
  border: 2px solid tomato;
  border-radius: 5px;
`;

const ProjectWrapper = styled.div`
  height: 300px;
  width: fit-content;
  overflow-y: auto;
`;

const Radio = styled.input``;

const Header = styled.header`
  width: fit-content;
  margin: auto;
`;
