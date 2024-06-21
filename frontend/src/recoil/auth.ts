import { atom } from 'recoil';

import { persistanceCacheEffect } from './persistenceCacheEffect';

export type AuthAtomProps = {
  authenticated?: boolean;
  ethereum?: {
    wallets: string[];
  };
};

export const authAtom = atom<AuthAtomProps>({
  key: 'authAtom',
  default: {
    authenticated: false,
    ethereum: {
      wallets: []
    }
  },
  effects: [persistanceCacheEffect.persistAtom]
});
