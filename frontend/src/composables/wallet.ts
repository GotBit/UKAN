import { storeToRefs } from 'pinia'
import { useWeb3 } from '@/store/web3'

export function useWallet() {
  const web3 = useWeb3()

  return {
    walletLabel: storeToRefs(web3).walletLabel,
    connectMetamask: () => web3.connect('metamask'),
    connectWalletconnect: () => web3.connect('walletconnect'),
  }
}
