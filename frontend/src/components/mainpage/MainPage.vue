<script setup lang="ts">

import { useWeb3 } from '@/store/web3'
import { useDialogs } from '@/store/UI/dialogs'
import VestingCard from './VestingCard.vue';

const web3 = useWeb3()
const dialogs = useDialogs()
</script>

<template>
    <div class="main-page">
        <div class="main-page-general-info">
            <VestingCard />
        </div>
    </div>
</template>

<style scoped>
.main-page {
    margin-top: 80px;
}

.main-page-general-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>