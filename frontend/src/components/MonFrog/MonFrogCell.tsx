import React, { memo, ReactElement } from 'react';
import { BoardCell } from 'types/monfrog';

const borderStyle = '3px solid black';

type MonFrogCellProps = {
  cell: BoardCell;
  uniqueId?: string;
  showTopBorder: boolean;
  showBottomBorder: boolean;
  showLeftBorder: boolean;
  showRightBorder: boolean;
};

export const MonFrogCell = memo(
  ({
    cell,
    showTopBorder,
    showBottomBorder,
    showLeftBorder,
    showRightBorder
  }: MonFrogCellProps): ReactElement => {
    const backgroundColor = cell.color || 'transparent';

    return (
      <span
        style={{
          backgroundColor,
          borderTop: showTopBorder ? borderStyle : 'none',
          borderBottom: showBottomBorder ? borderStyle : 'none',
          borderLeft: showLeftBorder ? borderStyle : 'none',
          borderRight: showRightBorder ? borderStyle : 'none',
          display: 'inline-block',
          width: '40px',
          height: '40px',
          boxSizing: 'border-box'
        }}
      />
    );
  }
);

MonFrogCell.displayName = 'MonFrogCell';
