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

interface TimeLockPoolInterface extends ethers.utils.Interface {
  functions: {
    "TVL()": FunctionFragment;
    "claimRewardFromLock(uint256)": FunctionFragment;
    "depositToken()": FunctionFragment;
    "earned(address)": FunctionFragment;
    "finalTVL()": FunctionFragment;
    "getDepositsLengthOf(address)": FunctionFragment;
    "getDepositsOf(address)": FunctionFragment;
    "getLocksLengthOf(address)": FunctionFragment;
    "getLocksOf(address)": FunctionFragment;
    "getReward()": FunctionFragment;
    "getTotalDeposit(address)": FunctionFragment;
    "getTotalDeposits(address)": FunctionFragment;
    "getTotalReward(address)": FunctionFragment;
    "getTotalRewards(address)": FunctionFragment;
    "lastTimeRewardApplicable()": FunctionFragment;
    "lastUpdateTime()": FunctionFragment;
    "lockDuration()": FunctionFragment;
    "maxDeposits()": FunctionFragment;
    "maxLocks()": FunctionFragment;
    "maxStakingDuration()": FunctionFragment;
    "minStakingDuration()": FunctionFragment;
    "name()": FunctionFragment;
    "notifyRewardAmount(uint256)": FunctionFragment;
    "periodFinish()": FunctionFragment;
    "poolManager()": FunctionFragment;
    "recoverERC20(address,uint256,address)": FunctionFragment;
    "rewardPerToken()": FunctionFragment;
    "rewardPerTokenStored()": FunctionFragment;
    "rewardPeriod()": FunctionFragment;
    "rewardRate()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "rewards(address)": FunctionFragment;
    "setRewardsDuration(uint256)": FunctionFragment;
    "stake(uint256,uint256)": FunctionFragment;
    "stakingPoolDuration()": FunctionFragment;
    "totalClaimed()": FunctionFragment;
    "userRewardPerTokenPaid(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "TVL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimRewardFromLock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "earned", values: [string]): string;
  encodeFunctionData(functionFragment: "finalTVL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDepositsLengthOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositsOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLocksLengthOf",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getLocksOf", values: [string]): string;
  encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTotalDeposit",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalDeposits",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxDeposits",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "maxLocks", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxStakingDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minStakingDuration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "periodFinish",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rewards", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setRewardsDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingPoolDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalClaimed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenPaid",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "TVL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimRewardFromLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalTVL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDepositsLengthOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLocksLengthOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getLocksOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxLocks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxStakingDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minStakingDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingPoolDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposited(address,uint256,uint256,uint256)": EventFragment;
    "LockCreated(address,uint256,uint256,uint256)": EventFragment;
    "RewardAdded(uint256)": EventFragment;
    "RewardClaimed(address,uint256)": EventFragment;
    "RewardsDurationUpdated(uint256)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsDurationUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type DepositedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    staker: string;
    amount: BigNumber;
    duration: BigNumber;
    multiplier: BigNumber;
  }
>;

export type LockCreatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    staker: string;
    amount: BigNumber;
    start: BigNumber;
    end: BigNumber;
  }
>;

export type RewardAddedEvent = TypedEvent<[BigNumber] & { reward: BigNumber }>;

export type RewardClaimedEvent = TypedEvent<
  [string, BigNumber] & { staker: string; amount: BigNumber }
>;

export type RewardsDurationUpdatedEvent = TypedEvent<
  [BigNumber] & { newDuration: BigNumber }
>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber] & { staker: string; amount: BigNumber }
>;

export class TimeLockPool extends BaseContract {
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

  interface: TimeLockPoolInterface;

