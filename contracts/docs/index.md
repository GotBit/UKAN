# Solidity API

## Vesting

### token

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
| newUser | address |  |
| newAmount | uint256 | Amount allocated for user |
| newSlicePeriod | uint256 | Period for which user can get reward |
| newStartTime | uint256 | Start time of vesting |
| newDuration | uint256 | Duration of vesting |

### claim

```solidity
function claim() external
```

External function for user to claim gis reward

### available

```solidity
function available(address newUser) public view returns (uint256)
```

Function to see how much tokens is available

| Name | Type | Description |
| ---- | ---- | ----------- |
| newUser | address | Address of user, which reward we want to calculate |

## Token

### _decimals

```solidity
uint8 _decimals
```

### constructor

```solidity
constructor(string name_, string symbol_, uint8 decimals_) public
```

