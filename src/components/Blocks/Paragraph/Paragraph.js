import React from 'react';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';
import getDefaultParagraph from './defaultData';
import isEmptyObject from '../../../utils/isEmptyObject';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
  font-weight: bolder;
  font-size: 1rem;
`;

export default function Title({
  data,
  index,
  isEditable = true,
  onChange,
}) {
  // NOTE: 필요한가? editor에서 주기는 한다.
  const titleData = isEmptyObject(data) ? getDefaultParagraph() : data;
  const { texts } = titleData.contents;
  const { styles } = titleData;

  return (
    <Container>
      <ContentEditable
        html={texts}
        style={styles}
        onChange={(e) => onChange(e, index, 'texts')}
        disabled={!isEditable}
      />
    </Container>
  );
}
