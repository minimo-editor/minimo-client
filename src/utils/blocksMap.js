import Img from '../components/Blocks/Img';
import Title from '../components/Blocks/Title';
import Video from '../components/Blocks/Video';

const blocksMap = new Map();

blocksMap
  .set('title1', Title)
  .set('img1', Img)
  .set('video1', Video);

export default blocksMap;
