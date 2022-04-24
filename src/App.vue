<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />

  <RouterView />
</template>

<style>
@import "./assets/base.css";

@font-face {
  font-family: "Allura";
  src: local("Allura"),
    url(./assets/fonts/Allura/Allura-Regular.ttf) format("truetype");
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

a {
  text-decoration: none;
  color: hsla(var(--blue), 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(var(--violet), 0.2);
  }
}
</style>
