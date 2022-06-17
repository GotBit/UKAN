<script setup lang="ts">
import { BigNumber } from 'ethers'
import { useWeb3 } from '@/store/web3'
import { useVestingInfo } from '@/store/contracts/vesting'

const web3 = useWeb3()
const vestingInfo = useVestingInfo()

const props = defineProps<{
    name: string,
    value: BigNumber
}>()

</script>

<template>
    <div class="wallet">
        <div class="column-button">
            <div class="column">
                <span class="name"> {{ name }}</span>
                <span class="address">{{ web3.walletLabel }} </span>
            </div>
            <button @click="vestingInfo.disconnect()">
                <img class="image" src="/svg/icons/exit.svg" />
            </button>
        </div>
        <span class="value"> {{ value.formatString(18, 3) }} UKAN</span>
    </div>
</template>

<style scoped lang="scss">
.wallet {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.column {
    display: flex;
    flex-direction: column;
}

.column-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    margin-top: 6px;
    margin-left: 16px;
    height: 24px;
    width: 24px;
}

.address {
    margin-top: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;
}

.name {
    height: 24px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    margin-top: 12px;
    color: #BDBDBD;
}

.value {
    height: 24px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: right;

    margin-top: 12px;
    color: #FFFFFF;
}

@media (max-width: 650px) {
    .name {
        font-size: 16px;
        line-height: 20px;
    }

    .value {
        font-size: 16px;
        line-height: 20px;
    }

    button {
        height: 18px;
        width: 18px;
    }
}

@media (max-width: 460px) {
    .name {
        font-size: 15px;
        line-height: 18px;
    }

    .value {
        font-size: 15px;
        line-height: 18px;
    }

    button {
        height: 18px;
        width: 18px;
    }
}
</style>