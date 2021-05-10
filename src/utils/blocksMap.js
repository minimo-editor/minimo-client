import Img from '../components/Blocks/Img';
import Title from '../components/Blocks/Title';
import Video from '../components/Blocks/Video';
import Ghost from '../components/Blocks/Ghost';
import Socials from '../components/Blocks/Socials';

const blocksMap = new Map();

blocksMap
  .set('title1', Title)
  .set('img1', Img)
  .set('video1', Video)
  .set('social1', Socials)
  .set('ghost', Ghost);

export default blocksMap;
