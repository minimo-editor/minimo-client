/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import blocksMap from '../../utils/blocksMap';
import EditableBlock from '../shared/DropItem/DropItem';

export default function Project({
  blocks,
  swapBlocks,
  setBlocks,
  onDrop,
  resetBlockContents,
  handleChangeBlock,
}) {
  const dragOverItem = useRef();
  const draggingItem = useRef();

  // function onClick(e, index) {
  //   // json에서 selected로... 관리해야 할 수도...?
  //   e.stopPropagation();
  //   setActiveIndex(index);
  //   setDraggingIndex(null);
  // }

  // function handleDragStart(e, index) {
  //   draggingItem.current = index;
  // }

  // function onDragLeave(e) {
  //   e.target.style.borderTop = 'none';
  // }

  // function handleDragEnter(e, index) {
  //   if (draggingItem.current === index) {
  //     return;
  //   }

  //   if (draggingItem.current === null || draggingItem.current === undefined) {
  //     e.stopPropagation();
  //     return;
  //   }

  //   dragOverItem.current = index;
  //   const blocksCopy = [...blocks];

  //   const draggingItemContent = blocksCopy[draggingItem.current];

  //   blocksCopy.splice(draggingItem.current, 1);
  //   blocksCopy.splice(dragOverItem.current, 0, draggingItemContent);

  //   draggingItem.current = dragOverItem.current;
  //   dragOverItem.current = null;
  //   setBlocks(blocksCopy);
  //   setActiveIndex(index);
  // }

  return (
    <>
      {blocks.map((block, index) => {
        const Block = blocksMap.get(block.type);

        return (
          <EditableBlock
            index={index}
            insertBlock={onDrop}
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
