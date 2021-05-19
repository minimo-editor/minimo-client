import React from 'react';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';
import isEmptyObject from '../../../utils/isEmptyObject';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
  font-weight: bolder;
  font-size: 2.5rem;
`;

const defaultData = {
  contents: {
    texts: 'Happy <div>&nbsp; &nbsp; &nbsp; Title</div>',
  },
  styles: { color: 'black' },
};

export default function Title({
  data = defaultData, isEditable = true, onChange, index,
}) {
  const titleData = isEmptyObject(data) ? defaultData : data;
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
