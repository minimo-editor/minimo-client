import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import React, { createContext } from 'react';
import useImmerReducer from '../hooks/useImmutableReducer';
import projectReducer, { TYPES } from '../reducers/projectReducer';
import blocksDefaultDataMap from '../utils/blocksDefaultDataMap';

export const ProjectContext = createContext();

const initialState = {
  title: '',
  concept: '',
  backgroundColor: 'white',
  creatorId: '',
  blocks: [],
};

export function ProjectProvider({ children }) {
  const [project, dispatch] = useImmerReducer(projectReducer, initialState);

  function handleChangeBgColor(newColor) {
    const payload = newColor.hex;
    dispatch({ type: TYPES.CHANGE_BG_COLOR, payload });
  }

  function resetBlockContents(index, newContents) {
    const payload = {
      index,
      newContents,
    };

    dispatch({ type: TYPES.RESET_BLOCK_CONTENTS, payload });
  }

  function handleSelectTemplate(template, creatorId) {
    const payload = {
      ...template,
      creatorId,
    };

    dispatch({ type: TYPES.UPDATE_PROJECT, payload });
  }

  function handleChangeBlockContents(e, index, name) {
    const payload = {
      value: e.target.value,
      index,
      name,
    };

    dispatch({ type: TYPES.CHANGE_BLOCK_CONTENTS, payload });
  }

  function handleChangeBlockStyles(value, index, name) {
    const payload = {
      value,
      index,
      name,
    };

    dispatch({ type: TYPES.CHANGE_BLOCK_STYLES, payload });
  }

  function swapBlocks(index1, index2) {
    const payload = {
      index1,
      index2,
    };

    dispatch({ type: TYPES.SWAP_BLOCKS, payload });
  }

  function deleteBlock(targetIndex) {
    dispatch({ type: TYPES.DELETE_BLOCK, payload: targetIndex });
  }

  function addBlock(targetIndex, blockId) {
    if (!blockId) {
      return;
    }

    const getDefaultData = blocksDefaultDataMap.get(blockId);

    const newBlock = {
      id: uniqueId(),
      data: getDefaultData(),
      type: blockId,
    };

    const payload = {
      targetIndex,
      newBlock,
    };

    dispatch({ type: TYPES.ADD_BLOCK, payload });
  }

  function handleChangeTitle(e) {
    const { value } = e.target;
    dispatch({ type: TYPES.CHANGE_TITLE, payload: value });
  }

  return (
    <ProjectContext.Provider
      value={{
        project,
        addBlock,
        deleteBlock,
        swapBlocks,
        resetBlockContents,
        handleChangeBgColor,
        handleSelectTemplate,
        handleChangeBlockContents,
        handleChangeBlockStyles,
        handleChangeTitle,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

ProjectProvider.propTypes = {
  children: PropTypes.element,
};
