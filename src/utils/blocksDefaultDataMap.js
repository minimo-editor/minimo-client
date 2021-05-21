import { getDefaultImg } from '../components/Blocks/Img';
import { getDefaultTitle } from '../components/Blocks/Title';
import { getDefaultVideo } from '../components/Blocks/Video';
import { getDefaultSocials } from '../components/Blocks/Socials';
import { getDefaultParagraph } from '../components/Blocks/Paragraph';
import { getDefaultMapData } from '../components/Blocks/GoogleMaps';
import { getDefaultLongShadowText } from '../components/Blocks/LongShadowText';

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
  .set('blank', getEmptyData)
  .set('map', getDefaultMapData)
  .set('longShadowText', getDefaultLongShadowText);

export default blocksDefaultDataMap;
