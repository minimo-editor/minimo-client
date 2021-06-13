import isEmptyObject from './isEmptyObject';

test('should return true when given empty object.', () => {
  const emptyObject = {};

  expect(isEmptyObject(emptyObject)).toEqual(true);
});

test('should return false when given not-empty object.', () => {
  const objectWithContent = { a: 1 };

  expect(isEmptyObject(objectWithContent)).toEqual(false);
});

test('should throw when given array.', () => {
  const objectWithContent = [];

  try {
    isEmptyObject(objectWithContent);
  } catch (error) {
    expect(error).toEqual(Error('input must be literal object.'));
  }
});

test('should throw when given not-object types.', () => {
  const string = 'hello';
  const number = 1;

  try {
    isEmptyObject(string);
  } catch (error) {
    expect(error).toEqual(Error('input must be literal object.'));
  }

  try {
    isEmptyObject(number);
  } catch (error) {
    expect(error).toEqual(Error('input must be literal object.'));
  }
});

test('should throw when given nullish input.', () => {
  try {
    isEmptyObject(undefined);
  } catch (error) {
    expect(error).toEqual(Error('input must not be nullish.'));
  }

  try {
    isEmptyObject(null);
  } catch (error) {
    expect(error).toEqual(Error('input must not be nullish.'));
  }
});
