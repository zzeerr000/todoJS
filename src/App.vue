<script setup lang="js">
import FooterComp from './components/FooterComp.vue'
import TaskBoard from './components/taskBoard/TaskBoard.vue'
import TodoList from './components/TodoList/TodoList.vue'
import { onMounted, onUnmounted, provide, ref } from 'vue'
import { useTaskStore } from './Stores/TaskStore.js'

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
onUnmounted(() => window.addEventListener('resize', handleResize))

provide('isMobile', isMobile)
</script>

<template>
  <div>
    <div class="app-wrapper">
      <div>
        <TodoList />
      </div>
      <TaskBoard v-if="isDesktop" />
    </div>
  </div>
  <FooterComp />
</template>

<style scoped lang="scss">
.app-wrapper {
  max-width: 1200px;
  margin: auto;
  border: none;
}

@media screen and (max-width: 1221px) {
  .app-wrapper {
    max-width: 991px;
  }
}

@media screen and (max-width: 991px) {
  .app-wrapper {
    max-width: 640px;
  }
}

@media screen and (max-width: 641px) {
  .app-wrapper {
    max-width: 340px;
  }
}
</style>
