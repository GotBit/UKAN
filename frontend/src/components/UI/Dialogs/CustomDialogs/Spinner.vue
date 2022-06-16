<script setup lang="ts">
import { computed } from 'vue';

const spinnerStyle = computed(() => {
    return {
        height: '40px',
        width: '40px',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: '#FDFC1D' + ' ' + '#FDFC1D' + ' transparent',
        borderRadius: '100%',
        background: 'transparent'
    }
})

</script>

<template>
    <div class="v-spinner">
        <div class="v-clip" v-bind:style="spinnerStyle">
        </div>
    </div>
</template>

<style scoped>
.v-spinner {
    text-align: center;
}

.v-clip {
    -webkit-animation: v-clipDelay 0.9s 0s infinite linear;
    animation: v-clipDelay 0.9s 0s infinite linear;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    display: inline-block;
    position: relative;
}

.v-clip::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent #FDFC1D #FDFC1D;
    width: 22px;
    height: 22px;
    border-radius: 100%;
    animation: v-clipDelay 0.4s linear infinite reverse;
    transform-origin: center center;
}

@keyframes v-clipDelay {
    0% {
        -webkit-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
    }

    100% {
        -webkit-transform: rotate(360deg) scale(1);
        transform: rotate(360deg) scale(1);
    }
}
</style>