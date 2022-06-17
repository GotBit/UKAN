import { providers } from 'ethers'

import { getChainHex, getChainRpc, getChainDescription, getChainName, getChainScanner } from '@/gotbit-tools'

import WalletConnectProvider from "@walletconnect/web3-provider";

import type {
  ChainId,
  Wallet,
  UpdateStoreStateFunction,
  ChangeChainCallbackFunction,
  ChangeWalletCallbackFunction,
} from '@/gotbit-tools/types'

export class Walletconnect implements Wallet {
  public provider!: providers.Web3Provider 
  public signer!: providers.JsonRpcSigner
  public address!: string
  public chainId!: string

  public appName!: string 
  private wcProvider: any

  constructor(
    public chainIds: readonly ChainId[],
    public defaultChainId: ChainId,
    public updateStoreState: UpdateStoreStateFunction,
    public changeWalletCallback?: ChangeWalletCallbackFunction,
    public changeChainCallback?: ChangeChainCallbackFunction,
  ) {
    const rpc = {} as { [key: number]: string }
    for (const chainId of chainIds) {
      rpc[parseInt(chainId)] = getChainRpc(chainId)
    }

    this.wcProvider = new WalletConnectProvider({
      rpc,
      chainId: parseInt(defaultChainId),
      qrcode: true,
      pollingInterval: 150000,
    })

    this.wcProvider.on('accountsChanged', async (accounts: string[]) => {
      if (this.address !== accounts[0]) {
        await this.updateProviderState()
      }
      changeWalletCallback?.(accounts[0])
    })

    this.wcProvider.on('chainChanged', async (chainId: number) => {
      if (parseInt(this.chainId) !== chainId) {
        await this.updateProviderState()
      }
      changeChainCallback?.(chainId.toString())
    })
  }

  async connect(): Promise<boolean> {
    try {
      await this.wcProvider.enable().catch(async (error: any) => {
      })
      this.appName = this.wcProvider.wc._peerMeta.name
      if (!(this.chainIds as string[]).includes(this.chainId))
        await this.switchChain(this.defaultChainId)
      await this.updateProviderState()
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async updateProviderState() {
    this.provider = new providers.Web3Provider(this.wcProvider)
    this.signer = await this.getSigner()
    this.address = await this.getAddress()
    this.chainId = await this.getChainId()
    await this.updateStoreState(this.signer, this.address, this.chainId)
  }

  async switchChain(chainId: ChainId): Promise<string> {
    if ((await this.getChainId()) === (chainId as string)) {
      return "Already chandged"
    }
    if (this.appName.includes("Trust Wallet")) {
      return "Can't change chain on trust wallet"
    }
    console.log('Sending request to change chain')
    return new Promise<string>(async (resolve, reject) => {
      // When succesful this request throw: Response data is invalid
      this.wcProvider
        .request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: getChainHex(chainId) }],
        })
        .catch(async (error: any) => {
          const errorMessage = error.message.replace(/ "[^]*"/, '')
          switch (errorMessage) {
            case 'User rejected the request.':
              resolve("User rejected chain")
              break
            case 'Unrecognized chain ID. Try adding the chain using wallet_addEthereumChain first.':
              await this.addChain(chainId)
              resolve("success")
          }
        })
      resolve("success")
  })
  }
  async addChain(chainId: ChainId): Promise<boolean> {
    console.log("Add chain")
    try {
      const param = {
        chainId: getChainHex(chainId),
        chainName: getChainName(chainId),
        nativeCurrency: {
          name: getChainDescription(chainId).symbol,
          symbol: getChainDescription(chainId).symbol,
          decimals: 18,
        },
        rpcUrls: [getChainRpc(chainId)],
        blockExplorerUrls: [getChainScanner(chainId)],
      }
      const resp = await this.wcProvider.request({
        method: 'wallet_addEthereumChain',
        params: [param],
      })
      console.log(resp)
      return true
    } catch (addError) {
      console.log(addError)
      return false
    }
  }

  async disconnect(): Promise<boolean> {
    await this.wcProvider.disconnect()
    return true
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
}
