import secrets from '../secrets-config'

export interface Node {
  short: string
  name: string
  scanner: string
  rpc: string
  chainId: number
  type: 'mainnet' | 'testnet'
}

export interface Config {
  name: string
  rpc: string
  chainId: number
  symbol: string
  scanner: string
}

export const chainIds = {
  eth_mainnet: 1,
  bsc_mainnet: 56,
  polygon_mainnet: 137,
  avax_mainnet: 43114,
  ftm_mainnet: 250,
  arbitrum_mainnet: 42161,
  rinkeby: 4,
  ropsten: 3,
  bsc_testnet: 97,
  polygon_testnet: 80001,
  avax_testnet: 43113,
  ftm_testnet: 4002,
  arbitrum_testnet: 421611,
}

export type ChainTag = keyof typeof chainIds

export const types: Record<ChainTag, 'mainnet' | 'testnet'> = {
  eth_mainnet: 'mainnet',
  bsc_mainnet: 'mainnet',
  polygon_mainnet: 'mainnet',
  avax_mainnet: 'mainnet',
  ftm_mainnet: 'mainnet',
  arbitrum_mainnet: 'mainnet',

  rinkeby: 'testnet',
  ropsten: 'testnet',
  bsc_testnet: 'testnet',
  polygon_testnet: 'testnet',
  avax_testnet: 'testnet',
  ftm_testnet: 'testnet',
  arbitrum_testnet: 'testnet',
}

export const names: Record<ChainTag, string> = {
  eth_mainnet: 'Ethereum',
  bsc_mainnet: 'Binance Smart Chain',
  polygon_mainnet: 'Polygon Mainnet',
  avax_mainnet: 'Avalanche Mainnet',
  ftm_mainnet: 'Fantom Mainnet',
  arbitrum_mainnet: 'Arbitrum Mainnet',

  rinkeby: 'Rinkeby',
  ropsten: 'Ropsten',
  bsc_testnet: 'Binance Smart Chain Testnet',
  polygon_testnet: 'Polygon Mumbai Testnet',
  avax_testnet: 'Avalanche Fuji Testnet',
  ftm_testnet: 'Fantom Testnet',
  arbitrum_testnet: 'Arbitrum Testnet',
}

export const symbols: Record<ChainTag, string> = {
  eth_mainnet: 'ETH',
  bsc_mainnet: 'BNB',
  polygon_mainnet: 'MATIC',
  avax_mainnet: 'AVAX',
  ftm_mainnet: 'FTM',
  arbitrum_mainnet: 'ETH',

  rinkeby: 'ETH',
  ropsten: 'ETH',
  bsc_testnet: 'BNB',
  polygon_testnet: 'MATIC',
  avax_testnet: 'AVAX',
  ftm_testnet: 'FTM',
  arbitrum_testnet: 'ETH',
}

export const rpcs: Record<ChainTag, string> = {
  eth_mainnet: 'https://rpc.ankr.com/eth',
  bsc_mainnet: 'https://bsc-dataseed.binance.org',
  polygon_mainnet: 'https://polygon-rpc.com',
  avax_mainnet: 'https://api.avax.network/ext/bc/C/rpc',
  ftm_mainnet: 'https://rpc.ftm.tools',
  arbitrum_mainnet: 'https://arb1.arbitrum.io/rpc',

  rinkeby: 'https://rinkey.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  ropsten: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  bsc_testnet: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  polygon_testnet: 'https://rpc-mumbai.maticvigil.com',
  avax_testnet: 'https://api.avax-test.network/ext/bc/C/rpc',
  ftm_testnet: 'https://rpc.testnet.fantom.network/',
  arbitrum_testnet: 'https://rinkeby.arbitrum.io/rpc',
}

export const scanners: Record<ChainTag, string> = {
  eth_mainnet: 'https://etherscan.io/',
  bsc_mainnet: 'https://bscscan.com/',
  polygon_mainnet: 'https://polygonscan.com/',
  avax_mainnet: 'https://snowtrace.io/',
  ftm_mainnet: 'https://ftmscan.com/',
  arbitrum_mainnet: 'https://arbiscan.io/',
  rinkeby: 'https://rinkeby.etherscan.io/',
  ropsten: 'https://ropsten.etherscan.io/',
  bsc_testnet: 'https://testnet.bscscan.com/',
  polygon_testnet: 'https://mumbai.polygonscan.com/',
  avax_testnet: 'https://testnet.snowtrace.io/',
  ftm_testnet: 'https://testnet.ftmscan.com/',
  arbitrum_testnet: 'https://testnet.arbiscan.io/',
}

export const moralisPath: Record<ChainTag, string> = {
  eth_mainnet: '/eth/mainnet',
  bsc_mainnet: '/bsc/mainnet',
  polygon_mainnet: '/polygon/mainnet',
  avax_mainnet: '/avalanche/mainnet',
  ftm_mainnet: '/fantom/mainnet',
  arbitrum_mainnet: '/arbitrum/mainnet',
  rinkeby: '/eth/rinkeby',
  ropsten: '/eth/ropsten',
  bsc_testnet: '/bsc/testnet',
  polygon_testnet: '/polygon/mumbai',
  avax_testnet: '/avalanche/testnet',
  ftm_testnet: '/fantom/tesnet',
  arbitrum_testnet: '/arbitrum/testnet',
}

export function node(name: ChainTag): Node {
  if (name === 'ftm_testnet') {
    return {
      rpc: 'https://rpc.testnet.fantom.network/',
      chainId: chainIds[name],
      scanner: scanners[name],
      name: names[name],
      short: name,
      type: types[name],
    }
  }
  if (Object.keys(names).includes(name)) {
    return {
      rpc: 'https://speedy-nodes-nyc.moralis.io/' + secrets.moralis + moralisPath[name],
      chainId: chainIds[name],
      scanner: scanners[name],
      name: names[name],
      short: name,
      type: types[name],
    }
  }

  return {} as Node
}

export function getConfig(name: ChainTag): Config {
  if (Object.keys(names).includes(name)) {
    return {
      name: names[name],
      rpc: rpcs[name],
      chainId: chainIds[name],
      symbol: symbols[name],
      scanner: scanners[name],
    }
  }

  return {} as Config
}
