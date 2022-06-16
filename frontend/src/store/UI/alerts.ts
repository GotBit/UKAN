import { defineStore } from "pinia"
export interface Alert {
  id: number
  isWithInnerComponent: boolean
  component?: string
  props?: object
  title?: string
  message?: string
}
let idCounter = 0
export const useAlerts = defineStore("alerts", {
  state: () => {
    return {
      alerts: [] as Alert[],
    }
  },
  actions: {
    async closeAlertAfterTimeout(id: number, timeout: number) {
      setTimeout(() => {
        this.closeAlert(id)
      }, timeout)
    },
    async closeAlert(id: number) {
      this.alerts = this.alerts.filter((item) => item.id !== id)
      if (this.alerts.length != 0)
        idCounter = this.alerts[this.alerts.length - 1].id + 1
      else
        idCounter = 0
    },
    async createSimpleAlert(title: string, message: string, timeout?: number) {
      const alert: Alert = {
        id: idCounter++,
        isWithInnerComponent: false,
        title: title,
        message: message,
      }
      this.alerts.push(alert)
      if (timeout !== undefined) this.closeAlertAfterTimeout(alert.id, timeout)
      return alert.id
    },
    async createAlertWithComponent(name: string, props: object, timeout?: number) {
      const alert: Alert = {
        id: idCounter++,
        isWithInnerComponent: true,
        component: name,
        props: props,
      }
      this.alerts.push(alert)
      if (timeout !== undefined) this.closeAlertAfterTimeout(alert.id, timeout)
      return alert.id
    }
  },
})
