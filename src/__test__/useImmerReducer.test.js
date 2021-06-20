import { act, renderHook } from '@testing-library/react-hooks';
import useImmerReducer from '../hooks/useImmerReducer';
import projectReducer, { TYPES } from '../reducers/projectReducer';

const mockState = {
  title: '',
  concept: '',
  address: '',
  backgroundColor: 'white',
  creatorId: '',
  blocks: [],
};

const STATE = 0;

test('should update background color', async () => {
  const { result } = renderHook(() => useImmerReducer(projectReducer, mockState));
  const [state, dispatch] = result.current;

  expect(state.backgroundColor).toBe('white');

  act(() => {
    const payload = 'red';
    dispatch({ type: TYPES.CHANGE_BG_COLOR, payload });
  });

  expect(result.current[STATE].backgroundColor).toBe('red');
});

test('should update title', async () => {
  const { result } = renderHook(() => useImmerReducer(projectReducer, mockState));
  const [state, dispatch] = result.current;

  expect(state.title).toBe('');

  act(() => {
    const payload = 'new title';
    dispatch({ type: TYPES.CHANGE_TITLE, payload });
  });

  expect(result.current[STATE].title).toBe('new title');
});

test('should add new block', () => {
  const { result } = renderHook(() => useImmerReducer(projectReducer, mockState));
  const [state, dispatch] = result.current;

  const firstBlock = {
    id: 'abc123',
    data: 'hello world',
    type: 'title',
  };

  const secondBlock = {
    id: 'def456',
    data: 'bye world',
    type: 'description',
  };

  expect(state.title).toBe('');

  act(() => {
    const payload = {
      targetIndex: 0,
      newBlock: firstBlock,
    };

    dispatch({ type: TYPES.ADD_BLOCK, payload });
  });

  expect(result.current[STATE].blocks[0]).toBe(firstBlock);

  act(() => {
    const payload = {
      targetIndex: 1,
      newBlock: secondBlock,
    };

    dispatch({ type: TYPES.ADD_BLOCK, payload });
  });

  expect(result.current[STATE].blocks[1]).toBe(secondBlock);
});
