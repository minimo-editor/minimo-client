import React from 'react';
import styled from 'styled-components';
import blocksMap from '../../utils/blocksMap';

const BlockWrapper = styled.div`

`;

export default function Project({
  blocks,
  isEditable,
  onDrop,
  onDragEnter,
  onDragLeave,
}) {
  return (
    <div>
      {blocks.map((block, index) => {
        const Block = blocksMap.get(block.type);

        return (
          <BlockWrapper
            onDragEnterCapture={(e) => onDragEnter(e, index)}
            onDragLeave={onDragLeave}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
          >
            <Block
              index={index}
              data={block.data}
            />
          </BlockWrapper>
        );
      })}
    </div>
  );
}
