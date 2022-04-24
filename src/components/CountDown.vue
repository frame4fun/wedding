<script setup lang="ts"></script>

<script lang="ts">
export default {
  props: {
    date: Date,
  },
  data() {
    const now = new Date();

    return {
      time: this.date.getTime() - now.getTime(),
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
  color: var(--color-text);
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  border-radius: 100%;
  border: 3px dotted hsla(var(--pink), 1);
  background-color: hsla(var(--pink), 0.8);
}

.daysLeft {
  font-size: 3rem;
  font-weight: bold;
}

.text {
  font-size: 1.7rem;
}
</style>
