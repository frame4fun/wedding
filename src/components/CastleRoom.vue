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
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
});
</script>

<template>
  <CardItem :name="name" :image="image">
    <CardImportant>
      <CardIcon>
        <span>{{ price }}</span>
        <FontAwesomeIcon icon="fa-solid fa-euro-sign" />
      </CardIcon>
    </CardImportant>
    <p>{{ description }}</p>
  </CardItem>
</template>

<style scoped></style>
