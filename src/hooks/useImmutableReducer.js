import { produce } from 'immer';
import { useMemo, useReducer } from 'react';

export default function useImmerReducer(
  reducer,
  initialState,
) {
  const cachedReducer = useMemo(() => produce(reducer), [reducer]);
  return useReducer(cachedReducer, initialState);
}
