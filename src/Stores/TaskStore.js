import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const taskArray = ref([])
  const openedTasks = computed(() => taskArray.value.filter((task) => task.status === 'Открыто'))
  const progressTasks = computed(() => taskArray.value.filter((task) => task.status === 'В работе'))
  const closedTasks = computed(() => taskArray.value.filter((task) => task.status === 'Закрыто'))

  async function addTask(txt) {
    if (txt != '') {
      await axios.post('https://3a5d169ad18025ad.mokky.dev/tasks', {
        text: txt,
        status: 'В работе',
      })
      await fetchTasks()
    }
  }

  async function fetchTasks() {
    try {
      const { data } = await axios.get('https://3a5d169ad18025ad.mokky.dev/tasks')
      taskArray.value = data
    } catch (err) {
      console.log(err)
    }
  }

  return { taskArray, addTask, fetchTasks, openedTasks, closedTasks, progressTasks }
})
