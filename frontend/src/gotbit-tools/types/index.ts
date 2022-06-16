import { providers } from 'ethers'
import { Store, StoreDefinition, _GettersTree } from 'pinia'

import { chainIds as registerdChainIds } from '@/config'

import { registerWallets } from '../utils/wallets'

export type ChainId = typeof registerdChainIds[number]

export interface Config {
  name: string
  rpc: string
  chainId: number
  symbol: string
  scanner: string
}

export interface Node {
  short: string
  name: string
  scanner: string
  rpc: string
  chainId: number
  type: 'mainnet' | 'testnet'
}

export const chainIds = {
  localhost: 31337,
  eth_mainnet: 1,
  bsc_mainnet: 56,
  polygon_mainnet: 137,
  avax_mainnet: 43114,
  ftm_mainnet: 250,
  arbitrum_mainnet: 42161,
  rinkeby: 4,
  ropsten: 3,
  bsc_testnet: 97,
  polygon_testnet: 80001,
  avax_testnet: 43113,
  ftm_testnet: 4002,
  arbitrum_testnet: 421611,
}

export const chainTags = {
  31337: 'localhost',
  1: 'eth_mainnet',
  56: 'bsc_mainnet',
  137: 'polygon_mainnet',
  43114: 'avax_mainnet',
  250: 'ftm_mainnet',
  42161: 'arbitrum_mainnet',
  4: 'rinkeby',
  3: 'ropsten',
  97: 'bsc_testnet',
  80001: 'polygon_testnet',
  43113: 'avax_testnet',
  4002: 'ftm_testnet',
  421611: 'arbitrum_testnet',
}

export type ChainTag = keyof typeof chainIds

export type ConnectFunction = (
  wallet: string,
  signer: providers.JsonRpcSigner | null,
  chainId: ChainId
) => Promise<void>

export type UpdateStoreStateFunction = (
  signer: providers.JsonRpcSigner,
  wallet: string,
  chainId: string
) => Promise<void>

export type ChangeWalletCallbackFunction = (wallet: string) => void
export type ChangeChainCallbackFunction = (chainId: string) => void

export abstract class Wallet {
  public provider!: providers.Web3Provider
  public signer!: providers.JsonRpcSigner
  public address!: string
  public chainId!: string

  constructor(
    public chainIds: readonly ChainId[],
    public defaultChainId: ChainId,
    public updateStoreState: UpdateStoreStateFunction,
    public changeWalletCallback?: ChangeWalletCallbackFunction,
    public changeChainCallback?: ChangeChainCallbackFunction
  ) {}

  abstract connect(): Promise<boolean>
  abstract updateProviderState(): Promise<void>
  abstract disconnect(): Promise<boolean>
  abstract switchChain(chainId: ChainId): Promise<string>
  abstract addChain(chainId: ChainId): Promise<boolean>

  abstract getSigner(): Promise<providers.JsonRpcSigner>
  abstract getChainId(): Promise<string>
  abstract getAddress(): Promise<string>
}

export type WalletType = keyof typeof registerWallets

export interface IWeb3State {
  wallet: string
  _signer: () => providers.JsonRpcSigner | null
  chainId: ChainId
  login: boolean
  loading: boolean
  walletHandler: Wallet | null
}
export interface IWeb3Getters {
  globalLoading: (state: IWeb3State) => boolean
  signer: (state: IWeb3State) => providers.JsonRpcSigner | null
  walletLabel: (state: IWeb3State) => string
}

export interface IWeb3Actions {
  _connect: (
    wallet: string,
    signer: providers.JsonRpcSigner | null,
    chainId: ChainId
  ) => Promise<void>
  loadBefore: () => Promise<void>
  loadAfter: () => Promise<void>
  connect: (walletType: WalletType) => Promise<void>
  switchChain: (chainId: ChainId) => Promise<boolean>
  disconnect: (chainId: ChainId) => Promise<boolean>
}

export type IWeb3StoreDefinition = StoreDefinition<
  'web3',
  IWeb3State,
  IWeb3Getters,
  IWeb3Actions
>
export type IWeb3Store = Store<'web3', IWeb3State, IWeb3Getters, IWeb3Actions>
export interface IContractState {
  loading: boolean
}

export interface IContractActions {
  loadBefore: () => Promise<boolean>
  loadAfter: () => Promise<boolean>
}

export type IContractStoreDefinition = StoreDefinition<
  string,
  IContractState,
  {},
  IContractActions
>

export type IContractStore = Store<string, IContractState, {}, IContractActions>
