import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { BigNumber } from '@ethersproject/bignumber'
import { ethers } from 'hardhat'
import { Token } from '../../typechain'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const token = (await ethers.getContract('Token')) as Token

    await deploy('Vesting', {
        from: deployer,
        args: [token.address, BigNumber.from(2592000)],
        log: true,
    });
};

export default func;
func.tags = ['Vesting']
func.dependencies = ['Token']