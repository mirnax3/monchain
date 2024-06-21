import { appConfig } from 'config';
import { recoilPersist } from 'recoil-persist';

export const persistanceCacheKey = appConfig.persistanceCacheKey;

export const persistanceCacheEffect = recoilPersist({
  key: persistanceCacheKey
});

export function getPersistanceCacheData() {
  const localStorageCacheData = localStorage.getItem(persistanceCacheKey);

  return localStorageCacheData ? JSON.parse(localStorageCacheData) : {};
}
