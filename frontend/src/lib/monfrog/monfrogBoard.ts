import { MonFrogPoint, MonFrogScene, MonFrogShape } from 'types/monfrog';

export const ROW_COUNT = 10;
export const COLUMN_COUNT = 10;

export function mergeIntoStage(
  stage: MonFrogScene,
  shape: MonFrogShape,
  position: MonFrogPoint
): MonFrogScene {
  const newStage = stage.map((row) => [...row]);
  const { color, uniqueId, id: shapeId } = shape;

  shape.points.forEach((point) => {
    const x = point.x + position.x;
    const y = point.y + position.y;

    if (x < 0 || y < 0 || x >= COLUMN_COUNT || y >= ROW_COUNT) {
      return;
    }

    newStage[y][x] = { shapeId, uniqueId, color };
  });

  return newStage;
}

export function createEmptyScene(): MonFrogScene {
  return Array.from({ length: ROW_COUNT }, () =>
    Array(COLUMN_COUNT).fill({ shapeId: 0, uniqueId: '' })
  );
}

export function validPosition(position: MonFrogPoint, shape: MonFrogShape, scene: MonFrogScene) {
  return shape.points.every((point) => {
    const tX = point.x + position.x;
    const tY = point.y + position.y;

    if (tX < 0 || tX >= COLUMN_COUNT) {
      return false;
    }

    if (tY < 0 || tY >= ROW_COUNT) {
      return false;
    }

    if (scene[tY][tX].shapeId !== 0) {
      return false;
    }

    return true;
  });
}

export function rotateShape(
  shape: MonFrogShape,
  position: MonFrogPoint,
  scene: MonFrogScene,
  setShape: (newShape: MonFrogShape) => void
) {
  const tX = Math.floor(shape.width / 2);
  const tY = Math.floor(shape.height / 2);

  const newPoints = shape.points.map((point) => {
    let { x, y } = point;

    x -= tX;
    y -= tY;

    // cos 90 = 0, sin 90 = 1
    // x = x cos 90 - y sin 90 = -y
    // y = x sin 90 + y cos 90 = x
    let rX = -y;
    let rY = x;

    rX += tX;
    rY += tY;

    return { x: rX, y: rY };
  });

  const rotatedShape: MonFrogShape = {
    id: shape.id,
    uniqueId: shape.uniqueId,
    points: newPoints,
    width: shape.width,
    height: shape.height,
    color: shape.color
  };

  if (validPosition(position, rotatedShape, scene)) {
    setShape(rotatedShape);
  }
}
