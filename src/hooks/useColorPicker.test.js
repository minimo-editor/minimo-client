import { act, renderHook } from '@testing-library/react-hooks';
import useColorPicker from './useColorPicker';

test('should be able to toggle colorpicker.', () => {
  const { result } = renderHook(useColorPicker);

  act(() => {
    result.current.toggleColorPicker();
  });

  expect(result.current.isColorPickerOpen).toBe(true);

  act(() => {
    result.current.toggleColorPicker();
  });

  expect(result.current.isColorPickerOpen).toBe(false);
});

test('should be able to close colorpicker.', () => {
  const { result } = renderHook(useColorPicker);

  act(() => {
    result.current.toggleColorPicker();
  });

  expect(result.current.isColorPickerOpen).toBe(true);

  act(() => {
    result.current.closeColorPicker();
  });

  expect(result.current.isColorPickerOpen).toBe(false);
});

test('should be able to change color.', () => {
  const { result } = renderHook(useColorPicker);
  const HEX_RED = '#f44336';

  const COLOR_RED = {
    hex: HEX_RED,
    rgb: {
      r: 244, g: 67, b: 54, a: 1,
    },
    source: 'hex',
  };

  act(() => {
    result.current.handleChangeColor(COLOR_RED);
  });

  expect(result.current.color).toBe(HEX_RED);
});
