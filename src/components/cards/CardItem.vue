<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: { type: String, required: true },
    image: { type: String, required: false, default: null },
  },
  data() {
    return {
      cardClasses: {
        card: true,
        'card-withImage': this.image !== null,
      },
    };
  },
});
</script>

<template>
  <li :class="cardClasses">
    <img v-if="image !== null" :src="image" />
    <div class="card-body">
      <div class="card-title">
        <h4>{{ name }}</h4>
      </div>
      <slot />
    </div>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}

.card {
  width: var(--card-mobile-width);
  margin: 20px 0;
  background-color: var(--background-color);
  box-shadow: 0px 5px 20px #999;
  border-radius: 0.6rem;
  border-top: 3px solid hsla(var(--pink));
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.card.card-withImage {
  justify-content: flex-start;
}

.card img {
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  object-fit: cover;
  max-height: 250px;
  aspect-ratio: 4/3;
}

.card > *:not(:first-child) {
  margin-top: 10px;
}

.card-title {
  align-self: center;
}

.card-title h4 {
  margin-bottom: 0.5rem;
}

.card-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.1rem;
  padding: 1rem 1rem;
}

.card-body > *:not(:first-child) {
  margin-top: 5px;
}

@media (min-width: 1024px) {
  .card {
    height: 300px;
    width: var(--card-desktop-width);
    margin: 40px;
  }

  .card.card-withImage {
    height: 450px;
  }
}
</style>
