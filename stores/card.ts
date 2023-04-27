import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCardStore = defineStore({
  id: 'card',
  state: () => ({
    tasks: [] as Array<{ name: string; description: string; checked: boolean }>,
  }),
  getters: {
    items: (state): Array<{ name: string; description: string; checked: boolean }> =>
      state.tasks.reduce((items, item) => {
        items.push({ name: item.name, description: item.description || '', checked: item.checked || false })
        return items
      }, [] as Array<{ name: string; description: string; checked: boolean }>),
    getItemByIndex: (state) => (index: number) => state.tasks[index],
    isTasksEmpty: (state) => state.tasks.length === 0,
  },
  actions: {
    addItem(name: string, description: string = '', checked: boolean = false) {
      this.tasks.push({ name, description, checked })
    },
  
    removeItem(name: string) {
      const i = this.tasks.findIndex(item => item.name === name)
      if (i > -1) this.tasks.splice(i, 1)
    },
    checkItem(name: string, checked: boolean) {
      const task = this.tasks.find(item => item.name === name)
      if (task) {
        task.checked = checked
      }
    },
  },
  persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCardStore, import.meta.hot))
}
