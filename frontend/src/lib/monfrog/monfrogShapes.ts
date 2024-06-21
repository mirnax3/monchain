import { nanoid } from 'nanoid';
import { MonFrogShape } from 'types/monfrog';

export enum MonFrogShapes {
  SQUARE = 1,
  SQUARE_LARGE = 2,
  SQUARE_SMALL = 3,
  LINE_HORIZONTAL = 4,
  LINE_VERTICAL = 5
}

export const hexColors: string[] = [
  '#000000', // Black
  '#FFFFFF', // White
  '#FF0000', // Mondrian Red
  '#F2F5A9', // Mondrian Yellow
  '#3F48CC' // Mondrian Blue
];

export const shapeColorMapping: Record<number, string[]> = {
  [MonFrogShapes.SQUARE]: [hexColors[2], hexColors[4]], // Mondrian Red
  [MonFrogShapes.SQUARE_LARGE]: [hexColors[3], hexColors[1]], // Mondrian Yellow
  [MonFrogShapes.SQUARE_SMALL]: [hexColors[4], hexColors[3]], // Mondrian Blue
  [MonFrogShapes.LINE_HORIZONTAL]: [hexColors[0], hexColors[2], hexColors[1]], // Black
  [MonFrogShapes.LINE_VERTICAL]: [hexColors[1], hexColors[3]] // White
};

export function getRandomHexColor(): string {
  const randomIndex = Math.floor(Math.random() * hexColors.length);
  return hexColors[randomIndex];
}

export const SHAPES: Omit<MonFrogShape, 'uniqueId'>[] = [
  {
    id: MonFrogShapes.SQUARE,
    points: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 }
    ],
    width: 2,
    height: 2,
    rotate: false
  },
  {
    id: MonFrogShapes.SQUARE_LARGE,
    points: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 }
    ],
    width: 3,
    height: 3
  },
  {
    id: MonFrogShapes.SQUARE_SMALL,
    points: [{ x: 0, y: 0 }],
    width: 1,
    height: 1
  },
  {
    id: MonFrogShapes.LINE_HORIZONTAL,
    points: [
      { x: 0, y: 0 },
      { x: 1, y: 0 }
    ],
    width: 2,
    height: 1
  },
  {
    id: MonFrogShapes.LINE_VERTICAL,
    points: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 }
    ],
    width: 1,
    height: 3
  }
];

export function createRandomShape(): MonFrogShape {
  const randomIndex = Math.floor(Math.random() * SHAPES.length);
  return createUniqueShape(SHAPES[randomIndex]);
}

export function createUniqueShape(shape: Omit<MonFrogShape, 'uniqueId'>): MonFrogShape {
  const colors = shapeColorMapping[shape.id];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return {
    ...shape,
    color,
    uniqueId: nanoid()
  };
}

export function createUniqueShapes(): MonFrogShape[] {
  return SHAPES.map((shape) => createUniqueShape(shape));
}
