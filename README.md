# Smart contract development for UKAN

## Vesting smart contract

### [Usage](#usage-example)

### [Test coverage](#test-coverage-statistics)

### [Vesting struct](#vesting)

## Usage example

This article explaines basic usage of vesting developed contract.
To get more information please check corresponding documentation.

### Functional requirements

- The main goal of this contract is to create vesting once for 1 or more wallets.
- Customer should be able to deploy contract and specialize token, which he wants to distribute
- Customer should send tokens by himself on this contract in any time he wants
- Customer should be able to add user for vesting shedule
- User can claim his reward, if there's enough tokens on contract and reward is bigger than zero, whenever he wants
- User should see how much tokens is available for claiming

### Vesting tokenomic

- Vesting contract should distribute tokens linearly. For example 0.1% of total vesting struct's amount should be vested each day for 1000 days.

## Test coverage statistics

```text
  Vesting tests
    Vesting successful unit tests
      ✔ Should successfully constuct vesting (394ms)
      ✔ Should successfully add user to vesting (38ms)
      ✔ User should successfully view info about vesting (41ms)
      ✔ User should successfully claim reward (108ms)
      ✔ User should successfully claim full reward (138ms)
    Vesting fail unit tests
      ✔ Should fail on adding user to vesting, cause incorrect address
      ✔ Should fail on adding user to vesting, cause user has been already added (40ms)
      ✔ Should fail on adding user to vesting, cause incorrect start time
      ✔ Should fail on claiming reward, cause have zero available tokens (68ms)
      ✔ Should fail on claiming reward, cause block.timestamp less than start (62ms)
      ✔ Should fail on claiming reward, cause not enough tokens (61ms)
    Vesting event unit tests
      ✔ Should emit event when adding user
      ✔ Should emit event when claiming reward (72ms)


  13 passing (1s)

------------------|----------|----------|----------|----------|----------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------------|----------|----------|----------|----------|----------------|
 contracts/       |      100 |    92.86 |      100 |      100 |                |
  Vesting.sol     |      100 |    92.86 |      100 |      100 |                |
------------------|----------|----------|----------|----------|----------------|
All files         |      100 |    92.86 |      100 |      100 |                |
------------------|----------|----------|----------|----------|----------------|
```

## Vesting

### token

Contracts contains mocked token, do not audit it.

```solidity
contract IERC20 token
```

### vestings

```solidity
mapping(address => struct Vesting.VestingStruct) vestings
```

### VestingStruct

```solidity
struct VestingStruct {
  uint256 amount;
  uint256 claimed;
  uint256 slicePeriod;
  uint256 startTime;
  uint256 duration;
}
```

### UserAdded

```solidity
event UserAdded(address user, uint256 amount, uint256 slicePeriod, uint256 startTime, uint256 duration)
```

### RewardClaimed

```solidity
event RewardClaimed(address user, uint256 amount)
```

### constructor

```solidity
constructor(contract IERC20 newToken) public
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| newToken | contract IERC20 | ERC-20 token address for vesting |

### addUser

```solidity
function addUser(address newUser, uint256 newAmount, uint256 newSlicePeriod, uint256 newStartTime, uint256 newDuration) external
```

Function to add certain user for vesting

| Name | Type | Description |
| ---- | ---- | ----------- |
| newUser | address | Address of user |
| newAmount | uint256 | Amount allocated for user |
| newSlicePeriod | uint256 | Period for which user can get reward |
| newStartTime | uint256 | Start time of vesting |
| newDuration | uint256 | Duration of vesting |

### claim

```solidity
function claim() external
```

External function for user to claim his reward

### available

```solidity
function available(address newUser) public view returns (uint256)
```

Function to see how much tokens is available

| Name | Type | Description |
| ---- | ---- | ----------- |
| newUser | address | Address of user, which reward we want to calculate |
