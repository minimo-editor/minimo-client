import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectByAddress } from '../../apis/project';
import ProjectViewer from '../shared/ProjectViewer';

export default function ProjectByAddress() {
  const { address } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // TODO: error handling
      const { ok, data, error } = await getProjectByAddress(address);

      if (ok) {
        setProject(data);
      }
    }

    fetchData();
  }, [address]);

  return (
    project && <ProjectViewer project={project} />
  );
}
