import { HardhatUserConfig, task } from 'hardhat/config'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import 'hardhat-contract-sizer'
import 'hardhat-deploy'
import 'solidity-docgen'

import * as dotenv from 'dotenv'
dotenv.config()

import './gotbit-tools/types/bignumber'
import './gotbit-tools/types/global'

import './gotbit-tools/extensions'

import { secrets, networkGenerator } from './gotbit-tools'

task('secrets', 'Prints secret config', async (taskArgs, hre) => {
  console.log(JSON.stringify(secrets, null, 2))
})

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()
  for (const account of accounts) {
    console.log(account.address)
  }
})

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.15',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      tags: ['fork'],
      forking: {
        url: 'https://bsc-dataseed1.defibit.io/',
        enabled: false,
      },
    },
    ...networkGenerator(),
    // place here any network you like (for overiding `networkGenerator`)
  },
  namedAccounts: {
    deployer: {
      default: 0,
      avax_testnet: "0xeF16b7ECC977276CEb7f3c9689200bF9DF54a8c5",
      bsc_testnet: "0xeF16b7ECC977276CEb7f3c9689200bF9DF54a8c5"
    },
    user_1: {
      default: 1,
    },
    user_2: {
      default: 2,
    },
    user_3: {
      default: 3
    }
  },
  gasReporter: {
    enabled: false,
    currency: 'USD',
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
  },
}

export default config
