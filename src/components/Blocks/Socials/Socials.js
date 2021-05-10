import React from 'react';
import styled from 'styled-components';
import * as ICON from 'react-feather';

export default function Socials() {
  return (
    <SocialsContainer>
      <ICON.Facebook />
      <ICON.Twitter />
      <ICON.Youtube />
    </SocialsContainer>
  );
}

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
