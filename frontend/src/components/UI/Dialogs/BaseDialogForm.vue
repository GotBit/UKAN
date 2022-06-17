<script setup lang="ts">
import { useDialogs } from '@/store/UI/dialogs'

function close() {
  if (dialogsStore.currentDialog?.closeable) {
    dialogsStore.closeCurrentDialog()
  }
}

const dialogsStore = useDialogs();
</script>

<template>
  <div v-show="dialogsStore.currentDialog !== undefined" @click="close" class="custom-dialog">
    <div class="gradient-border">
      <div @click.stop class="wrapper">
        <div class="dialog-form">
          <component :is="dialogsStore.currentDialog?.name" v-bind="dialogsStore.currentDialog?.props">
          </component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  background: rgba(37, 37, 37, 0.5);
  backdrop-filter: blur(10px);
}

.wrapper {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background: #0C69D0;
  border-radius: 12px;
}

.gradient-border {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 0;
}

.dialog-form {
  padding: 25px 30px;

  @media only screen and (max-width: 767px) {
    padding: 20px;
  }

  @media only screen and (max-width: 500px) {
    padding: 15px;
  }
}

.close-cross {
  position: absolute;
  align-self: flex-end;
}
</style>
