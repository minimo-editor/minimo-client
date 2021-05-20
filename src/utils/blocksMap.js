import Img from '../components/Blocks/Img';
import Title from '../components/Blocks/Title';
import Video from '../components/Blocks/Video';
import Socials from '../components/Blocks/Socials';
import Blank from '../components/Blocks/Blank';
import Paragraph from '../components/Blocks/Paragraph';
import GoogleMaps from '../components/Blocks/GoogleMaps';

const blocksMap = new Map();

blocksMap
  .set('title', Title)
  .set('img', Img)
  .set('video', Video)
  .set('social', Socials)
  .set('paragraph', Paragraph)
  .set('blank', Blank)
  .set('map', GoogleMaps);

export default blocksMap;
