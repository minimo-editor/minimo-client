import { getDefaultImg } from '../components/Blocks/Img';
import { getDefaultTitle } from '../components/Blocks/Title';
import { getDefaultVideo } from '../components/Blocks/Video';
import { getDefaultSocials } from '../components/Blocks/Socials';
import { getDefaultParagraph } from '../components/Blocks/Paragraph';

const blocksDefaultDataMap = new Map();

// TODO: delete...
function getEmptyData() {
  return {};
}

blocksDefaultDataMap
  .set('title', getDefaultTitle)
  .set('img', getDefaultImg)
  .set('video', getDefaultVideo)
  .set('social', getDefaultSocials)
  .set('paragraph', getDefaultParagraph)
  .set('blank', getEmptyData);

export default blocksDefaultDataMap;