  functions: {
    TVL(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimRewardFromLock(
      _lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositToken(overrides?: CallOverrides): Promise<[string]>;

    earned(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    finalTVL(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDepositsLengthOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDepositsOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, BigNumber, BigNumber, BigNumber] & {
          amount: BigNumber;
          multiplier: BigNumber;
          start: BigNumber;
          end: BigNumber;
        })[]
      ]
    >;

    getLocksLengthOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLocksOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, BigNumber, BigNumber] & {
          amount: BigNumber;
          start: BigNumber;
          end: BigNumber;
        })[]
      ]
    >;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTotalDeposit(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalDeposits(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
          poolName: string;
          depositId: BigNumber;
          amount: BigNumber;
          start: BigNumber;
          ends: BigNumber;
          available: boolean;
        })[]
      ]
    >;

    getTotalReward(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, BigNumber, BigNumber, BigNumber, boolean] & {
          poolName: string;
          lockId: BigNumber;
          amount: BigNumber;
          ends: BigNumber;
          available: boolean;
        })[]
      ]
    >;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    lockDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxDeposits(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxLocks(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxStakingDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    minStakingDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    notifyRewardAmount(
      _reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    poolManager(overrides?: CallOverrides): Promise<[string]>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    setRewardsDuration(
      _stakingPoolDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _amount: BigNumberish,
      _lockDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakingPoolDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalClaimed(overrides?: CallOverrides): Promise<[BigNumber]>;

    userRewardPerTokenPaid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      _depositId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  TVL(overrides?: CallOverrides): Promise<BigNumber>;

  claimRewardFromLock(
    _lockId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositToken(overrides?: CallOverrides): Promise<string>;

  earned(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  finalTVL(overrides?: CallOverrides): Promise<BigNumber>;

  getDepositsLengthOf(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDepositsOf(
    _account: string,
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      multiplier: BigNumber;
      start: BigNumber;
      end: BigNumber;
    })[]
  >;

  getLocksLengthOf(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLocksOf(
    _account: string,
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      start: BigNumber;
      end: BigNumber;
    })[]
  >;

  getReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTotalDeposit(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalDeposits(
    _account: string,
    overrides?: CallOverrides
  ): Promise<
    ([string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      poolName: string;
      depositId: BigNumber;
      amount: BigNumber;
      start: BigNumber;
      ends: BigNumber;
      available: boolean;
    })[]
  >;

  getTotalReward(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalRewards(
    _account: string,
    overrides?: CallOverrides
  ): Promise<
    ([string, BigNumber, BigNumber, BigNumber, boolean] & {
      poolName: string;
      lockId: BigNumber;
      amount: BigNumber;
      ends: BigNumber;
      available: boolean;
    })[]
  >;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  lockDuration(overrides?: CallOverrides): Promise<BigNumber>;

  maxDeposits(overrides?: CallOverrides): Promise<BigNumber>;

  maxLocks(overrides?: CallOverrides): Promise<BigNumber>;

  maxStakingDuration(overrides?: CallOverrides): Promise<BigNumber>;

  minStakingDuration(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  notifyRewardAmount(
    _reward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  poolManager(overrides?: CallOverrides): Promise<string>;

  recoverERC20(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  setRewardsDuration(
    _stakingPoolDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _amount: BigNumberish,
    _lockDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakingPoolDuration(overrides?: CallOverrides): Promise<BigNumber>;

  totalClaimed(overrides?: CallOverrides): Promise<BigNumber>;

  userRewardPerTokenPaid(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    _depositId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    TVL(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewardFromLock(
      _lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositToken(overrides?: CallOverrides): Promise<string>;

    earned(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    finalTVL(overrides?: CallOverrides): Promise<BigNumber>;

    getDepositsLengthOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDepositsOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        multiplier: BigNumber;
        start: BigNumber;
        end: BigNumber;
      })[]
    >;

    getLocksLengthOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLocksOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        start: BigNumber;
        end: BigNumber;
      })[]
    >;

    getReward(overrides?: CallOverrides): Promise<void>;

    getTotalDeposit(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalDeposits(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        poolName: string;
        depositId: BigNumber;
        amount: BigNumber;
        start: BigNumber;
        ends: BigNumber;
        available: boolean;
      })[]
    >;

    getTotalReward(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber, BigNumber, BigNumber, boolean] & {
        poolName: string;
        lockId: BigNumber;
        amount: BigNumber;
        ends: BigNumber;
        available: boolean;
      })[]
    >;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    lockDuration(overrides?: CallOverrides): Promise<BigNumber>;

    maxDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    maxLocks(overrides?: CallOverrides): Promise<BigNumber>;

    maxStakingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    minStakingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    notifyRewardAmount(
      _reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    poolManager(overrides?: CallOverrides): Promise<string>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setRewardsDuration(
      _stakingPoolDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      _amount: BigNumberish,
      _lockDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakingPoolDuration(overrides?: CallOverrides): Promise<BigNumber>;

    totalClaimed(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _depositId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposited(address,uint256,uint256,uint256)"(
      staker?: string | null,
      amount?: null,
      duration?: null,
      multiplier?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        staker: string;
        amount: BigNumber;
        duration: BigNumber;
        multiplier: BigNumber;
      }
    >;

    Deposited(
      staker?: string | null,
      amount?: null,
      duration?: null,
      multiplier?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        staker: string;
        amount: BigNumber;
        duration: BigNumber;
        multiplier: BigNumber;
      }
    >;

    "LockCreated(address,uint256,uint256,uint256)"(
      staker?: string | null,
      amount?: null,
      start?: null,
      end?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      { staker: string; amount: BigNumber; start: BigNumber; end: BigNumber }
    >;

    LockCreated(
      staker?: string | null,
      amount?: null,
      start?: null,
      end?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      { staker: string; amount: BigNumber; start: BigNumber; end: BigNumber }
    >;

    "RewardAdded(uint256)"(
      reward?: null
    ): TypedEventFilter<[BigNumber], { reward: BigNumber }>;

    RewardAdded(
      reward?: null
    ): TypedEventFilter<[BigNumber], { reward: BigNumber }>;

    "RewardClaimed(address,uint256)"(
      staker?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { staker: string; amount: BigNumber }
    >;

    RewardClaimed(
      staker?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { staker: string; amount: BigNumber }
    >;

    "RewardsDurationUpdated(uint256)"(
      newDuration?: null
    ): TypedEventFilter<[BigNumber], { newDuration: BigNumber }>;

    RewardsDurationUpdated(
      newDuration?: null
    ): TypedEventFilter<[BigNumber], { newDuration: BigNumber }>;

    "Withdrawn(address,uint256)"(
      staker?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { staker: string; amount: BigNumber }
    >;

    Withdrawn(
      staker?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { staker: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    TVL(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewardFromLock(
      _lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositToken(overrides?: CallOverrides): Promise<BigNumber>;

    earned(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    finalTVL(overrides?: CallOverrides): Promise<BigNumber>;

    getDepositsLengthOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDepositsOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLocksLengthOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLocksOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTotalDeposit(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalDeposits(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalReward(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    lockDuration(overrides?: CallOverrides): Promise<BigNumber>;

    maxDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    maxLocks(overrides?: CallOverrides): Promise<BigNumber>;

    maxStakingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    minStakingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      _reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    poolManager(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setRewardsDuration(
      _stakingPoolDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      _lockDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakingPoolDuration(overrides?: CallOverrides): Promise<BigNumber>;

    totalClaimed(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _depositId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    TVL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimRewardFromLock(
      _lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalTVL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDepositsLengthOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDepositsOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLocksLengthOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLocksOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTotalDeposit(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalDeposits(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalReward(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalRewards(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxStakingDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minStakingDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      _reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerTokenStored(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRewardsDuration(
      _stakingPoolDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      _lockDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakingPoolDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalClaimed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _depositId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}