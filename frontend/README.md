# Dapp Template

## Custom `packege.json` scripts

- `yarn contracts` - copy `typechain` and `contracts.json` from root `contracts` folder to `/frontend/contracts/` directory

## Types extending

### `String`

```ts
function toBigNumber(decimals = 18): BigNumber
function shortAddress(start = 6, end = start - 2): string
```

- `toBigNumber` - converts `tokens` to `wei` and returns `BigNumber` (using `decimals`)
- `shortAddress` - converts full address to short one version like `0xSomE...1234`

### `BigNumber`

Now has two additional functions

```ts
function formatString(decimals = 18, precision = decimals): string
function formatNumber(decimals = 18, precision = decimals): number
```

- `formatString` - converts `weis` to `tokens` and returns `string` (using `decimals`)
- `formatNumber` - executes `formatString` and returns `Number(result)` (be careful if number bigger than max number in js, it will throw exception)

### `console`

If you want to console out some you can add `Always` to function and it will ignore `DEBUG = false`

> _Example of usage_

```ts
console.logAlways('something') // will ignore `DEBUG = false`
console.errorAlways('something') // will ignore `DEBUG = false`
```

## Settings

### Autodeploy of Firebase

Template has ci/cd for auto testing and deploying apps to `firebase`

> If your app has problem with hardhat tests, it will not be deployed

1. If you push or merge request to `frontend-dev` branch app will be automaticaly deployed on `dev` firebase project using next env variables setuped in `CI/CD` gitlab
   - `FIREBASE_PROJECT_DEV` - name of firebase project for dev
   - `FIREBASE_TOKEN_DEV` - firebase token to access owner's account of `FIREBASE_PROJECT_DEV`
   - `MORALIS_ID_DEV` - moralis id for dev
2. If you push to `frontend-stable` branch app will be automaticaly deployed on `prod` firebase project usint next env vars setuped in `CI/CD` gitlab
   - `FIREBASE_PROJECT_PROD` - name of firebase project for prod
   - `FIREBASE_TOKEN_PROD` - firebase token to access owner's account of `FIREBASE_PROJECT_PROD`
   - `MORALIS_ID_PROD` - moralis id for prod

Also for `prod` version template mute all output ( turn off `DEBUG` mode )

> If app deployed on prod firebase you can toggle debug mode manually by writing in console

```ts
window.on()
```

> If want to customize firebase deploy you can do it in folder `filebase-config`

### Setup `config.ts`

```ts
export const DEBUG = import.meta.env.VITE_DEBUG === 'true'
export const chainIds = ['97'] as const
export const DEFAULT_CHAINID = chainIds[0]
```

- `DEBUG` - defines by env var `VITE_DEBUG` (look at `.env.local.example`)
- `chainIds` - array of chainids which your app support
- `DEFAULT_CHAINID` - default chain which will choose first for autoswitching

### Setup `contracts.ts`

Here you can define new contracts for app

```ts
import { addContract } from '@/gotbit-tools'
import { Token, Vesting } from '@contracts/typechain'

export default {
  token: addContract<Token>('Token'),
  vesting: addContract<Vesting>('Vesting'),
}
```

> If you have problem with contract definition probably you forget execute `yarn contracts` or wrong `chainIds` was defined

## GotBit tools

### Types (`@/gotbit-tools/types`)

**Interface `Config`** - config for chain

- `name` - name of chain
- `rpc` - public rpc of chain
- `chainId` - chainId number
- `symbol` - symbol for native currency
- `scanner` - url of block scanner

```ts
interface Config {
  name: string
  rpc: string
  chainId: number
  symbol: string
  scanner: string
}
```

**Interface `Node`** - config for chain

- `short` - short name of chain
- `name` - name of chain
- `scanner` - url of block scanner
- `rpc` - public rpc of chain
- `chainId` - chainId number
- `type` - type of chain `testnet` or `mainnet`

```ts
interface Node {
  short: string
  name: string
  scanner: string
  rpc: string
  chainId: number
  type: 'mainnet' | 'testnet'
}
```

**Type `ChainTag`** - label of chain

```ts
type ChainTag =
  | 'localhost'
  | 'eth_mainnet'
  | 'bsc_mainnet'
  | 'polygon_mainnet'
  | 'avax_mainnet'
  | 'ftm_mainnet'
  | 'arbitrum_mainnet'
  | 'rinkeby'
  | 'ropsten'
  | 'bsc_testnet'
  | 'polygon_testnet'
  | 'avax_testnet'
  | 'ftm_testnet'
  | 'arbitrum_testnet' // example
```

**Type `ChainId`** - union of string chains which added to `config.ts`

