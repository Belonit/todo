<template>
  <li class="todo-item">
    <Checkbox v-model="task.done" :binary="true"></Checkbox>

    <span v-if="!isEditing" @dblclick="startEditing" :class="{ done: task.done }">
      {{ task.text }}
    </span>

    <div v-else class="edit-container">
      <input
        type="text"
        v-model="editText"
        @blur="finishEditing"
        @keydown="onEnter"
        class="edit-input"
      />

      <Button @click="finishEditing" icon="pi pi-check" text />
      <Button @click="cancelEditing" icon="pi pi-times" text />
    </div>

    <Button icon="pi pi-trash" severity="danger" text @click="$emit('remove')" />
  </li>
</template>

<script setup lang="ts">
import type { Task } from '~/composables/useTasks'

// Props
const props = defineProps<{
  task: Task
}>()

// Emits
const emit = defineEmits<{
  (event: 'remove'): void
  (event: 'updateText', payload: string): void
}>()

// Data
const isEditing = ref(false)
const editText = ref(props.task.text)

// Methods
function startEditing() {
  isEditing.value = true
  editText.value = props.task.text

  nextTick(() => {
    const input = document.querySelector('.edit-input') as HTMLInputElement
    if (input) {
      input.focus()
    }
  })
}

function finishEditing() {
  const text = editText.value.trim()
  if (text !== '') {
    emit('updateText', text)
  }
  isEditing.value = false
}

function onEnter(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    finishEditing()
  } else if (e.key === 'Escape') {
    isEditing.value = false
  }
}

function cancelEditing() {
  isEditing.value = false
  editText.value = props.task.text
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

button {
  padding: 12px 22px;
  cursor: pointer;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.edit-input {
  font-size: 1em;
  padding: 4px;
  flex: 1;
  margin-left: 10px;
}

.edit-container {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 10px;
}
</style>
