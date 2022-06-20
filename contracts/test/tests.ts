import { expect } from 'chai'
import { ethers, deployments, getNamedAccounts, time } from 'hardhat'
import { BigNumber } from 'ethers'

import { setupUser } from './utils'
import { Token, Vesting } from '../typechain'
import { getAddress } from 'ethers/lib/utils'
import { TASK_DEPLOY_RUN_DEPLOY } from 'hardhat-deploy'


const setup = deployments.createFixture(async () => {
    await deployments.fixture(['Vesting', 'Token'])
    const { deployer, user_1, user_2 } = await getNamedAccounts()

    const contracts = {
        token: (await ethers.getContract('Token')) as Token,
        vesting: (await ethers.getContract('Vesting')) as Vesting,
    }

    return {
        ...contracts,
        user_1: await setupUser(user_1, contracts),
        user_2: await setupUser(user_2, contracts),
        deployer: await setupUser(deployer, contracts)
    }
})

async function getTime(): Promise<BigNumber> {
    const currentDate = new Date();
    let timestamp = currentDate.getTime()
    timestamp = Number((timestamp / 1000).toFixed()) + 5;

    return BigNumber.from(timestamp)
}

describe('Vesting tests', () => {
    describe('Vesting successful unit tests', () => {
        it('Should successfully constuct vesting', async () => {
            const { token, vesting, deployer } = await setup()

            expect(await vesting.token()).to.equal(token.address)
            expect(await vesting.owner()).to.equal(deployer.address)
        })

        it('Should successfully add user to vesting', async function () {
            const { vesting, user_1 } = await setup()

            const amount = BigNumber.from('1000000000000000000')
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)
        })

        it('User should successfully view info about vesting', async function () {
            const { vesting, user_1 } = await setup()

            const amount = BigNumber.from('1000000000000000000')
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)

            let vestingStruct = await vesting.vestings(user_1.address)

            expect(vestingStruct.amount).to.be.equal(amount)
            expect(vestingStruct.claimed).to.be.equal(BigNumber.from(0))
            expect(vestingStruct.slicePeriod).to.be.equal(slicePeriod)
            expect(vestingStruct.startTime).to.be.equal(startTime)
            expect(vestingStruct.duration).to.be.equal(duration)
        })

        it('User should successfully claim reward', async function () {
            const { token, vesting, deployer, user_1 } = await setup()

            const amount = BigNumber.from('216000000000000000000') // 8.64 tokens per day
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await deployer.token.transfer(vesting.address, amount)

            await vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)

            const day: number = 86400 + 10
            await time.increaseTime(day)
            await time.mine()

            await user_1.vesting.claim()

            const userBalanceAfter1Day = await token.balanceOf(user_1.address)

            expect(userBalanceAfter1Day).to.be.equal(BigNumber.from('8640000000000000000'))
        })

        it('User should successfully claim full reward', async function () {
            const { token, vesting, deployer, user_1 } = await setup()

            const amount = BigNumber.from('216000000000000000000') // 8.64 tokens per day
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await deployer.token.transfer(vesting.address, amount)

            await vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)

            const day: number = 86400 + 10
            await time.increaseTime(day)
            await time.mine()

            await user_1.vesting.claim()

            const month: number = 2592000
            await time.increaseTime(month)
            await time.mine()

            await user_1.vesting.claim()
            const userBalanceAfterDuration = await token.balanceOf(user_1.address)

            expect(userBalanceAfterDuration).to.be.equal(amount)
        })
    })

    describe('Vesting fail unit tests', () => {
        it('Should fail on adding user to vesting, cause incorrect address', async function () {
            const { vesting } = await setup()

            const amount = BigNumber.from('216000000000000000000')
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            const zeroAddress = '0x0000000000000000000000000000000000000000'

            await expect(vesting.addUser(zeroAddress, amount, slicePeriod, startTime, duration)).to.be.revertedWith('User isnt specified')
        })

        it('Should fail on adding user to vesting, cause user has been already added', async function () {
            const { vesting, user_1 } = await setup()

            const amount = BigNumber.from('216000000000000000000')
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)
            await expect(vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)).to.be.revertedWith('This user has been already added to vesting')
        })

        it('Should fail on adding user to vesting, cause incorrect start time', async function () {
            const { vesting, user_1 } = await setup()

            const amount = BigNumber.from('216000000000000000000')
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = (await getTime()).sub(10)
            const duration = BigNumber.from('2160000') // 25 days

            await expect(vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)).to.be.revertedWith('Cant make start before block.timestamp time')
        })

        it('Should fail on claiming reward, cause have zero available tokens', async function () {
            const { vesting, deployer, user_1 } = await setup()

            const amount = BigNumber.from('216000000000000000000') // 8.64 tokens per day
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await deployer.token.transfer(vesting.address, amount)

            await vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)

            const halfOfDay: number = 86400 / 2 + 5
            await time.increaseTime(halfOfDay)
            await time.mine()

            await expect(user_1.vesting.claim()).to.be.revertedWith('Cant claim zero tokens')
        })

        it('Should fail on claiming reward, cause block.timestamp less than start', async function () {
            const { vesting, deployer, user_1 } = await setup()

            const amount = BigNumber.from('216000000000000000000') // 8.64 tokens per day
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await deployer.token.transfer(vesting.address, amount)

            await vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)

            await expect(user_1.vesting.claim()).to.be.revertedWith('Cant claim zero tokens')

        })

        it('Should fail on claiming reward, cause not enough tokens', async function () {
            const { vesting, user_1 } = await setup()

            const amount = BigNumber.from('216000000000000000000') // 8.64 tokens per day
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)

            const day: number = 86400 + 5
            await time.increaseTime(day)
            await time.mine()

            await expect(user_1.vesting.claim()).to.be.revertedWith('ERC20: transfer amount exceeds balance')
        })
    })

    describe('Vesting event unit tests', () => {
        it('Should emit event when adding user', async function () {
            const { vesting, user_1 } = await setup()

            const amount = BigNumber.from('216000000000000000000')
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await expect(vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)).to.emit(vesting, 'UserAdded').withArgs(user_1.address, amount, slicePeriod, startTime, duration)
        })

        it('Should emit event when claiming reward', async function () {
            const { token, vesting, deployer, user_1 } = await setup()

            const amount = BigNumber.from('216000000000000000000')
            const slicePeriod = BigNumber.from('86400') // 1 day
            const startTime = await getTime()
            const duration = BigNumber.from('2160000') // 25 days

            await deployer.token.transfer(vesting.address, amount)

            await vesting.addUser(user_1.address, amount, slicePeriod, startTime, duration)

            const day: number = 86400 + 10
            await time.increaseTime(day)
            await time.mine()

            await expect(user_1.vesting.claim()).to.emit(vesting, 'RewardClaimed').withArgs(user_1.address, BigNumber.from('8640000000000000000'))
        })
    })
})