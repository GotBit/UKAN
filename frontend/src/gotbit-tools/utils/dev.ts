import contracts from '@contracts/contracts.json'
import { DEBUG } from '@/config'

export function debugInfo() {
  if (DEBUG) {
    console.clear()

    console.log(
      '%cDEBUG mode: ON',
      `
    padding: 1rem;
    color: white;
    border-radius: .5rem;
    font-weight: bold;
  `
    )
    // console.log('%cContracts:', 'font-weight: bold;')
    for (const chainId of Object.keys(contracts)) {
      const contractInfo = (contracts as any)[chainId][0].contracts
      const chainName = (contracts as any)[chainId][0].name
      const table: { [key: string]: string } = {}

      for (const contr of Object.keys(contractInfo))
        table[contr] = contractInfo[contr].address

      console.group(
        `%c${chainId}) ${chainName}`,
        `color: #${'f'.repeat(6 - chainId.length)}${chainId};`
      )
      console.table(table)
      console.groupEnd()
    }
  }
}

if (!DEBUG) off()

function off() {
  console.logAlways = console.log
  console.errorAlways = console.error
  console.warnAlways = console.warn
  console.tableAlways = console.table
  console.groupAlways = console.group
  console.groupEndAlways = console.groupEnd

  console.log = (message?: any, ...optionalParams: any[]) => null
  console.error = (message?: any, ...optionalParams: any[]) => null
  console.warn = (...data: any[]) => null
  console.table = (tabularData: any, properties?: ReadonlyArray<string>) => null
  console.group = (...data: any[]) => null
  console.groupEnd = () => null
}

function on() {
  console.log = console.logAlways
  console.error = console.errorAlways
  console.warn = console.warnAlways
  console.table = console.tableAlways
  console.group = console.groupAlways
  console.groupEnd = console.groupEndAlways

  console.log('%cDEBUG TURN ON!!!', 'font-weight: bold; padding: 1rem;')
  debugInfo()
}

window.off = off
window.on = on
