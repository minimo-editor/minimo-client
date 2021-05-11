import Img from '../components/Blocks/Img';
import Title from '../components/Blocks/Title';
import Video from '../components/Blocks/Video';
import Socials from '../components/Blocks/Socials';
import Blank from '../components/Blocks/Blank';

const blocksMap = new Map();

blocksMap
  .set('title1', Title)
  .set('img1', Img)
  .set('video1', Video)
  .set('social1', Socials)
  .set('blank', Blank);

export default blocksMap;
