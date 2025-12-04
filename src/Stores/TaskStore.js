import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const taskArray = ref([])
  const openedTasks = computed(() => taskArray.value.filter((task) => task.status === 'Открыто'))
  const progressTasks = computed(() => taskArray.value.filter((task) => task.status === 'В работе'))
  const closedTasks = computed(() => taskArray.value.filter((task) => task.status === 'Закрыто'))
  const isPopupVisible = ref(false)
  const popupTask = ref(null)

  async function addTask(txt) {
    if (txt != '') {
      try {
        await axios.post('https://3a5d169ad18025ad.mokky.dev/tasks', {
          text: txt,
          status: 'Открыто',
        })
        await fetchTasks()
      } catch (err) {
        console.log(err)
      }
    }
  }

  async function deleteTask(id) {
    try {
      await axios.delete(`https://3a5d169ad18025ad.mokky.dev/tasks/${id}`)
      await fetchTasks()
      showPopup()
    } catch (err) {
      console.log(err)
    }
  }

  async function updateTask(id, status, text) {
    try {
      await axios.patch(`https://3a5d169ad18025ad.mokky.dev/tasks/${id}`, {
        status: status,
        text: text,
      })
      await fetchTasks()
    } catch (err) {
      console.log(err)
    }
  }

  const sortPriority = { Открыто: 1, 'В работе': 2, Закрыто: 3 }

  async function fetchTasks() {
    try {
      const { data } = await axios.get('https://3a5d169ad18025ad.mokky.dev/tasks')
      taskArray.value = await data
      taskArray.value = taskArray.value.sort(
        (a, b) => sortPriority[a.status] - sortPriority[b.status],
      )
    } catch (err) {
      console.log(err)
    }
  }

  function showPopup(task) {
    popupTask.value = { ...task }
    isPopupVisible.value = !isPopupVisible.value
  }

  return {
    taskArray,
    addTask,
    deleteTask,
    updateTask,
    fetchTasks,
    openedTasks,
    closedTasks,
    progressTasks,
    isPopupVisible,
    popupTask,
    showPopup,
  }
})
