import { BigNumber, ethers, providers } from 'ethers'

import { useWeb3 } from '@/store/web3'
import { IContractState, IContractActions, ChainId } from '@/gotbit-tools/types'
import { safe, useContract, defineContractStore, loadAfter } from '@/gotbit-tools'
import { Token, Vesting } from '@contracts/typechain'
import { disconnect } from 'process'
// import { Vesting, Token } from '@contracts/typechain'

export interface result {
    output: string
    title: string
    hash: string
}

export interface IVestingState extends IContractState {
    balance: BigNumber
    total: BigNumber
    lockedBalance: BigNumber
    availableToClaim: BigNumber
    claimed: BigNumber
}

export interface IVestingAction extends IContractActions {
    claim: () => Promise<result>
    disconnect: () => Promise<boolean>
}

export const useVestingInfo = defineContractStore<IVestingState, IVestingAction>('VestingInfo', {
    state: () => ({
        balance: BigNumber.from(0),
        total: BigNumber.from(0),
        lockedBalance: BigNumber.from(0),
        availableToClaim: BigNumber.from(0),
        claimed: BigNumber.from(0),
        loading: false
    }),

    actions: {
        async loadBefore(): Promise<boolean> {
            this.balance = BigNumber.from(0)
            this.total = BigNumber.from(0)
            this.lockedBalance = BigNumber.from(0)
            this.availableToClaim = BigNumber.from(0)
            this.claimed = BigNumber.from(0)
            return true
        },
        async loadAfter(): Promise<boolean> {
            if (this.loading) return false
            this.loading = true

            const user = useWeb3()
            const token = useContract<Token>(user.neededChainId, 'Token')
            const vesting = useContract<Vesting>(user.neededChainId, 'Vesting')

            const [info, err] = await safe(Promise.all([token.balanceOf(user.wallet!), vesting.available(user.wallet!), vesting.amounts(user.wallet!), vesting.claimed(user.wallet!)]))

            if (!info || err) {
                this.loading = false
                console.error('Cant get info about user')
                return false
            } else {
                this.balance = info[0]
                this.total = info[2]
                this.lockedBalance = info[2].sub(info[1])
                this.availableToClaim = info[1]
                this.claimed = info[3]
            }

            this.loading = false
            return true
        },

        async claim(): Promise<result> {
            const user = useWeb3()
            const vesting = useContract<Vesting>(user.neededChainId, 'Vesting')

            let results: result = { output: '', title: '', hash: '' }
            try {
                let tx = await (await vesting.connect(user.signer!).claim()).wait()

                results.output = 'Transaction succeded'
                results.title = '' + this.availableToClaim.formatString(18, 3) + ' UKAN'
                results.hash = tx.blockHash
            } catch (err) {
                console.error(err)

                results.output = 'Transaction hasn\'t succeeded'
                results.title = ''
                results.hash = ''
            }

            this.loadAfter()
            console.log(results)
            return results
        },

        async disconnect(): Promise<boolean> {
            const user = useWeb3()
            await user.disconnect()
            this.loadBefore()
            return true
        }
    }
})