import blocksDefaultDataMap from './blocksDefaultDataMap';
import { getDefaultImg } from '../components/Blocks/Img';
import { getDefaultTitle } from '../components/Blocks/Title';
import { getDefaultVideo } from '../components/Blocks/Video';
import { getDefaultSocials } from '../components/Blocks/Socials';
import { getDefaultParagraph } from '../components/Blocks/Paragraph';
import { getDefaultMapData } from '../components/Blocks/GoogleMaps';
import { getDefaultLongShadowText } from '../components/Blocks/LongShadowText';
import { getDefaultIframe } from '../components/Blocks/Iframe';
import { getDefaultBlankData } from '../components/Blocks/Blank';

test('should return mapped get-default-data function', () => {
  expect(blocksDefaultDataMap.get('title')).toBe(getDefaultTitle);
  expect(blocksDefaultDataMap.get('img')).toBe(getDefaultImg);
  expect(blocksDefaultDataMap.get('video')).toBe(getDefaultVideo);
  expect(blocksDefaultDataMap.get('paragraph')).toBe(getDefaultParagraph);
  expect(blocksDefaultDataMap.get('social')).toBe(getDefaultSocials);
  expect(blocksDefaultDataMap.get('blank')).toBe(getDefaultBlankData);
  expect(blocksDefaultDataMap.get('map')).toBe(getDefaultMapData);
  expect(blocksDefaultDataMap.get('iframe')).toBe(getDefaultIframe);
  expect(blocksDefaultDataMap.get('longShadowText')).toBe(getDefaultLongShadowText);
});
