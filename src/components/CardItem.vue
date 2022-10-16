<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    addressLink: { type: String, required: true },
    website: { type: String, required: true },
    time: { type: Number, required: true },
    distance: { type: Number, required: true },
    price: { type: Number, required: false, default: 0 },
    phoneNumber: { type: String, required: false, default: 'Non communiqué' },
    description: { type: String, required: true },
  },
});
</script>

<template>
  <li class="card">
    <div class="card-title">
      <h3>{{ name }}</h3>
    </div>
    <div class="card-body">
      <div class="card-important">
        <div class="card-price tooltip" data-text="Prix indicatif">
          <span v-if="price > 0">{{ price }}</span>
          <span v-else>Non communiqué</span>
          <FontAwesomeIcon icon="fa-solid fa-euro-sign" />
        </div>
        <div class="card-time tooltip" :data-text="`A ${distance} km`">
          <FontAwesomeIcon icon="fa-solid fa-clock" />
          <span>{{ time }} minutes</span>
        </div>
      </div>
      <div class="card-address">
        <a :href="addressLink" target="_blank">
          <div class="truncateLongTexts">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            {{ address }}
          </div>
        </a>
      </div>
      <div class="card-website">
        <a :href="website" target="_blank">
          <FontAwesomeIcon icon="fa-solid fa-desktop" />
          Site internet
        </a>
      </div>
      <a :href="`tel:${phoneNumber}`" class="card-phone">
        <FontAwesomeIcon icon="fa-solid fa-phone" />
        {{ phoneNumber }}
      </a>
      <div class="card-desc">{{ description }}</div>
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
  background-color: var(--background-color);
  box-shadow: 0px 5px 20px #999;
  border-radius: 5px;
  border-top: 3px solid hsla(var(--pink));
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.card > *:not(:first-child) {
  margin-top: 10px;
}

.card-title {
  align-self: center;
}

.card-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 18px;
}

.card-body > *:not(:first-child) {
  margin-top: 5px;
}

.card-important {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  font-size: 20px;
}

.card-price,
.card-time {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-price > *:not(:first-child),
.card-time > *:not(:first-child) {
  margin-left: 5px;
}

.tooltip:before {
  content: attr(data-text); /* here's the magic */
  position: absolute;
  z-index: 1;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}

.tooltip:hover:before,
.tooltip:hover:after {
  display: block;
}

.tooltip:after {
  content: '';
  position: absolute;

  /* position tooltip correctly */
  left: 100%;
  margin-left: -5px;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* the arrow */
  border: 10px solid #000;
  border-color: transparent black transparent transparent;

  display: none;
}

.truncateLongTexts {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 325px;
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
