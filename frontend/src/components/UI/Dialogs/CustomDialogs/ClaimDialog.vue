<script setup lang="ts">
import Spinner from './Spinner.vue'
</script>

<script lang="ts">
export default {
  name: "claimDialog",
};
</script>

<template>
  <div class="claim-dialog">
    <div class="title">Claim tokens</div>
    <div class="body">
      <Spinner />
      <div class="text">Please approve the claim transaction in your wallet</div>
    </div>
    <div class="body_in-progress">In progress..</div>
  </div>
</template>

<style scoped lang="scss">
.claim-dialog {
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
  align-self: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
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

.body {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.text {
  margin-left: 18px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #FFFFFF;
}

.body_in-progress {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  margin-top: 40px;
  background: #77a4f7;
  border-radius: 12px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
}
</style>
