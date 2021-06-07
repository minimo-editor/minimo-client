// import uniqueId from 'lodash.uniqueid';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import { ProjectContext } from '../../contexts/ProjectContext';
// import blocksDefaultDataMap from '../../utils/blocksDefaultDataMap';

// export default function useBlocks() {
//   const { userId } = useContext(AuthContext);
//   const {
//     project,
//     setProject,
//     handleChangeBlockContents,
//     handleChangeBlockStyles,
//     resetBlockContents,
//     swapBlocks,
//     deleteBlock,
//     addBlock,
//   } = useContext(ProjectContext);
//   const [blocks, setBlocks] = useState(project.blocks);

//   function insertBlock(index, blockId) {
//     if (!blockId) {
//       return;
//     }

//     // TODO: 보기좋게
//     const defaultData = blocksDefaultDataMap.get(blockId)();
//     const id = uniqueId();
//     const newBlock = {
//       id,
//       type: blockId,
//       data: defaultData,
//     };

//     addBlock(index, newBlock);
//   }

//   return {
//     blocks,
//     setBlocks,
//     resetBlockContents,
//     swapBlocks,
//     deleteBlock,
//     insertBlock,
//   };
// }
