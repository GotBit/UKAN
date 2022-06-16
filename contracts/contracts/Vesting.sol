//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

contract Vesting is Ownable {
    using SafeERC20 for IERC20;
    IERC20 public immutable token;

    mapping(address => uint256) public amounts;
    mapping(address => uint256) public claimed;

    uint256 vestingStarted;
    uint256 duration;

    constructor(IERC20 newToken, uint256 newDuration) {
        token = newToken;

        vestingStarted = block.timestamp;
        duration = newDuration;
    }

    function addUser(address newUser, uint256 newAmount) external onlyOwner {
        require(amounts[newUser] == 0, 'This user has been already added');

        amounts[newUser] = newAmount;
    }

    function claim() external {
        uint256 availableTokens = available(msg.sender);
        require(availableTokens > 0, 'Cant claim zero tokens');

        token.safeTransfer(msg.sender, availableTokens);
        claimed[msg.sender] += availableTokens;
    }

    function available(address newUser) public view returns (uint256) {
        return
            ((block.timestamp - vestingStarted) * amounts[newUser]) /
            duration -
            claimed[newUser];
    }
}
