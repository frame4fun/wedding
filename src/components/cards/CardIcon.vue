<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <div class="card-icon">
    <slot />
  </div>
</template>

<style>
.card-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-icon > *:not(:first-child) {
  margin-left: 5px;
}
</style>
