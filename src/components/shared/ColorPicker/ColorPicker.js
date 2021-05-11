import React from 'react';
import * as ICON from 'react-feather';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

export default function ColorPicker({
  color,
  onChange,
  toggleColorPicker,
  isColorPickerOpen,
}) {
  return (
    <ColorPickerContainer>
      {isColorPickerOpen && (
        <StyledChromePicker
          onChange={onChange}
          color={color}
        />
      )}
      <ColorPickerIcon
        onClick={toggleColorPicker}
      >
        <ICON.Tool fill='white' />
      </ColorPickerIcon>
    </ColorPickerContainer>
  );
}

const ColorPickerIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const StyledChromePicker = styled(ChromePicker)`
  position: absolute;
`;

const ColorPickerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
