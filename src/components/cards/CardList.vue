<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <ul class="card-list">
    <slot />
  </ul>
</template>

<style scoped>
.card-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 0;
}
</style>
