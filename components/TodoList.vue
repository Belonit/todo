<template>
  <ul>
    <TodoItem
      v-for="(task, index) in taskList"
      :key="index"
      :task="task"
      @remove="() => removeTask(index)"
      @update-text="(newText) => updateTaskText(index, newText)"
    >
    </TodoItem>
  </ul>
</template>

<script setup lang="ts">
import type { Task } from '~/composables/useTasks'

// Components
import TodoItem from './TodoItem.vue'

// Props
const props = defineProps<{
  taskList: Task[]
  removeTask: (index: number) => void
  updateTaskText: (index: number, newText: string) => void
}>()
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  margin-top: 20px;
}
</style>
