import { ChainId, Wallet, WalletType } from '@/gotbit-tools/types'
import { loadBefore, loadAfter, registerWallets, web3Getters } from '@/gotbit-tools'

import { defineStore } from 'pinia'
import type { providers } from 'ethers'
import contracts from '@/store/contracts'

import { chainIds, DEBUG, DEFAULT_CHAINID } from '@/config'


import { markRaw } from 'vue'

export const useWeb3 = defineStore('web3', {
  state: () => {
    return {
      walletHandler: undefined as Wallet | undefined,
      signer: undefined as providers.JsonRpcSigner | undefined,
      wallet: undefined as string | undefined,
      userChainId: undefined as string | undefined,
      neededChainId: DEFAULT_CHAINID as ChainId,
      login: false,
      loading: false,
    }
  },
  getters: {
    // ...web3Getters(contracts),
    loader: (state) => state.loading,
    walletLabel: (state) => state.login ? state.wallet?.slice(0, 5) + "..." + state.wallet?.slice(-3) : "Connect wallet",
    isCorrectChainId: (state) => state.neededChainId === state.userChainId
  },
  actions: {
    loadBefore: async () => await loadBefore(contracts),
    loadAfter: async () => await loadAfter(contracts),

    async updateStoreState(signer: providers.JsonRpcSigner, wallet: string, chainId: string) {
      this.signer = markRaw(signer)
      this.wallet = wallet
      this.userChainId = chainId
    },
    async connect(walletType: WalletType) {
      this.walletHandler = markRaw(new registerWallets[walletType](chainIds, this.neededChainId, this.updateStoreState, (wallet: string) => this.loadAfter())) // markRaw is needed to specify walletHandler to be not reactive
      await this.walletHandler?.connect()
      this.login = true
      await this.loadAfter()
    },
    async switchChain(chainId: ChainId) {
      const res = await this.walletHandler?.switchChain(chainId)
      if (res === "Can't change chain on trust wallet") {
      }
      await this.loadAfter()
    },
    async disconnect() {
      this.login = false
      await this.walletHandler?.disconnect()
    },
  },
})
