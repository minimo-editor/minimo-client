import projectReducer, { TYPES } from '../reducers/projectReducer';

const initialState = {
  title: '',
  concept: '',
  address: '',
  backgroundColor: 'white',
  creatorId: '',
  blocks: [],
};

test('should return initial state given unknown action type', () => {
  const payload = {
    title: 'texts',
    concept: 'texts',
    address: 'texts',
    backgroundColor: 'black',
    creatorId: '123456',
    blocks: [{ a: 1, b: 2 }],
  };

  expect(projectReducer(initialState, { type: TYPES.unknown, payload })).toEqual(initialState);
});

test('should replace previous state with given state', () => {
  const payload = {
    title: 'new',
    concept: 'new',
    address: 'new',
    backgroundColor: 'red',
    creatorId: '123456',
    blocks: [{ a: 1, b: 2 }],
  };

  expect(projectReducer(initialState, { type: TYPES.UPDATE_PROJECT, payload })).toEqual(payload);
});
