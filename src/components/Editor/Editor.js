import React, { useContext } from 'react';
import styled from 'styled-components';
import EditableProject from '../EditableProject';
import ColorPicker from '../shared/ColorPicker';
import useColorPicker from '../../hooks/useColorPicker';
import { ProjectContext } from '../../contexts/ProjectContext';
import { GreyButton } from '../shared/StyledButton';
import Sidebar from '../Sidebar';
import useSidebar from './useSidebar';

export default function Editor() {
  const {
    project,
    addBlock,
    swapBlocks,
    deleteBlock,
    resetBlockContents,
    handleChangeBgColor,
    handleChangeBlockContents,
    handleChangeBlockStyles,
  } = useContext(ProjectContext);

  const {
    color: bgColor,
    isColorPickerOpen,
    toggleColorPicker,
    handleChangeColor,
  } = useColorPicker(project.backgroundColor);

  const {
    isSidebarOpen,
    toggleSidebar,
  } = useSidebar();

  function onChangeBgColor(color) {
    handleChangeBgColor(color);
    handleChangeColor(color);
  }

  return (
    <Container>
      <ProjectWrapper
        bgColor={project.backgroundColor}
      >
        <EditableProject
          blocks={project.blocks}
          insertBlock={addBlock}
          swapBlocks={swapBlocks}
          deleteBlock={deleteBlock}
          resetBlockContents={resetBlockContents}
          handleChangeBlock={handleChangeBlockContents}
          handleChangeStyle={handleChangeBlockStyles}
        />
        <ColorPicker
          color={bgColor}
          isColorPickerOpen={isColorPickerOpen}
          onChange={onChangeBgColor}
          toggleColorPicker={toggleColorPicker}
        />
      </ProjectWrapper>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectWrapper = styled.main`
  position: relative;
  max-width: 800px;
  width: 100%;
  padding: 0 35px;
  box-sizing: border-box;
  background: ${({ bgColor }) => bgColor ?? 'none'};
`;
