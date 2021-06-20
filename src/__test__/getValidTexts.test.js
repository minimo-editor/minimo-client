import getValidTexts from '../utils/getValidTexts';

test('should return valid texts', () => {
  const invalidText = 'a b c #';
  const validText = 'abc';

  expect(getValidTexts(invalidText)).toBe(validText);
});

test('should return same texts if given valid texts', () => {
  const validText = 'abcdef';

  expect(getValidTexts(validText)).toBe(validText);
});
