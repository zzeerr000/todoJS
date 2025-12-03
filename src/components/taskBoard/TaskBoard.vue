<template>
  <div>
    <h1>Доска задач</h1>
    <div class="status-holder">
      <TaskSubboard status="Открыто" :task-array="taskStore.openedTasks" />
      <TaskSubboard status="В работе" :task-array="taskStore.progressTasks" />
      <TaskSubboard status="Закрыто" :task-array="taskStore.closedTasks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/Stores/TaskStore'
import TaskSubboard from './TaskSubboard.vue'

const taskStore = useTaskStore()
</script>

<style scoped lang="scss">
.status-holder {
  display: flex;
  gap: 16px;
  box-sizing: border-box;
  padding-bottom: 50px;
  flex-grow: 1;
}
</style>
