import React from 'react';
import styled from 'styled-components';
import blocksMap from '../../utils/blocksMap';

const BlockWrapper = styled.div`

`;

export default function Project({
  blocks,
  isEditable,
  onDragEnter,
  onDragLeave,
}) {
  return (
    <div>
      {blocks.map((block, index) => {
        const Block = blocksMap.get(block.type);

        return (
          <BlockWrapper
            onDragEnter={(e) => onDragEnter(e, index)}
            onDragLeave={onDragLeave}
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
