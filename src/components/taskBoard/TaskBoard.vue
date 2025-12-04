<template>
  <div class="app-wrapper">
    <h1>Доска задач</h1>
    <div class="status-holder">
      <TaskSubboard status="Открыто" />
      <TaskSubboard status="В работе" />
      <TaskSubboard status="Закрыто" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskSubboard from './TaskSubboard.vue'
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
