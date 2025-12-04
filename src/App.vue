<script setup lang="js">
import FooterComp from './components/FooterComp.vue'
import TaskBoard from './components/taskBoard/TaskBoard.vue'
import TodoList from './components/TodoList/TodoList.vue'
import { onMounted, onUnmounted, provide, ref } from 'vue'
import { useTaskStore } from './Stores/TaskStore.js'
import PopupComp from './components/PopupComp.vue'

const taskStore = useTaskStore()

// Определение типа устройства
const isMobile = ref(window.innerWidth < 641)
const isDesktop = ref(window.innerWidth > 991)

const handleResize = () => (
  (isMobile.value = window.innerWidth < 641),
  (isDesktop.value = window.innerWidth > 991)
)

onMounted(async () => {
  window.addEventListener('resize', handleResize)
  await taskStore.fetchTasks()
})
onUnmounted(() => window.removeEventListener('resize', handleResize))

provide('isMobile', isMobile)
</script>

<template>
  <div>
    <div class="app-wrapper-main">
      <div class="todo-wrapper">
        <TodoList />
      </div>
      <TaskBoard v-if="isDesktop" />
    </div>
  </div>
  <FooterComp />
  <PopupComp v-if="taskStore.isPopupVisible" />
</template>

<style scoped lang="scss">
.todo-wrapper {
  background-color: #f4f4f4;
  box-sizing: border-box;
  padding: 1px;
}

.app-wrapper-main {
  margin: auto;
  border: none;
}
</style>
