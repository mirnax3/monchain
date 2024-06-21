import { useSyncProviders } from 'hooks/useWeb3';
import { useNetwork } from 'hooks/useWeb3/useNetwork';
import { useSelectedWallet } from 'hooks/useWeb3/useSelectedWallet';
import { formatAddress } from 'lib/web3/formatHelpers';

export const DiscoverWalletProviders = () => {
  const providers = useSyncProviders();
  const { userAccount, selectedWallet, handleConnect } = useSelectedWallet();

  useNetwork();

  return (
    <>
      <h2 className="text-white">Wallets Detected:</h2>
      <div>
        {providers.length > 0 ? (
          providers?.map((provider: EIP6963ProviderDetail) => (
            <button key={provider.info.uuid} onClick={() => handleConnect(provider)}>
              <img src={provider.info.icon} alt={provider.info.name} />
              <div className="text-white">{provider.info.name}</div>
            </button>
          ))
        ) : (
          <div className="text-white">No Announced Wallet Providers</div>
        )}
      </div>
      <hr />
      <h2 className="text-white">{userAccount ? '' : 'No '}Wallet Selected</h2>
      {userAccount && (
        <div>
          <div>
            <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />
            <div className="text-white">{selectedWallet.info.name}</div>
            <div className="text-white">({formatAddress(userAccount)})</div>
          </div>
        </div>
      )}
    </>
  );
};
