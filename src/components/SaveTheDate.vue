<script setup lang="ts">
import CountDown from "./CountDown.vue";
</script>

<template>
<div class="background-image">
  <div class="transparent-overlay">
      <div class="text-content">
        <div>Mariage Alice & Guillaume</div>
        <div>Save the date : 24/06/2023</div>
        <CountDown />
      </div>
  </div>
</div>
</template>
<style scoped>
.background-image {
  background-color: white;
    background-image: url("../assets/IMG_3359.jpeg");
    background-size: cover;
    background-position: center bottom;
  height: 100%;
}
.transparent-overlay {
  opacity: 30%;
  background-color: var(--pink);
  height: 100%;
}
.text-content {
  padding: 0 2rem;
}
</style>

