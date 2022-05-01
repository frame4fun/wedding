<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import SaveTheDate from "./components/SaveTheDate.vue";
</script>

<template>
  <NavBar />

  <main>
    <SaveTheDate />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

a {
  text-decoration: none;
  color: var(--color-link);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: var(--color-link-hover);
  }
}
</style>

<style scoped>
main {
  height: 100%;
}
</style>
