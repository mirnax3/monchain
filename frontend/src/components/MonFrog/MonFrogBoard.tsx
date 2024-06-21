import { useMonFrogBoard } from 'hooks/useMonFrogBoard';
import React, { memo, ReactElement, useEffect, useMemo, useRef } from 'react';

import { MonFrogRow } from './MonFrogRow';

export const MonFrogBoard = memo((): ReactElement => {
  const { display, onKeyDown } = useMonFrogBoard();
  const monchainBoardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (monchainBoardRef?.current) {
      monchainBoardRef.current.focus();
    }
  }, [monchainBoardRef]);

  return useMemo(
    () => (
      <div
        ref={monchainBoardRef}
        className="inline-block m-4 p-2 rounded border-2 border-white"
        tabIndex={0}
        role="grid"
        aria-label="Game board"
        onKeyDown={onKeyDown}>
        {display?.map((row, index) => (
          <MonFrogRow row={row} fullDisplay={display} rowIndex={index} key={index} />
        ))}
      </div>
    ),
    [display, monchainBoardRef]
  );
});

MonFrogBoard.displayName = 'MonFrogBoard';
