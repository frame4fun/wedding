<script setup lang="ts"></script>

<script lang="ts">
export default {
  data() {
    const now = new Date();
    const date = new Date(2023, 6, 24, 16);

    return {
      time: date.getTime() - now.getTime(),
    };
  },
};
</script>

<template>
  <div class="countdown">
    <vue-countdown :time="time" v-slot="{ days }">
      <div class="column">
        <span class="daysLeft">{{ days }}</span>
        <h3 class="text">jours</h3>
      </div>
    </vue-countdown>
  </div>
</template>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border-radius: 100%;
  border: 1px dotted var(--white);
}

.daysLeft {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
}

.text {
  font-size: 1rem;
  color: var(--white);
}
</style>
