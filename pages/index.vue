<template>
  <div class="main">Главная страница</div>
  <div class="calendar-wrapper">
    <Calendar v-model="date" inline showWeek />
  </div>
</template>

<script setup lang="ts">
// Data
const date = ref<Date | null>(null)
</script>

<style scoped>
.main {
  text-align: center;
  margin-bottom: 20px;
}

.calendar-wrapper {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
}
</style>
