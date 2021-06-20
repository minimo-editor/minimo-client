/* eslint-disable prefer-promise-reject-errors */
import { act, renderHook } from '@testing-library/react-hooks';
import useAsync from '../hooks/useAsync';

test('should update data if async function resolved', async () => {
  const successMessage = 'successful';

  const asyncResolve = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(successMessage);
    }, 500);
  });

  const { result, waitForNextUpdate } = renderHook(() => useAsync(asyncResolve, true));

  expect(result.current.loading).toBe(true);
  expect(result.current.data).toBe(null);

  await waitForNextUpdate();

  expect(result.current.loading).toBe(false);
  expect(result.current.error).toBe(null);
  expect(result.current.data).toBe(successMessage);
});

test('should update error if async function rejected', async () => {
  const rejectMessage = 'rejected';

  const asyncReject = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(rejectMessage);
    }, 500);
  });

  const { result, waitForNextUpdate } = renderHook(() => useAsync(asyncReject, true));

  expect(result.current.loading).toBe(true);
  expect(result.current.data).toBe(null);

  await waitForNextUpdate();

  expect(result.current.loading).toBe(false);
  expect(result.current.data).toBe(null);
  expect(result.current.error).toBe(rejectMessage);
});

test('should be able to call executeAsyncFn given false to second argument', async () => {
  const rejectMessage = 'rejected';

  const asyncReject = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(rejectMessage);
    }, 500);
  });

  const { result, waitForNextUpdate } = renderHook(() => useAsync(asyncReject, false));

  expect(typeof result.current.executeAsyncFn).toBe('function');

  act(() => {
    result.current.executeAsyncFn();
  });

  expect(result.current.data).toBe(null);

  await waitForNextUpdate();

  expect(result.current.loading).toBe(false);
  expect(result.current.data).toBe(null);
  expect(result.current.error).toBe(rejectMessage);
});