```ts
type ChainId = '97' | '56' | '1' // example
```

**Type `ConnectFunction`** - interface of connect function for wallet class

```ts
type ConnectFunction = (
  wallet: string,
  signer: providers.JsonRpcSigner | null,
  chainId: ChainId
) => Promise<void>
```

**Type `ChangeWalletCallbackFunction`** - interface of change wallet handler function

```ts
type ChangeWalletCallbackFunction = (wallet: string) => void
```

**Type `ChangeChainCallbackFunction`** - interface of switch chain handler function

```ts
type ChangeChainCallbackFunction = (chainId: string) => void
```

**Class `Wallet`** - abstract class for wallet connection (`metamask`, `walletconnect`)
Can find example how to define new wallets in `/src/gotbit-tools/utils/wallets/metamask.ts`

```ts
abstract class Wallet {
  constructor(
    public connectFunction: ConnectFunction,
    public changeWalletCallback?: ChangeWalletCallbackFunction,
    public preventDefaultChangeWallet?: boolean,
    public changeChainCallback?: ChangeChainCallbackFunction,
    public preventDefaultChangeChain?: boolean
  ) {}

  abstract connect(
    chainIds: readonly ChainId[],
    defaultChainId: ChainId
  ): Promise<boolean>
  abstract disconnect(): Promise<boolean>
  abstract switchChain(chainId: ChainId): Promise<boolean>
}
```

`Fields`

- `connectFuction: ConnectFunction` - connect handler function (executes after successful connection)
- `changeWalletCallback?: ChangeWalletCallbackFunction` - change wallet handler (executes after changing wallet)
- `preventDefaultChangeWallet?: boolean` - if `true` prevents auto executing `connect` function after changing wallet
- `changeChainCallback?: ChangeChainCallbackFunction` - change chain handler (executes after changing chain)
- `preventDefaultChangeChain?: boolean` - if `true` prevents auto executing `connect` function after changing chain)

`Methods`

- `connect`

  ```ts
  abstract connect(
    chainIds: readonly ChainId[],
    defaultChainId: ChainId
  ): Promise<boolean>
  ```

  - `chainIds: readonly ChainId[]` - list of allowed chains
  - `defaultChainId: ChainId` - defulat chain id for connection

- `disconnect` - function for disconnect
- `switchChain` - function to change connected chain

**Type `WalletType`** - label for wallets

```ts
type WalletType = 'metamask' | 'walletconnect' // example
```

**Interface `IWeb3State`** - interface of `state` for `web3` `pinia` store

- `wallet` - address of user wallet
- `_signer` - getter function for `ethers` signer
- `chainId` - actual chainId
- `login` - boolean flag `true` if user connected wallet and otherwise
- `loading` - boolean flag `true` if store load some async info
- `walletHandler` - object of Wallet

```ts
interface IWeb3State {
  wallet: string
  _signer: () => providers.JsonRpcSigner | null
  chainId: ChainId
  login: boolean
  loading: boolean
  walletHandler: Wallet | null
}
```

**Interface `IWeb3Getters`** - interface of `getters` for `web3` `pinia` store

- `globalLoading` - returns `true` if some of registered contracts' `loading` flag is `true`
- `signer` - returns `ethers` signer object
- `walletLabel` - returns short wallet address or `Connect wallet` if `login` is false

```ts
interface IWeb3Getters extends _GettersTree<IWeb3State> {
  globalLoading: (state: IWeb3State) => boolean
  signer: (state: IWeb3State) => providers.JsonRpcSigner | null
  walletLabel: (state: IWeb3State) => string
}
```

**Interface `IWeb3Actions`** - interface of `actions` for `web3` `pinia` store

- `_connect` - inner function for wallets to update state after successful connection
- `loadBefore` - function called in `App.vue` to load information before user connection for registered contracts' stores
- `loadAfter` - function called `_connect` to load information after user connection for registered contracts' stores
- `connect` - function for connect from frontend (`'metamask'` or `'walletconnect'`)
- `switchChain` - function for change chain for multichain apps or change to default chain
- `disconnect` - **WIP**

```ts
interface IWeb3Actions {
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
```

**Interface `IContractState`** - interface of `state` for contracts `pinia` store

```ts
interface IContractState {
  loading: boolean
}
```

**Interface `IContractGetters`** - interface of `getters` for contracts `pinia` store

```ts
type IContractGetters<S extends IContractState> = _GettersTree<S>
```

**Interface `IContractActions`** - interface of `actions` for contracts `pinia` store

```ts
interface IContractActions {
  loadBefore: () => Promise<boolean>
  loadAfter: () => Promise<boolean>
}
```

