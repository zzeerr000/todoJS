<template>
  <div class="task-list-holder">
    <div style="display: flex; justify-content: space-between">
      <h3>Задачи</h3>
      <h3 v-if="!isMobile" style="padding-right: 16px">Статус</h3>
    </div>

    <TaskItem
      v-for="task in taskStore.taskArray"
      :key="task.id"
      :task-text="task.text"
      :task-status="task.status"
    />
  </div>
</template>

<script setup lang="js">
import { inject } from 'vue'
import TaskItem from './TaskItem.vue'
import { useTaskStore } from '@/Stores/TaskStore'
const isMobile = inject('isMobile')

const taskStore = useTaskStore()
</script>

<style scoped lang="scss">
.task-list-holder {
  background-color: white;
  border-radius: 50px;
  padding-top: 20px;
  padding-inline: 40px;
  box-sizing: border-box;
  height: 330px;
}

@media screen and (max-width: 641px) {
  .task-list-holder {
    background-color: #f4f4f4;
    padding: 0;
    height: auto;
  }
}
</style>
