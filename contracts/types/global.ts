import { BigNumber } from 'ethers'
import moment from 'moment'

declare namespace NodeJS {
  export interface ProcessEnv {
    API_ETH: string
    API_BSC: string
    API_POLYGON: string
    API_AVAX: string
    API_FTM: string
    API_ARBITRUM: string

    MORALIS_ID: string

    PRIVATE_TEST: string
    PRIVATE_MAIN: string
  }
}

declare global {
  interface String {
    toBigNumber(decimals?: number): BigNumber
    cutZeros(): string
    shortAddress(start?: number, end?: number): string
    validNumber(params?: Parameters<typeof validateNumber>[1]): boolean
  }
  interface Number {
    toDate(format: string): string
  }
}

function toBigNumber(num: string, decimals = 18, delimiter = '.'): string {
  if (num.split(delimiter).length === 1)
    return num.padEnd(decimals + num.split(delimiter)[0].length, '0')
  const intPart = num.split(delimiter)[0]
  const fracPart = num.split(delimiter)[1].padEnd(decimals, '0').slice(0, decimals)
  return intPart + fracPart
}

/**
 * Validate number input. By default, any **positive**, **non-zero** number consisting only of `0-9` and maybe `.` dot character
 * @param num Input string
 * @param params Override default params
 * @returns true / false
 */
export function validateNumber(
  num: string,
  params = {} as {
    /** Forbid float. Default: false */
    nofloat?: boolean
    /** Allow zero value. Default: false */
    allowzero?: boolean
    /** Allow negative value. Default: false */
    allownegative?: boolean
  }
) {
  const n = Number(num)
  console.log({ params })
  return (
    !isNaN(n) &&
    !(n === 0 && !params.allowzero) &&
    !!num.match(
      new RegExp(
        `^${params.allownegative ? '-?' : ''}\\d+${!params.nofloat ? '(\\.\\d+)?' : ''}$`
      )
    )
  )
}

String.prototype.validNumber = function (params?: Parameters<typeof validateNumber>[1]) {
  const str = String(this)
  return validateNumber(str, params)
}

String.prototype.toBigNumber = function (decimals = 18, delimiter = '.') {
  return BigNumber.from(toBigNumber(String(this), decimals, delimiter))
}

String.prototype.cutZeros = function () {
  return String(this).replace(/\.?0+$/, '')
}
String.prototype.shortAddress = function (start = 6, end = start - 2) {
  const str = String(this)
  return str.slice(0, start) + '...' + str.slice(-end)
}

Number.prototype.toDate = function (format: string) {
  const num = Number(this)
  return moment(num * 1000).format(format)
}