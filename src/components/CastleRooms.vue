<script setup lang="ts">
import BaseSection from './BaseSection.vue';
import CardItem2 from './CardItem2.vue';
import { castleCategories } from './castleRooms';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <BaseSection id="castle-rooms" title="Les hébergements du château">
    <div v-for="castleCategory in castleCategories" :key="castleCategory.title">
      <h3>{{ castleCategory.title }}</h3>
      <div>{{ castleCategory.description }}</div>
      <ul class="card-items">
        <CardItem2
          v-for="castleRoom in castleCategory.rooms"
          :key="castleRoom.Nom"
          :name="castleRoom.Nom"
          :price="castleRoom.Prix"
          :description="castleRoom.Info"
          :image="castleRoom.Image"
        />
      </ul>
      <div>{{ castleCategory.plan }}</div>
    </div>
  </BaseSection>
</template>

<style scoped>
.card-items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 0;
}
</style>
