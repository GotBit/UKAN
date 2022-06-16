import {
  BaseContract,
  Contract,
  ContractReceipt,
  ContractTransaction,
  providers,
} from 'ethers'

import { ChainId } from '@/gotbit-tools/types'

import contracts from '@contracts/contracts.json'

import * as contractTypes from '@contracts/typechain'
import { getProvider } from './node'

type ContractName = keyof typeof contracts[ChainId][0]['contracts']

export async function safe<T>(promise: Promise<T>): Promise<[T, null] | [null, unknown]> {
  try {
    const result = await promise
    return [result, null]
  } catch (error) {
    console.error(error)
    console.trace()
    return [null, error]
  }
}

export async function safeWrite(
  txPromise: Promise<ContractTransaction | null>,
  errorCallback?: (error: any) => void
): Promise<{ tx: ContractTransaction | null; rpt: ContractReceipt | null }> {
  const [tx, errorTx] = await safe(txPromise)

  if (tx) return { tx, rpt: await tx.wait() }

  errorCallback && errorCallback(errorTx)
  return { tx: null, rpt: null }
}

export async function safeRead<T>(
  promise: Promise<T>,
  defaultValue: T,
  errorCallback?: (error: any) => void
): Promise<T> {
  const [result, errorResult] = await safe(promise)
  if (result) return result
  errorCallback && errorCallback(errorResult)
  return defaultValue
}

export function getContractsInfo(chainId: ChainId) {
  return contracts[chainId][0].contracts
}

export function useContract<ContractType extends BaseContract>(chainId: ChainId, contractName: ContractName) {
    return new Contract(
      contracts[chainId][0].contracts[contractName].address,
      contracts[chainId][0].contracts[contractName].abi,
      getProvider(chainId)
    ) as ContractType
}

export function useContracts(chainId: ChainId) {
  type ContractName = keyof typeof contracts[ChainId][0]['contracts']
  type ChainedContracts = {
    [name in ContractName]: BaseContract
  }
  let resultContracts: any = {}
  for (const [contractName, contractObject] of Object.entries(contracts[chainId][0].contracts)) {
    const provider = getProvider(chainId)
    resultContracts[contractName as ContractName] = new Contract(
      contractObject.address,
      contractObject.abi,
      provider
    )
  }
  return resultContracts as ChainedContracts
}
