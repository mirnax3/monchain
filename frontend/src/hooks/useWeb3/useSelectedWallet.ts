import { useCallback, useState } from 'react';

export const useSelectedWallet = () => {
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>();
  const [userAccount, setUserAccount] = useState<string>('');

  const handleConnect = useCallback(
    async (providerWithInfo: EIP6963ProviderDetail) => {
      try {
        const accounts = await providerWithInfo.provider.request({
          method: 'eth_requestAccounts'
        });

        setSelectedWallet(providerWithInfo);
        setUserAccount(accounts?.[0]);
      } catch (error) {
        console.error(error);
      }
    },
    [setSelectedWallet, setUserAccount]
  );

  return {
    handleConnect,
    selectedWallet,
    userAccount
  };
};
