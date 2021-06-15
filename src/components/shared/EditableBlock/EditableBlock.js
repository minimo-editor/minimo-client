import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';
import styled, { css } from 'styled-components';
import Tools from './Tools';
import useEditableBlock from './useEditableBlock';

export default function EditableBlock({
  children,
  index,
  insertBlock,
  swapBlocks,
  deleteBlock,
}) {
  const {
    wrapperRef,
    isDragEnter,
    isActive,
    isDraggable,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDragStart,
    makeDraggable,
    makeNotDraggable,
  } = useEditableBlock(index, insertBlock, swapBlocks);

  return (
    <EditableContainer
      ref={wrapperRef}
      isDragEnter={isDragEnter}
      isActive={isActive}
      draggable={isDraggable}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
    >
      <div>
        {cloneElement(children, { isActive })}
      </div>
      {isActive && (
        <Tools
          makeDraggable={makeDraggable}
          makeNotDraggable={makeNotDraggable}
          onClickRemove={() => deleteBlock(index)}
        />
      )}
    </EditableContainer>
  );
}

EditableBlock.propTypes = {
  children: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  deleteBlock: PropTypes.func.isRequired,
  insertBlock: PropTypes.func.isRequired,
  swapBlocks: PropTypes.func.isRequired,
};

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
