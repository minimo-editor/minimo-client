import React from 'react';
import Modal from '../shared/Modal';
import Preview from './Preview';
import '@testing-library/jest-dom/extend-expect';

function sum(a, b) {
  return a + b;
}

test('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
