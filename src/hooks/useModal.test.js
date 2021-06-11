import { act, renderHook } from '@testing-library/react-hooks';
import useModal from './useModal';

test('should be able to toggle modal.', () => {
  const { result } = renderHook(useModal);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.modalOpen).toBe(true);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.modalOpen).toBe(false);
});

test('should be able to close modal.', () => {
  const { result } = renderHook(useModal);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.modalOpen).toBe(true);

  act(() => {
    result.current.setModalOpen(false);
  });

  expect(result.current.modalOpen).toBe(false);
});
