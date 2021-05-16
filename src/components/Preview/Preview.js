import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProjectContext } from '../../contexts/ProjectContext';
import blocksMap from '../../utils/blocksMap';

export default function Preview() {
  const { project } = useContext(ProjectContext);
  const { blocks } = project;

  return (
    <MobileView
      bgColor={project.backgroundColor}
    >
      {blocks.map((block, index) => {
        const Block = blocksMap.get(block.type);

        return (
          <BlockWrapper
            // key={uuid()}
            draggable={false}
          >
            <Block
              index={index}
              data={block.data}
              isEditable={false}
            />
          </BlockWrapper>
        );
      })}
    </MobileView>
  );
}

const BlockWrapper = styled.div`
  position: relative;
  padding: 0.5rem 2rem;
  outline: ${({ isActive }) => (isActive ? '1px solid #00da89' : 'none')};
`;

const MobileView = styled.div`
  width: 375px;
  height: 812px;
  margin: auto;
  overflow: scroll;
  background: ${({ bgColor }) => bgColor ?? 'none'};
`;
