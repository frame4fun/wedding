<script lang="ts" setup>
import BaseSection from './BaseSection.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    imageIsLeft: { type: Boolean, required: false, default: true },
    imageAlt: { type: String, required: true },
    imageSrc: { type: String, required: true },
    descriptions: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
});
</script>

<template>
  <BaseSection :id="id" :title="title" :descriptions="descriptions">
    <div class="content">
      <div v-if="imageIsLeft" class="image-section">
        <img :alt="imageAlt" :src="imageSrc" />
      </div>

      <slot />
      <div v-if="!imageIsLeft" class="image-section">
        <img :alt="imageAlt" :src="imageSrc" />
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
.image-section > img {
  max-height: 40rem;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .content {
    flex-wrap: nowrap;
  }

  .image-section {
    max-width: 40%;
  }
}
</style>
