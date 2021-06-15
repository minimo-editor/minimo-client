import { useContext, useState } from 'react';
import templates from './templateData';
import { ProjectContext } from '../../contexts/ProjectContext';
import { AuthContext } from '../../contexts/AuthContext';

export default function useTemplate() {
  const { userId } = useContext(AuthContext);
  const { handleSelectTemplate } = useContext(ProjectContext);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  function handleChangeInput(e) {
    const { value } = e.target;

    setSelectedTemplate(value);

    const templateData = templates.find((each) => each.concept === value);

    handleSelectTemplate(templateData, userId);
  }

  return {
    templates,
    selectedTemplate,
    handleChangeInput,
  };
}
