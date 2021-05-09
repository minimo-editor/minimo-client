import React from 'react';
import styled from 'styled-components';

const GhostBox = styled.div`
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.06);
`;

export default function Ghost() {
  return (
    <GhostBox />
  );
}
