import React, {
  useEffect,
  useRef,
  useState,
  cloneElement,
} from 'react';
import styled, { css } from 'styled-components';
import * as ICON from 'react-feather';

function Tools({
  makeDraggable,
  makeNotDraggable,
  onRemoveClick,
}) {
  return (
    <ToolWrapper draggable={false}>
      <MoveTool
        onMouseDown={makeDraggable}
        onBlur={makeNotDraggable}
      >
        <ICON.Move size={19} />
      </MoveTool>
      <RemoveTool
        onClick={onRemoveClick}
      >
        <ICON.X size={19} />
      </RemoveTool>
    </ToolWrapper>
  );
}

export default function EditableBlock({
  children,
  index,
  insertBlock,
  swapBlocks,
  deleteBlock,
}) {
  const [isDragEnter, setIsDragEnter] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.addEventListener('click', handleClick);
  }, []);

  function handleClick(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsActive(false);
      // TODO: delete
      setIsDraggable(false);
    } else {
      setIsActive(true);
    }
  }

  function onDragEnter(e) {
    e.preventDefault();

    if (!isDraggable) {
      setIsDragEnter(true);
    }
  }

  function onDragLeave(e) {
    setIsDragEnter(false);
  }

  function onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function onDragStart(e) {
    e.dataTransfer.setData('block_index', index);
  }

  function onDrop(e) {
    // TODO: delete 문제없을 시
    // e.preventDefault();
    setIsDragEnter(false);

    const blockId = e.dataTransfer.getData('block_id');

    if (blockId) {
      insertBlock(index, blockId);
      return;
    }

    const droppedIndex = e.dataTransfer.getData('block_index');

    if (droppedIndex) {
      swapBlocks(index, droppedIndex);
    }
  }

  return (
    <EditableContainer
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
      <div>
        {cloneElement(children, { isActive })}
      </div>
      {isActive && (
        <Tools
          makeDraggable={() => setIsDraggable(true)}
          makeNotDraggable={() => setIsDraggable(false)}
          onRemoveClick={() => deleteBlock(index)}
        />
      )}
    </EditableContainer>
  );
}

const EditableContainer = styled.div`
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
