<script lang="ts" setup>
import BaseSection from "./BaseSection.vue";</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    imageIsLeft: { type: Boolean, required: false, default: true },
    imageAlt: { type: String, required: true },
    imageSrc: { type: String, required: true }
  }
});
</script>

<template>
  <BaseSection :id="id" :title="title">
    <div class="content">
      <img
        v-if="imageIsLeft"
        :alt="imageAlt"
        :src="imageSrc"
        class="image-section"
      />
      <slot />
      <img
        v-if="!imageIsLeft"
        :alt="imageAlt"
        :src="imageSrc"
        class="image-section"
      />
    </div>
  </BaseSection>
</template>

<style scoped>
.image-section {
  max-height: 50rem;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media (min-width: 1024px) {
  .content {
    flex-wrap: nowrap;
  }
}
</style>
