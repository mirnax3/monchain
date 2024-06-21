export function handleNetworkChanged() {
  window.location.reload();
}

export async function addNetwork(provider: EIP1193Provider) {
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0xf00' }]
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0xf00',
              chainName: '...',
              rpcUrls: ['https://...'] /* ... */
            }
          ]
        });
      } catch (addError) {
        // Handle "add" error.
      }
    }
    // Handle other "switch" errors.
  }
}
