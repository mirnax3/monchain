import { store } from 'lib/web3/store';
import { useSyncExternalStore } from 'react';

export const useSyncProviders = () =>
  useSyncExternalStore(store.subscribe, store.value, store.value);
