import { providers } from 'ethers'

import { getChainHex, getChainDescription, getChainName, getChainScanner } from '@/gotbit-tools'
import type {
  ChainId,
  Wallet,
  UpdateStoreStateFunction,
  ChangeChainCallbackFunction,
  ChangeWalletCallbackFunction,
} from '@/gotbit-tools/types'

export class Metamask implements Wallet {
  public provider!: providers.Web3Provider
  public signer!: providers.JsonRpcSigner
  public address!: string
  public chainId!: string

  
  private metamaskProvider: any

  constructor(
    public chainIds: readonly ChainId[],
    public defaultChainId: ChainId,
    public updateStoreState: UpdateStoreStateFunction,
    public changeWalletCallback?: ChangeWalletCallbackFunction,
    public changeChainCallback?: ChangeChainCallbackFunction,
  ) {
    this.metamaskProvider = (window as any).ethereum
    if (!this.metamaskProvider) {
      throw new Error('Please set up MetaMask properly')
    }

    this.metamaskProvider.on("accountsChanged", async (accounts: string[]) => {
      if (this.address !== accounts[0]) {
        await this.updateProviderState()
      }
      changeWalletCallback && changeWalletCallback(accounts[0])
    });

    this.metamaskProvider.on("chainChanged", async (chainId: number) => {
      if (parseInt(this.chainId) !== chainId) {
        await this.updateProviderState()
      }
      changeChainCallback && changeChainCallback(chainId.toString())
    })
  }

  async connect(): Promise<boolean> {
    try {
      this.address = (
        await (window as any).ethereum.request?.({
          method: 'eth_requestAccounts',
        })
      )[0] as string
      await this.updateProviderState()
      if (!(this.chainIds as string[]).includes(this.chainId))
        await this.switchChain(this.defaultChainId)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async updateProviderState() {
    this.provider = new providers.Web3Provider(this.metamaskProvider)
    this.signer = this.provider.getSigner()
    this.address = await this.signer.getAddress()
    this.chainId = (await this.provider.getNetwork()).chainId.toString()
    await this.updateStoreState(this.signer, this.address, this.chainId)
  }

  async switchChain(chainId: ChainId): Promise<string> {
    try {
      await this.metamaskProvider.request?.({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: getChainHex(chainId) }],
      })
      await this.updateProviderState()
      return "success"
    } catch (error) {
      if ((error as any).code === 4902) {
        try {
          const param = {
            chainId: getChainHex(chainId),
            chainName: getChainName(chainId),
            nativeCurrency: {
              name: getChainDescription(chainId).symbol,
              symbol: getChainDescription(chainId).symbol,
              decimals: 18,
            },
            rpcUrls: [getChainDescription(chainId).rpc],
            blockExplorerUrls: [getChainScanner(chainId)],
          }
          await this.metamaskProvider.request?.({
            method: 'wallet_addEthereumChain',
            params: [param],
          })
          return "success"
        } catch (addError) {
          return "error"
        }
      }
      return "success"
    }
  }

  async addChain(chainId: string): Promise<boolean> {
    return false
  }

  async getSigner(): Promise<providers.JsonRpcSigner> {
    return this.provider.getSigner()
  }

  async getChainId(): Promise<string> {
    return (await this.provider.getNetwork()).chainId.toString()
  }

  async getAddress(): Promise<string> {
    return (await this.getSigner()).getAddress()
  }

  async disconnect(): Promise<boolean> {
    return true
  }
}
