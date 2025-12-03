<template>
  <div style="flex-grow: 1">
    <h1 class="task-status">{{ status }}</h1>
    <div class="card-holder">
      <TaskCard v-for="task in taskArray" :key="task.id" :task="task.text" />
    </div>
  </div>
</template>

<script setup lang="js">
import TaskCard from './TaskCard.vue'

defineProps({
  status: String,
  taskArray: Array,
})
</script>

<style scoped lang="scss">
.task-status {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 39px;
  background-color: #f4f4f4;
  width: 135px;
  height: 48px;
  font-size: 20px;
  margin-bottom: 20px;
}

.card-holder {
  display: flex;
  gap: 8px;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  border-radius: 24px;
  background-color: #eaeaea80;
  min-height: 280px;
}
</style>
