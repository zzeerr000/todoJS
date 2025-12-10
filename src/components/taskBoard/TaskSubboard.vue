<template>
  <div style="flex: 1; max-width: 33.33%">
    <h1 class="task-status">{{ status }}</h1>
    <draggable
      :list="taskArray"
      :group="{ name: 'tasks', pull: true, put: true }"
      item-key="id"
      @change="onChange"
      class="card-holder"
      ghost-class="ghost"
    >
      <template #item="{ element }">
        <div class="draggable-card">
          <TaskCard :task="element.text" />
        </div>
      </template>

      <template #footer>
        <div v-if="taskArray.length === 0" class="empty-placeholder">Пусто</div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="js">
import draggable from 'vuedraggable'
import { computed } from 'vue'
import TaskCard from './TaskCard.vue'
import { useTaskStore } from '@/Stores/TaskStore'

const taskStore = useTaskStore()

const props = defineProps({
  status: String,
})

const taskArray = computed(() => {
  const statusMap = {
    Открыто: taskStore.openedTasks,
    'В работе': taskStore.progressTasks,
    Закрыто: taskStore.closedTasks,
  }
  return statusMap[props.status] || []
})

const onChange = (event) => {
  if (event.added) {
    const addedTask = event.added.element
    if (addedTask && addedTask.status !== props.status) {
      taskStore.updateTask(addedTask.id, props.status, addedTask.text)
    }
  }
}
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

.ghost {
  opacity: 0.5;
}

.card-holder {
  display: flex;
  gap: 16px;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  border-radius: 24px;
  background-color: #eaeaea80;
  min-height: 280px;
}

.draggable-card {
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}

.empty-placeholder {
  margin: auto;
  opacity: 0.6;
  font-weight: bold;
}
</style>
