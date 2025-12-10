<template>
  <div class="app-wrapper">
    <div class="todo-list">
      <h1>ToDo List Scloud</h1>
      <div class="tab-holder">
        <CurrentTasks />
        <AddTask />
      </div>
      <TaskList :show-more="showMore" />
      <button
        v-if="tasksStore.taskArray.length > 5 && isMobile == false"
        @click="handleShowMore"
        class="show-more"
      >
        <span>{{ showMore ? 'Скрыть' : 'Показать еще' }}</span>
        <img :class="{ 'ar-up': showMore, 'ar-down': !showMore }" src="/Vector.png" alt="arr" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/Stores/TaskStore'
import AddTask from './AddTask.vue'
import CurrentTasks from './CurrentTasks.vue'
import TaskList from './TaskList.vue'
import { inject, ref } from 'vue'

const isMobile = inject('isMobile')
const tasksStore = useTaskStore()
const showMore = ref(false)

function handleShowMore() {
  showMore.value = !showMore.value
}
</script>

<style scoped lang="scss">
.todo-list {
  margin-bottom: 150px;
  box-sizing: border-box;
  padding-top: 40px;
}

.tab-holder {
  display: flex;
  flex-flow: row;
  gap: 26px;
  margin-bottom: 70px;
}

.ar-down {
  padding-inline: 10px;
}

.ar-up {
  @extend .ar-down;
  transform: rotate(180deg);
}

.show-more {
  margin-top: 35px;
  height: 48px;
  width: 193px;
  border-radius: 50px;
  border: solid 3px #ff6600;
  font-weight: bold;
  color: #ff6600;
  background-color: white;
  cursor: pointer;
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
