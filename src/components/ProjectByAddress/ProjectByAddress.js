import React, { useCallback } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getProjectByAddress } from '../../apis/project';
import useAsync from '../../hooks/useAsync';
import ProjectViewer from '../shared/ProjectViewer';

export default function ProjectByAddress() {
  const { address } = useParams();

  const cachedFunction = useCallback(() => getProjectByAddress(address), [address]);

  const {
    error,
    data,
    loading,
  } = useAsync(cachedFunction);

  return (
    <>
      {data && <ProjectViewer project={data} />}
      {error && <Redirect to='/' />}
      {loading && <p>loading</p>}
    </>
  );
}
