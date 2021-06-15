import { useEffect, useRef, useState } from 'react';

const BLOCK_INDEX = 'block_index';
const BLOCK_ID = 'block_id';

export default function useEditableBlock(index, insertBlock, swapBlocks) {
  const [isDragEnter, setIsDragEnter] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  function handleClick(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsActive(false);
      setIsDraggable(false);
    } else {
      setIsActive(true);
    }
  }

  function handleDragEnter(e) {
    e.preventDefault();

    if (!isDraggable) {
      setIsDragEnter(true);
    }
  }

  function handleDragLeave() {
    setIsDragEnter(false);
  }

  function handleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function handleDragStart(e) {
    e.dataTransfer.setData(BLOCK_INDEX, index);
  }

  function handleDrop(e) {
    setIsDragEnter(false);

    const blockId = e.dataTransfer.getData(BLOCK_ID);

    if (blockId) {
      insertBlock(index, blockId);
      return;
    }

    const droppedIndex = e.dataTransfer.getData(BLOCK_INDEX);

    if (droppedIndex) {
      swapBlocks(index, droppedIndex);
    }
  }

  function makeDraggable() {
    setIsDraggable(true);
  }

  function makeNotDraggable() {
    setIsDraggable(false);
  }

  return {
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
  };
}
