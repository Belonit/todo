<template>
  <div class="todo-container">
    <h1>Список задач</h1>
    <div class="filters">
      <Button @click="filter = 'all'" :class="{ active: filter === 'all' }">Все</Button>
      <Button @click="filter = 'active'" :class="{ active: filter === 'active' }">Активные</Button>
      <Button @click="filter = 'done'" :class="{ active: filter === 'done' }">Завершенные</Button>
    </div>

    <TodoInput @add-task="onAddTask" />

    <div class="todo-list">
      <TodoList
        :taskList="filteredTasks"
        :remove-task="removeTask"
        :updateTaskText="updateTaskText"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasks } from '~/composables/useTasks'
import type { Task } from '~/composables/useTasks'

const { taskList, addTask, removeTask, updateTaskText } = useTasks()

// Components
import TodoInput from '~/components/TodoInput.vue'
import TodoList from '~/components/TodoList.vue'

// Data
const filter = ref<'all' | 'active' | 'done'>('all')

// Computeds
const filteredTasks = computed(() => {
  if (filter.value === 'active') {
    return taskList.value.filter((task: Task) => !task.done)
  } else if (filter.value === 'done') {
    return taskList.value.filter((task: Task) => task.done)
  }
  return taskList.value
})

// Methods
function onAddTask(text: string) {
  addTask(text)
}
</script>

<style scoped>
.todo-container {
  max-width: 400px;
  max-height: 40vh;
  margin: 30px auto;
  font-family: Arial, sans-serif;
}

.todo-list {
  overflow-y: scroll;
  max-height: 40vh;
}

.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
