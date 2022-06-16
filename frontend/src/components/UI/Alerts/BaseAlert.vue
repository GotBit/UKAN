<script setup lang="ts">
import {useAlerts} from "@/store/UI/alerts"

const props = defineProps<{
  id: number;
  isWithInnerComponent: boolean;
  component?: string;
  props?: object;
  title?: string;
  message?: string;
}>();

const alertsStore = useAlerts()
</script>

<template>
  <div class="alert-wrapper">
    <button class="close__btn" @click="alertsStore.closeAlert(props.id)">
      <img src="/svg/buttons/small-close-button.svg">
    </button>
    <div class="alert-form" v-if="isWithInnerComponent">
      <component :is="component" v-bind="props.props" />
    </div>
    <div v-else>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.alert-wrapper {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  padding: 17px;
  width: 560px;
  min-height: 138px;
  margin-bottom: 16px;
  background: #000000;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  @media only screen and (max-width: 950px) {
    width: 300px;
    margin: 20px 0;
  }
}
.close__btn{
  position: absolute;
  align-self: flex-end;
}
</style>
