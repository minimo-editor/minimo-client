import React from 'react';
import blocksMap from '../../utils/blocksMap';
import EditableBlock from '../shared/EditableBlock';

export default function EditableProject({
  blocks,
  swapBlocks,
  insertBlock,
  resetBlockContents,
  handleChangeBlock,
}) {
  return (
    <>
      {blocks.map((block, index) => {
        const Block = blocksMap.get(block.type);

        return (
          <EditableBlock
            index={index}
            insertBlock={insertBlock}
            swapBlocks={swapBlocks}
          >
            <Block
              index={index}
              data={block.data}
              // NOTE: text는 onchange, link는 reset을 쓸 듯.
              onChange={handleChangeBlock}
              resetBlockContents={resetBlockContents}
            />
          </EditableBlock>
        );
      })}
    </>
  );
}
