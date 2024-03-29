<script setup lang="ts">
import CardItem from './cards/CardItem.vue';
import CardImportant from './cards/CardImportant.vue';
import CardIcon from './cards/CardIcon.vue';
</script>

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
    phoneNumber: { type: String, required: false, default: 'N.C.' },
    description: { type: String, required: true },
  },
});
</script>

<template>
  <CardItem :name="name">
    <CardImportant>
      <CardIcon>
        <span v-if="price > 0">{{ price }}</span>
        <span v-else>N.C.</span>
        <FontAwesomeIcon icon="fa-solid fa-euro-sign" />
      </CardIcon>
      <CardIcon>
        <FontAwesomeIcon icon="fa-solid fa-clock" />
        <span>{{ time }} minutes</span>
      </CardIcon>
    </CardImportant>
    <a :href="addressLink" target="_blank">
      <div class="truncateLongTexts">
        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
        {{ address }}
      </div>
    </a>
    <a :href="website" target="_blank">
      <FontAwesomeIcon icon="fa-solid fa-desktop" />
      Site internet
    </a>
    <a :href="`tel:${phoneNumber}`" class="card-phone">
      <FontAwesomeIcon icon="fa-solid fa-phone" />
      {{ phoneNumber }}
    </a>
    <div>{{ description }}</div>
  </CardItem>
</template>

<style scoped>
.truncateLongTexts {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(var(--card-mobile-width) - 1rem);
}

@media (min-width: 1024px) {
  .truncateLongTexts {
    width: calc(var(--card-desktop-width) - 1rem);
  }
}
</style>
