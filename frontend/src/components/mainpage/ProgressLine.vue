<script setup lang="ts">
import { computed } from 'vue'
import { BigNumber } from 'ethers'

const props = defineProps<{
    name: string,
    value: BigNumber,
    maxValue: BigNumber,
    colour: string
}>()

const percent = computed(() =>
    String(props.value.mul(1000000).div(props.maxValue).toNumber() / 10000)
)
</script>

<template>
    <div class="progress-wrappers">
        <div class="name"> {{ name }}</div>
        <div class="progress">
            <div v-if="props.maxValue.gt(0)" class="progress-bar" aria-valuemin="0" aria-valuemax="100"
                :style="`width: ${percent}%`">
            </div>
            <div v-else class="progress-bar" aria-valuemin="0" aria-valuemax="100" :style="`width: 100%`">
            </div>
        </div>
        <div class="value"> {{ value.formatString(18, 3) }} UKAN</div>
    </div>
</template>

<style scoped lang="scss">
.progress-wrapper {
    display: flex;
    flex-direction: column;
}

.progress {
    background: rgba(119, 126, 144, 0.25)
}

.name {
    height: 24px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    margin-top: 12px;
    color: #FFFFFF;
}

.progress-bar {
    width: 100%;
    height: 7px;
    border-radius: 4px;
    margin-top: 5px;
    background-color: v-bind('props.colour');
}

.value {
    height: 21px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    text-align: right;

    margin-top: 5px;
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
        font-size: 16px;
        line-height: 20px;
    }

    .value {
        font-size: 16px;
        line-height: 20px;
    }
}
</style>