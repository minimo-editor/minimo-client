import React, { useRef, useState } from 'react';
import blocksMap from '../../utils/blocksMap';

export default function Project({ isEditable, blocks: initialBlocks }) {
  const [blocks, setBlocks] = useState(initialBlocks);
  const draggingItem = useRef();
  const dragOverItem = useRef();

  return (
    <>
      {blocks.map((block, index) => {
        const Block = blocksMap.get(block.type);

        return (
          <Block index={index} data={block.data} />
        );
      })}
    </>
  );
}
