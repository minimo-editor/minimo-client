import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

export default function EditableBlock({
  children,
  draggable,
  isActive,
  index,
  insertBlock,
  onDragStart,
}) {
  const [isDragEnter, setIsDragEnter] = useState(false);

  const wrapperRef = useRef();

  function onClick(e) {
    // e.stopPropagation();
  }

  function onDragEnter(e) {
    e.preventDefault();
    setIsDragEnter(true);
  }

  function onDragLeave(e) {
    setIsDragEnter(false);
  }

  function onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function onDrop(e) {
    e.preventDefault();
    setIsDragEnter(false);
    const blockId = e.dataTransfer.getData('block_id');

    if (blockId) {
      const newBlock = {
        type: blockId,
        data: {},
      };

      // insertBlock does..
      // setBlocks((prev) => {
      //   const prevCopy = [...prev];
      //   prevCopy.splice(index, 0, newBlock);
      //   return prevCopy;
      // });
      insertBlock(e, index);
    }
  }

  return (
    <EditableWrapper
      ref={wrapperRef}
      isDragEnter={isDragEnter}
      isActive={isActive}
      draggable={draggable}
      onDrop={onDrop}
      onClick={onClick}
      onDragEnterCapture={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
    >
      <Block>
        {children}
      </Block>
    </EditableWrapper>
  );
}

const EditableWrapper = styled.div`
  position: relative;
  padding: 0.5rem 2rem;
  outline: ${({ isActive }) => (isActive ? '1px solid #00da89' : 'none')};
  ${({ isDragEnter }) => isDragEnter && css`
    &:before {
      content: '';
      width: 100%;
      height: 40px;
      background: rgb(0, 0, 0, 0.06);
      display: block;
    }
  `};
`;

const Block = styled.div`
  pointer-events: none;
`;
