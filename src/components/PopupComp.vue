<template>
  <div class="popup-comp" @click="closePopup">
    <div class="popup-content" @click.stop>
      <div style="display: flex; justify-content: space-between; align-items: center">
        <span class="change-title">Изменение задачи</span>
        <span class="close-button" @click="closePopup">+</span>
      </div>
      <input type="text" class="popup-input" v-model="taskStore.popupTask.text" />
      <div class="status-holder">
        <button
          v-if="taskStore.popupTask.status != 'В работе'"
          :class="{
            'active-button': taskStore.popupTask.status === 'В работе',
            'status-button': true,
          }"
          @click="taskStore.popupTask.status = 'В работе'"
        >
          <span>В работу</span>
        </button>

        <button
          v-if="taskStore.popupTask.status != 'Закрыто'"
          :class="{
            'active-button': taskStore.popupTask.status === 'Закрыто',
            'status-button': true,
          }"
          @click="taskStore.popupTask.status = 'Закрыто'"
        >
          <span>Закрыть</span>
        </button>

        <button
          v-if="taskStore.popupTask.status != 'Открыто'"
          :class="{
            'active-button': taskStore.popupTask.status === 'Открыто',
            'status-button': true,
          }"
          @click="taskStore.popupTask.status = 'Открыто'"
        >
          <span>{{ taskStore.popupTask.status === 'Закрыто' ? 'Переоткрыть' : 'Отложить' }}</span>
        </button>
      </div>
      <div class="action-holder">
        <button class="accept-button" @click="updateTask">Применить</button>
        <button class="delete-button" @click="taskStore.deleteTask(taskStore.popupTask.id)">
          Удалить задачу
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/Stores/TaskStore'
const taskStore = useTaskStore()

function closePopup() {
  taskStore.showPopup()
}

function updateTask() {
  taskStore.updateTask(taskStore.popupTask.id, taskStore.popupTask.status, taskStore.popupTask.text)
  taskStore.showPopup()
}
</script>

<style scoped lang="scss">
.popup-comp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.popup-content {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 16px;
  padding-inline: 25px;
  padding-top: 10px;
  max-width: 375px;
  width: 100%;
  height: 278px;
}

.change-title {
  font-size: 18px;
  font-weight: bold;
}

.popup-input {
  margin-top: 15px;
  box-sizing: border-box;
  min-height: 52px;
  border-radius: 24px;
  border: solid 1px #f4f4f4;
  padding-inline: 10px;
  width: 100%;
  font-size: 12px;
}

.status-holder {
  display: flex;
  border-top: solid 2px #eaeaea;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 15px;
}

.status-button {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 39px;
  background-color: #f4f4f4;
  width: 92px;
  height: 28px;
  font-size: 12px;
  cursor: pointer;
  border-style: none;

  &:hover {
    background-color: rgb(178, 178, 178);
    color: white;
  }
}

.active-button {
  background-color: black;
  color: white;
}

.close-button {
  transform: rotate(45deg);
  color: #b6b6b6;
  cursor: pointer;
  font-size: 40px;
  font-weight: 300;
  &:hover {
    color: #ff6600;
    visibility: visible;
  }
}

.action-holder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}

.accept-button {
  max-width: 127px;
  height: 40px;
  width: 100%;
  border-radius: 50px;
  border-style: none;
  background-color: #ff6600;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #ff6600;
    background-color: white;
    border: solid 3px #ff6600;
  }
}

.delete-button {
  max-width: 172px;
  width: 100%;
  color: #ff6600;
  border: solid 3px #ff6600;
  border-radius: 50px;
  height: 40px;
  background-color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: white;
    background-color: #ff6600;
  }
}

@media screen and (max-width: 641px) {
  .popup-content {
    width: 340px;
    height: 60%;
    border-radius: 32px;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
