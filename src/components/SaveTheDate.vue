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
        <span class="info">On se marie !</span>
        <h1 class="names">Alice & Guillaume</h1>
        <span class="divider" />
        <h2 class="date">{{ formattedDate }}</h2>
        <CountDown :date="date" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
.background-image {
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
  padding: 0 1rem;
  color: var(--color-text);
}
.names {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: hsla(var(--pink), 1);
  font-family: Allura;
}

.date {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: hsla(var(--orange), 1);
  font-family: Allura;
}

.divider {
  width: 100%;
  border-top: 3px solid hsla(var(--violet), 1);
  margin-bottom: 1.5rem;
}

.info {
  font-size: 2rem;
  color: var(--color-text);
}

@media (min-width: 1024px) {
  .names {
    font-size: 8rem;
  }

  .date {
    font-size: 4rem;
  }
}
</style>
