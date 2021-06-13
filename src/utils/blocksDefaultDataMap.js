import { getDefaultImg } from '../components/Blocks/Img';
import { getDefaultTitle } from '../components/Blocks/Title';
import { getDefaultVideo } from '../components/Blocks/Video';
import { getDefaultSocials } from '../components/Blocks/Socials';
import { getDefaultParagraph } from '../components/Blocks/Paragraph';
import { getDefaultMapData } from '../components/Blocks/GoogleMaps';
import { getDefaultLongShadowText } from '../components/Blocks/LongShadowText';
import { getDefaultIframe } from '../components/Blocks/Iframe';
import { getDefaultBlankData } from '../components/Blocks/Blank';

const blocksDefaultDataMap = new Map();

blocksDefaultDataMap
  .set('title', getDefaultTitle)
  .set('img', getDefaultImg)
  .set('video', getDefaultVideo)
  .set('social', getDefaultSocials)
  .set('paragraph', getDefaultParagraph)
  .set('blank', getDefaultBlankData)
  .set('map', getDefaultMapData)
  .set('iframe', getDefaultIframe)
  .set('longShadowText', getDefaultLongShadowText);

export default blocksDefaultDataMap;
