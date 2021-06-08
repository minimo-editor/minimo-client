export const TYPES = {
  UPDATE_PROJECT: 'UPDATE_PROJECT',
  CHANGE_BG_COLOR: 'CHANGE_BG_COLOR',
  RESET_BLOCK_CONTENTS: 'RESET_BLOCK_CONTENTS',
  CHANGE_BLOCK_CONTENTS: 'CHANGE_BLOCK_CONTENTS',
  CHANGE_BLOCK_STYLES: 'CHANGE_BLOCK_STYLES',
  SWAP_BLOCKS: 'SWAP_BLOCKS',
  DELETE_BLOCK: 'DELETE_BLOCK',
  ADD_BLOCK: 'ADD_BLOCK',
  CHANGE_TITLE: 'CHANGE_TITLE',
  CHANGE_ADDRESS: 'CHANGE_ADDRESS',
};

export default function projectReducer(draft, action) {
  switch (action.type) {
    case TYPES.UPDATE_PROJECT:
      return {
        ...draft,
        ...action.payload,
      };
    case TYPES.CHANGE_BG_COLOR: {
      const newBgColor = action.payload;
      draft.backgroundColor = newBgColor;
      return;
    }
    case TYPES.CHANGE_BLOCK_CONTENTS: {
      const { index, name, value } = action.payload;
      draft.blocks[index].data.contents[name] = value;
      return;
    }
    case TYPES.RESET_BLOCK_CONTENTS: {
      const { index, newContents } = action.payload;
      draft.blocks[index].data.contents = newContents;
      return;
    }
    case TYPES.CHANGE_BLOCK_STYLES: {
      const { index, name, value } = action.payload;
      draft.blocks[index].data.styles[name] = value;
      return;
    }
    case TYPES.SWAP_BLOCKS: {
      const { index1, index2 } = action.payload;
      const temp = draft.blocks[index1];
      draft.blocks[index1] = draft.blocks[index2];
      draft.blocks[index2] = temp;
      return;
    }
    case TYPES.DELETE_BLOCK: {
      const targetIndex = action.payload;
      draft.blocks.splice(targetIndex, 1);
      return;
    }
    case TYPES.ADD_BLOCK: {
      const { targetIndex, newBlock } = action.payload;
      draft.blocks.splice(targetIndex, 0, newBlock);
      return;
    }
    case TYPES.CHANGE_TITLE: {
      const newTitle = action.payload;
      draft.title = newTitle;
      return;
    }
    case TYPES.CHANGE_ADDRESS: {
      const newAddress = action.payload;
      draft.address = newAddress;
      return;
    }
    default:
      return draft;
  }
}
