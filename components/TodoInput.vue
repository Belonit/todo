<template>
  <div class="input-wrapper">
    <InputText
      type="text"
      v-model="taskText"
      placeholder="Введите новую задачу"
      @keyup.enter="onAdd"
      class="p-inputtext-lg"
    ></InputText>
    <Button @click="onAdd" class="p-button-success">Добавить</Button>
  </div>
</template>
<script setup lang="ts">
  import { ref, defineEmits } from 'vue'
  const emit = defineEmits(['add-task'])
  const taskText = ref('')

  function onAdd() {
    const trimmed = taskText.value.trim()
    if (!trimmed) return
    emit('add-task', trimmed)
    taskText.value = ''
  }
</script>
<style scoped>
  input[type='text'] {
    width: 70%;
    padding: 8px;
    margin-right: 10px;
    box-sizing: border-box;
  }
  button {
    padding: 12px 16px;
    cursor: pointer;
  }
  .input-wrapper {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
</style>
