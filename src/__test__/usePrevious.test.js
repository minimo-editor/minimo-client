import { renderHook } from '@testing-library/react-hooks';
import usePrevious from '../hooks/usePrevious';

test('should remember previous state.', () => {
  const mockState = {
    a: 'a',
    b: 'b',
    c: 'c',
  };

  const { result, rerender } = renderHook(() => usePrevious(mockState));

  expect(result.current).toBe(undefined);

  rerender();

  expect(result.current).toBe(mockState);

  rerender();

  expect(result.current).toBe(mockState);
});

test('should update previous state when given new value.', () => {
  const firstState = {
    a: 'a',
    b: 'b',
    c: 'c',
  };

  const secondState = {
    d: 'd',
    e: 'e',
    f: 'f',
  };

  const { result, rerender } = renderHook((value) => usePrevious(value));

  rerender(firstState);
  rerender();
  expect(result.current).toBe(firstState);

  rerender(secondState);
  rerender();
  expect(result.current).toBe(secondState);
});
