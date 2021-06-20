import { act, renderHook } from '@testing-library/react-hooks';
import useStepper from '../hooks/useStepper';

test('should move to next step.', () => {
  const { result } = renderHook(() => useStepper(4));

  expect(result.current.currentStep).toBe(0);

  act(() => {
    result.current.moveToNextStep();
  });

  expect(result.current.currentStep).toBe(1);

  act(() => {
    result.current.moveToNextStep();
    result.current.moveToNextStep();
    result.current.moveToNextStep();
  });

  expect(result.current.currentStep).toBe(4);
});

test('should move to previus step.', () => {
  const { result } = renderHook(() => useStepper(4));

  act(() => {
    result.current.moveToNextStep();
    result.current.moveToNextStep();
    result.current.moveToNextStep();
    result.current.moveToNextStep();
  });

  expect(result.current.currentStep).toBe(4);

  act(() => {
    result.current.moveToPrevStep();
    result.current.moveToPrevStep();
    result.current.moveToPrevStep();
    result.current.moveToPrevStep();
  });

  expect(result.current.currentStep).toBe(0);
});

test('should not go over the max step.', () => {
  const { result } = renderHook(() => useStepper(4));

  act(() => {
    result.current.moveToNextStep();
    result.current.moveToNextStep();
    result.current.moveToNextStep();
    result.current.moveToNextStep();
  });

  expect(result.current.currentStep).toBe(4);

  act(() => {
    result.current.moveToNextStep();
    result.current.moveToNextStep();
    result.current.moveToNextStep();
    result.current.moveToNextStep();
  });

  expect(result.current.currentStep).toBe(4);
});

test('should not go under the min step.', () => {
  const { result } = renderHook(() => useStepper(4));

  act(() => {
    result.current.moveToPrevStep();
    result.current.moveToPrevStep();
    result.current.moveToPrevStep();
    result.current.moveToPrevStep();
  });

  expect(result.current.currentStep).toBe(0);
});
