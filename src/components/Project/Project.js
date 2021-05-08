import React, { useRef, useState } from 'react';
import blockMap from '../../utils/blockMaps';

export default function Project({ isEditable, blocks: initialBlocks }) {
  const [blocks, setBlocks] = useState(initialBlocks);
  const draggingItem = useRef();
  const dragOverItem = useRef();

  return (
    <>
      {blocks.map((block, index) => {
        const Block = blockMap.get(block.type);

        return (
          <Block index={index} data={block.data} />
        );
      })}
    </>
  );
}
