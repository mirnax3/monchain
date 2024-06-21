import { memo } from 'react';

import { DiscoverWalletProviders } from './DiscoverWalletProviders';

export const Web3Page = memo(({ children }: ChildrenProp) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-900">
      <DiscoverWalletProviders />
      {children}
    </div>
  );
});

Web3Page.displayName = 'Web3Page';
