import Img from '../components/Blocks/Img';
import Title from '../components/Blocks/Title';
import Video from '../components/Blocks/Video';
import Ghost from '../components/Blocks/Ghost';

const blocksMap = new Map();

blocksMap
  .set('title1', Title)
  .set('img1', Img)
  .set('video1', Video)
  .set('ghost', Ghost);
export default blocksMap;
