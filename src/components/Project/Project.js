import React, { useState } from 'react';
import styled from 'styled-components';
import * as ICON from 'react-feather';
import blocksMap from '../../utils/blocksMap';

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

function Tool() {
  return (
    <ToolWrapper>
      <MoveTool>
        <ICON.Move size={20} />
      </MoveTool>
      <RemoveTool>
        <ICON.X size={20} />
      </RemoveTool>
    </ToolWrapper>
  );
}

export default function Project({
  blocks,
  isEditable,
  onDrop,
  onDragEnter,
  onDragLeave,
  handleClickBlock,
  handleChangeBlock,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  function onClick(e, index) {
    setActiveIndex(index);
  }

  return (
    <div>
      {blocks.map((block, index) => {
        const Block = blocksMap.get(block.type);
        const isActive = index === activeIndex;
        return (
          <BlockWrapper
            onDragEnterCapture={(e) => onDragEnter(e, index)}
            onDragLeave={onDragLeave}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
            isActive={isActive}
            onClick={(e) => onClick(e, index)}
          >
            <Block
              index={index}
              data={block.data}
              onChange={handleChangeBlock}
            />
            {isActive && (
              <Tool />
            )}
          </BlockWrapper>
        );
      })}
    </div>
  );
}
