<script lang="ts" setup></script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
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
  <div :id="id" class="section">
    <h2>{{ title }}</h2>
    <div v-if="descriptions.length > 0" class="description-container">
      <p
        v-for="description in descriptions"
        :key="description as string"
        class="description"
      >
        {{ description }}
      </p>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 3rem 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
