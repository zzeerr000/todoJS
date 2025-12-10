<template>
  <div :class="{ 'task-list-holder': !showMore, 'task-list-holder--more': showMore }">
    <div style="display: flex; justify-content: space-between">
      <h3>Задачи</h3>
      <h3 v-if="!isMobile" style="padding-right: 16px">Статус</h3>
    </div>
    <div v-if="taskStore.taskArray.length == 0" class="empty-list">Пусто</div>
    <TaskItem
      v-for="task in taskStore.taskArray"
      :key="task.id"
      :task-text="task.text"
      :task-status="task.status"
      :show-popup="() => taskStore.showPopup(task)"
    />
  </div>
</template>

<script setup lang="js">
import { inject } from 'vue'
import TaskItem from './TaskItem.vue'
import { useTaskStore } from '@/Stores/TaskStore'
const isMobile = inject('isMobile')
const taskStore = useTaskStore()

defineProps({
  showMore: Boolean,
})
</script>

<style scoped lang="scss">
.task-list-holder {
  background-color: white;
  border-radius: 32px;
  padding-top: 20px;
  padding-inline: 40px;
  box-sizing: border-box;
  max-height: 330px;
  overflow: hidden;

  &--more {
    @extend .task-list-holder;
    overflow: unset;
    height: auto;
    max-height: fit-content;
  }
}

.empty-list {
  opacity: 0.6;
  margin: auto;
  align-self: auto;
  padding-bottom: 30px;
}

@media screen and (max-width: 641px) {
  .task-list-holder {
    background-color: #f4f4f4;
    padding: 0;
    height: auto;
  }
}
</style>
