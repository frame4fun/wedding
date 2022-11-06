<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <div class="card-important">
    <slot />
  </div>
</template>

<style scoped>
.card-important {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  font-size: 20px;
  margin-bottom: 0.5rem;
}
</style>
