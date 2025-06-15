<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Главная</NuxtLink> |
        <NuxtLink to="/tasks">Задачи</NuxtLink>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

main {
  padding: 20px;
}
</style>
