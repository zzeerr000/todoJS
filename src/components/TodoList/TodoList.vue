<template>
  <div class="todo-list">
    <h1>ToDo List Scloud</h1>
    <div class="tab-holder">
      <CurrentTasks />
      <AddTask />
    </div>
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import AddTask from "./AddTask.vue";
import CurrentTasks from "./CurrentTasks.vue";
import TaskList from "./TaskList.vue";
</script>

<style scoped lang="scss">
.todo-list {
  margin-bottom: 150px;
  box-sizing: border-box;
  padding-top: 40px;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 790px;
    background-color: #f4f4f4;
  }
}
.tab-holder {
  display: flex;
  flex-flow: row;
  gap: 26px;
  margin-bottom: 70px;
}

@media screen and (max-width: 991px) {
  .tab-holder {
    flex-flow: column;
    gap: 70px;
  }

  .todo-list {
    &::before {
      position: fixed;
      height: 100%;
    }
  }
}
</style>
