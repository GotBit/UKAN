import { ethers, getNamedAccounts, time } from 'hardhat'
import { Token, Vesting } from '../typechain'
import { BigNumber } from 'ethers'



async function addUser() {
    const { deployer } = await getNamedAccounts()

    const vesting = await ethers.getContract('Vesting', deployer) as Vesting
    const token = await ethers.getContract('Token', deployer) as Token

    const amount = BigNumber.from("100000000000000000000000000000000")

    const slice = BigNumber.from("60")

    const oneYear = BigNumber.from("31536000")

    const currentDate = new Date();
    let timestamp = currentDate.getTime()
    timestamp = Number((timestamp / 1000).toFixed()) + 100;

    const blockNumBefore = await ethers.provider.getBlockNumber();
    const blockBefore = await ethers.provider.getBlock(blockNumBefore);
    const timestampBefore = blockBefore.timestamp;

    console.log(timestampBefore)
    console.log(timestamp)

    // const startTime = BigNumber.from(timestamp)

    // await token.transfer(vesting.address, amount)
    // await vesting.addUser(deployer, amount, slice, startTime, oneYear)
}

addUser()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
