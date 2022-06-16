/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PoolsManagerInterface extends ethers.utils.Interface {
  functions: {
    "addPool(address,address,uint256,uint256,uint256,string)": FunctionFragment;
    "addRewardToOpenedPool(uint256,uint256)": FunctionFragment;
    "openPools(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "poolsAdded(address)": FunctionFragment;
    "recoverERC20Tokens(address,address,uint256,address)": FunctionFragment;
    "removePool(uint256)": FunctionFragment;
    "removedPools(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardPeriodForPools()": FunctionFragment;
    "setRewardPeriodForPool(uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "viewInfoAboutOpenPools()": FunctionFragment;
    "viewInfoAboutUserInOpenPools(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPool",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addRewardToOpenedPool",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "openPools",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolsAdded", values: [string]): string;
  encodeFunctionData(
    functionFragment: "recoverERC20Tokens",
    values: [string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removedPools",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPeriodForPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardPeriodForPool",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewInfoAboutOpenPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "viewInfoAboutUserInOpenPools",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addRewardToOpenedPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openPools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolsAdded", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20Tokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removedPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPeriodForPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardPeriodForPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewInfoAboutOpenPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewInfoAboutUserInOpenPools",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PoolAdded(address)": EventFragment;
    "PoolRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolRemoved"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PoolAddedEvent = TypedEvent<[string] & { newPool: string }>;

export type PoolRemovedEvent = TypedEvent<[string] & { oldPool: string }>;

export class PoolsManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PoolsManagerInterface;

  functions: {
    addPool(
      depositToken: string,
      rewardToken: string,
      stakingPoolDuration: BigNumberish,
      lockDuration: BigNumberish,
      rewardRate: BigNumberish,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addRewardToOpenedPool(
      _poolId: BigNumberish,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolsAdded(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    recoverERC20Tokens(
      poolAddress: string,
      tokenAddress: string,
      amount: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePool(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removedPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardPeriodForPools(overrides?: CallOverrides): Promise<[BigNumber]>;

    setRewardPeriodForPool(
      _poolId: BigNumberish,
      rewardDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    viewInfoAboutOpenPools(
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          string,
          BigNumber,
          BigNumber
        ] & {
          name: string;
          poolAddress: string;
          depositToken: string;
          TVL: BigNumber;
          finalTVL: BigNumber;
          rewardToken: string;
          rewardRate: BigNumber;
          totalClaimed: BigNumber;
        })[]
      ]
    >;

    viewInfoAboutUserInOpenPools(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          ([string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
            poolName: string;
            depositId: BigNumber;
            amount: BigNumber;
            start: BigNumber;
            ends: BigNumber;
            available: boolean;
          })[],
          ([string, BigNumber, BigNumber, BigNumber, boolean] & {
            poolName: string;
            lockId: BigNumber;
            amount: BigNumber;
            ends: BigNumber;
            available: boolean;
          })[]
        ] & {
          name: string;
          earned: BigNumber;
          totalRewards: BigNumber;
          totalStaked: BigNumber;
          deposits: ([
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
          ] & {
            poolName: string;
            depositId: BigNumber;
            amount: BigNumber;
            start: BigNumber;
            ends: BigNumber;
            available: boolean;
          })[];
          locks: ([string, BigNumber, BigNumber, BigNumber, boolean] & {
            poolName: string;
            lockId: BigNumber;
            amount: BigNumber;
            ends: BigNumber;
            available: boolean;
          })[];
        })[]
      ]
    >;
  };

  addPool(
    depositToken: string,
    rewardToken: string,
    stakingPoolDuration: BigNumberish,
    lockDuration: BigNumberish,
    rewardRate: BigNumberish,
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addRewardToOpenedPool(
    _poolId: BigNumberish,
    reward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolsAdded(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  recoverERC20Tokens(
    poolAddress: string,
    tokenAddress: string,
    amount: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePool(
    _poolId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removedPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardPeriodForPools(overrides?: CallOverrides): Promise<BigNumber>;

  setRewardPeriodForPool(
    _poolId: BigNumberish,
    rewardDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  viewInfoAboutOpenPools(
    overrides?: CallOverrides
  ): Promise<
    ([
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      BigNumber
    ] & {
      name: string;
      poolAddress: string;
      depositToken: string;
      TVL: BigNumber;
      finalTVL: BigNumber;
      rewardToken: string;
      rewardRate: BigNumber;
      totalClaimed: BigNumber;
    })[]
  >;

  viewInfoAboutUserInOpenPools(
    _account: string,
    overrides?: CallOverrides
  ): Promise<
    ([
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      ([string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        poolName: string;
        depositId: BigNumber;
        amount: BigNumber;
        start: BigNumber;
        ends: BigNumber;
        available: boolean;
      })[],
      ([string, BigNumber, BigNumber, BigNumber, boolean] & {
        poolName: string;
        lockId: BigNumber;
        amount: BigNumber;
        ends: BigNumber;
        available: boolean;
      })[]
    ] & {
      name: string;
      earned: BigNumber;
      totalRewards: BigNumber;
      totalStaked: BigNumber;
      deposits: ([
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        poolName: string;
        depositId: BigNumber;
        amount: BigNumber;
        start: BigNumber;
        ends: BigNumber;
        available: boolean;
      })[];
      locks: ([string, BigNumber, BigNumber, BigNumber, boolean] & {
        poolName: string;
        lockId: BigNumber;
        amount: BigNumber;
        ends: BigNumber;
        available: boolean;
      })[];
    })[]
  >;

  callStatic: {
    addPool(
      depositToken: string,
      rewardToken: string,
      stakingPoolDuration: BigNumberish,
      lockDuration: BigNumberish,
      rewardRate: BigNumberish,
      name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addRewardToOpenedPool(
      _poolId: BigNumberish,
      reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    openPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolsAdded(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    recoverERC20Tokens(
      poolAddress: string,
      tokenAddress: string,
      amount: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removePool(_poolId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    removedPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardPeriodForPools(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardPeriodForPool(
      _poolId: BigNumberish,
      rewardDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    viewInfoAboutOpenPools(
      overrides?: CallOverrides
    ): Promise<
      ([
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
      ] & {
        name: string;
        poolAddress: string;
        depositToken: string;
        TVL: BigNumber;
        finalTVL: BigNumber;
        rewardToken: string;
        rewardRate: BigNumber;
        totalClaimed: BigNumber;
      })[]
    >;

    viewInfoAboutUserInOpenPools(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      ([
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        ([string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
          poolName: string;
          depositId: BigNumber;
          amount: BigNumber;
          start: BigNumber;
          ends: BigNumber;
          available: boolean;
        })[],
        ([string, BigNumber, BigNumber, BigNumber, boolean] & {
          poolName: string;
          lockId: BigNumber;
          amount: BigNumber;
          ends: BigNumber;
          available: boolean;
        })[]
      ] & {
        name: string;
        earned: BigNumber;
        totalRewards: BigNumber;
        totalStaked: BigNumber;
        deposits: ([
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          poolName: string;
          depositId: BigNumber;
          amount: BigNumber;
          start: BigNumber;
          ends: BigNumber;
          available: boolean;
        })[];
        locks: ([string, BigNumber, BigNumber, BigNumber, boolean] & {
          poolName: string;
          lockId: BigNumber;
          amount: BigNumber;
          ends: BigNumber;
          available: boolean;
        })[];
      })[]
    >;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "PoolAdded(address)"(
      newPool?: null
    ): TypedEventFilter<[string], { newPool: string }>;

    PoolAdded(newPool?: null): TypedEventFilter<[string], { newPool: string }>;

    "PoolRemoved(address)"(
      oldPool?: null
    ): TypedEventFilter<[string], { oldPool: string }>;

    PoolRemoved(
      oldPool?: null
    ): TypedEventFilter<[string], { oldPool: string }>;
  };

  estimateGas: {
    addPool(
      depositToken: string,
      rewardToken: string,
      stakingPoolDuration: BigNumberish,
      lockDuration: BigNumberish,
      rewardRate: BigNumberish,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addRewardToOpenedPool(
      _poolId: BigNumberish,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolsAdded(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20Tokens(
      poolAddress: string,
      tokenAddress: string,
      amount: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePool(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removedPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardPeriodForPools(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardPeriodForPool(
      _poolId: BigNumberish,
      rewardDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    viewInfoAboutOpenPools(overrides?: CallOverrides): Promise<BigNumber>;

    viewInfoAboutUserInOpenPools(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPool(
      depositToken: string,
      rewardToken: string,
      stakingPoolDuration: BigNumberish,
      lockDuration: BigNumberish,
      rewardRate: BigNumberish,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addRewardToOpenedPool(
      _poolId: BigNumberish,
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolsAdded(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recoverERC20Tokens(
      poolAddress: string,
      tokenAddress: string,
      amount: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePool(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removedPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardPeriodForPools(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRewardPeriodForPool(
      _poolId: BigNumberish,
      rewardDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    viewInfoAboutOpenPools(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewInfoAboutUserInOpenPools(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
