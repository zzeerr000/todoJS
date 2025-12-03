<template>
  <b class="task-card">{{ task }}</b>
</template>

<script setup lang="ts">
defineProps({
  task: String,
});
</script>

<style scoped lang="scss">
.task-card {
  height: 72px;
  border-radius: 24px;
  font-size: 16px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
