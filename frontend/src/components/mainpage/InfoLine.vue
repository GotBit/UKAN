<script setup lang="ts">
import { BigNumber } from 'ethers'

const props = defineProps<{
    name: string,
    value: BigNumber
}>()

</script>

<template>
    <div class="flex justify-between">
        <span class="name"> {{ name }}</span>
        <span class="value"> {{ value.formatString(18, 3) }} UKAN</span>
    </div>
</template>

<style scoped lang="scss">
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
}
</style>