import React, { useState } from 'react';
import styled from 'styled-components';
import Project from '../Project';

const EditorContainer = styled.div`
`;

const ProjectWrapper = styled.main`
  margin: 150px auto;
  max-width: 800px;
  width: 100%;
  padding: 0 35px;
  box-sizing: border-box;
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
  left: -41px;
  background: #fff;
  border: 1px solid rgba(211, 211, 211, 0.52);
  border-right: none;
  line-height: 39px;
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
  background: rgb(0, 0, 0, 0.5);
  margin: 22px 22px 0;
  cursor: move;
  outline: rgba(219, 219, 219, 0.52) 1px solid;
  box-shadow: 0 5px 15px rgb(0 0 0 / 3%);

  & img {
    width: 100%;
    display: block;
  }
`;

const mockBlocks = {
  _id: 12123,
  creatorId: 12345,
  category: 'wedding',
  concept: 'basic',
  blocks: [
    {
      type: 'title1',
      data: {
        texts: 'Happy Wedding not happy',
        styles: 'default',
      },
    },
    {
      type: 'img1',
      data: {
        src: '//g0.evitecdn.com/pages/signed-out-virtual-homepage/6210705586454528/21f2897a86ca4a338a9ff2a6dd83665f.png',
        styles: 'default',
      },
    },
    {
      type: 'title1',
      data: {
        texts: 'End of Title Title1!!!',
        styles: 'default',
      },
    },
  ],
};

export default function Editor() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <EditorContainer>
      <ProjectWrapper>
        <Project
          isEditable
          blocks={mockBlocks.blocks}
        />
      </ProjectWrapper>
      <Sidebar isSidebarOpen={isSidebarOpen}>
        <SidebarToggler onClick={toggleSidebar}>
          {isSidebarOpen ? '>' : '﹤'}
        </SidebarToggler>
        <Selectbox>
          <span>
            Basic
          </span>
          <span>
            ▼
          </span>
        </Selectbox>
        <BlockList>
          <BlockItem>
            <img id='title1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/basic-01.png' alt='title' />
          </BlockItem>
          <BlockItem>
            <img id='img1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/basic-05.png' alt='img' />
          </BlockItem>
          <BlockItem>
            <img id='video1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/element-video.png' alt='video' />
          </BlockItem>
          <BlockItem>
            <img id='social1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/basic-16.png' alt='social' />
          </BlockItem>
          <BlockItem>
            <img id='title1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/basic-01.png' alt='title' />
          </BlockItem>
          <BlockItem>
            <img id='img1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/basic-05.png' alt='img' />
          </BlockItem>
          <BlockItem>
            <img id='video1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/element-video.png' alt='video' />
          </BlockItem>
          <BlockItem>
            <img id='social1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/basic-16.png' alt='social' />
          </BlockItem>
          <BlockItem>
            <img id='title1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/basic-01.png' alt='title' />
          </BlockItem>
          <BlockItem>
            <img id='img1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/basic-05.png' alt='img' />
          </BlockItem>
          <BlockItem>
            <img id='video1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/element-video.png' alt='video' />
          </BlockItem>
          <BlockItem>
            <img id='social1' src='https://innovastudio.com/builderdemo/assets/minimalist-blocks/preview/basic-16.png' alt='social' />
          </BlockItem>
        </BlockList>
      </Sidebar>
    </EditorContainer>
  );
}
