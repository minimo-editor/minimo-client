import React, { useContext } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import Publish from '../Publish';

export default function ProjectManager() {
  const { step, loadProjectTemplate } = useContext(ProjectContext);

  switch (step) {
    case 0:
      // TODO: delete
      loadProjectTemplate();
      return (
        <div>
          select a concept
        </div>
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
