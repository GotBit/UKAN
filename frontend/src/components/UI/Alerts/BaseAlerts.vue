<script setup lang="ts">
import BaseAlert from "@/components/UI/Alerts/BaseAlert.vue";
import { useAlerts } from "@/store/UI/alerts";

const alertsStore = useAlerts();
</script>

<template>
  <div id="alerts">
    <TransitionGroup name="alerts-list" tag="ul">
      <li v-for="item in alertsStore.alerts" :key="item.id">
        <BaseAlert v-bind="item" />
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
li{
  list-style-type: none;
}
#alerts {
  z-index: 50;
  position: absolute;
  padding: 0;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
}
.alerts-list-move, /* apply transition to moving elements */
.alerts-list-enter-active,
.alerts-list-leave-active {
  transition: all 0.5s ease;
}

.alerts-list-enter-from,
.alerts-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.alerts-list-leave-active {
  position: absolute;
}
</style>
