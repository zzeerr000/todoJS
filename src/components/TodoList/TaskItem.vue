<template>
  <div class="task-row">
    <span class="task-text">{{ taskText }}</span>
    <span class="task-status" @click="showPopup">{{ taskStatus }}</span>
  </div>
</template>

<script setup lang="js">
defineProps({
  taskText: String,
  taskStatus: String,
  showPopup: Function,
})
</script>
<style scoped lang="scss">
.task-row {
  border-bottom: solid;
  border-width: 1px;
  border-color: #eaeaea;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  height: 31px;

  &:last-child {
    border: none;
  }
}

.task-status {
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

  &:hover {
    background-color: #eaeaea;
  }
}

@media screen and (max-width: 641px) {
  .task-row {
    box-sizing: border-box;
    border-width: 0;
    border-radius: 32px;
    padding-inline: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    min-height: 132px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;

    .task-text {
      font-weight: bold;
    }

    .task-status {
      align-self: center;
      align-items: center;
      display: flex;
      border: solid 3px #ff6600;
      background-color: white;
      color: #ff6600;
      font-size: 14px;
      font-weight: bold;
      height: 40px;
      width: 100%;
      cursor: pointer;

      &:hover {
        background-color: #ff6600;
        border-color: white;
        color: white;
      }
    }
  }
}
</style>
