import React from 'react';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  border: .1rem solid green;
  color: red;
  font-size: 2.5rem;
`;

const defaultTexts = 'Happy <div>&nbsp; &nbsp; &nbsp; Wedding</div>';

export default function Title({
  data, isEditable = true, onChange, index,
}) {
  const texts = data.texts ?? defaultTexts;
  return (
    <Container>
      <ContentEditable
        html={texts}
        onChange={(e) => onChange(e, index, 'texts')}
        disabled={!isEditable}
      />
    </Container>
  );
}
