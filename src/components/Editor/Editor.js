import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import EditableProject from '../EditableProject';
import ColorPicker from '../shared/ColorPicker/ColorPicker';
import useColorPicker from '../../hooks/useColorPicker';
import { AuthContext } from '../../contexts/AuthContext';
import { ProjectContext } from '../../contexts/ProjectContext';
import Sidebar from '../Sidebar';

export default function Editor() {
  const { userId } = useContext(AuthContext);
  const { project, setProject } = useContext(ProjectContext);
  const [blocks, setBlocks] = useState(project.blocks);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    color: bgColor,
    isColorPickerOpen,
    toggleColorPicker,
    handleChangeColor,
  } = useColorPicker(project.backgroundColor);

  function resetBlockContents(index, contents) {
    setBlocks((prev) => {
      const prevCopy = [...prev];
      prevCopy[index].data.contents = contents;

      return prevCopy;
    });
  }

  function handleChangeBlock(e, index, name) {
    setBlocks((prev) => (
      [...prev].map((each, idx) => {
        if (index === idx) {
          each.data.contents[name] = e.target.value;
        }

        return each;
      })
    ));
  }

  function swapBlocks(index1, index2) {
    setBlocks((prev) => {
      const prevCopy = [...prev];
      const firstItem = prevCopy[index1];
      prevCopy[index1] = prevCopy[index2];
      prevCopy[index2] = firstItem;

      return prevCopy;
    });
  }

  function deleteBlock(targetIndex) {
    setBlocks((prev) => (
      [...prev].filter((block, index) => index !== targetIndex)
    ));
  }
  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  function insertBlock(index, blockId) {
    if (!blockId) {
      return;
    }

    const newBlock = {
      type: blockId,
      data: {},
    };

    setBlocks((prev) => {
      const prevCopy = [...prev];
      prevCopy.splice(index, 0, newBlock);
      return prevCopy;
    });
  }

  function onClickSave() {
    setProject((prev) => ({
      ...prev,
      blocks,
      backgroundColor: bgColor,
      creatorId: userId,
    }));
  }

  return (
    <>
      <ProjectWrapper
        bgColor={bgColor}
      >
        <SaveButton
          type='button'
          onClick={onClickSave}
        >
          SAVE
        </SaveButton>
        <EditableProject
          insertBlock={insertBlock}
          swapBlocks={swapBlocks}
          blocks={blocks}
          setBlocks={setBlocks}
          resetBlockContents={resetBlockContents}
          handleChangeBlock={handleChangeBlock}
          deleteBlock={deleteBlock}
        />
        {/* FIXME: rename -> colorpicker tool ? */}
        <ColorPicker
          color={bgColor}
          onChange={handleChangeColor}
          toggleColorPicker={toggleColorPicker}
          isColorPickerOpen={isColorPickerOpen}
        />
      </ProjectWrapper>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  );
}

const ProjectWrapper = styled.main`
  position: relative;
  margin: 150px auto;
  max-width: 800px;
  width: 100%;
  padding: 0 35px;
  box-sizing: border-box;
  background: ${({ bgColor }) => bgColor ?? 'none'};
`;

const SaveButton = styled.button`
  position: absolute;
  top: -30px;
  right: 30px;
`;
