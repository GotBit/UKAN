<script setup lang="ts">
import { useWeb3 } from '@/store/web3'

const web3 = useWeb3()

</script>

<template>
  <div class="header">
    <div class="logo_ukan">
      <img class="header_logo" src="/svg/icons/logo-icon.svg">
      <div class="UKAN">UKAN TOK<span>EN</span></div>
    </div>
    <div class="header_navigation">
      <div v-if="web3.login && !web3.loading" class="header_user">
        <p>{{ web3.walletLabel }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo_ukan {
  display: flex;
  align-items: center;
}

.UKAN {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  margin-left: 16px;
  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #FDFC1D;
}

.UKAN span {
  color: #0C69D0;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  padding: 0px 74px;
  background-color: #08131C;
}

.header_navigation {
  display: flex;
  align-items: center;
  width: 212px;
}

.header_user {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 212px;
  background: #0C69D0;
  border-radius: 12px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FCFCFD;
  width: 100%;
  padding: 16px 24px;
}

p {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 799px) {
  .header {
    display: flex;
    align-items: center;
    padding: 0px 30px;
  }

  .header_connect-button,
  .header_user {
    margin-left: auto;
  }
}

@media (max-width: 500px) {
  .UKAN {
    display: none;
  }

  .header {
    padding: 0px 18px;
  }
}

@media (max-width: 480px) {
  .UKAN {
    display: none;
  }

  .header {
    padding: 0px 18px;
  }
}
</style>
