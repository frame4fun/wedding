<script setup lang="ts">
import CountDown from "./CountDown.vue";
</script>

<template>
  <div class="background-image">
    <div class="transparent-overlay">
      <div class="text-content">
        <h1 class="names">Alice & Guillaume</h1>
        <span>se marient</span>
        <h2>24/06/2023</h2>
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
  background-color: hsla(var(--pink), 0.3);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  color: var(--white);
}
.names {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background-color: var(--white);
  color: hsla(var(--violet), 1);
  padding: 20px;
  border-radius: 50px;
}
</style>
