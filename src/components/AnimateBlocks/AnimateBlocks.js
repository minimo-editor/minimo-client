import {
  useEffect,
  useState,
  useLayoutEffect,
  Children,
} from 'react';
import usePrevious from '../../hooks/usePrevious';
import calculateBoundingBoxes from '../../utils/calculateBoundingBoxes';

export default function AnimateBlocks({ children }) {
  const [boundingBox, setBoundingBox] = useState({});
  const [prevBoundingBox, setPrevBoundingBox] = useState({});
  const prevChildren = usePrevious(children);

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useLayoutEffect(() => {
    const prevBoundBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(prevBoundBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

    if (hasPrevBoundingBox) {
      Children.forEach(children, (child) => {
        const domNode = child.ref.current;
        const firstBox = prevBoundingBox[child.key];
        const lastBox = boundingBox[child.key];

        if (!firstBox || !lastBox) {
          return;
        }

        const changeInY = firstBox.top - lastBox.top;

        if (changeInY) {
          requestAnimationFrame(() => {
            domNode.style.transform = `translateY(${changeInY}px)`;
            domNode.style.transition = 'transform 0s';

            requestAnimationFrame(() => {
              domNode.style.transform = '';
              domNode.style.transition = 'transform 300ms';
            });
          });
        }
      });
    }
  }, [boundingBox, prevBoundingBox, children]);

  return children;
}
