import { memo } from 'react';

import { MonFrogBoard } from './MonFrogBoard';

export const MonFrog = memo(() => {
  return (
    <div className="m-auto">
      <div className="flex">
        <MonFrogBoard />
      </div>
    </div>
  );
});

MonFrog.displayName = 'MonFrog';
