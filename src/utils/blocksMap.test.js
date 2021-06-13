import blocksMap from './blocksMap';
import Title from '../components/Blocks/Title';
import Img from '../components/Blocks/Img';
import Video from '../components/Blocks/Video';
import Socials from '../components/Blocks/Socials';
import Blank from '../components/Blocks/Blank';
import Paragraph from '../components/Blocks/Paragraph';
import GoogleMaps from '../components/Blocks/GoogleMaps';
import LongShadowText from '../components/Blocks/LongShadowText';
import Iframe from '../components/Blocks/Iframe';

test('should return mapped block', () => {
  expect(blocksMap.get('title')).toBe(Title);
  expect(blocksMap.get('img')).toBe(Img);
  expect(blocksMap.get('video')).toBe(Video);
  expect(blocksMap.get('paragraph')).toBe(Paragraph);
  expect(blocksMap.get('social')).toBe(Socials);
  expect(blocksMap.get('blank')).toBe(Blank);
  expect(blocksMap.get('map')).toBe(GoogleMaps);
  expect(blocksMap.get('iframe')).toBe(Iframe);
  expect(blocksMap.get('longShadowText')).toBe(LongShadowText);
});
