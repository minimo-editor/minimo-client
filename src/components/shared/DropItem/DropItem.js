import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import * as ICON from 'react-feather';

function Tools({ makeDraggable, makeNotDraggable }) {
  return (
    <ToolWrapper draggable={false}>
      <MoveTool
        onMouseDown={makeDraggable}
        onMOuseUp={makeNotDraggable}
      >
        <ICON.Move size={19} />
      </MoveTool>
      <RemoveTool>
        <ICON.X size={19} />
      </RemoveTool>
    </ToolWrapper>
  );
}

export default function EditableBlock({
  children,
  index,
  insertBlock,
  onDragStart,
}) {
  const [isDragEnter, setIsDragEnter] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const wrapperRef = useRef();

  function handleClick(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.addEventListener('click', handleClick);
  }, []);

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
    insertBlock(index, blockId);
  }

  return (
    <EditableWrapper
      ref={wrapperRef}
      isDragEnter={isDragEnter}
      isActive={isActive}
      draggable={isDraggable}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
    >
      <Block>
        {children}
      </Block>
      {isActive && (
        <Tools
          makeDraggable={() => setIsDraggable(true)}
          makeNotDraggable={() => setIsDraggable(false)}
        />
      )}
    </EditableWrapper>
  );
}

const EditableWrapper = styled.div`
  position: relative;
  padding: 0.5rem 2rem;
  outline: ${({ isActive }) => (isActive ? '1px solid #00da89' : 'none')};
  ${({ isDragEnter }) => isDragEnter && css`
    & div {
      pointer-events: none;
    }

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
