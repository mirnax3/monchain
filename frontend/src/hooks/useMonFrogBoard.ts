import {
  createEmptyScene,
  mergeIntoStage,
  rotateShape,
  validPosition
} from 'lib/monfrog/monfrogBoard';
import { createRandomShape } from 'lib/monfrog/monfrogShapes';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { monfrogAtom } from 'recoil/monfrog/monfrogAtom';
import { MonFrogPoint, MonFrogScene, MonFrogShape } from 'types/monfrog';

import { useInterval } from './useInterval';

export const ROW_COUNT = 20;
export const COLUMN_COUNT = 10;
export const INTERVAL_TICK = 600;

const initialScene: MonFrogScene = createEmptyScene();
const initialPosition: MonFrogPoint = { x: 4, y: 0 };

export function useMonFrogBoard() {
  const [scene, setScene] = useState<MonFrogScene>(initialScene);
  const [shape, setShape] = useRecoilState<MonFrogShape>(monfrogAtom);
  const [isValidGame, setValidGame] = useState<boolean>(true);
  const [position, setPosition] = useState<MonFrogPoint>(initialPosition);
  const [display, setDisplay] = useState(mergeIntoStage(scene, shape, position));

  const placeShape = useCallback(() => {
    const newScene = mergeIntoStage(scene, shape, position);
    const newShape = createRandomShape();

    setScene(newScene);
    setShape(newShape);
    setPosition(initialPosition);
  }, [scene, shape, position, setScene, setShape, setPosition]);

  const movePosition = useCallback(
    (x: number, y: number) => {
      const newPosition = { x: x + position.x, y: y + position.y };

      if (!validPosition(newPosition, shape, scene)) {
        if (position.y === 0) setValidGame(false);

        return false;
      }

      setPosition(newPosition);

      return true;
    },
    [position, shape, scene, setPosition]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>): void => {
      switch (event.key) {
        case 'ArrowRight':
          movePosition(1, 0);
          event.preventDefault();
          break;
        case 'ArrowLeft':
          movePosition(-1, 0);
          event.preventDefault();
          break;
        case 'ArrowDown':
          movePosition(0, 1);
          event.preventDefault();
          break;
        case 'ArrowUp':
          rotateShape(shape, position, scene, setShape);
          event.preventDefault();
          break;
        default:
          break;
      }
    },
    [movePosition, shape, position, scene, setShape]
  );

  const tick = useCallback(() => {
    if (!movePosition(0, 1)) {
      placeShape();
    }
  }, [movePosition, placeShape, shape, position, scene, setShape]);

  useEffect(() => {
    const display = mergeIntoStage(scene, shape, position);
    setDisplay(display);
  }, [scene, shape, position, setDisplay]);

  useInterval(tick, INTERVAL_TICK, isValidGame);

  useEffect(() => {
    if (!isValidGame) alert('no!');
    //TODO handle game over
  }, [isValidGame]);

  return { display, onKeyDown };
}
