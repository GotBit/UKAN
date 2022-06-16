import { defineStore } from "pinia"
export interface Dialog {
  name: string,
  props: object
}

export const useDialogs = defineStore("dialogs", {
  state: () => {
    return {
      currentDialog: undefined as Dialog | undefined
    }
  },
  actions: {
    async openDialog(name: string, props: object) {
      const dialog: Dialog = {
        name: name,
        props: props,
      }
      this.currentDialog = dialog 
    },
    async closeCurrentDialog() {
        this.currentDialog = undefined
    }
  },
})
