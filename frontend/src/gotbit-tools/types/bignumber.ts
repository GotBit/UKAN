import { BigNumber } from 'ethers'

declare module 'ethers' {
  interface BigNumber {
    formatString(decimals?: number, precision?: number): string
    formatNumber(decimals?: number, precision?: number): number
  }
}

function formatString(
  num: string,
  decimals = 18,
  precision = decimals,
  delimiter = '.'
): string {
  num = num.padStart(decimals + 1, '0')
  const intPart = num.slice(0, -decimals).replace(/^0+/, '')
  let fracPart = num.slice(-decimals).padEnd(precision, '0').slice(0, precision)
  let i = fracPart.length - 1
  for (; i > 0; i--) {
    if(fracPart[i] !== '0')
      break
  }
  fracPart = fracPart.slice(0, i)
  if (precision === 0) return intPart
  return (intPart ? intPart : '0') + (fracPart.length > 0 ? delimiter + fracPart : '')
}

BigNumber.prototype.formatString = function (
  decimals = 18,
  precision = decimals,
  delimiter = '.'
) {
  return formatString(this.toString(), decimals, precision, delimiter)
}

BigNumber.prototype.formatNumber = function (decimals = 18, precision = decimals) {
  const str = this.formatString(decimals, precision)
  return Number(str)
}
