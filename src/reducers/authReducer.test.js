import authReducer, { TYPES } from './authReducer';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: {},
};

test('should return initial state given unknown type of action.', () => {
  expect(authReducer(initialState, { type: TYPES.unknown })).toEqual(initialState);
});

test('should change isLoading to true given AUTH_TRY action.', () => {
  const loadingState = {
    isAuthenticated: false,
    isLoading: true,
    error: {},
  };

  expect(authReducer(initialState, { type: TYPES.AUTH_TRY })).toEqual(loadingState);
});

test('should change isAuthenticated to true given AUTH_SUCCESS action.', () => {
  const authenticatedState = {
    isAuthenticated: true,
    isLoading: false,
    error: {},
  };

  expect(authReducer(initialState, { type: TYPES.AUTH_SUCCESS })).toEqual(authenticatedState);
});

test('should update error given AUTH_ERROR action.', () => {
  const error = {
    code: 404,
    message: 'not found',
  };

  const errorState = {
    isAuthenticated: false,
    isLoading: false,
    error,
  };

  expect(authReducer(initialState, { type: TYPES.AUTH_ERROR, payload: error })).toEqual(errorState);
});

test('should return initial state given AUTH_RESET action.', () => {
  const errorState = {
    isAuthenticated: false,
    isLoading: false,
    error: { code: 404, message: 'not found' },
  };

  expect(authReducer(errorState, { type: TYPES.unknown })).toEqual(errorState);

  expect(authReducer(errorState, { type: TYPES.AUTH_CLEAN_UP })).toEqual(initialState);
});
