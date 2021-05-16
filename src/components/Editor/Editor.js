import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import * as ICON from 'react-feather';
import blockImgList from '../../constants/blockImgList';
import Project from '../Project';
import ColorPicker from '../shared/ColorPicker/ColorPicker';
import useColorPicker from '../../hooks/useColorPicker';
import { AuthContext } from '../../contexts/AuthContext';
import { ProjectContext } from '../../contexts/ProjectContext';

export default function Editor() {
  const { user, userId } = useContext(AuthContext);
  const { project, setProject } = useContext(ProjectContext);
  const [blocks, setBlocks] = useState(project.blocks);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const { response, isLoading, error } = usePost(`${process.env.REACT_APP_SERVER_URL}/project`, project);

  const {
    color: bgColor,
    isColorPickerOpen,
    closeColorPicker,
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

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  // function handleDrop(e, index) {
  //   // TODO: stop propagaion propely

  //   if (isDragging) {
  //     return;
  //   }

  //   e.stopPropagation();
  //   console.log('drag enter');
  //   setIsDragging(true);

  //   dragOverItem.current = index;

  //   const blocksCopy = [...blocks];

  //   const ghost = {
  //     type: 'ghost',
  //     data: {},
  //   };

  //   console.log(dragOverItem.current);

  //   // blocksCopy.splice(draggingItem.current, 1);
  //   blocksCopy.splice(dragOverItem.current, 0, ghost);

  //   // draggingItem.current = dragOverItem.current;
  //   draggingItem.current = null;
  //   dragOverItem.current = null;
  //   setBlocks(blocksCopy);
  // }

  function handleDrop(e, index) {
    e.target.style.borderTop = 'none';

    const blockId = e.dataTransfer.getData('block_id');

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

  function handleDragEnter(e, index) {
    e.stopPropagation();

    if (e.target !== e.currentTarget) {
      return;
    }

    e.target.style.borderTop = '40px solid rgb(0, 0, 0, 0.03)';
  }

  function handleDragLeave(e, index) {
    e.target.style.borderTop = 'none';
  }

  function handleDragStart(e, index) {
    const { target } = e;
    e.dataTransfer.setData('block_id', target.id);
  }

  function handleClickBackground(e) {
    if (e.target === e.currentTarget) {
      closeColorPicker();
    }
  }

  function onClickNext() {
    setProject((prev) => ({
      ...prev,
      blocks,
      backgroundColor: bgColor,
      creatorId: userId,
    }));
  }

  return (
    <EditorContainer
      onClick={(e) => handleClickBackground(e)}
    >
      <ProjectWrapper
        bgColor={bgColor}
      >
        <NextButton
          type='button'
          onClick={onClickNext}
        >
          Next
        </NextButton>
        <Project
          isEditable
          handleChangeBlock={handleChangeBlock}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          blocks={blocks}
          setBlocks={setBlocks}
          resetBlockContents={resetBlockContents}
        />
        {/* FIXME: rename -> colorpicker tool ? */}
        <ColorPicker
          color={bgColor}
          onChange={handleChangeColor}
          toggleColorPicker={toggleColorPicker}
          isColorPickerOpen={isColorPickerOpen}
        />
      </ProjectWrapper>
      <Sidebar isSidebarOpen={isSidebarOpen}>
        <SidebarToggler onClick={toggleSidebar}>
          {isSidebarOpen ? <ICON.ChevronRight /> : <ICON.ChevronLeft />}
        </SidebarToggler>
        <Selectbox>
          <span>
            Basic
          </span>
          <span>
            <ICON.List size={20} />
          </span>
        </Selectbox>
        <BlockList>
          {blockImgList.map((blockImg) => (
            <BlockItem
              id={blockImg.id}
              key={blockImg.id}
              onDragStart={handleDragStart}
              draggable
            >
              <img draggable={false} src={blockImg.src} alt={blockImg.id} />
            </BlockItem>
          ))}
        </BlockList>
      </Sidebar>
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
`;

const ProjectWrapper = styled.main`
  position: relative;
  margin: 150px auto;
  max-width: 800px;
  width: 100%;
  padding: 0 35px;
  box-sizing: border-box;
  background: ${({ bgColor }) => bgColor ?? 'none'};
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isSidebarOpen }) => (isSidebarOpen ? '0px' : '-230px')};
  background: #fff;
  width: 230px;
  height: 100%;
  border-left: 1px solid rgba(211, 211, 211, 0.39);
  box-shadow: rgb(0 0 0 / 3%) 0 0 10px 0px;
  transition: all ease 0.3s;
`;

const Selectbox = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 1.3rem 0 1.3rem;
  background: #eee;
  line-height: 40px !important;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const SidebarToggler = styled.div`
  position: absolute;
  color: grey;
  width: 40px;
  height: 40px;
  top: 170px;
  left: -40px;
  background: #fff;
  border: 1px solid rgba(211, 211, 211, 0.52);
  border-right: none;
  line-height: 34px;
  text-align: center;
  box-shadow: rgb(0 0 0 / 3%) -4px 2px 5px 0px;
  cursor: pointer;
`;

const BlockList = styled.div`
  height: 100%;
  margin: 0;
  padding: 0 0 50px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
`;

const BlockItem = styled.div`
  width: 170px;
  overflow: hidden;
  background: rgb(0, 0, 0, 0.06);
  margin: 22px 22px 0;
  cursor: move;
  outline: rgba(219, 219, 219, 0.52) 1px solid;
  box-shadow: 0 5px 15px rgb(0 0 0 / 3%);

  & img {
    width: 100%;
    display: block;
    /* opacity: ${({ isDragging }) => (isDragging ? '0' : 'none')}; */
  }
`;

const NextButton = styled.button`
  position: absolute;
  top: -30px;
  right: 30px;
`;
