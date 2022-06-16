import { defineStore, DefineStoreOptions, _GettersTree } from 'pinia'

import {
  IContractActions,
  IContractState,
  IContractStoreDefinition,
  IWeb3State,
} from '../types'

export function displayStore(
  name: string,
  status: 'loading' | 'done' | 'problem' | 'busy',
  type: 'before' | 'after'
) {
  if (status === 'problem') {
    console.warn(`Problem to load ${type} store:`, name)
    return
  }
  if (status === 'busy') {
    console.warn('Busy store:', name)
    return
  }
  console.log(
    `${status} %c${type}%c store: %c${name}`,
    `color: ${type === 'before' ? 'red' : '#0a9396'}`,
    '',
    'color: #f77f00; font-weight: bold;'
  )
}

export async function loadBefore(registerContracts: IContractStoreDefinition[]) {
  console.group('Before loading')
  await Promise.all(
    registerContracts.map(async (c) => {
      if (!c().loading) {
        displayStore(c.$id, 'loading', 'before')
        const response = await c().loadBefore()
        if (response) displayStore(c.$id, 'done', 'before')
        else displayStore(c.$id, 'problem', 'before')
      } else displayStore(c.$id, 'busy', 'before')
    })
  )
  console.groupEnd()
}

export async function loadAfter(registerContracts: IContractStoreDefinition[]) {
  console.group('After loading')
  await Promise.all(
    registerContracts.map(async (c) => {
      displayStore(c.$id, 'loading', 'after')
      if (!c().loading) {
        const response = await c().loadAfter()
        if (response) displayStore(c.$id, 'done', 'after')
        else displayStore(c.$id, 'problem', 'after')
      } else displayStore(c.$id, 'busy', 'after')
    })
  )
  console.groupEnd()
}

export function defineContractStore<
  IState extends IContractState,
  IActions extends IContractActions
>(name: string, options: Omit<DefineStoreOptions<string, IState, {}, IActions>, 'id'>) {
  return defineStore<string, IState, {}, IActions>(name, options)
}

export const web3Getters = (contracts: IContractStoreDefinition[]) => ({
  globalLoading: (state: IWeb3State) =>
    contracts.map((c) => c().loading).some((v) => v) || state.loading,
  signer: (state: IWeb3State) => state._signer(),
  walletLabel: (state: IWeb3State) =>
    state.wallet ? state.wallet.shortAddress() : 'Connect',
})
