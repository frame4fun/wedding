<script setup lang="ts">
import CountDown from "./CountDown.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      date: new Date(2023, 5, 24, 16),
    };
  },
  computed: {
    formattedDate() {
      return this.date.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>

<template>
  <div class="background-image">
    <div class="transparent-overlay">
      <div class="text-content">
        <h1 class="names">Alice & Guillaume</h1>
        <span>On se marie</span>
        <h2>{{ formattedDate }}</h2>
        <CountDown :date="date" />
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
  background-color: rgba(0, 0, 0, 0.3);
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
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: hsla(var(--pink), 1);
  font-family: Allura;
}
</style>
