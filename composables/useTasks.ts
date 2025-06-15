import { ref, watch, onMounted } from 'vue'
export interface Task {
  text: string
  done: boolean
}
export function useTasks(storageKey = 'my-todo-list') {
  const taskList = ref<Task[]>([])

  function addTask(text: string) {
    if (!text || !text.trim()) return
    taskList.value.push({ text: text.trim(), done: false })
  }

  function removeTask(index: number) {
    taskList.value.splice(index, 1)
  }

  function updateTaskText(index: number, newText: string) {
    taskList.value[index].text = newText
  }

  watch(
    taskList,
    (newVal) => {
      localStorage.setItem(storageKey, JSON.stringify(newVal))
    },
    { deep: true },
  )

  onMounted(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      try {
        taskList.value = JSON.parse(saved)
      } catch (e) {
        console.error('Ошибка чтения задач из localStorage', e)
      }
    }
  })

  return {
    taskList,
    addTask,
    removeTask,
    updateTaskText,
  }
}
