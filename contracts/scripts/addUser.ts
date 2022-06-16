import { ethers, getNamedAccounts } from 'hardhat'
import { Token, Vesting } from '../typechain'
import { BigNumber } from 'ethers'

async function addUser() {
    const { deployer } = await getNamedAccounts()

    const vesting = await ethers.getContract('Vesting', deployer) as Vesting
    const token = await ethers.getContract('Token', deployer) as Token

    const amount = BigNumber.from("1000000000000000000000000000")
    await token.transfer(vesting.address, amount)
    await vesting.addUser(deployer, amount)
}

addUser()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
