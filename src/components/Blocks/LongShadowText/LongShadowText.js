import React from 'react';
import ContentEditable from 'react-contenteditable';
import styled from 'styled-components';

export default function LongShadowText({
  data, isEditable = true, onChange, index,
}) {
  const { texts } = data.contents;
  const { styles } = data;

  let textShadow = '';

  for (let i = 0; i < 200; i++) {
    textShadow += `${(textShadow ? ',' : '') + i * 1}px ${i * 1}px 0 #01ded3`;
  }

  return (
    <Container
      textShadow={textShadow}
    >
      <ContentEditable
        html={texts}
        style={styles}
        onChange={(e) => onChange(e, index, 'texts')}
        disabled={!isEditable}
      />
    </Container>
  );
}

const Container = styled.div`
  font-size: 3rem;
  font-weight: 900;
  background: #169af7;
  text-transform: uppercase;
  text-shadow: ${({ textShadow }) => textShadow};
  overflow: hidden;

  & div {
    padding : 1.5rem;
    text-align: center;
  }
`;
