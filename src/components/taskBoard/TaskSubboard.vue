<template>
  <div style="flex: 1; max-width: 33.33%">
    <h1 class="task-status">{{ status }}</h1>
    <div class="card-holder" @dragover.prevent @drop="onDrop">
      <div
        v-for="task in taskArray"
        :key="task.id"
        class="draggable-card"
        draggable="true"
        @dragstart="onDragStart($event, task)"
      >
        <TaskCard :task="task.text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import TaskCard from './TaskCard.vue'
import { useTaskStore } from '@/Stores/TaskStore'

const taskStore = useTaskStore()

const props = defineProps({
  status: String,
  taskArray: Array,
})

const onDragStart = (event, task) => {
  if (event?.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', String(task.id))
  }
}

const onDrop = (event) => {
  if (!event?.dataTransfer) return

  const id = Number(event.dataTransfer.getData('text/plain'))
  if (!id) return

  const task = taskStore.taskArray.find((t) => t.id === id)
  if (!task || task.status === props.status) return

  taskStore.updateTask(id, props.status, task.text)
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
}
</style>
