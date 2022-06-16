<script setup lang="ts">

import { useWeb3 } from '@/store/web3'
import { useDialogs } from '@/store/UI/dialogs'

import InfoLine from './InfoLine.vue'
import ProgessLine from './ProgressLine.vue'
import { useVestingInfo } from '@/store/contracts/vesting'

const web3 = useWeb3()
const dialogs = useDialogs()

const vestingInfo = useVestingInfo()

async function claim() {
    dialogs.openDialog('claimDialog', { text: 'Stake Tokens' })
    let results = await vestingInfo.claim()
    dialogs.closeCurrentDialog()

    dialogs.openDialog('infoDialog', { res: results })
}

</script>

<template>
    <div class="vesting-card">
        <h3>UKAN VESTING</h3>
        <hr>
        <InfoLine name="Balance" :value="vestingInfo.balance" />
        <hr>
        <ProgessLine name="Available" :value="vestingInfo.availableToClaim" :max-value="vestingInfo.lockedBalance"
            :colour="'#0C69D0'" />
        <ProgessLine name="Claimed" :value="vestingInfo.claimed" :max-value="vestingInfo.lockedBalance"
            :colour="'#FDFC1D'" />
        <hr>
        <InfoLine name="Claimed" :value="vestingInfo.claimed" />
        <InfoLine name="Available to claim" :value="vestingInfo.availableToClaim" />
        <InfoLine name="Locked balance" :value="vestingInfo.lockedBalance" />
        <hr>
        <InfoLine name="Total" :value="vestingInfo.total" />

        <button :disabled="!web3.login" class="button" @click="claim()">
            <div class="logo-claim">
                <img class="refund-logo" src="/svg/icons/refund.svg" />
                <div class="claim">Claim</div>
            </div>
        </button>
    </div>
</template>

<style scoped>
.logo-claim {
    display: flex;
    align-items: center;
    justify-content: center;
}

.claim {
    margin-left: 5px;
}

button {
    background: #0C69D0;
    border-radius: 12px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FCFCFD;
    margin-top: 40px;
    height: 72px;
    width: 100%;
    padding: 16px 24px;
}

button:disabled {
    background: #4a89d1;
}

button:disabled:hover {
    background: #4a89d1;
}

button:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #005ABE;
}

button:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #003978;
}


.vesting-card {
    background-color: #08131C;
    border-radius: 12px;
    width: 526px;
    margin: 0 auto;
    padding: 43px;
}

hr {
    width: 100%;
    margin: auto;
    margin-top: 12px;
    border: 1px solid #434343;
}

h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;

    color: #FFFFFF;
    text-align: center;
}

h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #BDBDBD;
}
</style>