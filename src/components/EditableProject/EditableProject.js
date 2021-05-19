/* eslint-disable react/no-array-index-key */
import React, { createRef } from 'react';
import blocksMap from '../../utils/blocksMap';
import AnimateBlocks from '../AnimateBlocks';
import EditableBlock from '../shared/EditableBlock';

export default function EditableProject({
  blocks,
  swapBlocks,
  insertBlock,
  resetBlockContents,
  handleChangeBlock,
  deleteBlock,
}) {
  return (
    <AnimateBlocks>
      {blocks.map((block, index) => {
        const Block = blocksMap.get(block.type);
        return (
          <div
            ref={createRef()}
            key={block.id}
          >
            <EditableBlock
              index={index}
              insertBlock={insertBlock}
              swapBlocks={swapBlocks}
              deleteBlock={deleteBlock}
            >
              <Block
                index={index}
                data={block.data}
                // NOTE: text는 onchange, link는 reset을 쓸 듯.
                onChange={handleChangeBlock}
                resetBlockContents={resetBlockContents}
              />
            </EditableBlock>
          </div>
        );
      })}
    </AnimateBlocks>
  );
}
