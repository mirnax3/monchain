import { addNetwork } from 'lib/web3/network';

import { useSyncProviders } from './useSyncProviders';

export const useNetwork = async (onChain?: boolean) => {
  const providers = useSyncProviders();
  if (!providers.length) return;

  const { provider } = providers[0];
  const chainId = await provider.request({ method: 'eth_chainId' });

  console.log('chainId', chainId);

  onChain && (await addNetwork(provider));
};
