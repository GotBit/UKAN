<script setup lang="ts">
import { useWeb3 } from '@/store/web3'
import { useDialogs } from '@/store/UI/dialogs'

const dialogsStore = useDialogs();
const web3 = useWeb3();
</script>

<script lang="ts">
export default {
  name: "connectDialog",
};
</script>

<template>
  <div class="connect-dialog">
    <div class="title">
      <div class="connect-text">Welcome on UKAN <span>Vesting!</span></div>
      <div class="small-text">Choose wallet provider to connect</div>
    </div>
    <div class="connect-buttons">
      <button @click="web3.connect('metamask'); dialogsStore.closeCurrentDialog();">
        <img src="/svg/icons/metamask-icon.svg" />
        Metamask
      </button>
      <button @click="web3.connect('walletconnect'); dialogsStore.closeCurrentDialog();">
        <img src="/svg/icons/walletconnect-icon.svg">
        Walletconnect
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.connect-dialog {
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connect-text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: #FFFFFF;

  @media only screen and (max-width: 767px) {
    font-size: 26px;
    line-height: 31px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 24px;
    line-height: 29px;
  }
}

.connect-text span {
  color: #FDFC1D;
}


.small-text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;

  font-feature-settings: 'pnum' on, 'lnum' on;

  color: #FFFFFF;

  @media only screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 22px;
    margin: 15px 0;
  }

  @media only screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 20px;
    margin: 15px 0;
  }
}

.connect-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
  width: 100%;
  background: #004EA4;
  border-radius: 12px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #FCFCFD;
  margin-top: 12px;
}

button:hover {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #005ABE;
}

button:active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #003978;
}

img {
  margin-right: 12px;
}
</style>
