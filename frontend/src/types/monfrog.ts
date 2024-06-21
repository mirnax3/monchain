export interface MonFrogPoint {
  x: number;
  y: number;
}

export interface MonFrogShape {
  id: number;
  uniqueId: string;
  color?: string;
  points: MonFrogPoint[];
  width: number;
  height: number;
  rotate?: boolean;
}

export type BoardCell = {
  shapeId: number;
  uniqueId: string;
  color: string;
};

export type MonFrogScene = BoardCell[][];
