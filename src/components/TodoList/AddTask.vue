<template>
  <div class="current-tasks-window">
    <h2>Добавить задачу</h2>
    <div class="add-task-row">
      <span @click="handleSubmit" class="plus-button">{{
        isMobile ? 'Добавить задачу' : '+'
      }}</span>
      <div style="flex-grow: 1; position: relative">
        <input v-model="inputTxt" type="text" placeholder="Текст" class="task-input" />
        <span @click="clearInput" class="clear-input">+</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { useTaskStore } from '@/Stores/TaskStore'
import { inject, ref } from 'vue'

const isMobile = inject('isMobile')
const taskStore = useTaskStore()

const inputTxt = ref('')

function clearInput() {
  inputTxt.value = ''
}

function handleSubmit() {
  taskStore.addTask(inputTxt.value)
  clearInput()
}
</script>

<style scoped lang="scss">
.current-tasks-window {
  box-sizing: border-box;
  flex-grow: 1;
  max-width: 588px;
  height: 184px;
  border: solid;
  border-radius: 48px;
  border-width: 0;
  background-color: white;
  padding-inline: 24px;
  padding-top: 20px;
}

.add-task-row {
  display: flex;
  gap: 6px;
}

.plus-button {
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: solid;
  border-width: 1px;
  border-color: #ff6600;
  background-color: #ff6600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  padding-bottom: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #ff6600;
  }
}

.task-input {
  box-sizing: border-box;
  border: solid;
  border-width: 1px;
  border-color: #eaeaea;
  border-radius: 100px;
  width: 100%;
  padding: 10px;
  min-height: 44px;

  &:focus {
    outline: none;
  }
  &:focus + .clear-input {
    visibility: visible;
  }
  &:hover + .clear-input {
    visibility: visible;
  }
}

.clear-input {
  visibility: hidden;
  position: absolute;
  right: 10px;
  top: -1px;
  font-size: 30px;
  transform: rotate(45deg);
  color: slategray;
  cursor: pointer;

  &:hover {
    color: #ff6600;
    visibility: visible;
  }
}

@media screen and (max-width: 991px) {
  .current-tasks-window {
    max-width: 640px;
  }
}

@media screen and (max-width: 641px) {
  .current-tasks-window {
    padding-top: 10px;
    height: 210px;
    max-width: 640px;
    h2 {
      font-size: 18px;
    }
  }
  .add-task-row {
    flex-direction: column-reverse;
    gap: 15px;
  }
  .plus-button {
    width: 100%;
    border-radius: 50px;
    font-size: 18px;
    padding-bottom: 5px;
  }
}
</style>
