<script setup lang="ts">
const props = defineProps<{
  message: string;
}>();
</script>

<script lang="ts">
export default {
  name: "infoAlert",
};
</script>

<template>
  <div class="info-alert-wrapper">
    <div class="alert-header">
      <img src="/svg/icons/info-alert-icon.svg" />
      <span>Info</span>
    </div>
    <div class="alert-body">
      {{ message }}
    </div>
  </div>
</template>

<style scoped>
.info-alert-wrapper {
  padding: 7px;
}
img {
  margin-right: 16px;
}
.alert-header {
  display: flex;
  align-items: center;
}
.alert-body {
  align-self: center;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #FFFFFF;
  opacity: 0.7;
  margin-top: 8px;
}
span {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  color: #FFFFFF;
}
</style>
