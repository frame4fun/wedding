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
        <svg class="heart" viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
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
}

.daysLeft {
  font-size: 3rem;
  font-weight: bold;
}

.text {
  font-size: 1.7rem;
}

.heart {
  fill: hsla(var(--pink), 0.8);
  position: relative;
  top: -7px;
  width: 200px;
  animation: pulse 1s ease infinite;
  position: absolute;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
