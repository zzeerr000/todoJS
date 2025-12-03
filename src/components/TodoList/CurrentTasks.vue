<template>
  <div class="current-tasks-window">
    <h2>Текущие задачи</h2>
    <div class="status-holder">
      <div class="task-status">
        <span class="circled-letter-blue">i</span>
        <b style="font-size: 14px">Открыто - {{ taskStore.openedTasks.length }}</b>
      </div>
      <div class="task-status">
        <span class="circled-letter-orange">i</span>
        <b style="font-size: 14px">В работе - {{ taskStore.progressTasks.length }}</b>
      </div>
      <div class="task-status">
        <span class="circled-letter-green">i</span>
        <b style="font-size: 14px">Закрыто - {{ taskStore.closedTasks.length }}</b>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { useTaskStore } from '@/Stores/TaskStore'

const taskStore = useTaskStore()
</script>

<style scoped lang="scss">
.current-tasks-window {
  max-width: 588px;
  box-sizing: border-box;
  flex-grow: 1;
  height: 184px;
  border: solid;
  border-radius: 48px;
  border-width: 0;
  background-color: white;
  padding-inline: 24px;
  padding-top: 20px;
}

.status-holder {
  display: flex;
  justify-content: space-between;
}

.task-status {
  border: solid;
  border-radius: 50px;
  border-width: 1px;
  border-color: #eaeaea;
  width: 161px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

@mixin circled-letter($color: gray) {
  border: solid;
  border-color: $color;
  color: $color;
  border-width: 3px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-weight: bold;
}

.circled-letter-blue {
  @include circled-letter($color: #26a1de);
}

.circled-letter-orange {
  @include circled-letter($color: #ff6600);
}

.circled-letter-green {
  @include circled-letter($color: #4db849);
}

@media screen and (max-width: 991px) {
  .current-tasks-window {
    max-width: 640px;
  }
}

@media screen and (max-width: 641px) {
  .status-holder {
    flex-flow: column;
    gap: 15px;
  }

  .task-status {
    width: auto;
  }

  .current-tasks-window {
    height: 274px;
    padding-top: 10px;
    h2 {
      font-size: 18px;
    }
  }
}
</style>
