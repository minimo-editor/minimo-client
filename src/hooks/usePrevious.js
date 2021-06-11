import { useEffect, useRef } from 'react';

export default function usePrevious(value) {
  const prevChildrenRef = useRef();

  useEffect(() => {
    prevChildrenRef.current = value;
  }, [value]);

  return prevChildrenRef.current;
}
