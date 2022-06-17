import { defineStore } from "pinia"
export interface Dialog {
  name: string,
  props: object
  closeable: boolean
}

export const useDialogs = defineStore("dialogs", {
  state: () => {
    return {
      currentDialog: undefined as Dialog | undefined
    }
  },
  actions: {
    async openDialog(name: string, props: object, closeable: boolean = true) {
      const dialog: Dialog = {
        name: name,
        props: props,
        closeable: closeable
      }
      this.currentDialog = dialog
    },
    async closeCurrentDialog() {
      this.currentDialog = undefined
    }
  },
})
