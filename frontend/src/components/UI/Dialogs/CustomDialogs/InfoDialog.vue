<script setup lang="ts">
import { useWeb3 } from '@/store/web3'
import { useDialogs } from '@/store/UI/dialogs'
import { result } from '@/store/contracts/vesting'

const dialogsStore = useDialogs();
const web3 = useWeb3();

const props = defineProps<{
    res: result,
}>();

function copy() {
    navigator.clipboard.writeText(props.res.hash)
}
</script>
<script lang="ts">
export default {
    name: "infoDialog",
};
</script>

<template>
    <div class="info-dialog">
        <div class="title">
            {{ res.output }} <span>{{ res.title }}</span>
        </div>
        <div class="hash" v-if="(res.hash.length > 2)">
            <p>Transaction hash: <a :href="`https://bscscan.com/tx/${res.hash}`">
                    {{ ' ' + res.hash.slice(0, 6) + "..." + res.hash.slice(-4) }}</a>
            </p>
            <button @click="copy()">
                <img class="image" src="/svg/icons/copy.svg" />
            </button>
        </div>
        <div class="hash" v-else>
            <p>Transaction hash: none</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.info-dialog {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: #0C69D0;
    width: 547px;

    @media only screen and (max-width: 767px) {
        width: 400px;
    }

    @media only screen and (max-width: 500px) {
        width: 315px;
    }
}

.title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    /* or 117% */

    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #FFFFFF;
}

.title span {
    color: #FDFC1D;
}

.hash {
    display: flex;
    align-items: center;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    margin-top: 16px;

    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #FFFFFF;
}

.hash a {
    text-decoration: underline;
    color: #FDFC1D;
}

.image {
    margin-left: 8px;
    height: 24px;
}

button:active:after {
    content: 'Copied';
    position: absolute;
    top: 25px;
    margin-left: -20px;
}

button {
    position: relative;
}
</style>
