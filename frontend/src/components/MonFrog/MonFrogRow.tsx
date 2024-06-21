import React, { memo, ReactElement } from 'react';
import { BoardCell, MonFrogScene } from 'types/monfrog';

import { MonFrogCell } from './MonFrogCell';

type MonFrogRowProps = {
  row: BoardCell[];
  fullDisplay: MonFrogScene;
  rowIndex: number;
};

export const MonFrogRow = memo(({ row, fullDisplay, rowIndex }: MonFrogRowProps): ReactElement => {
  return (
    <div className="flex">
      {row.map((cell, index) => {
        const showTopBorder =
          rowIndex === 0 || fullDisplay[rowIndex - 1][index].uniqueId !== cell.uniqueId;
        const showBottomBorder =
          rowIndex === fullDisplay.length - 1 ||
          fullDisplay[rowIndex + 1][index].uniqueId !== cell.uniqueId;
        const showLeftBorder =
          index === 0 || fullDisplay[rowIndex][index - 1].uniqueId !== cell.uniqueId;
        const showRightBorder =
          index === row.length - 1 || fullDisplay[rowIndex][index + 1].uniqueId !== cell.uniqueId;

        return (
          <MonFrogCell
            cell={cell}
            showTopBorder={showTopBorder}
            showBottomBorder={showBottomBorder}
            showLeftBorder={showLeftBorder}
            showRightBorder={showRightBorder}
            key={index}
          />
        );
      })}
    </div>
  );
});

MonFrogRow.displayName = 'MonFrogRow';
