import React, { useContext } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import Publish from '../Publish';
import Templates from '../Templates';

export default function ProjectManager() {
  const { step } = useContext(ProjectContext);

  switch (step) {
    case 1:
      return (
        <Templates />
      );
    case 2:
      return (
        <Editor />
      );
    case 3:
      return (
        <Preview />
      );
    case 4:
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
