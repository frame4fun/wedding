<script lang="ts" setup></script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
  },
});
</script>

<template>
  <div :id="id" class="section">
    <h2>{{ title }}</h2>
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
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  width: 100%;
}
</style>
