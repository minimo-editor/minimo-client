import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import * as ICON from 'react-feather';
import blocksMap from '../../utils/blocksMap';

function Tools({ makeDraggable }) {
  return (
    <ToolWrapper>
      <MoveTool
        onMouseDown={makeDraggable}
      >
        <ICON.Move size={19} />
      </MoveTool>
      <RemoveTool>
        <ICON.X size={19} />
      </RemoveTool>
    </ToolWrapper>
  );
}

export default function Project({
  blocks,
  setBlocks,
  onDrop,
  onDragEnter,
  onDragLeave,
  handleChangeBlock,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const dragOverItem = useRef();
  const draggingItem = useRef();

  function onClick(e, index) {
    // TODO: make it null when clicked background
    // json에서 selected로... 관리해야 할 수도...?
    setActiveIndex(index);
    setDraggingIndex(null);
  }

  function handleDragStart(e, index) {
    draggingItem.current = index;
  }

  function handleDragEnter(e, index) {
    if (draggingItem.current === index) {
      return;
    }

    if (draggingItem.current === null) {
      onDragEnter(e, index);
      return;
    }

    dragOverItem.current = index;
    const blocksCopy = [...blocks];

    const draggingItemContent = blocksCopy[draggingItem.current];

    blocksCopy.splice(draggingItem.current, 1);
    blocksCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setBlocks(blocksCopy);
    setActiveIndex(dragOverItem.current);
  }

  return (
    <div>
      {blocks.map((block, index) => {
        // TODO: 질문, 너무 말이 안되는 구현인가?
        const Block = blocksMap.get(block.type);
        const isActive = index === activeIndex;
        const isDragging = index === draggingIndex;

        return (
          <BlockWrapper
            onDragEnterCapture={(e) => handleDragEnter(e, index)}
            onDragLeave={onDragLeave}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
            isActive={isActive}
            onClick={(e) => onClick(e, index)}
            draggable={isDragging}
            onDragStart={(e) => handleDragStart(e, index)}
          >
            <Block
              index={index}
              data={block.data}
              onChange={handleChangeBlock}
            />
            {isActive && (
              <Tools
                makeDraggable={() => setDraggingIndex(index)}
              />
            )}
          </BlockWrapper>
        );
      })}
    </div>
  );
}

// function BlockContainer({ children }) {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <Wrapper
//       isActive={isActive}
//       onClick={() => setIsActive((prev) => !prev)}
//     >
//       {children}
//     </Wrapper>
//   );
// }

const BlockWrapper = styled.div`
  position: relative;
  padding: 2rem;
  outline: ${({ isActive }) => (isActive ? '1px solid #00da89' : 'none')};
`;

const ToolWrapper = styled.div`
  position: absolute;
  flex-direction: column;
  width: auto;
  top: 0;
  left: auto;
  right: -40px;

  & div {
    line-height: 0;
    padding: 0.3rem;
    color: white;
  }

  & svg {
    vertical-align: middle;
  }
`;

const MoveTool = styled.div`
  cursor: move;
  background: #169af7;
`;

const RemoveTool = styled.div`
  cursor: pointer;
  background: rgba(255, 85, 4, 0.9);
`;
