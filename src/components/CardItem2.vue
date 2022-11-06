<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
});
</script>

<template>
  <li class="card">
    <img :src="image" alt="" />
    <div class="card-body">
      <div class="card-title">
        <h4>{{ name }}</h4>
      </div>
      <div class="card-important">
        <div class="card-price tooltip" data-text="Prix">
          <span>{{ price }}</span>
          <FontAwesomeIcon icon="fa-solid fa-euro-sign" />
        </div>
      </div>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}

.card {
  width: 350px;
  height: 400px;
  margin: 20px 0;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 20px #999;
  padding-bottom: 1rem;
  overflow: hidden;
}

.card img {
  width: 100%;
  object-fit: cover;
  max-height: 250px;
  aspect-ratio: 4/3;
}

.card-body {
  margin: 1rem;
  font-size: 18px;
  text-align: center;
}

.card-important {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  font-size: 20px;
}

.card-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-price > *:not(:first-child) {
  margin-left: 5px;
}

@media (hover: hover) {
  .card:hover {
    background-color: hsla(var(--pink));
    transition: 0.5s;
  }
}

@media (min-width: 1024px) {
  .card {
    margin: 40px;
  }
}
</style>
