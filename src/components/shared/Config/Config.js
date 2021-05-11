import React from 'react';
import * as ICON from 'react-feather';
import styled from 'styled-components';

export default function ConfigIcon({
  onClick,
}) {
  return (
    <Config onClick={onClick}>
      <ICON.Settings color='grey' />
    </Config>
  );
}

const Config = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    cursor: pointer;
  }
`;
