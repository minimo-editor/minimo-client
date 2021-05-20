import React from 'react';
import * as ICON from 'react-feather';
import styled from 'styled-components';
import { StyledButton } from '../../shared/StyledButton';

export default function Locate({ panTo }) {
  return (
    <NavigationButton
      type='button'
      className='locate'
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null,
        );
      }}
    >
      <ICON.Navigation color='white' />
    </NavigationButton>
  );
}

const NavigationButton = styled(StyledButton)`
  width: 30px;
  height: 30px;
  padding: 0.25rem;
  background: rgba(0,0,0,0.15);
  &:hover {
    background: rgba(0,0,0,0.25);
  }
`;