**Type `IContractsStoreDefinitions`** - alias for definition of contract's store

```ts
type IContractStoreDefinition = StoreDefinition<
  string,
  IContractState,
  {},
  IContractActions
>
```

**Type `IContractsStore`** - alias contract store

```ts
type IContractStore = Store<string, IContractState, {}, IContractActions>
```

### Functions (`@/gotbit-tools`)

#### Safes

`safe` - wrapper for `async` function with error handler

- `promise` - promise of request
- `def?` - defulat value which retuns instead of `null`

```ts
async function safe<T>(
  promise: Promise<T>,
  def?: T | null
): Promise<[T, null] | [T | null, any]>
```

> _Example of usage_

```ts
async function getBalance(address: string): Promise<BigNumber> {
  const [balance, errorBalance] = await safe(contract.balanceOf(address))
  if (errorBalance) {
    console.error(errorBalance)
    return
  }
  return balance!
}
```

`safeWrite` - wrapper for `write` function on contracts (waits transaction too)

- `promise` - promise of contract interaction
- `errorCallback?` - function which executes if error occurs

```ts
async function safeWrite(
  txPromise: Promise<ContractTransaction>,
  errorCallback?: (error: any) => void
): Promise<{ tx: ContractTransaction | null; rpt: ContractReceipt | null }> {
```

> _Example of usage_

```ts
async function transfer(to: string, amount: BigNumber) {
  const { tx } = await safeWrite(token.transfer(to, amount))
}
```

`safeRead` - wrapper for `view` function on contracts

- `promise` - promise of contract interaction
- `defaultValue` - default value if error occurs
- `errorCallback?` - function which executes if error occurs

```ts
async function safeRead<T>(
  promise: Promise<T>,
  defaultValue: T,
  errorCallback?: (error: any) => void
): Promise<T> {
```

> _Example of usage_

```ts
async function balanceOf(user: string): Promise<BigNumber> {
  return await safeRead(token.balanceOf(user), BigNumber.from(0))
}
```

#### Chain Infomation Getters

`getChainTag` - returns `ChainTag` of chain

```ts
function getChainTag(chainId: ChainId): ChainTag
```

`getChainRpc` - returns rpc for provider

```ts
function getChainRpc(chainId: ChainId): string
```

`getChainName` - returns full name of chain

```ts
function getChainName(chainId: ChainId): string
```

`getChainHex` - returns hex of chainId

```ts
function getChainHex(chainId: ChainId): string
```

`getChainScanner` - returns scanner url of chainId

```ts
function getChainScanner(chainId: ChainId): string
```

`getChainDescription` - returns `Config` for chain

```ts
function getChainDescription(chainId: ChainId): Config
```

#### Contracts interaction

`getProvider`
`getContractsInfo`
`useContracts`
`isLogin`

#### Dev

- `defineWeb3Store` - wrapper for `pinia` `defineStore` to define `web3` store
- `defineContractStore` - wrapper for `pinia` `defineStore` to define contracts store

  ```ts
  export function defineContractStore<
    IState extends IContractState,
    IActions extends IContractActions,
    IGetters extends _GettersTree<IState> = {}
  >(
    name: string,
    options: Omit<DefineStoreOptions<string, IState, IGetters, IActions>, 'id'>
  ) {
    return defineStore<string, IState, IGetters, IActions>(name, options)
  }
  ```

  _Example of usage_

  ```ts
  export interface ITokenState extends IContractState {
    balance: BigNumber
  }
  export interface ITokenGetters extends IContractGetters<ITokenState> {
    getBalance: (state: ITokenState) => BigNumber
  }

  export interface ITokenActions extends IContractActions {
    loadBalance: () => Promise<BigNumber>
  }

  export const useToken = defineContractStore<ITokenState, ITokenActions, ITokenGetters>(
    'token',
    {
      state: () => {
        balance: BigNumber.from(0)
      },
      getters: {
        getBalance: (state) => state.balance,
      },
      actions: {
        async loadBalance() {},
      },
    }
  )
  ```

- `displayStore` - console.log formatted display info
- `debugInfo` - console.log formatted info about connected contracts
- `loadBefore` - base `loadBefore` function to load all information in contracts' stores before wallet connecting
- `loadAfter` - base `loadAfter` function to load all inforamtion in contracts' stores after wallet connecting

### Vars (dont use directly, use `Chain Infomation Getters`)

- `scannersLink`
- `chainIds`
- `types`
- `names`
- `symbols`
- `rpcs`
- `scanners`
- `moralisPath`
- `wallets`
- `registerWallets`
