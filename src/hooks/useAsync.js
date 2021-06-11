import { useReducer, useEffect, useCallback } from 'react';

const TYPES = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const initialState = {
  loading: false,
  data: null,
  error: false,
};

function useAsync(asyncFunction, immediate = true) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { LOADING, SUCCESS, ERROR } = TYPES;

  const executeAsyncFn = useCallback(() => {
    (async function fetch() {
      try {
        dispatch({ type: LOADING });
        const data = await asyncFunction();
        dispatch({ type: SUCCESS, payload: data });
      } catch (err) {
        dispatch({ type: ERROR, payload: err });
      }
    })();
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      executeAsyncFn();
    }
  }, [asyncFunction, immediate]);

  return {
    ...state,
    executeAsyncFn,
  };
}

function reducer(state, action) {
  const { LOADING, SUCCESS, ERROR } = TYPES;

  switch (action.type) {
    case LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      throw state;
  }
}

export default useAsync;
