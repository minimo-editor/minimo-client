import React, { useState } from 'react';
import styled from 'styled-components';

const EditorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main`
  background: #fff;
  width: 100%;
  height: 100%;
`;

const Sidebar = styled.div`
  position: fixed;
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
  box-sizing: border-box;
  padding: 0 0 0 20px;
  background: #eee;
  line-height: 40px !important;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const SidebarToggler = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 170px;
  left: -40px;
  background: #fff;
  border: 1px solid rgba(211, 211, 211, 0.52);
  border-right: none;
  line-height: 39px;
  text-align: center;
  box-shadow: rgb(0 0 0 / 3%) -4px 2px 5px 0px;
  cursor: pointer;
`;

export default function Editor() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <EditorContainer>
      <Main />
      <Sidebar isSidebarOpen={isSidebarOpen}>
        <Selectbox>
          Basic
        </Selectbox>
        <SidebarToggler onClick={() => setIsSidebarOpen((prev) => !prev)}>
          {isSidebarOpen ? '>' : '<'}
        </SidebarToggler>
      </Sidebar>
    </EditorContainer>
  );
}
