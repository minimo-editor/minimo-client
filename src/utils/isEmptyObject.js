export default function isEmptyObject(value) {
  if (value === undefined || value === null) {
    throw new Error('input must not be nullish.');
  }

  if (value.constructor !== Object) {
    throw new Error('input must be literal object.');
  }

  return Object.keys(value).length === 0;
}
