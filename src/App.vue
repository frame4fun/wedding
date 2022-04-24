<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

@font-face {
  font-family: "Allura";
  src: local("Allura"),   url(./assets/fonts/Allura/Allura-Regular.ttf) format("truetype");
  }

#app {
  font-weight: normal;
  height: 100%;
}

a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  #app {
    display: flex;
    flex-direction: column;
  }
}
</style>
